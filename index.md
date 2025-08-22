---
title: Dr. Kristine Wilckens PhD
---

::: section
## Dr. Wilckens

Dr. Kristine Wilckens is a Pellentesque dapibus suscipit ligula.
Donec posuere augue in quam.  Etiam vel tortor sodales tellus
ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis
blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu,
wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at
dui in ligula mollis ultricies.  Integer placerat tristique nisl.
Praesent augue.  Fusce commodo.  Vestibulum convallis, lorem a tempus
semper, dui dui euismod elit, vitae placerat urna tortor vitae lacus.
Nullam libero mauris, consequat quis, varius et, dictum id, arcu.
Mauris mollis tincidunt felis.  Aliquam feugiat tellus ut neque.
Nulla facilisis, risus a rhoncus fermentum, tellus tellus lacinia
purus, et dictum nunc justo sit amet elit.

:::
::: section
## Projects

{% for project in collections.project %}

- [{{ project.data.title }}]({{ project.url }})

{% endfor %}

:::
::: section
## People

{% for person in collections.person %}

- **{{ person.data.title }}** {{ person.content }}

{% endfor %}

:::
::: section
## Publications

{% for pub in collections.publication %}

- {{ pub.data.author }} <u>{{ pub.data.title }}</u> *{{ pub.data.publisher }}* {{ pub.data.year }}

{% endfor %}

:::
