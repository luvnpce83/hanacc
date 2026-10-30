# 사이트 고치는 법

Hana Church 사이트(`https://luvnpce83.github.io/hanacc/`)를 고치는 방법이다. 고치는 일은 이 저장소(hanacc)의 Claude Code 세션에 말로 부탁하면 되고, 이 문서는 그때 Claude와 사람이 함께 보는 기준이다.

- 고친 내용이 `main` 브랜치에 들어가면 GitHub Pages가 1~2분 안에 사이트를 다시 만든다.
- 잘 됐는지는 저장소의 **Actions** 탭에서 "pages build and deployment"가 초록색인지 보고, 휴대폰으로 사이트를 열어 확인한다.
- 이 저장소는 공개다. 교인·아이·학생의 이름과 얼굴, 계좌 정보, 내부 일은 사이트에도 커밋 기록에도 넣지 않는다.

## 1. 소식 올리기

**부탁하는 말:** "소식 올려줘: (제목), (날짜), (내용)" + 사진(있으면)

Claude는 `_posts/` 폴더에 글 하나를 만든다.

- **파일 이름:** `_posts/2026-11-15-thanksgiving-food-drive.md`처럼 `날짜-영어-제목.md`
- **파일 내용:**

  ```markdown
  ---
  title: Thanksgiving Food Drive
  description: News & Events 목록과 검색 결과에 보이는 한 문장 요약.
  ---
  본문은 짧은 영어 문장으로 쓴다.
  ```

- **사진:** 0~3장. 아래 "사진 올리기" 절차를 거친 것만 쓴다.
- **News & Events 페이지:** 글이 생기면 "There is no news here yet." 안내 대신 글 목록이 자동으로 나온다.
- **일정:** 날짜가 있는 행사는 소식 글보다 캘린더에 넣는다(3번).

## 2. 사진 올리기

Young이 Drive 폴더(`Hana Church/Projects/Hana CC/Website/Photos to publish/`)에 사진을 넣고 "사진 올려줘"라고 하면, Claude가 아래 순서로 처리한다.

1. **얼굴 확인:** 얼굴, 아이, 이름표, 차 번호판, 옛 간판이 있는지 본다. 있으면 자르거나 흐리게 하고, 그럴 수 없으면 쓰지 않는다.
2. **1600px:** 긴 변을 1600px로 줄이고, 장당 200KB 이하로 저장한다(JPEG 품질 75~80).
3. **EXIF 삭제:** 촬영 위치(GPS)를 포함한 메타데이터를 모두 지운다.
4. **대체 텍스트:** 사진에 무엇이 보이는지 영어 한 문장으로 쓴다. AI 일러스트는 "Illustration:"으로 시작한다.
5. **확인:** 한 장짜리 확인 시트로 Young이 OK한 사진만 올린다.
6. **저장:** `assets/img/`에 영어 소문자와 하이픈으로 된 이름(예: `food-bank-boxes.jpg`)으로 넣는다. 원본 사진은 커밋하지 않는다.

**2~3번 명령(Claude용):** 저장할 때 EXIF를 넘기지 않으므로 메타데이터가 지워진다.

```bash
python3 - <<'EOF'
from PIL import Image, ImageOps
src, dst = "original.jpg", "assets/img/food-bank-boxes.jpg"
im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
im.thumbnail((1600, 1600))
im.save(dst, "JPEG", quality=78, optimize=True, progressive=True)
print(im.size)
EOF
```

```bash
python3 -c "from PIL import Image; print(dict(Image.open('assets/img/food-bank-boxes.jpg').getexif()))"
```

두 번째 명령의 결과가 `{}`이면 메타데이터가 지워진 것이다.

**페이지에 넣는 모양:** 크기(`width`, `height`)와 `loading="lazy"`를 꼭 쓴다.

```html
<img src="{{ '/assets/img/food-bank-boxes.jpg' | relative_url }}" width="1600" height="1067" loading="lazy"
     alt="Boxes of fresh vegetables lined up on tables before the Friday food bank.">
```

**AI 일러스트를 처음 넣을 때:** footer(`_includes/footer.html`)에 "Illustrations are made with AI tools. Photos are of our campus and ministries."를 넣고, 프롬프트·도구·날짜를 `assets/img/ai/PROMPTS.md`에 적는다. 1차본에는 일러스트가 없어서 이 문장도 넣지 않았다.

## 3. 캘린더 ID 넣기

News & Events 페이지는 `calendar_id`가 비어 있으면 "For upcoming events, call or email us."를 보여 주고, 값이 있으면 Google 캘린더를 일정 목록 모양(로스앤젤레스 시간)으로 보여 준다.

1. 컴퓨터에서 Google 캘린더를 열고, 왼쪽 목록의 "Hana Church Events" 옆 ⋮ → **설정 및 공유**로 간다.
2. **액세스 권한**에서 "공개 사용 설정"을 켠다(모든 일정 세부정보 보기). 공개해도 되는 일정만 넣는다. 회의와 교인 개인 일정은 넣지 않는다.
3. **캘린더 통합**에서 **캘린더 ID**(`...@group.calendar.google.com`)를 복사한다.
4. `_data/site.yml`의 `calendar_id: ""` 따옴표 안에 붙여 넣는다.

   ```yaml
   calendar_id: "abc123...@group.calendar.google.com"
   ```

- 주일 예배, 성경공부, 금요일 푸드뱅크 같은 정기 일정은 캘린더에 넣지 않는다. 사이트에 고정되어 있다.
- 캘린더를 다시 빼려면 `calendar_id: ""`로 비운다.

## 4. 시간·연락처 고치기 (`_data/site.yml`)

시간, 주소, 연락처, 헌금 정보는 `_data/site.yml` 한 곳에만 있다. 여기를 고치면 모든 페이지(한국어 페이지와 검색용 정보 포함)가 함께 바뀐다.

| 고칠 것 | 항목 | 함께 고칠 것 |
|---|---|---|
| 주일예배 시간 | `worship.time` (`11:00 AM`) | `time_short` (`11 AM`), `time_24` (`11:00`), `time_ko` (`오전 11시`) |
| 성경공부 시간 | `bible_study.time` (`1:00 PM`) | `time_short`, `time_ko` |
| 푸드뱅크 시간 | `food_bank.hours` (`12–2 PM`) | `hours_long`, `hours_ko`, `volunteers_arrive`(봉사자 도착) |
| 주소 | `address` 아래 항목들 | `map_url`(Google 지도 검색 주소) |
| 전화 | `phone` (`(818) 835-1121`) | `phone_link` (`+1`과 숫자만) |
| 이메일 | `email`(교회), `email_ufic`(UFIC 사역) | |
| 헌금 | `give` 아래 Zelle, Venmo, PayPal | Venmo 링크는 `venmo_url` |
| 목회자 | `pastors` | 순서대로 카드가 나온다 |

- 값에 콜론(`:`)이나 `@`가 있으면 따옴표로 감싼다.
- 들여쓰기는 스페이스 두 칸이다. 탭을 쓰지 않는다.
- 문장 자체(예: 첫 화면 문구, Our Story 내용)는 각 페이지 파일(`index.html`, `visit.md`, `story.md` 등)에 있다.

## 참고: 도메인을 연결한 뒤

`hanachristianchurch.org`를 연결하면 `_config.yml`에서 두 줄을 바꾼다(`plan.md` §7의 3단계).

```yaml
url: "https://hanachristianchurch.org"
baseurl: ""
```
