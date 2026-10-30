# Hana Church 웹사이트 계획

작성 2026-10-29. 사실 자료는 [`background.md`](background.md)에 있고, 이 문서는 무엇을 어떻게 만들지 정한 것이다. 모르는 사실은 `[확인 필요]`로 두고 지어내지 않는다. 이 저장소는 공개이므로 이 문서에도 내부 일은 쓰지 않는다.

## 0. 정한 것

| 항목 | 결정 |
|---|---|
| 이름 | 공개 이름은 **Hana Church / 하나교회**. 사이트에 "Hana Christian Church"와 교단 이름은 쓰지 않는다. "English-first church"처럼 언어로 교회를 규정하는 말도 쓰지 않는다. |
| 목회자 | **Pastor Sung Hye Nahm**, **Pastor Young Kang**(두 사람 모두 "Pastor"). 설립 목사 **Sungdo Kang**은 "Founding Pastor"로 넣는다. |
| 누구를 위한 사이트 | 처음 오는 사람(예배를 찾는 2세·가정)이 중심. 첫 화면에서 푸드뱅크 이웃과 One Table 가족도 바로 갈 길을 찾는다. |
| 플랫폼 | 이 저장소의 GitHub Pages. Jekyll(GitHub Pages가 알아서 빌드)로 만들고 비용은 $0. |
| 도메인 | `hanachristianchurch.org`. Squarespace Domains에 그대로 두고 DNS만 GitHub Pages로 연결한다(등록 만료 2027-11-09). |
| 사이트 언어 | 사이트 글은 영어로 쓴다. 한국어는 첫 화면의 [한국어 안내] 버튼과 한국어 안내 페이지(`/ko/`) 하나. |
| 사진·영상 | 사람 없는 실제 사진과 AI 일러스트만 쓴다. 영상은 공개하지 않는다. |
| 설교 | 사이트에 넣지 않는다. lectio 글은 Young의 성경공부 글이라 따로 둔다. 예배는 첫 화면의 [Worship with us · Sundays 11 AM] 버튼이 안내한다. |
| 일정 | 공개 Google 캘린더를 넣어 둔다. 캘린더만 고치면 사이트에 반영된다. |
| 헌금 | 1차부터 넣는다. Zelle `hanaufic@gmail.com`, Venmo `@hanaunity`, PayPal `hanaufic@gmail.com`. UFIC 계정이고 교회가 함께 쓰므로 사이트에 "UFIC가 받는다"고 밝힌다. 계좌·라우팅 번호는 쓰지 않는다. |
| 디자인 | A안의 색과 글꼴에 새 순서를 쓴다(캔버스의 "A+ · Revised"): 첫 화면(예배 버튼) → 사역 3개 바로가기 → Hana means one → 목회자 → 헌금. |
| Squarespace 시안 | 11/8 플랜 만료 전에 백업하고, 플랜은 갱신하지 않는다. |
| 업데이트 | 일정은 캘린더 편집자, 소식·사진은 Claude 세션. 매주 할 일은 없다. |

## 1. 사이트 지도

```
/                Home
/visit/          Visit (Sundays, directions, what to expect)
/about/          About (who we are, what we believe, pastors)
/story/          Our Story (since 1997)
/food-bank/      Food Bank  (UFIC)
/one-table/      One Table Art Studio  (UFIC)
/missions/       Construction Missions
/news/           News & Events (calendar + short posts)
/give/           Give
/ko/             한국어 안내
```

- **위쪽 메뉴:** Visit · About · Ministries(Food Bank, One Table, Missions) · News · Give · 한국어
- **아래쪽(모든 페이지):** 주소, 전화, 이메일 두 개, UFIC 안내 문장, AI 일러스트 표시 문장
- **연락 방법:** 폼 없이 전화·이메일 링크만 둔다(2024년 계획 그대로).

## 2. 페이지별 내용과 출처

출처 약어:
- **BG:** `background.md`
- **MP:** Ministry Plan(2025-07)
- **역사:** 「하나교회 역사」
- **선교:** 「하나교회 선교 이야기」
- **믿음:** 「무엇을 믿는가」

모든 문장은 짧은 영어로 새로 쓴다. 한국어 원문을 번역해 길게 옮기지 않는다.

