---
permalink: /course/index.html
---

<p>
  <a class="button" data-button-variant="primary" data-large-button href="{{ meta.curriculumGuide.pdf }}" download>{{ labels.course.download }} (PDF, {{ pdfSize }})</a>
</p>

<nav class="sheet flow" aria-labelledby="toc-h">
  <div class="index__head"><h2 id="toc-h">{{ labels.course.contents }}</h2></div>
  <ol class="index__rows" role="list">
    {% for item in guideSections %}
      <li><a class="index__row" href="{{ item.url }}"><span class="index__title">{{ item.title }}</span></a></li>
    {% endfor %}
  </ol>
</nav>

*Healing the Sacred* is produced by Betty Hill (Lyons) (Onondaga Nation, Snipe Clan) and Adam DJ Brett, in collaboration with the [American Indian Law Alliance](https://aila.ngo/). It is funded by the American Indian Law Alliance and, in part, by the inaugural Public Scholarship Grant of the [American Academy of Religion](https://aarweb.org/).

{{ guide | safe }}
