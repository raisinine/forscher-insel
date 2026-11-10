# 주제 파일 (Themen)

**파일 하나 = 주제 하나.** 파일 이름 규칙: `k<학년>-<과목>-<순서>-<이름>.js`

| 예시 | 뜻 |
|---|---|
| `k3-sachunterricht-01-demokratie.js` | 3학년 Sachunterricht 1번째 주제 |
| `k3-sachunterricht-02-wasser.js` | 3학년 Sachunterricht 2번째 주제 |
| `k3-deutsch-01-nomen.js` | 3학년 Deutsch 1번째 주제 (예시) |
| `k4-mathe-03-flaechen.js` | 4학년 Mathe 3번째 주제 (예시) |

과목 키: `deutsch`, `mathe`, `sachunterricht`, `englisch`, `religion`, `ethik`, `musik`, `kunst`, `sport`

PDF 이름도 같은 앞부분을 씁니다: `site/pdf/k3-sachunterricht-02-wasser_Probetest_A_B.pdf`

## 필드
- `id` 영문 소문자(바꾸면 학습 기록이 끊김) · `fach` · `klasse` · `nr` · `halbjahr` · `schuljahr` (예: "2026/27")
- `title`(독일어) · `ko`(한국어) · `period`(배운 시기) · `photos`(분석한 사진) · `current: true`(새 주제를 기본으로 열기)
- `concepts`, `observations`, `pdfs`
- `stories`: 읽기 지문 `{키: {title, p:[문단…]}}` — 학습 카드(`story`), 문제(`st`), 서술형(`st`)에서 불러 씀
- `units`: 단원(Station) 목록 — `merk`의 `[[단어]]`는 소리 나는 단어, `lesson`은 Verstehen 카드, `q`는 퀴즈(타입: mc, tf, order, sort, match, cloze, free, spell=듣고 쓰기 `a:'정답'`, num=숫자 입력 `a:'220'`·`a:'6 R 3'`). 그림: `fig:{k:'blocks'|'numberline'|'solid'|'iso'|'net'|'dots', …}`
  - `gen`: 연습 때마다 자동으로 새 계산 문제 6개 추가(einmaleins, plusminus100, stellen, nachbar, plusminus1000, halbdoppel)
- `schreiben`: 서술형 연습 — `{id, unit, op(nennen|beschreiben|erklaeren|begruenden|vergleichen|muster|sachaufgabe), q, ko, qk:[질문 단어 어간], start, words:[[단어, 어간, 한국어]], distract:[], kern:{o:[], a}, model, mk}`
  - `parts`: 한 문제에 질문이 여러 개일 때 `[{de:'질문', k:[어간…]}]` → "모든 질문에 답했는지" 자동 체크
  - "In eigenen Worten"(자기 말로 다시 쓰기)는 각 단원의 Merkkarte에서 자동으로 만들어집니다.

push하면 Actions의 "App und Themen prüfen" 단계가 파일 이름과 내용을 검사합니다.