### Home `/` (시안 "A+ · Revised"의 순서와 문구)
1. **첫 화면:** 캠퍼스 외관 사진
   - 작은 글: Tujunga, California · Since 1997
   - 제목: **Go and do likewise.** (Luke 10:37)
   - 본문: For almost thirty years, Hana Church has tried to live by these words of Jesus: opening the Bible together, sharing what we have with our neighbors, and building with our own hands. Every generation has a place here.
   - 버튼: [Worship with us · Sundays 11 AM] [한국어 안내]
   - 작은 글: Bible study at 1 PM · 9100 Tujunga Canyon Blvd, Tujunga
   - 출처: 믿음(누가복음 10장 "가서 이와 같이 너도 행하라"를 그리스도인의 삶을 한 마디로 정리한 말로 씀), 역사, 선교, Young 확인(시간)
2. **Beyond Sunday:** 사역 세 개로 바로 가는 카드
   - Food Bank (Fridays · 12–2 PM): Free groceries for our neighbors, right here on campus. A partner agency of the Los Angeles Regional Food Bank.
   - One Table Art Studio (Weekday afternoons · Saturdays): Art classes for children and young people with developmental disabilities, taught by art educators. Ask us about joining.
   - Construction Missions (For more than twenty years): We have helped build more than fifty churches, schools and shelters with partners in Baja California, Mexico.
   - 출처: BG
3. **Hana (하나) means one.** 예배당 입구 사진
   - 인용: "…for all of you are one in Christ Jesus." Galatians 3:28 (MP의 Reconciliation 가치가 이 구절을 쓴다)
   - 본문: In May 1997, five people gathered for worship. The habits of those early years still shape us: read the Bible slowly and let it speak first. Give, and then forget that you gave. Count honest work as prayer. Children who grew up on our mission trips now join them as young adults, and every generation worships side by side.
   - 버튼: [Read our story]
   - 출처: 역사(1997년 다섯 명, 성경공부), 선교("주고 나면 잊어버리는 것", "노동이 기도이다", 대를 이어 선교에 참여하는 청년들), MP(모든 세대가 함께)
4. **Pastors:** Pastor Sung Hye Nahm, Pastor Young Kang, Founding Pastor Sungdo Kang. 아래에 "Want to talk with a pastor?"와 전화·이메일
5. **Give:** 세 가지 방법과 UFIC 안내 문장(아래 Give 참고)
6. **아래쪽:** 주소, 전화, 이메일, UFIC 문장

### Visit `/visit/`
- **주일:** 11:00 AM 예배(매주 성찬, 누구나 함께하는 open table), 1:00 PM 성경공부. 출처: Young 확인, MP Core Values
- **예배 언어:** 사이트에서 "영어 중심"이라고 쓰지 않는다. 언어를 안내할지, 한다면 어떻게 쓸지 `[확인 필요]`
- **아이들:** `[주일학교 운영 여부와 연령 확인 필요]` (MP에 연령별 교사가 있다고 되어 있음)
- **예배 후:** `[점심 식사가 있는지 확인 필요]`
- **찾아오기:** 주소, Google 지도 링크, 주차 `[확인 필요]`
- **문의:** (818) 835-1121, hanachristianchurch@gmail.com

### About `/about/`
- **Who we are:** 사명문을 짧게 줄여 쓰고, 원문 전체는 펼쳐 보기로 둔다. 출처: MP §3
- **What we believe:** MP Core Values 중 다섯 개를 한두 문장씩 쓴다(Christ-centered discipleship, open and thoughtful engagement with Scripture, inclusive community and the Open Table, reconciliation, compassionate action). Covenantal partnership은 교단 이야기라 뺀다. 출처: MP §3
- **믿음 한 문단:** 「무엇을 믿는가」의 흐름을 담는다. 구원은 나 혼자, 죽은 다음만의 일이 아니라 이웃과 피조세계를 함께 살리는 일이고, 예수의 증인으로 사는 삶이다. 출처: 믿음
- **Pastors:** Pastor Sung Hye Nahm, Pastor Young Kang, Founding Pastor Sungdo Kang. 1차는 사진 없이 쓰고, 사진은 본인 동의 후 넣는다.
- **교단:** 쓰지 않는다.
- **쓰지 않을 것:** MP의 예산, 조직, 출석 숫자, 다른 교회에 대한 비판(Rationale 부분)

