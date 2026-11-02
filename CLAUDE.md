# Hana Church 웹사이트: Claude 작업 안내

이 저장소에서 일하는 Claude가 처음에 읽는 문서다. 사람이 보는 고치는 법은 `docs/how-to-update.md`에 있다. 이 저장소는 **공개**이므로 이 문서에도 내부 일이나 개인 정보를 쓰지 않는다.

## 한눈에

- **사이트:** https://hanachristianchurch.org
- **호스팅:** GitHub Pages가 이 저장소 `main` 브랜치의 루트(`/`)를 배포한다. Jekyll 빌드도 GitHub이 하므로 Actions 설정이나 Gemfile은 없다. 비용은 $0.
- **담당:** Pastor Young Kang(Young). 웹 개발자가 아니고 바쁘다. 보고와 안내는 한국어로 짧게 하고, 누를 버튼 이름까지 단계별로 쓴다.
- **기록:** 1차본은 PR #1, 도메인 전환은 PR #2(2026-10-31).

## 먼저 읽을 것

1. `docs/plan.md`: 결정(§0이 가장 우선), 사이트 지도, 페이지별 내용, 디자인, 기술 구조, 출시 단계, 확인 필요 목록(§9)
2. `docs/background.md`: 쓸 수 있는 사실과 지킬 것. 여기와 plan.md에 없는 사실은 지어내지 않는다.
3. `docs/how-to-update.md`: 소식, 사진, 캘린더, 시간·연락처 고치는 절차

`background.md`와 `plan.md`가 다르면 `plan.md` §0을 따른다.

## 꼭 지킬 것

- **이름:** "Hana Church / 하나교회"만 쓴다. "Hana Christian Church", "하나처치", 교단 이름(Methodist, KMC, Disciples 등), "English-first"는 쓰지 않는다.
- **목회자:** Pastor Sung Hye Nahm, Pastor Young Kang, Founding Pastor Sungdo Kang. 사진과 소개 글은 본인 동의 전에는 넣지 않는다.
- **넣지 않는 것:**
  - 교인·아이·학생의 이름과 얼굴
  - 계좌·라우팅 번호, 재정·회의·행정 같은 내부 일
  - 예배 영상과 unlisted 링크
  - 문의 폼, 추적 코드, 쿠키
  - 설교 페이지(lectio 글은 Young의 성경공부 글이라 따로 둔다)
  - 실제 사람, 행사, 현장처럼 보이는 AI 사진
- **`[확인 필요]`:** 그 표시를 사이트에 내보이지 않는다. 그 문장은 빼고, 뺀 것을 보고에 적는다.
- **로고:** 로고 이미지와 SVG 마크를 쓰지 않는다. 헤더는 글자 "Hana Church"에 작은 "하나교회"를 붙인다.
- **언어:** 사이트 글은 짧고 따뜻한 영어로 쓴다. 한국어는 `/ko/` 페이지와 [한국어 안내] 버튼뿐이고, 한국어 글에는 `lang="ko"`를 붙인다.
- **파일 이름:** 영어 소문자와 하이픈으로 쓴다.
- **공개 저장소:** 원본 사진, Drive 문서, 개인 정보는 커밋하지 않는다. 커밋 기록도 공개다.

## 파일 구조

| 파일 | 내용 |
|---|---|
| `_config.yml` | 사이트 설정. `url: https://hanachristianchurch.org`, `baseurl: ""`, `theme: null`, `exclude` |
| `_data/site.yml` | 시간, 주소, 연락처, 헌금, 목회자, `calendar_id`. 사실은 여기 한 곳에서만 고친다 |
| `_layouts/` | `default`(틀), `page`(안쪽 페이지 머리 띠), `post`(소식 글) |
| `_includes/` | `header`, `footer`, `icon`(선 아이콘), `pastors`, `give-methods`, `church-jsonld` |
| `index.html` | Home |
| `visit.md`, `about.md`, `story.md` | Visit, About, Our Story |
| `food-bank.md`, `one-table.md`, `missions.md` | 사역 세 페이지(메뉴의 Ministries) |
| `news.html`, `_posts/` | News & Events. 캘린더 embed나 안내 문장, 소식 목록 |
| `give.md`, `ko.md`, `404.html` | Give, 한국어 안내, 없는 페이지 |
| `assets/css/site.css`, `assets/js/site.js` | 스타일, 모바일 메뉴와 Ministries 드롭다운 |
| `assets/img/` | 게시용 사진: `campus-exterior.jpg`(첫 화면), `sanctuary-entrance.jpg`(Hana means one), `sanctuary-interior.jpg`(Visit) |
| `CNAME` | `hanachristianchurch.org`. 지우면 도메인 연결이 풀린다 |

