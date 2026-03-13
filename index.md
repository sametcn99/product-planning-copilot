---
title: Product Planning Copilot
description: Documentation-first PRD planning repository for structured briefs, PRDs, roadmaps, architecture notes, task breakdowns, and risk tracking.
permalink: /
---

{% capture homepage_markdown %}
{% include_relative README.md %}
{% endcapture %}

{{ homepage_markdown | markdownify }}
