---
title: Visit
permalink: /visit/
description: Worship with Hana Church in Tujunga on Sundays at 11 AM, with communion at an open table every week. Bible study follows at 1 PM.
lede: You are welcome here. Come as you are, and worship with us.
---
{%- assign s = site.data.site -%}

<section class="page-section" aria-labelledby="sundays">
  <h2 id="sundays">Sundays</h2>
  <ul class="time-list">
    <li>
      <p class="time">{{ s.worship.time }}</p>
      <div>
        <h3>Worship</h3>
        <p>We share communion every Sunday at an open table. Everyone is welcome.</p>
      </div>
    </li>
    <li>
      <p class="time">{{ s.bible_study.time }}</p>
      <div>
        <h3>Bible study</h3>
        <p>After worship, we open the Bible and read it together.</p>
      </div>
    </li>
  </ul>
</section>

<section class="page-section split split-wide" aria-labelledby="find-us">
  <div>
    <h2 id="find-us">Find us</h2>
    <address class="contact-list">
      <p>{% include icon.html name="pin" %} <span>{{ s.address.street }}<br>{{ s.address.city }}, {{ s.address.state }} {{ s.address.zip }}</span></p>
      <p>{% include icon.html name="phone" %} <a href="tel:{{ s.phone_link }}">{{ s.phone }}</a></p>
      <p>{% include icon.html name="mail" %} <a href="mailto:{{ s.email }}">{{ s.email }}</a></p>
    </address>
    <p><a class="btn btn-primary" href="{{ s.map_url }}">Open in Google Maps</a></p>
    <p>Have a question before you come? Call or email us. We would be glad to hear from you.</p>
  </div>
  <figure class="photo">
    <img src="{{ '/assets/img/sanctuary-interior.jpg' | relative_url }}" width="737" height="864" loading="lazy"
         alt="Inside our sanctuary: rows of wooden pews facing a simple wooden pulpit and a screen at the front.">
    <figcaption>Our sanctuary</figcaption>
  </figure>
</section>
