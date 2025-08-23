---
title: The SPA Lab
subtitle: Dr. Kristine Wilckens
photos:
  - src: ./img/lab-photos/IMG_0426.jpeg
    alt: poster
  - src: ./img/lab-photos/IMG_0677.jpeg
    alt: group
  - src: ./img/lab-photos/IMG_1104.jpeg
    alt: mask
  - src: ./img/lab-photos/IMG_4769.jpeg
    alt: patio
  - src: ./img/lab-photos/IMG_5662.jpeg
    alt: haloween
  - src: ./img/lab-photos/IMG_8913.jpeg
    alt: Ethan
---

::: section
## Dr. Wilckens

Dr. Wilckens investigates the role of sleep in promoting brain health
and cognitive fitness. Her research program focuses on 1) neural
processes during sleep that restore cognitive function and mitigate
neurodegeneration and 2) sleep enhancement interventions that improve
functioning of brain networks and mitigate cognitive impairments and
progression of Alzheimer’s disease. Sleep enhancement methods include
behavioral interventions and laboratory-based techniques such as
transcranial magnetic stimulation.

<!-- ![Face]({{'./img/WilckensKristine_Psychiatry2019.jpg' | url }}) -->

### Education & Training

- BA, Psychology, Rutgers University, Douglass College, 2006
- MA, Cognitive and Bio Psychology, New York University, 2008
- PhD, Cognitive Psychology, University of Pittsburgh, 2012
- Postdoctoral Fellowship, Geriatric Psychiatry T32, University of Pittsburgh, 2012-2015

:::
::: section
## Projects

<!-- TODO: a couple of additional studies -->
{% for project in collections.project %}

- [{{ project.data.title }}]({{ project.url }})

{% endfor %}

:::
::: section
## People

{% for person in collections.person %}

<!-- TODO: set width and style for all people -->
- **{{ person.data.title }}** {{ person.content }}  ![{{ person.data.photo }}](./img/{{ person.data.photo }})

{% endfor %}

:::
::: section
## Publications

<!-- TODO: full list of publications, ideally in a table -->
{% for pub in collections.publication %}

- {{ pub.data.author }} <u>{{ pub.data.title }}</u> *{{ pub.data.publisher }}* {{ pub.data.year }}

{% endfor %}

:::

<!-- 
## News

TODO: News in a sidebar with title, link, summary: off in a sidebar

{% for news in collections.news %}

- [{{ news.data.title }}]({{ news.url }})

{% endfor %}

-->