### Our Story `/story/`
- **연혁:** 1997년 5월 다섯 명의 첫 예배 → 세 번 이사 → 지금 Tujunga. 교단 이름 없이 "Hana"로만 쓴다. 출처: BG, 역사
- **성경공부:** 교인이 성경을 직접 읽고 해석하는 전통, 주중 성경공부와 평신도 신학 공부. 출처: 역사
- **건축 선교:** 20년 넘게 Baja California에서 교회·학교·쉘터 50여 동을 지었다. 재활용 자재를 쓰고, 현지인에게 기술을 가르치고, 여러 교회와 함께 일했다. "노동이 기도"라는 고백도 담는다. 출처: BG, 선교
- **나눔:** 매주 식료품 나눔, 옷과 생활용품 나눔. 토요일 홈리스 식사 사역은 지금도 하는지 `[확인 필요]`. 출처: 역사
- **오늘:** 같은 정신이 다음 세대로 이어진다(Food Bank, One Table). 출처: BG, MP
- **쓰지 않을 것:** 선교사·교인 실명, 선교 이야기 중 비판적 자기평가 부분, 교회 내부 일

### Food Bank `/food-bank/` (UFIC)
- **내용:** 매주 금요일 12–2 PM, 무료, LA Regional Food Bank 협력 기관
- **봉사자:** 10:30 AM 도착, hanaufic@gmail.com으로 문의
- **이용 조건·준비물:** `[확인 필요]`
- **스페인어 안내 한 줄:** 넣을지 `[선택]`
- 출처: BG

### One Table Art Studio `/one-table/` (UFIC)
- **내용:** 발달장애가 있는 어린이와 청소년을 위한 미술 프로그램. 미술 교육자가 이끌고, 평일 오후와 토요일에 소그룹으로 한다. 가입 문의는 이메일로 받는다.
- **쓰지 않을 것:** 수업 시간, 학생 이름·사진·작품 속 이름
- 출처: BG, MP

### Construction Missions `/missions/`
- **내용:** 선교 이야기 요약, 사진(사람 없이), 참여 문의
- **지금 몇 번 가는지와 다음 일정 공개 여부:** `[확인 필요]` (MP에는 연 3~4회)
- 출처: 선교, MP

### News & Events `/news/`
- **캘린더:** 공개 Google 캘린더 "Hana Church Events"를 일정 목록 모양으로 넣는다. 정기 일정(주일, 금요일)은 캘린더에 넣지 않고 사이트에 고정해 둔다.
- **소식 글:** 짧은 글에 사진(사람 없이)이나 일러스트를 0~3장 붙인다.

### Give `/give/`
- **Zelle:** `hanaufic@gmail.com`
- **Venmo:** `@hanaunity` (링크 `https://venmo.com/u/hanaunity`)
- **PayPal:** `hanaufic@gmail.com`으로 보내기. 기부 버튼 링크가 따로 있으면 그것을 쓴다 `[확인 필요]`.
- **받는 곳 안내:** "Gifts are received by Unity of Friends in Christ (UFIC), the nonprofit that cares for our campus and ministries." 받는 사람 이름이 UFIC로 보여도 헷갈리지 않게 한다.
- **메모 안내:** 푸드뱅크·선교 지정 헌금은 메모에 적어 달라고 쓸지 `[확인 필요]`
- **연말 헌금 영수증 안내:** `[확인 필요]`. 세금 공제 문구는 확인 전에는 쓰지 않는다.

### 한국어 `/ko/`
- **내용:** 하나교회 소개 3~4문장, 예배 안내(주일예배 오전 11시, 성경공부 오후 1시), 오시는 길, 푸드뱅크 안내, 연락처
- 출처: BG, Young 확인

## 3. 디자인 방향

시안 세 개는 첫 화면 기준으로, 디자인 캔버스(비공개)에 있다: https://claude.ai/artifact/3p1HSNSiqtExaVxpxPnqkz

세 안 모두 같은 사실과 같은 캠퍼스 사진 4장을 쓴다. 고른 안을 아래 값 그대로 구현한다.

