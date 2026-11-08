# Forscher-Insel (Sachunterricht · Klasse 3)

학교 공책·학습지 사진을 바탕으로 만든 시험 대비 웹앱입니다. 주제를 계속 추가할 수 있습니다.

- 아이 화면: 독일어 · 주제 선택 · 학습 순서대로 Station · 학습카드 · 어려운 단어 음성(보통/천천히) · 듣기 게임 · 연습 · Probetest · Fehlerkiste
- 부모 화면: 한국어 · 주제별 이해도 · 약한 개념 · 틀린 문제와 아이 답 · 서술형 답안 · 사진 분석 소견 · 시험일 기준 계획 · 전체 주제 요약
- 현재 주제: Wasser(물), Im Dschungel wird gewählt(민주주의·선거)

## 새 주제 추가하기
1. 새 단원 공책·학습지 사진을 Claude 대화에 올리고 "Forscher-Insel 새 주제 파일 만들어줘"라고 요청합니다.
2. 받은 `NN-이름.js` 파일(필요하면 PDF도)을 Codespace에서 `site/topics/`(PDF는 `site/pdf/`)에 넣습니다.
3. 터미널:
   ```bash
   git add -A && git commit -m "Thema: 이름" && git push
   ```
4. Actions가 주제 파일을 검사하고 자동 배포합니다. 형식 오류가 있으면 "App und Themen prüfen" 단계에서 어느 문제가 틀렸는지 알려 줍니다.

파일 형식은 `site/topics/README.md` 참고.

## 구조
```
site/index.html          앱 (HTML·CSS·JS)
site/topics/*.js         주제 데이터 (주제 하나 = 파일 하나)
site/pdf/                출력용 모의시험
site/sw.js, manifest     오프라인·홈 화면 설치
tools/check.mjs          Actions 검사
.github/workflows/deploy.yml   main에 push → 검사 → GitHub Pages 배포
```

## 설치 (폰·태블릿)
설치 파일은 없습니다. 브라우저로 Pages 주소를 열고
- Android Chrome: ⋮ → "홈 화면에 추가" 또는 "앱 설치"
- iPad/iPhone Safari: 공유 버튼 → "홈 화면에 추가"

학습 기록은 기기 브라우저에 저장되므로 아이가 쓰는 기기에서 부모 화면을 확인하세요.
음성은 기기의 독일어 TTS를 씁니다. Android: 설정 → 텍스트 음성 변환에서 독일어 음성 데이터 설치. iPad: 설정 → 손쉬운 사용 → 읽기 및 말하기 → 음성 → 독일어.
