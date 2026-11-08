# Forscher-Insel 🌊 (Sachunterricht Klasse 3 · Wasser)

첫째 딸 3학년 과학(Sachunterricht) "물" 단원 시험 대비 웹앱입니다. 폰·태블릿 브라우저에서 열고 홈 화면에 추가하면 앱처럼 쓸 수 있습니다(오프라인 동작).

- 아이 화면: 독일어 · 학습 순서 10단원(마지막은 추가 단원) · 학습카드 · 어려운 단어 음성(보통/천천히) · 듣기 게임 · 연습문제 · Probetest · Fehlerkiste
- 부모 화면: 한국어 · 단원별 이해도 · 약한 개념 · 틀린 문제와 아이 답 · 서술형 답안 · 공책 사진 분석 소견 · 시험일 기준 학습 계획
- 출력용: `site/pdf/Probetest_Wasser_A_B.pdf`, `site/pdf/Loesungen_Eltern.pdf`

## 구조
```
site/            ← GitHub Pages로 배포되는 앱 전체
  index.html     ← 앱 (HTML·CSS·JS 한 파일)
  sw.js          ← 오프라인 캐시
  manifest.webmanifest, icons/, pdf/
tools/check.mjs  ← Actions에서 앱 문법·파일 검사
.github/workflows/deploy.yml ← main에 push하면 검사 후 자동 배포
```

## 참고
- 학습 기록은 기기 브라우저(localStorage)에 저장됩니다. 아이가 쓰는 기기에서 부모 화면을 확인하세요.
- 음성은 기기의 독일어 음성(TTS)을 사용합니다. 안드로이드: 설정 → 텍스트 음성 변환 → Google 음성 엔진에서 독일어 음성 데이터 설치. iPad/iPhone: 설정 → 손쉬운 사용 → 읽기 및 말하기 → 음성 → 독일어.
- 부모 화면 진입 문제: 두 자리 곱셈.