| | A · Canyon | B · Lamp | C · Open Table |
|---|---|---|---|
| 느낌 | 2024년 팀이 고른 캠퍼스 색(베이지·초록·갈색). 따뜻하고 단단하다. | lectio와 같은 집안. 조용하고 글이 앞선다. | 밝고 이웃 같다. 첫 화면에서 "무엇을 찾으세요"로 길을 나눈다. |
| 바탕 | `#FFFFFF`, `#EED9C4`, `#F7EEE4` | `#F4F6F4`, `#E8ECEC` | `#FFFFFF`, `#EAF2F7` |
| 글자 | `#221819`, 보조 `#5C3F27` `#7A5536` | `#1B2430`, 보조 `#5A6572` | `#1A2633`, 보조 `#3A4756` `#4D5B69` |
| 주색 | 초록 `#365138` | 등불 `#9A5F0E` | 남색 `#17375E`, 포인트 `#B84A1E` |
| 선 | `#D9C3AC` | `#D3D9DC` | `#DCE6EE` |
| 글꼴 | Noto Sans 400/600/800 + Nanum Gothic | Cormorant Garamond 600(제목), Literata(본문), IBM Plex Sans 500(메뉴), Noto Serif KR | Figtree 400/600/800 + Gothic A1 |
| 모서리 | 4px | 버튼만 둥글게(pill) | 16–28px |
| 다크 모드 | 1차 없음 | lectio 값 그대로(`#0E151C`, `#E2E6E9`, `#E2A849`) | 1차 없음 |

- **결정(10/29): A안의 색·글꼴·모서리에 새 순서("A+ · Revised" 시안).** C처럼 사역 세 개로 바로 가는 카드를 첫 화면 바로 아래에 두고, 예배는 첫 화면 버튼이 맡는다. 사진은 캠퍼스 외관(첫 화면)과 예배당 입구(Hana means one)를 쓴다.
- B와 C는 참고용으로 캔버스에 남겨 둔다.
- **공통 원칙:** 글자 대비 4.5:1 이상, 누르는 곳 44px 이상, 한국어에는 `lang="ko"`, 휴대폰 폭에서 메뉴가 접힌다.

## 4. 사진과 AI 이미지·영상

### 사진
- **지금 쓸 수 있는 사진(사람 없음):** 캠퍼스 외관, 예배당 입구, 예배당 정면, 예배당 내부. 2018–2020년 Drive 사진에서 골랐다.
  - 정면 사진의 옛 간판은 시안에서 지웠다.
  - 내부 사진은 앉아 있는 사람이 보이지 않게 잘랐다.
  - 정면 사진은 지금 모습으로 새로 찍으면 더 좋다.
  - Young이 교회 전경으로 고른 사진: 캠퍼스 외관, 예배당 입구
- **더 구할 사진:** Young이 구글 포토에서 골라 Drive 폴더(`Hana Church/Projects/Hana CC/Website/Photos to publish/`, 위치는 바꿔도 됨)에 넣는다. Claude는 구글 포토에 직접 들어가지 못한다.
  1. 캠퍼스 전경, 나무와 산이 보이는 사진
  2. 비어 있는 예배당, 성찬상
  3. 푸드뱅크: 상자, 식료품, 트럭, 배분 전 테이블
  4. 건축 선교: 짓는 중이거나 완성된 건물, 도구, 멀리서 찍은 뒷모습
  5. One Table: 작품, 붓·물감, 빈 작업실(학생 얼굴·이름 없이)
  6. 성경공부: 펼친 성경과 노트(손만 보이게)
  7. 계절 풍경: Tujunga 하늘, 캠퍼스 꽃
- **게시 절차:**
  1. 얼굴, 아이, 이름표, 차 번호판, 옛 간판이 있는지 본다.
  2. 있으면 자르거나 흐리게 한다.
  3. 긴 변 1600px로 줄이고, EXIF·GPS 정보를 지운다.
  4. 대체 텍스트를 쓴다.
  5. 한 장짜리 확인 시트로 Young이 OK한 것만 올린다.

### AI 이미지
1. **쓰는 곳:** 일러스트, 배경, 질감, 분위기, 페이지 머리 그림, 소식 글의 대표 그림(행사 사진 대신)
2. **쓰지 않는 곳:** 실제 사람, 행사, 건물, 현장처럼 보이는 가짜 사진. "우리 교인", "푸드뱅크 현장", "선교 현장"을 AI로 만들지 않는다. 사람이 들어가는 그림은 누가 봐도 일러스트인 화풍으로, 얼굴을 알아볼 수 없게 한다.
3. **실제 사진 보정:** 밝기, 색, 자르기, 흐림(얼굴·간판·번호판)은 괜찮다. 사람이나 물건을 넣거나 빼서 있었던 일을 바꾸지는 않는다.
4. **표시:** 아래쪽에 "Illustrations are made with AI tools. Photos are of our campus and ministries."를 쓰고, 일러스트의 대체 텍스트는 "Illustration:"으로 시작한다.
5. **화풍 통일:** 고른 디자인 안의 색으로 한 화풍만 쓴다. 프롬프트, 도구, 날짜는 `assets/img/ai/PROMPTS.md`에 기록한다.
6. **만드는 방법:** Claude가 프롬프트를 쓰고, Young이 쓰는 이미지 도구에서 만들어 사진과 같은 폴더에 넣는다. 1차 출시는 AI 이미지 없이도 완성되게 한다(실제 사진 4장과 선 아이콘).
   - 첫 묶음 후보: Tujunga 산자락의 저녁 풍경, 빵과 잔이 놓인 긴 나무 식탁, 신선한 채소 상자, 붓과 물감과 종이, 사막 언덕 위 나무 골조, 펼친 성경과 등불
