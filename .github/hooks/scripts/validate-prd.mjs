#!/usr/bin/env node

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..", "..", "..");
const srcPath = path.join(repoRoot, "src");

if (!existsSync(srcPath)) {
  console.log("[prd-validation] src folder not found, skipping checks.");
  process.exit(0);
}

const requiredFiles = [
  "00-project-brief.md",
  "01-prd.md",
  "02-roadmap.md",
  "03-architecture-notes.md",
  "04-task-breakdown.md",
  "05-risks-and-decisions.md",
];

const projectDirs = readdirSync(srcPath)
  .filter((name) => !name.startsWith("_"))
  .filter((name) => {
    const fullPath = path.join(srcPath, name);
    return statSync(fullPath).isDirectory();
  });

if (projectDirs.length === 0) {
  console.log("[prd-validation] No project folders found under src/, skipping checks.");
  process.exit(0);
}

let hasIssue = false;

const hasPattern = (content, pattern) => pattern.test(content);

for (const dirName of projectDirs) {
  const dirPath = path.join(srcPath, dirName);

  for (const file of requiredFiles) {
    const filePath = path.join(dirPath, file);
    if (!existsSync(filePath)) {
      console.log(`[prd-validation] Missing file: ${dirName}/${file}`);
      hasIssue = true;
    }
  }

  const prdPath = path.join(dirPath, "01-prd.md");
  if (existsSync(prdPath)) {
    const content = readFileSync(prdPath, "utf8");
    if (!hasPattern(content, /FR-\d{3}/)) {
      console.log(`[prd-validation] ${dirName}/01-prd.md has no FR-* requirement IDs.`);
      hasIssue = true;
    }
    if (!hasPattern(content, /NFR-\d{3}/)) {
      console.log(`[prd-validation] ${dirName}/01-prd.md has no NFR-* requirement IDs.`);
      hasIssue = true;
    }
    if (!hasPattern(content, /decision\s+log/i)) {
      console.log(`[prd-validation] ${dirName}/01-prd.md is missing a Decision Log section.`);
      hasIssue = true;
    }
  }

  const tasksPath = path.join(dirPath, "04-task-breakdown.md");
  if (existsSync(tasksPath)) {
    const content = readFileSync(tasksPath, "utf8");
    if (!hasPattern(content, /TASK-\d{3}/)) {
      console.log(`[prd-validation] ${dirName}/04-task-breakdown.md has no TASK-* IDs.`);
      hasIssue = true;
    }
    if (!hasPattern(content, /FR-\d{3}|NFR-\d{3}/)) {
      console.log(
        `[prd-validation] ${dirName}/04-task-breakdown.md is not linked to requirement IDs.`,
      );
      hasIssue = true;
    }
  }

  const risksPath = path.join(dirPath, "05-risks-and-decisions.md");
  if (existsSync(risksPath)) {
    const content = readFileSync(risksPath, "utf8");
    if (!hasPattern(content, /RISK-\d{3}/)) {
      console.log(`[prd-validation] ${dirName}/05-risks-and-decisions.md has no RISK-* IDs.`);
      hasIssue = true;
    }
  }

  const roadmapPath = path.join(dirPath, "02-roadmap.md");
  if (existsSync(roadmapPath)) {
    const content = readFileSync(roadmapPath, "utf8");
    if (!hasPattern(content, /milestone/i)) {
      console.log(`[prd-validation] ${dirName}/02-roadmap.md has no milestone definition.`);
      hasIssue = true;
    }
  }
}

if (hasIssue) {
  console.log("[prd-validation] Checks completed with warnings.");
  process.exit(1);
}

console.log("[prd-validation] Checks passed.");
process.exit(0);
