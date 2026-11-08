# Themen-Dateien (주제 파일)

파일 하나 = 주제 하나. 파일 이름 앞 숫자는 정렬용(10, 20, 30 …), `order` 값과 맞춥니다.
`window.TOPICS.push({...})` 형식이며 Actions가 이 폴더의 `[숫자]*.js`를 모아 `topics.bundle.js`로 만듭니다.

필드
- id: 영문 소문자만 (예: wasser, strom). 바꾸면 학습 기록이 끊깁니다.
- subject, klasse, title(독일어), ko(한국어), period(배운 시기), photos(분석한 사진 설명), current(true면 처음 열 때 이 주제)
- concepts: { 개념키: '한국어 이름' } — 부모 화면 "보충이 필요한 개념"에 쓰임
- observations: { todo:[['라벨','내용'],…], good:['…'] } — 사진 분석 소견
- pdfs: [{label, file:'pdf/…'}] — 출력용 모의시험
- units: [{ id, title, sub, ko, c(기본 개념), merk:[문장…], koSum, words:[{w,s,ko,d}], q:[문제…] }]
  - merk 문장의 `[[단어]]` 또는 `[[보이는말|단어장키]]`는 누르면 소리 나는 노란 단어
  - 문제 타입 t: mc(o,a), tf(a:true/false), order(items 정답순), sort(cats, items:[[이름,칸]]), match(pairs), cloze(text의 {0}{1}…, ans, bank), free(model, mk)
  - 모든 문제: id(주제 안에서 고유), q, ko(한국어 뜻), ex(아이용 독일어 피드백), exk(부모용 설명), 선택 c, img