7. **영상:** 1차에는 없다. 넣는다면 첫 화면 배경용 짧은 풍경 반복 영상(소리 없음, 5~8초, 2MB 이하, 사람 없음, "움직임 줄이기" 설정이면 멈춤)만 쓴다.

## 5. 업데이트 방법

| 무엇 | 얼마나 자주 | 누가 | 어떻게 | 시간 |
|---|---|---|---|---|
| 일정 | 생길 때 | 캘린더 편집자(Pastor Nahm, Young, `[더 넣을 사람 확인 필요]`) | Google 캘린더 "Hana Church Events"(공개)에 입력 → 사이트 자동 반영 | 1분 |
| 소식 | 한 달 0~2번 | Young | hanacc 저장소 Claude 세션에 "소식 올려줘: 내용"(사진 첨부) → `_posts/` 글 | 5분 |
| 사진 | 분기 1번 | Young이 고르고 Claude가 처리 | Drive 폴더 → 이 컴퓨터의 Claude Code 세션(4장 절차) | 15분 |
| 사실 점검 | 1월·7월 | Claude 세션 | `_data/site.yml`의 시간, 연락처, 헌금 링크 확인 | 5분 |
| 도메인 | 매년 10월 | Squarespace Domains 자동 갱신 | 결제 카드만 확인 | – |

공개 캘린더에는 공개해도 되는 일정만 넣는다. 회의나 교인 개인 일정은 넣지 않는다.

## 6. 기술 구조 (만들기 세션용)

- **GitHub Pages:** `main` 브랜치 루트에서 배포하고, Jekyll은 GitHub이 빌드한다. 로컬 설치나 Actions는 필요 없다.
- **플러그인:** `jekyll-seo-tag`, `jekyll-sitemap`(GitHub Pages 기본 지원)
- **`_config.yml`:** `exclude: [docs, README.md]`로 문서가 사이트에 올라가지 않게 한다. 도메인을 연결하기 전에는 `baseurl: /hanacc`, 연결한 뒤에는 `""`. 모든 링크는 `relative_url`로 쓴다.
- **구조:**
  ```
  _config.yml
  _data/site.yml        # 시간, 주소, 연락처, 헌금 링크: 사실은 여기 한 곳에서만 고친다
  _layouts/  _includes/ # header, footer, page, post
  _posts/               # 소식
  assets/css/site.css
  assets/img/           # 게시용 사진(처리된 것만), ai/PROMPTS.md
  index.html visit.md about.md story.md food-bank.md one-table.md missions.md news.html give.md ko.md
  CNAME                 # 3단계에서 추가
  ```
- **캘린더:** Google 캘린더 embed를 일정 목록 모양, `ctz=America/Los_Angeles`로 넣고, 휴대폰 높이에 맞춘다.
- **검색:** `Church` JSON-LD(이름, 주소, 전화, url, 예배 시간), 페이지마다 설명 문장, `sitemap.xml`
- **가볍게:** 사진은 장당 200KB 이하로 하고, `width`·`height`와 `loading="lazy"`를 쓴다. 추적 코드와 쿠키는 쓰지 않는다.
- **공개 저장소 주의:** 원본 사진, Drive 문서, unlisted 링크, 계좌 정보는 커밋하지 않는다. 커밋 기록도 공개된다는 점을 기억한다.

## 7. 출시 단계

0. **준비 (10/29–11/1):**
   - 이 계획 OK, 디자인 안 고르기
   - 헌금 링크 세 개와 구글 비즈니스 프로필 관리 계정 확인
1. **1차본 (11/1–11/4, 클라우드 크레딧 사용):**
   - claude.ai/code에서 만들기 프롬프트로 이 저장소에 사이트를 만든다.
   - `https://luvnpce83.github.io/hanacc/`에서 휴대폰으로 확인한다.
