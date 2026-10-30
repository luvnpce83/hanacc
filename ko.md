---
title: 한국어 안내
permalink: /ko/
lang: ko
description: 하나교회 한국어 안내. 주일예배 오전 11시, 성경공부 오후 1시. 캘리포니아 투헝가(Tujunga) 9100 Tujunga Canyon Blvd. 매주 금요일 낮 12시~2시 무료 푸드뱅크.
heading: 하나교회에 오신 것을 환영합니다
lede: 1997년부터 투헝가(Tujunga)에서 함께 성경을 읽고, 이웃과 나누며 살아온 교회입니다.
---
{%- assign s = site.data.site -%}

<section class="page-section prose" aria-labelledby="ko-about">
  <h2 id="ko-about">하나교회는</h2>
  <p>하나교회는 1997년 5월 첫 주일, 다섯 사람이 함께 드린 예배에서 시작되었습니다. 지금은 캘리포니아 투헝가에서 여러 세대가 한 가족으로 함께 예배드립니다.</p>
  <p>“가서 너도 이와 같이 하라”(누가복음 10:37)는 예수님의 말씀대로 살고자 함께 성경을 읽고, 매주 푸드뱅크로 이웃과 나누고, 20년 넘게 멕시코 바하 캘리포니아에서 건축 선교를 이어 왔습니다.</p>
</section>

<section class="page-section" aria-labelledby="ko-worship">
  <h2 id="ko-worship">예배 안내</h2>
  <ul class="time-list">
    <li>
      <p class="time">주일 {{ s.worship.time_ko }}</p>
      <div>
        <h3>주일예배</h3>
        <p>매주 성찬을 나눕니다. 성찬상은 누구에게나 열려 있습니다.</p>
      </div>
    </li>
    <li>
      <p class="time">주일 {{ s.bible_study.time_ko }}</p>
      <div>
        <h3>성경공부</h3>
        <p>예배 후 함께 성경을 읽습니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="page-section" aria-labelledby="ko-directions">
  <h2 id="ko-directions">오시는 길</h2>
  <address class="contact-list">
    <p>{% include icon.html name="pin" %} <span lang="en">{{ s.address.full }}</span></p>
  </address>
  <p><a class="btn btn-primary" href="{{ s.map_url }}">Google 지도에서 보기</a></p>
</section>

<section class="page-section" aria-labelledby="ko-food-bank">
  <h2 id="ko-food-bank">푸드뱅크</h2>
  <p>매주 금요일 {{ s.food_bank.hours_ko }}, 교회에서 이웃에게 식료품을 무료로 나눕니다. LA 지역 푸드뱅크(Los Angeles Regional Food Bank)의 협력 기관입니다.</p>
  <p>봉사나 문의: <a href="mailto:{{ s.email_ufic }}">{{ s.email_ufic }}</a></p>
</section>

<section class="page-section" aria-labelledby="ko-contact">
  <h2 id="ko-contact">연락처</h2>
  <address class="contact-list">
    <p>{% include icon.html name="phone" %} <a href="tel:{{ s.phone_link }}">{{ s.phone }}</a></p>
    <p>{% include icon.html name="mail" %} <a href="mailto:{{ s.email }}">{{ s.email }}</a></p>
  </address>
  <p>궁금한 점이 있으시면 언제든 전화나 이메일로 연락해 주세요.</p>
  <p lang="en"><a class="text-link" href="{{ '/' | relative_url }}">English home</a></p>
</section>
