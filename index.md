---
title: Kristine Wilckens
layout: layout.html
---

# {{ title }}

She is smart, she is pretty, she knows how your brain works, and she can Zumba.

# Projects

{% for project in collections.project %}

- [{{ project.data.title }}]({{ project.url }})

{% endfor %}
