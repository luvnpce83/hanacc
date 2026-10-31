---
title: Food Bank
permalink: /food-bank/
description: Free groceries for our neighbors every Friday from 12 to 2 PM at 9100 Tujunga Canyon Blvd, Tujunga. A partner agency of the Los Angeles Regional Food Bank.
eyebrow: Ministries · UFIC
lede: Free groceries for our neighbors, every Friday, right here on campus.
---
{%- assign s = site.data.site -%}

<dl class="info-box">
  <div>
    <dt>{% include icon.html name="clock" %} When</dt>
    <dd>Every Friday, {{ s.food_bank.hours_long }}</dd>
  </div>
  <div>
    <dt>{% include icon.html name="pin" %} Where</dt>
    <dd><a href="{{ s.map_url }}">{{ s.address.full }}</a></dd>
  </div>
  <div>
    <dt>{% include icon.html name="food" %} Cost</dt>
    <dd>Free</dd>
  </div>
</dl>

<div class="prose">

<section aria-labelledby="about-food-bank">
  <h2 id="about-food-bank">Groceries for our neighbors</h2>
  <p>Every Friday, we share free groceries with our neighbors on our campus in Tujunga. Our food bank is a partner agency of the Los Angeles Regional Food Bank.</p>
</section>

<section aria-labelledby="volunteer">
  <h2 id="volunteer">Volunteer with us</h2>
  <p>Volunteers arrive around {{ s.food_bank.volunteers_arrive }} on Fridays to get ready. If you would like to help, email <a href="mailto:{{ s.email_ufic }}">{{ s.email_ufic }}</a>.</p>
</section>

<section aria-labelledby="questions">
  <h2 id="questions">Questions</h2>
  <p>Email <a href="mailto:{{ s.email_ufic }}">{{ s.email_ufic }}</a> or call <a href="tel:{{ s.phone_link }}">{{ s.phone }}</a>.</p>
  <p class="small-note">The Food Bank is a ministry of Unity of Friends in Christ (UFIC), the nonprofit that cares for our campus.</p>
</section>

</div>