## 디자인 (A안 "Canyon", 홈 순서 "A+ · Revised")

- **색:**
  - 바탕 `#FFFFFF`, 모래 `#EED9C4`, 연모래 `#F7EEE4`
  - 글자 `#221819`, 보조 갈색 `#5C3F27`·`#7A5536`, 선 `#D9C3AC`
  - 주색 초록 `#365138`(hover `#2A402C`), footer 바탕 `#221819`
- **모양:**
  - 글꼴은 Noto Sans 400/600/800과 Nanum Gothic(한국어)이다.
  - 모서리는 4px로 한다. 누르는 곳은 44px 이상, 글자 대비는 4.5:1 이상으로 한다.
  - 960px보다 좁으면 메뉴가 접힌다.
- **홈 순서:** 첫 화면(모래) → Beyond Sunday(카드 3개) → Hana (하나) means one(초록 띠) → Pastors → Give(모래 띠) → footer. 홈의 영어 문구는 `plan.md` §2에 있는 그대로다.
- **footer:** 주소, 전화, 이메일 두 개(교회 `hanachristianchurch@gmail.com`, UFIC 사역 `hanaufic@gmail.com`), UFIC 문장이 들어간다. AI 일러스트 표시 문장은 일러스트를 처음 넣을 때 추가한다.

## 작업 방식

1. **브랜치와 PR:** 브랜치에서 작업하고 PR을 연다. merge는 Young이 한다(PR 페이지 → **Merge pull request** → **Confirm merge**). merge 뒤 1~2분이면 사이트에 반영되고, 저장소 **Actions** 탭의 "pages build and deployment"가 초록이면 끝난 것이다.
2. **올리기 전 확인:**
   - **빌드:** 아래 명령으로 GitHub Pages와 같은 버전(github-pages gem, Jekyll 3.10)을 쓴다. Gemfile은 저장소 밖에 둔다.

     ```bash
     mkdir -p ~/.cache/jekyll-build && cd ~/.cache/jekyll-build
     printf 'source "https://rubygems.org"\ngem "github-pages", group: :jekyll_plugins\ngem "webrick"\n' > Gemfile
     export GEM_HOME=$PWD/gems BUNDLE_PATH=$PWD/gems LANG=C.UTF-8 LC_ALL=C.UTF-8
     bundle install && bundle exec jekyll build --source /path/to/hanacc --destination $PWD/site
     ```

   - **금지어 검색:** 빌드 결과에서 아래 명령을 돌린다. About의 사명문 원문에 있는 "discipleship"은 괜찮다.

     ```bash
     grep -rnE "Methodist|KMC|Disciples|English-first|하나처치|확인 필요|Hana Christian" site/
     ```

   - **휴대폰 폭:** 375px 폭에서 가로 스크롤이 없는지 Playwright로 본다.
3. **보고:** 짧은 한국어로 쓴다. 만든 것, 뺀 `[확인 필요]` 항목, Young이 할 일(PR merge 등)을 적는다.

## 알아 둔 함정