2. **Squarespace 시안 백업 (11/7까지):**
   - Young이 Chrome에서 로그인만 한다.
   - Claude가 페이지별 전체 화면 캡처, 올린 이미지 내려받기, Settings → Import & Export 내보내기를 한다.
   - 결과는 Drive `Website/Squarespace backup 2026-11/`에 둔다.
3. **도메인 연결 (11/9 이후):**
   - Squarespace Domains DNS에서 Squarespace 기본 레코드를 지운다.
   - A 레코드 `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`(AAAA는 `2606:50c0:8000::153`–`8003::153`)를 넣는다.
   - CNAME `www` → `luvnpce83.github.io`
   - 저장소에 `CNAME` 파일을 넣고 GitHub Pages Custom domain 설정, Enforce HTTPS
   - GitHub 계정 설정에서 도메인 소유 확인(TXT)을 한다.
   - `baseurl`을 `""`로 바꾼다.
4. **검색 등록 (연결 후 1주 안):**
   - **Google Search Console:** 도메인 속성, DNS TXT로 확인, `sitemap.xml` 제출
   - **Bing Webmaster Tools:** Search Console에서 가져오기
   - **Google 비즈니스 프로필 "Hana Church":** 프로필은 있다. 누가 관리 계정에 들어갈 수 있는지 `[확인 필요]`. 웹사이트 `https://hanachristianchurch.org`, 전화, 예배 시간(일 11:00), 영어 설명, 캠퍼스 사진을 넣고, 예전 링크와 정보를 정리한다.
   - **Apple Business Connect:** Apple 지도 정보 `[선택]`
   - **LA Regional Food Bank 식료품 지도의 UFIC 정보:** 시간과 연락처가 맞는지 `[확인 필요]`
5. **채우기 (11–12월):**
   - 사진 추가, AI 일러스트 첫 묶음, 첫 소식 글

## 8. 일정 (Young의 시간 기준)

논문 때문에 바쁜 시기라서 Young이 직접 쓰는 시간은 출시까지 약 2시간으로 잡는다. 나머지는 Claude가 한다.

| 날짜 | Young이 할 일 | 시간 | Claude가 할 일 |
|---|---|---|---|
| 10/30 (금) | 새 문구와 "A+ · Revised" 시안 확인 | 10분 | 고친 내용 반영, 만들기 프롬프트 쓰기 |
| 10/31–11/2 | 구글 포토에서 사진 골라 Drive 폴더에 넣기 | 30분 | 사진 처리, 확인 시트 |
| 11/2–11/4 | claude.ai/code에서 프롬프트 실행 → 휴대폰으로 보고 고칠 점 말하기 | 30분 | 1차본 만들기(크레딧 마감 11/4) |
| 11/5–11/7 | Squarespace 로그인 | 5분 | 시안 백업 |
| 11/9 이후 | DNS 변경 승인 | 15분 | 도메인 연결, HTTPS 확인 |
| 11월 중 | 비즈니스 프로필 로그인 | 20분 | 검색 등록 안내, 프로필 문구 |

## 9. 확인 필요 목록

1. **구글 비즈니스 프로필:** "Hana Church" 관리 계정에 누가 들어갈 수 있는지
2. **예배 정보:** 예배 언어를 안내할지, 주일학교, 예배 후 식사, 주차
3. **건축 선교:** 지금 몇 번 가는지, 다음 일정을 공개할지
4. **연혁 문구:** 토요일 홈리스 식사 사역을 지금도 하는지
5. **목회자 사진:** 넣을지(본인 동의)
6. **헌금 안내:** PayPal 기부 버튼 링크가 따로 있는지, 지정 헌금 메모, 연말 영수증, 세금 공제 문구
7. **Food Bank:** 이용 조건과 준비물, 스페인어 안내를 넣을지
8. **캘린더 편집자:** 목회자 두 사람 말고 더 넣을 사람

## 10. 하지 않을 것

- 교인, 아이, 학생의 이름과 얼굴 사진
- 계좌·라우팅 번호, 재정, 회의, 행정 등 교회 내부 일
- unlisted 예배 영상과 그 링크
- 설교 페이지: lectio 글은 Young의 성경공부 글이라 이 사이트에 넣지 않는다
- 실제 사람, 행사, 현장처럼 보이는 AI 사진
- 비공개 페이지와 회원 기능: 교인용 자료는 지금처럼 카톡과 Drive로 나눈다
- 문의 폼, 추적 코드, 쿠키 배너
