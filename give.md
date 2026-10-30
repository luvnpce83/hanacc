---
title: Give
permalink: /give/
description: Give to Hana Church by Zelle, Venmo or PayPal. Gifts are received by Unity of Friends in Christ (UFIC).
lede: Thank you for sharing in this work. You can give in any of these three ways.
---
{%- assign s = site.data.site -%}

<div class="split split-wide">
  <div>
    {% include give-methods.html %}
  </div>
  <div class="prose">
    <h2>How to give</h2>
    <ul>
      <li><strong>Zelle:</strong> in your bank’s app, send to <span class="give-id">{{ s.give.zelle }}</span>.</li>
      <li><strong>Venmo:</strong> send to <a href="{{ s.give.venmo_url }}">{{ s.give.venmo }}</a>.</li>
      <li><strong>PayPal:</strong> send to <span class="give-id">{{ s.give.paypal }}</span>.</li>
    </ul>
    <p>{{ s.give.note }} So you may see “UFIC” as the name of the recipient.</p>
    <p>Questions? Call <a href="tel:{{ s.phone_link }}">{{ s.phone }}</a> or email <a href="mailto:{{ s.email }}">{{ s.email }}</a>.</p>
  </div>
</div>