- **`theme: null`:** 지우면 GitHub Pages가 기본 테마(primer)의 `style.css`를 덧붙인다.
- **`exclude` 목록:** front matter가 없는 `.md` 파일은 사이트에 그대로 복사된다. 사이트에 안 올릴 문서는 `docs/`에 두거나 `exclude`에 넣는다. 지금 목록은 `docs`, `README.md`, `CLAUDE.md`다.
- **include 인자 `size`:** `include.size`는 인자 개수를 돌려주므로 인자 이름으로 쓰지 않는다. 아이콘 크기는 `px`로 넘긴다(`{% include icon.html name="food" px="36" %}`).
- **로컬 빌드 locale:** `LANG=C.UTF-8`이 없으면 Sass가 한글 때문에 실패할 수 있다.
- **kramdown:** `.md` 페이지 안의 HTML 블록은 그대로 둔다. 그 안에 마크다운을 쓰려면 `markdown="1"`을 붙인다.
- **링크:** 모두 `relative_url`로 건다. 지금 `baseurl`은 `""`다.
- **한국어 줄바꿈:** 단어 중간에서 끊기지 않게 `:lang(ko)`에 `word-break: keep-all`을 둔다.
- **클라우드 세션 네트워크:** 네트워크 정책 때문에 `hanachristianchurch.org`, `luvnpce83.github.io`, DNS 조회가 막힐 수 있다. 그때는 Young에게 휴대폰 화면이나 Google Admin Toolbox Dig(https://toolbox.googleapps.com/apps/dig/) 결과를 부탁하거나, 환경 설정의 Allowed domains에 넣어 달라고 한다.

## 도메인과 DNS

- **등록:** Squarespace Domains(만료 2027-11-09, 자동 갱신). Squarespace 웹사이트 플랜은 갱신하지 않는다.
- **DNS** (Squarespace → Domains → hanachristianchurch.org → DNS Settings):
  - Squarespace Defaults 묶음은 지웠다. Squarespace Domain Connect(`_domainconnect`)는 그대로 둔다.
  - Custom records:
    - A `@` 네 줄: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
    - CNAME `www` → `luvnpce83.github.io`
    - TXT `_github-pages-challenge-luvnpce83`(GitHub 도메인 확인용)
  - 위 기록들은 지우지 않는다.
- **GitHub:**
  - 계정 Settings → Pages에서 도메인 확인(Verified)이 끝났다.
  - 저장소 Settings → Pages의 Custom domain은 `hanachristianchurch.org`다.

## 지금 상태 (2026-11-01 기준, 일이 끝나면 이 절을 고친다)

- **끝남:** 1차본 전체 페이지, DNS 기록, GitHub 도메인 확인, `url`/`baseurl` 전환, Squarespace 시안 정리
- **진행 중:**
  - 저장소 Settings → Pages의 DNS check가 "unsuccessful"(`NotServedByPagesError`)로 나왔다. DNS 기록 자체는 Google Dig로 맞는 것을 확인했다.
  - GitHub이 바꾸기 전의 DNS를 기억하고 있어서다(TTL 4시간). **Check again**을 누르고, 그래도 안 되면 Custom domain을 Remove → 다시 Save한다.
  - 초록이 되면 **Enforce HTTPS**를 체크한다.
- **다음 일** (`plan.md` §7 4·5단계):
  - 검색 등록: Google Search Console(도메인 속성, DNS TXT 확인, `sitemap.xml` 제출), Bing Webmaster Tools, Google 비즈니스 프로필 "Hana Church" 정리, LA Regional Food Bank 지도의 UFIC 정보 확인
  - 사진 추가(`how-to-update.md` 2번 절차), AI 일러스트 첫 묶음(넣으면 footer 표시 문장도 넣는다), 첫 소식 글
  - 공개 캘린더 ID를 `_data/site.yml`의 `calendar_id`에 넣는다(지금은 비어 있어서 News에 "For upcoming events, call or email us."가 보인다).
- **1차본에서 뺀 `[확인 필요]`:** `plan.md` §9가 풀리면 해당 페이지에 넣는다.
  - Visit: 예배 언어, 주일학교, 예배 후 식사, 주차
  - Our Story: 토요일 홈리스 식사는 과거형으로만 썼다(지금도 하는지 모름).
  - Food Bank: 이용 조건·준비물, 스페인어 안내
  - Missions: 지금 가는 횟수, 다음 일정
  - Give: PayPal 기부 버튼 링크, 지정 헌금 메모, 연말 영수증, 세금 공제 문구
  - 목회자 사진·소개
