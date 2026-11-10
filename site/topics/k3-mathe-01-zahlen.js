/* Forscher-Insel · Klasse 3 · mathe · Thema 1: Zahlen bis 1000 und Körper (Arbeitsheft S. 3–22)
   Ein Thema = eine Datei. Name: k<Klasse>-<fach>-<Nr>-<name>.js  (siehe site/topics/README.md) */
(window.TOPICS=window.TOPICS||[]).push({
 "id": "zahlen",
 "fach": "mathe",
 "klasse": 3,
 "nr": 1,
 "halbjahr": 1,
 "schuljahr": "2026/27",
 "current": true,
 "title": "Zahlen bis 1000 und Körper",
 "ko": "1000까지의 수 · 입체도형 · 1000까지 덧셈뺄셈",
 "period": "2026년 9월 ~ 11월",
 "photos": "수학 익힘책(Arbeitsheft) 3~22쪽 사진 20장, 2026-11-10",
 "concepts": {
  "plusminus": "100까지 덧셈·뺄셈",
  "einmaleins": "곱셈구구·나눗셈",
  "stellenwert": "자릿값(H·Z·E)",
  "zahlwort": "수 읽기(독일어 수 단어)",
  "nachbar": "이웃수·수직선·크기 비교",
  "geld": "돈 계산·절반·두 배",
  "sachrechnen": "문장제(F–R–A)·그래프",
  "koerper": "입체도형과 성질",
  "netze": "쌓기나무 설계도·전개도",
  "rechnen1000": "1000까지 덧셈·뺄셈",
  "erklaeren": "규칙을 말로 설명하기"
 },
 "observations": {
  "todo": [
   [
    "실수",
    "6쪽 2c: 5 · 7 = 25 (정답 35). 7단 확인이 필요합니다. 5 · 7은 10 · 7 = 70의 절반이라는 \"Kernaufgabe\" 전략으로 연습합니다. → 2단원"
   ],
   [
    "실수",
    "10쪽 2f: 633, 632, 631, 630, 329 (정답 629). 거꾸로 셀 때 십의 자리가 바뀌는 곳에서 백의 자리까지 바꿨습니다. → 4단원"
   ],
   [
    "실수",
    "22쪽 5a: 265 − 45 = 210 (정답 220). 단계별로(265 − 40 = 225, 225 − 5 = 220) 쓰고, 덧셈으로 검산하는 습관을 들이면 막을 수 있는 실수입니다. → 9단원"
   ],
   [
    "설명하기",
    "\"Was fällt dir auf? / Beschreibe\" 답이 짧거나 절반만 썼습니다. 10쪽: \"Es verändert sich bei Blau: 200 weniger\" → 첫 수는 200씩 커지고 둘째 수는 200씩 작아져서 합은 항상 1000. 11쪽: \"die Zehner vergrößern und die Einern auch\" → \"Die Zehner und die Einer werden immer um 1 größer. Jede Zahl ist um 11 größer.\" → 10단원, Schreibwerkstatt"
   ],
   [
    "문장제",
    "F(Frage)–R(Rechnung)–A(Antwort) 형식이 일정하지 않습니다. 4쪽은 셋 다 썼고, 5쪽 신발 문제는 계산식 없이 답만, 7쪽은 F를 생략했습니다. 시험에서는 R이 없으면 감점되는 경우가 많습니다. → 6단원"
   ],
   [
    "확인 필요",
    "16쪽 표에서 Pyramide의 Ecken(5)과 Kegel의 Kanten(1) 옆에 선생님이 작은 동그라미를 그리셨습니다. 아이 답은 일반적인 교과서 기준과 같으니, 이 표시가 무슨 뜻인지(예: 꼭짓점 Spitze를 따로 세는지) 선생님께 확인해 보세요."
   ]
  ],
  "good": [
   "1000까지 수 읽기·쓰기, 자릿값(H Z E), 0이 들어간 수(503, 705, 805), 크기 비교와 큰 수부터 정렬이 모두 정확합니다.",
   "100까지 받아올림·받아내림 계산, 나눗셈과 나머지(Rest), 곱셈표(5a·5b)가 거의 다 맞았습니다.",
   "입체도형 이름, 여러 방향에서 본 모양(Ansichten), 쌓기나무 설계도(Bauplan), 뒤로 넘어뜨린 건물의 설계도까지 모두 맞았습니다. 공간 감각이 뛰어납니다.",
   "그래프 문제(바다흰꼬리수리)에서 \"두 배, 세 배, 100 증가, 200 증가\"를 정확히 연결했습니다.",
   "6쪽 6번에서 \"3배가 되면 결과도 3배\"라는 규칙을 스스로 찾아냈습니다."
  ]
 },
 "pdfs": [
  {
   "label": "모의시험 열기",
   "file": "pdf/k3-mathe-01-zahlen_Probetest.pdf"
  },
  {
   "label": "부모용 정답지 열기",
   "file": "pdf/k3-mathe-01-zahlen_Loesungen.pdf"
  }
 ],
 "units": [
  {
   "id": "u1",
   "title": "Plus und Minus bis 100",
   "sub": "Wiederholung",
   "ko": "100까지 덧셈·뺄셈(복습)",
   "c": "plusminus",
   "gen": "plusminus100",
   "merk": [
    "Beim [[Addieren|addieren]] rechnest du plus. Beim [[Subtrahieren|subtrahieren]] rechnest du minus.",
    "Zehner und Einer getrennt: 43 + 43 → 40 + 40 = 80 und 3 + 3 = 6 → 86.",
    "[[Zehnerübergang]]: 28 + 7 → 28 + 2 = 30, dann 30 + 5 = 35.",
    "Minus über den Zehner: 43 − 6 → 43 − 3 = 40, dann 40 − 3 = 37.",
    "[[Ergänzen|ergänzen]]: 71 − 68 → von 68 bis 71 sind es 3.",
    "Mit der [[Umkehraufgabe]] prüfst du: 37 + 6 = 43, also stimmt 43 − 6 = 37."
   ],
   "koSum": "100까지 덧셈·뺄셈은 거의 다 맞았습니다. Zehnerübergang(받아올림·받아내림)은 \"먼저 10을 채우고 나머지를 더하기/빼기\"로 계산합니다. 71 − 68처럼 두 수가 가까우면 \"얼마를 더하면 될까?\"(ergänzen)가 빠릅니다.",
   "words": [
    {
     "w": "addieren",
     "s": "ad·die·ren",
     "ko": "더하다",
     "d": "Plus rechnen."
    },
    {
     "w": "subtrahieren",
     "s": "sub·tra·hie·ren",
     "ko": "빼다",
     "d": "Minus rechnen."
    },
    {
     "w": "die Summe",
     "s": "Sum·me",
     "ko": "합",
     "d": "Das Ergebnis einer Plusaufgabe."
    },
    {
     "w": "die Differenz",
     "s": "Dif·fe·renz",
     "ko": "차",
     "d": "Das Ergebnis einer Minusaufgabe."
    },
    {
     "w": "der Zehnerübergang",
     "s": "Zeh·ner·über·gang",
     "ko": "받아올림·받아내림",
     "d": "Man rechnet über einen Zehner hinweg."
    },
    {
     "w": "ergänzen",
     "s": "er·gän·zen",
     "ko": "채우다",
     "d": "Dazurechnen, bis es passt."
    },
    {
     "w": "die Umkehraufgabe",
     "s": "Um·kehr·auf·ga·be",
     "ko": "거꾸로 문제(검산)",
     "d": "Damit prüfst du dein Ergebnis."
    }
   ],
   "lesson": {
    "steps": [
     {
      "t": "Erst bis zum Zehner",
      "fig": {
       "k": "numberline",
       "from": 20,
       "to": 40,
       "minor": 1,
       "label": 10,
       "mid": 5,
       "arrows": [
        {
         "v": 28,
         "l": "28"
        },
        {
         "v": 30,
         "l": "+2"
        },
        {
         "v": 35,
         "l": "+5"
        }
       ],
       "w": 420
      },
      "txt": "28 + 7: Bis zum nächsten Zehner fehlen 2. Also 28 + 2 = 30. Dann noch 5 dazu: 30 + 5 = 35.",
      "ko": "28 + 7: 먼저 30까지 2를 더하고(28 + 2 = 30), 남은 5를 더해요(30 + 5 = 35)."
     },
     {
      "t": "Minus genauso",
      "txt": "43 − 6: Erst zurück bis 40, das sind 3. Dann noch 3 weniger: 40 − 3 = 37.",
      "ko": "43 − 6: 먼저 40까지 3을 빼고, 남은 3을 더 빼요. 40 − 3 = 37."
     },
     {
      "t": "Ergänzen",
      "txt": "71 − 68: Die Zahlen liegen nah beieinander. Frag dich: Wie viel fehlt von 68 bis 71? 68 + 3 = 71. Also ist das Ergebnis 3.",
      "ko": "두 수가 가까우면 \"68에 얼마를 더하면 71?\"로 생각해요. 답은 3."
     },
     {
      "t": "Prüfen",
      "txt": "Mit der Umkehraufgabe prüfst du: Ist 82 − 47 = 35? Rechne 35 + 47 = 82. Ja, es stimmt!",
      "ko": "검산: 82 − 47 = 35가 맞는지 35 + 47 = 82로 확인해요."
     }
    ],
    "try": {
     "txt": "Beim Einkaufen: Wie viel Geld bekommt ihr zurück? Rechne im Kopf mit Zehnerübergang.",
     "ko": "장 볼 때 거스름돈을 머릿속으로 계산해 보세요."
    },
    "fehler": {
     "txt": "Beim Zehnerübergang nicht vergessen, den Rest noch zu rechnen.",
     "ko": "10을 채운 다음 나머지를 빠뜨리지 않기."
    }
   },
   "q": [
    {
     "id": "a1",
     "t": "num",
     "q": "57 + 24 = ?",
     "ko": "계산",
     "a": "81",
     "ex": "57 + 3 = 60, 60 + 21 = 81.",
     "exk": "받아올림."
    },
    {
     "id": "a2",
     "t": "num",
     "q": "82 − 47 = ?",
     "ko": "계산",
     "a": "35",
     "ex": "82 − 40 = 42, 42 − 7 = 35.",
     "exk": "받아내림."
    },
    {
     "id": "a3",
     "t": "num",
     "q": "71 − 68 = ?",
     "ko": "계산(채우기)",
     "a": "3",
     "ex": "68 + 3 = 71. Ergänzen ist hier schneller.",
     "exk": "ergänzen."
    },
    {
     "id": "a4",
     "t": "num",
     "q": "45 + ? = 100",
     "ko": "빈칸 채우기",
     "a": "55",
     "ex": "45 + 5 = 50, 50 + 50 = 100. Zusammen 55.",
     "exk": "55."
    },
    {
     "id": "a5",
     "t": "mc",
     "q": "Welche Aufgabe hat einen Zehnerübergang?",
     "ko": "받아내림이 있는 문제는?",
     "o": [
      "63 − 44",
      "89 − 47",
      "56 − 24"
     ],
     "a": 0,
     "ex": "3 − 4 geht nicht. Du musst über den Zehner.",
     "exk": "63 − 44."
    },
    {
     "id": "a6",
     "t": "mc",
     "q": "Welche Umkehraufgabe prüft 63 − 44 = 19?",
     "ko": "검산식은?",
     "o": [
      "19 + 44 = 63",
      "63 + 44 = 107",
      "44 − 19 = 25"
     ],
     "a": 0,
     "ex": "Ergebnis + abgezogene Zahl = Anfangszahl.",
     "exk": "19 + 44 = 63."
    }
   ]
  },
  {
   "id": "u2",
   "title": "Einmaleins und Geteilt",
   "sub": "Kernaufgaben, Tauschaufgabe, Rest",
   "ko": "곱셈구구·나눗셈",
   "c": "einmaleins",
   "gen": "einmaleins",
   "merk": [
    "Eine [[Malaufgabe]]: 3 · 7 heißt 7 + 7 + 7 = 21.",
    "[[Tauschaufgabe]]: 3 · 7 = 7 · 3. Das Ergebnis ist gleich.",
    "[[Kernaufgaben|Kernaufgabe]]: 1 ·, 2 ·, 5 · und 10 ·. Mit ihnen findest du alle anderen.",
    "5 · 7 ist die Hälfte von 10 · 7 = 70. Also ist 5 · 7 = 35.",
    "6 · 7 = 5 · 7 + 7 = 42. 9 · 7 = 10 · 7 − 7 = 63.",
    "[[Geteilt|dividieren]]: 21 : 3 = 7, weil 7 · 3 = 21.",
    "[[Rest]]: 22 : 4 = 5 Rest 2, weil 5 · 4 = 20 und noch 2 übrig bleiben."
   ],
   "koSum": "곱셈구구는 거의 정확하지만 5 · 7을 25로 썼습니다. 독일 학교는 Kernaufgaben(1·, 2·, 5·, 10·)을 기준으로 나머지를 만들어 내는 방법을 가르칩니다: 5단은 10단의 절반, 6단은 5단 + 1번, 9단은 10단 − 1번. 앱의 Punktefeld로 직접 확인할 수 있습니다.",
   "words": [
    {
     "w": "die Malaufgabe",
     "s": "Mal·auf·ga·be",
     "ko": "곱셈 문제",
     "d": "Zum Beispiel 3 · 7."
    },
    {
     "w": "multiplizieren",
     "s": "mul·ti·pli·zie·ren",
     "ko": "곱하다",
     "d": "Mal rechnen."
    },
    {
     "w": "dividieren",
     "s": "di·vi·die·ren",
     "ko": "나누다",
     "d": "Geteilt rechnen."
    },
    {
     "w": "die Tauschaufgabe",
     "s": "Tausch·auf·ga·be",
     "ko": "순서 바꾼 문제",
     "d": "3 · 7 und 7 · 3."
    },
    {
     "w": "die Kernaufgabe",
     "s": "Kern·auf·ga·be",
     "ko": "기본 곱셈",
     "d": "1 ·, 2 ·, 5 ·, 10 ·"
    },
    {
     "w": "der Rest",
     "s": "Rest",
     "ko": "나머지",
     "d": "Was übrig bleibt."
    },
    {
     "w": "das Dreifache",
     "s": "Drei·fa·che",
     "ko": "세 배",
     "d": "Dreimal so viel."
    },
    {
     "w": "der Faktor",
     "s": "Fak·tor",
     "ko": "곱하는 수",
     "d": "Eine Zahl in einer Malaufgabe."
    }
   ],
   "lesson": {
    "steps": [
     {
      "t": "Das Punktefeld",
      "sim": "punkte",
      "txt": "Schieb die Regler. Jede Reihe hat gleich viele Punkte. Die Malaufgabe sagt: Wie viele Punkte sind es zusammen?",
      "ko": "막대를 움직여 보세요. 줄마다 점 개수가 같아요. 곱셈은 \"모두 몇 개?\"예요."
     },
     {
      "t": "Kernaufgaben helfen",
      "txt": "10 · 7 = 70 ist leicht. 5 · 7 ist die Hälfte davon: 35. 6 · 7 ist eine Reihe mehr: 35 + 7 = 42. 9 · 7 ist eine Reihe weniger als 10 · 7: 70 − 7 = 63.",
      "ko": "10 · 7 = 70은 쉬워요. 5 · 7은 그 절반 35, 6 · 7은 35 + 7 = 42, 9 · 7은 70 − 7 = 63."
     },
     {
      "t": "Pass auf bei 5 · 7",
      "txt": "Im Heft stand einmal 5 · 7 = 25. Das ist 5 · 5! Merke: 5 · 7 = 35. Prüfe immer mit der Hälfte von 10 · 7.",
      "ko": "5 · 7 = 25는 5 · 5와 헷갈린 거예요. 5 · 7 = 35. 10 · 7의 절반으로 확인해요."
     },
     {
      "t": "Geteilt und Rest",
      "txt": "23 : 4. Welche Viererzahl passt? 5 · 4 = 20. Bis 23 fehlen noch 3. Also: 23 : 4 = 5 Rest 3. Der Rest ist immer kleiner als 4.",
      "ko": "23 : 4 → 5 · 4 = 20, 남는 것 3. 그래서 5 나머지 3. 나머지는 항상 나누는 수보다 작아요."
     }
    ],
    "try": {
     "txt": "Jeden Tag eine Einmaleinsreihe aufsagen, zum Beispiel beim Treppensteigen.",
     "ko": "계단을 오르며 하루 한 단씩 외워 보세요. 7단, 8단을 특히 자주."
    },
    "fehler": {
     "txt": "5 · 7 ist nicht 25. Prüfe: 10 · 7 = 70, die Hälfte ist 35.",
     "ko": "5 · 7 = 35."
    }
   },
   "q": [
    {
     "id": "m1",
     "t": "num",
     "q": "5 · 7 = ?",
     "ko": "계산",
     "a": "35",
     "ex": "10 · 7 = 70. Die Hälfte ist 35.",
     "exk": "따님이 틀렸던 문제."
    },
    {
     "id": "m2",
     "t": "mc",
     "q": "Wie kannst du 5 · 7 leicht ausrechnen?",
     "ko": "5 · 7을 쉽게 계산하는 방법은?",
     "o": [
      "Die Hälfte von 10 · 7",
      "5 + 7",
      "7 · 7 − 5"
     ],
     "a": 0,
     "ex": "10 · 7 = 70, die Hälfte ist 35.",
     "exk": "Kernaufgabe."
    },
    {
     "id": "m3",
     "t": "num",
     "q": "7 · 8 = ?",
     "ko": "계산",
     "a": "56",
     "ex": "5 · 8 = 40, 2 · 8 = 16, zusammen 56.",
     "exk": "56."
    },
    {
     "id": "m4",
     "t": "num",
     "q": "63 : 7 = ?",
     "ko": "계산",
     "a": "9",
     "ex": "9 · 7 = 63.",
     "exk": "9."
    },
    {
     "id": "m5",
     "t": "num",
     "q": "45 : 7 = ? (Schreib so: 6 R 3)",
     "ko": "나머지 있는 나눗셈",
     "a": "6 R 3",
     "ex": "6 · 7 = 42, bis 45 fehlen 3. Also 6 Rest 3.",
     "exk": "6 R 3."
    },
    {
     "id": "m6",
     "t": "mc",
     "fig": {
      "k": "dots",
      "a": 4,
      "b": 6
     },
     "q": "Welche Malaufgabe passt zum Bild?",
     "ko": "그림에 맞는 곱셈은?",
     "o": [
      "4 · 6 = 24",
      "4 · 5 = 20",
      "4 + 6 = 10"
     ],
     "a": 0,
     "ex": "4 Reihen mit je 6 Punkten.",
     "exk": "4 · 6."
    },
    {
     "id": "m7",
     "t": "num",
     "q": "2 · 5 = 10. Dann ist 6 · 5 = ?",
     "ko": "규칙 이용",
     "a": "30",
     "ex": "6 ist das Dreifache von 2. Also ist das Ergebnis auch dreimal so groß: 30.",
     "exk": "세 배."
    }
   ]
  },
  {
   "id": "u3",
   "title": "Hunderter, Zehner, Einer",
   "sub": "Zahlen bis 1000 bauen und lesen",
   "ko": "자릿값과 수 읽기",
   "c": "stellenwert",
   "gen": "stellen",
   "merk": [
    "10 Einer = 1 Zehner. 10 Zehner = 1 Hunderter. 10 Hunderter = 1 [[Tausender]].",
    "In der [[Stellentafel]] stehen H, Z und E: 312 = 3 H + 1 Z + 2 E = 300 + 10 + 2.",
    "Fehlt eine Stelle, schreibst du 0: 5 H + 0 Z + 3 E = 503.",
    "Zahlwörter: Erst die Hunderter, dann die Einer, dann die Zehner: 864 = achthundert-vier-und-sechzig.",
    "Beim [[Schätzen|schätzen]] zählst du nicht genau. Du überlegst, ungefähr wie viele."
   ],
   "koSum": "자릿값과 0이 있는 수(503, 805)는 이미 정확합니다. 독일어 수 단어는 한국어와 달리 \"백 → 일 → 십\" 순서(864 = acht-hundert-vier-und-sechzig)라서 받아쓰기·듣기에서 헷갈리기 쉽습니다. 앱의 Zahl bauen 화면에서 수를 만들고 소리로 들어 볼 수 있습니다.",
   "words": [
    {
     "w": "der Hunderter",
     "s": "Hun·der·ter",
     "ko": "백의 자리",
     "d": "100"
    },
    {
     "w": "der Zehner",
     "s": "Zeh·ner",
     "ko": "십의 자리",
     "d": "10"
    },
    {
     "w": "der Einer",
     "s": "Ei·ner",
     "ko": "일의 자리",
     "d": "1"
    },
    {
     "w": "der Tausender",
     "s": "Tau·sen·der",
     "ko": "천",
     "d": "1000"
    },
    {
     "w": "die Stellentafel",
     "s": "Stel·len·ta·fel",
     "ko": "자릿값 표",
     "d": "H | Z | E"
    },
    {
     "w": "schätzen",
     "s": "schät·zen",
     "ko": "어림하다",
     "d": "Ungefähr sagen, wie viele."
    },
    {
     "w": "bündeln",
     "s": "bün·deln",
     "ko": "묶다",
     "d": "Je zehn zusammenlegen."
    }
   ],
   "lesson": {
    "steps": [
     {
      "t": "Zahl bauen",
      "sim": "stellen",
      "txt": "Drück auf + und −. Baue eine Zahl mit Hundertern, Zehnern und Einern. Tippe auf den Lautsprecher und hör die Zahl.",
      "ko": "+, − 버튼으로 수를 만들고 스피커를 눌러 독일어로 들어 보세요."
     },
     {
      "t": "Die Null ist wichtig",
      "fig": {
       "k": "blocks",
       "h": 8,
       "z": 0,
       "e": 5,
       "s": 30
      },
      "txt": "8 Hunderter, keine Zehner, 5 Einer. In der Stellentafel steht 8 | 0 | 5. Die Zahl heißt 805, nicht 85!",
      "ko": "백 8개, 십 없음, 일 5개 → 805. 0을 빼면 85가 되어 버려요."
     },
     {
      "t": "Zahlen sprechen",
      "txt": "Im Deutschen sagt man die Einer vor den Zehnern: 64 = vier-und-sechzig. Bei großen Zahlen: 864 = acht-hundert-vier-und-sechzig. Schreib die Ziffern in der richtigen Reihenfolge: 8, dann 6, dann 4.",
      "ko": "독일어는 일의 자리를 십의 자리보다 먼저 말해요. 864는 \"800-4-und-60\". 쓸 때는 8, 6, 4 순서로!"
     }
    ],
    "try": {
     "txt": "Mit Mama oder Papa: Einer sagt eine Zahl auf Deutsch, der andere schreibt sie auf.",
     "ko": "한 명이 독일어로 수를 말하고 다른 사람이 받아 써 보세요. 앱 스피커를 이용하면 부모님도 연습할 수 있어요."
    },
    "fehler": {
     "txt": "Bei vierundsechzig nicht 46 schreiben. Die Zehner kommen zuerst in der Zahl.",
     "ko": "vierundsechzig를 46으로 쓰지 않기."
    }
   },
   "q": [
    {
     "id": "h1",
     "t": "num",
     "fig": {
      "k": "blocks",
      "h": 3,
      "z": 2,
      "e": 4,
      "s": 30
     },
     "q": "Welche Zahl ist dargestellt?",
     "ko": "나타낸 수는?",
     "a": "324",
     "ex": "3 H + 2 Z + 4 E = 324.",
     "exk": "324."
    },
    {
     "id": "h2",
     "t": "num",
     "fig": {
      "k": "blocks",
      "h": 8,
      "z": 0,
      "e": 5,
      "s": 26
     },
     "q": "Welche Zahl ist dargestellt?",
     "ko": "나타낸 수는?",
     "a": "805",
     "ex": "8 H + 0 Z + 5 E = 805.",
     "exk": "0 주의."
    },
    {
     "id": "h3",
     "t": "num",
     "fig": {
      "k": "blocks",
      "h": 2,
      "z": 7,
      "e": 0,
      "s": 30
     },
     "q": "Welche Zahl ist dargestellt?",
     "ko": "나타낸 수는?",
     "a": "270",
     "ex": "2 H + 7 Z + 0 E = 270.",
     "exk": "270."
    },
    {
     "id": "h4",
     "t": "mc",
     "q": "achthundertvierundsechzig",
     "ko": "수 단어를 숫자로",
     "o": [
      "864",
      "846",
      "684"
     ],
     "a": 0,
     "ex": "acht-hundert (800) – vier (4) – und – sechzig (60) = 864.",
     "exk": "864."
    },
    {
     "id": "h5",
     "t": "num",
     "q": "Schreib als Zahl: neunhundertfünf",
     "ko": "숫자로 쓰기",
     "a": "905",
     "ex": "900 + 5 = 905.",
     "exk": "905."
    },
    {
     "id": "h6",
     "t": "mc",
     "q": "Wie viele Zehner hat 1 Hunderter?",
     "ko": "백 하나는 십이 몇 개?",
     "o": [
      "10",
      "100",
      "1"
     ],
     "a": 0,
     "ex": "10 Zehner = 1 Hunderter.",
     "exk": "10."
    },
    {
     "id": "h7",
     "t": "mc",
     "q": "7 H + 0 Z + 5 E = ?",
     "ko": "수는?",
     "o": [
      "705",
      "75",
      "750"
     ],
     "a": 0,
     "ex": "Die Null zeigt: keine Zehner.",
     "exk": "705."
    }
   ]
  },
  {
   "id": "u4",
   "title": "Zahlen bis 1000 ordnen",
   "sub": "Tausendertafel, Zahlenstrahl, Nachbarzahlen",
   "ko": "1000까지 수의 순서·비교",
   "c": "nachbar",
   "gen": "nachbar",
   "merk": [
    "Der [[Tausenderstreifen]] hat 10 Hunderterfelder.",
    "In der [[Tausendertafel]]: nach rechts +1, nach unten +10.",
    "[[Vorgänger]] = 1 weniger. [[Nachfolger]] = 1 mehr.",
    "Achtung beim Rückwärtszählen: 631, 630, 629. Der Hunderter bleibt 6!",
    "[[Nachbarzehner]]: 319 liegt zwischen 310 und 320. [[Nachbarhunderter]]: 319 liegt zwischen 300 und 400.",
    "Vergleichen: Erst die Hunderter, dann die Zehner, dann die Einer. 963 > 936."
   ],
   "koSum": "수 배열, 이웃수, 수직선, 크기 비교는 대부분 정확합니다. 10쪽에서 거꾸로 셀 때 630 다음을 529가 아니라 329로 써서 백의 자리까지 바꿨습니다(정답 629). 수직선 슬라이더로 Vorgänger, Nachbarzehner, Nachbarhunderter를 함께 볼 수 있습니다.",
   "words": [
    {
     "w": "der Vorgänger",
     "s": "Vor·gän·ger",
     "ko": "바로 앞의 수",
     "d": "1 weniger."
    },
    {
     "w": "der Nachfolger",
     "s": "Nach·fol·ger",
     "ko": "바로 뒤의 수",
     "d": "1 mehr."
    },
    {
     "w": "der Nachbarzehner",
     "s": "Nach·bar·zeh·ner",
     "ko": "이웃한 십",
     "d": "Die Zehnerzahlen davor und danach."
    },
    {
     "w": "der Nachbarhunderter",
     "s": "Nach·bar·hun·der·ter",
     "ko": "이웃한 백",
     "d": "Die Hunderterzahlen davor und danach."
    },
    {
     "w": "der Zahlenstrahl",
     "s": "Zah·len·strahl",
     "ko": "수직선",
     "d": "Eine Linie mit Zahlen."
    },
    {
     "w": "die Tausendertafel",
     "s": "Tau·sen·der·ta·fel",
     "ko": "천 배열표",
     "d": "Zahlen in Zehnerreihen."
    },
    {
     "w": "größer als",
     "s": "grö·ßer als",
     "ko": "보다 크다",
     "d": ">"
    },
    {
     "w": "kleiner als",
     "s": "klei·ner als",
     "ko": "보다 작다",
     "d": "<"
    }
   ],
   "lesson": {
    "steps": [
     {
      "t": "Nachbarn finden",
      "sim": "nachbar",
      "txt": "Schieb den Regler. Du siehst die Zahl auf dem Zahlenstrahl und ihre Nachbarn.",
      "ko": "막대를 움직이면 수직선 위의 위치와 이웃수가 보여요."
     },
     {
      "t": "Die Tausendertafel",
      "txt": "In jeder Zeile stehen 10 Zahlen. Nach rechts wird es 1 mehr, nach unten 10 mehr. Schräg nach rechts unten wird es 11 mehr: 512, 523, 534, 545.",
      "ko": "오른쪽 +1, 아래 +10, 오른쪽 아래 대각선은 +11 (512, 523, 534, 545)."
     },
     {
      "t": "Rückwärts zählen",
      "txt": "633, 632, 631, 630 … und dann? Nur die Einer und Zehner ändern sich: 629. Der Hunderter bleibt 6, bis du unter 600 kommst.",
      "ko": "633, 632, 631, 630 다음은 629! 600 아래로 내려가기 전까지 백의 자리는 6 그대로예요."
     },
     {
      "t": "Vergleichen",
      "txt": "963 und 936: Hunderter gleich (9). Zehner: 6 ist größer als 3. Also 963 > 936. Das Krokodil frisst immer die größere Zahl.",
      "ko": "백의 자리부터 비교해요. 같으면 십의 자리. 963 > 936. 악어 입은 큰 수 쪽으로 열려요."
     }
    ],
    "try": {
     "txt": "Hausnummern auf dem Spaziergang: Was ist der Vorgänger, was der Nachfolger?",
     "ko": "산책하며 집 번호의 앞수·뒷수를 말해 보세요."
    },
    "fehler": {
     "txt": "Beim Rückwärtszählen über den Zehner nicht den Hunderter ändern: 630 → 629.",
     "ko": "630 → 629 (329 아님)."
    }
   },
   "q": [
    {
     "id": "n1",
     "t": "num",
     "q": "633, 632, 631, 630, ?",
     "ko": "다음 수는?",
     "a": "629",
     "ex": "630 − 1 = 629. Der Hunderter bleibt 6.",
     "exk": "따님이 329로 쓴 문제."
    },
    {
     "id": "n2",
     "t": "mc",
     "q": "963 ○ 936",
     "ko": "<, >, = 중 알맞은 것",
     "o": [
      ">",
      "<",
      "="
     ],
     "a": 0,
     "ex": "Zehner: 6 > 3.",
     "exk": ">."
    },
    {
     "id": "n3",
     "t": "num",
     "fig": {
      "k": "numberline",
      "from": 400,
      "to": 500,
      "minor": 2,
      "label": 50,
      "mid": 10,
      "arrows": [
       {
        "v": 426,
        "l": "A"
       }
      ],
      "w": 420
     },
     "q": "Welche Zahl zeigt A?",
     "ko": "A는 몇?",
     "a": "426",
     "ex": "Jeder kleine Strich ist 2. A steht bei 426.",
     "exk": "눈금 하나 = 2."
    },
    {
     "id": "n4",
     "t": "num",
     "q": "Großer Nachbarhunderter von 490?",
     "ko": "490의 큰 이웃 백은?",
     "a": "500",
     "ex": "400 < 490 < 500.",
     "exk": "500."
    },
    {
     "id": "n5",
     "t": "num",
     "q": "Tausendertafel: Welche Zahl steht direkt unter 512?",
     "ko": "512 바로 아래 수는?",
     "a": "522",
     "ex": "Nach unten +10.",
     "exk": "522."
    },
    {
     "id": "n6",
     "t": "mc",
     "q": "Welche Zahl ist am größten?",
     "ko": "가장 큰 수는?",
     "o": [
      "432",
      "423",
      "342"
     ],
     "a": 0,
     "ex": "Hunderter gleich, dann Zehner: 3 > 2.",
     "exk": "432."
    },
    {
     "id": "n7",
     "t": "num",
     "q": "Welche Zahl liegt genau in der Mitte zwischen 500 und 600?",
     "ko": "500과 600의 한가운데 수는?",
     "a": "550",
     "ex": "500 + 50 = 550.",
     "exk": "550."
    }
   ]
  },
  {
   "id": "u5",
   "title": "Euro und Cent",
   "sub": "Geld zählen, Hälfte und Doppeltes",
   "ko": "유로와 센트",
   "c": "geld",
   "gen": "halbdoppel",
   "merk": [
    "1 € = 100 [[Cent]] (ct).",
    "[[Scheine|Schein]]: 5 €, 10 €, 20 €, 50 €, 100 €, 200 €, 500 €.",
    "[[Münzen|Münze]]: 1 ct, 2 ct, 5 ct, 10 ct, 20 ct, 50 ct, 1 €, 2 €.",
    "Beim Zählen fängst du mit dem größten Schein an.",
    "Die [[Hälfte]] von 840 €: 800 : 2 = 400 und 40 : 2 = 20. Zusammen 420 €.",
    "Das [[Doppelte]] von 350 € ist 700 €."
   ],
   "koSum": "돈 세기와 반값 계산은 모두 맞았습니다. 큰 지폐부터 세기, 반값은 \"백 단위 절반 + 나머지 절반\"으로 나눠 계산하는 전략을 정리했습니다.",
   "words": [
    {
     "w": "der Euro",
     "s": "Eu·ro",
     "ko": "유로",
     "d": "100 Cent."
    },
    {
     "w": "der Cent",
     "s": "Cent",
     "ko": "센트",
     "d": "1 € hat 100 Cent."
    },
    {
     "w": "der Schein",
     "s": "Schein",
     "ko": "지폐",
     "d": "Geld aus Papier."
    },
    {
     "w": "die Münze",
     "s": "Mün·ze",
     "ko": "동전",
     "d": "Geld aus Metall."
    },
    {
     "w": "die Hälfte",
     "s": "Hälf·te",
     "ko": "절반",
     "d": "Durch 2 geteilt."
    },
    {
     "w": "das Doppelte",
     "s": "Dop·pel·te",
     "ko": "두 배",
     "d": "Zweimal so viel."
    },
    {
     "w": "der Preis",
     "s": "Preis",
     "ko": "가격",
     "d": "So viel kostet etwas."
    }
   ],
   "lesson": {
    "steps": [
     {
      "t": "Groß zuerst",
      "txt": "200 € + 200 € + 100 € = 500 €. Fang beim Zählen immer mit dem größten Schein an.",
      "ko": "큰 지폐부터 세요."
     },
     {
      "t": "Halber Preis",
      "txt": "Ein Schlagzeug kostete 840 €. Jetzt kostet es die Hälfte. 800 : 2 = 400, 40 : 2 = 20. Zusammen 420 €.",
      "ko": "840의 절반: 800의 절반 400 + 40의 절반 20 = 420."
     },
     {
      "t": "Viele Wege",
      "txt": "250 € kann man mit 100 + 100 + 50 legen. Oder mit 50 + 50 + 50 + 100. Es gibt mehrere richtige Lösungen.",
      "ko": "250 €를 만드는 방법은 여러 가지예요."
     }
    ],
    "try": {
     "txt": "Spielgeld oder echtes Kleingeld zählen und in Euro und Cent aufschreiben.",
     "ko": "동전을 모아 세어 보고 1,35 €처럼 써 보세요."
    },
    "fehler": {
     "txt": "Cent und Euro nicht mischen: 150 ct = 1 € 50 ct.",
     "ko": "센트와 유로 단위 섞지 않기."
    }
   },
   "q": [
    {
     "id": "g1",
     "t": "num",
     "q": "200 € + 200 € + 100 € = ? €",
     "ko": "계산",
     "a": "500",
     "ex": "200 + 200 + 100 = 500.",
     "exk": "500."
    },
    {
     "id": "g2",
     "t": "num",
     "q": "50 ct + 50 ct + 20 ct + 20 ct + 10 ct = ? ct",
     "ko": "계산",
     "a": "150",
     "ex": "100 + 40 + 10 = 150.",
     "exk": "150."
    },
    {
     "id": "g3",
     "t": "num",
     "q": "Eine Trompete kostete 720 €. Jetzt kostet sie die Hälfte. Wie viel? (€)",
     "ko": "반값",
     "a": "360",
     "ex": "700 : 2 = 350, 20 : 2 = 10 → 360.",
     "exk": "360."
    },
    {
     "id": "g4",
     "t": "mc",
     "q": "Welche Scheine ergeben zusammen 250 €?",
     "ko": "250 €가 되는 것은?",
     "o": [
      "100 € + 100 € + 50 €",
      "200 € + 20 € + 20 €",
      "100 € + 50 € + 50 €"
     ],
     "a": 0,
     "ex": "100 + 100 + 50 = 250.",
     "exk": "첫 번째."
    },
    {
     "id": "g5",
     "t": "num",
     "q": "1 € = ? ct",
     "ko": "1유로는 몇 센트?",
     "a": "100",
     "ex": "1 € = 100 ct.",
     "exk": "100."
    }
   ]
  },
  {
   "id": "u6",
   "title": "Sachaufgaben und Diagramme",
   "sub": "Frage – Rechnung – Antwort",
   "ko": "문장제(F–R–A)와 그래프",
   "c": "sachrechnen",
   "merk": [
    "Lies die Aufgabe zweimal. Unterstreiche die Zahlen.",
    "[[Frage]] (F): Was will ich wissen?",
    "[[Rechnung]] (R): Welche Rechnung passt?",
    "[[Antwort]] (A): Ein ganzer Satz mit Wörtern aus der Frage.",
    "Im [[Diagramm]]: verdoppelt = mal 2, verdreifacht = mal 3, „um 100 gestiegen“ = plus 100."
   ],
   "koSum": "독일 초등 수학 문장제는 F(질문) – R(계산식) – A(답 문장)를 모두 써야 만점입니다. 4쪽은 셋 다 썼지만, 5쪽 신발 문제는 계산식이 없고 7쪽은 F가 없었습니다. 그래프 문제는 잘했습니다. Schreibwerkstatt의 Sachaufgabe 문제는 F·R·A를 모두 썼는지 자동으로 확인합니다.",
   "words": [
    {
     "w": "die Frage",
     "s": "Fra·ge",
     "ko": "질문",
     "d": "F: Was will ich wissen?"
    },
    {
     "w": "die Rechnung",
     "s": "Rech·nung",
     "ko": "계산식",
     "d": "R: So rechne ich."
    },
    {
     "w": "die Antwort",
     "s": "Ant·wort",
     "ko": "답",
     "d": "A: Ein ganzer Satz."
    },
    {
     "w": "das Diagramm",
     "s": "Dia·gramm",
     "ko": "그래프",
     "d": "Ein Bild aus Zahlen."
    },
    {
     "w": "verdoppeln",
     "s": "ver·dop·peln",
     "ko": "두 배가 되다",
     "d": "Mal 2."
    },
    {
     "w": "verdreifachen",
     "s": "ver·drei·fa·chen",
     "ko": "세 배가 되다",
     "d": "Mal 3."
    },
    {
     "w": "billiger",
     "s": "bil·li·ger",
     "ko": "더 싼",
     "d": "Es kostet weniger."
    },
    {
     "w": "gesenkt",
     "s": "ge·senkt",
     "ko": "내려진",
     "d": "Der Preis ist kleiner geworden."
    }
   ],
   "lesson": {
    "steps": [
     {
      "t": "F – R – A",
      "txt": "Schuhe kosten statt 73 € jetzt 55 €. F: Um wie viel Euro wurde der Preis gesenkt? R: 73 € − 55 € = 18 €. A: Der Preis wurde um 18 € gesenkt.",
      "ko": "F: 질문, R: 73 − 55 = 18, A: 가격이 18 € 내렸다. 계산식(R)을 꼭 써요!"
     },
     {
      "t": "Vergleichen",
      "txt": "Sommerrodelbahn: 2 Erwachsene je 12 €, 2 Kinder je 9 €. Einzeln: 12 + 12 + 9 + 9 = 42 €. Familienkarte: 35 €. 35 € ist weniger als 42 €. A: Sie sollen die Familienkarte kaufen.",
      "ko": "따로 사면 42 €, 가족권 35 €. 그래서 가족권이 더 싸요."
     },
     {
      "t": "Diagramme lesen",
      "txt": "1995: 250 Paare. 2005: 500 Paare. 500 ist das Doppelte von 250. Also hat sich die Anzahl verdoppelt.",
      "ko": "250 → 500은 두 배(verdoppelt), 250 → 750은 세 배(verdreifacht)."
     }
    ],
    "try": {
     "txt": "Beim Einkaufen eine Rechengeschichte erfinden und mit F, R und A aufschreiben.",
     "ko": "장보기 상황으로 문제를 만들어 F·R·A로 써 보세요."
    },
    "fehler": {
     "txt": "Nicht nur die Antwort schreiben. Die Rechnung gehört immer dazu.",
     "ko": "답만 쓰지 말고 계산식도 꼭."
    }
   },
   "q": [
    {
     "id": "s1",
     "t": "mc",
     "q": "Schuhe: statt 73 € jetzt 55 €. Welche Rechnung passt zu „Um wie viel Euro wurde der Preis gesenkt?“",
     "ko": "알맞은 식은?",
     "o": [
      "73 € − 55 € = 18 €",
      "73 € + 55 € = 128 €",
      "55 € − 18 € = 37 €"
     ],
     "a": 0,
     "ex": "Alter Preis minus neuer Preis.",
     "exk": "73 − 55."
    },
    {
     "id": "s2",
     "t": "num",
     "q": "2 Erwachsene zahlen je 12 €, 2 Kinder je 9 €. Wie viel zahlen sie zusammen mit Einzelkarten? (€)",
     "ko": "합계",
     "a": "42",
     "ex": "12 + 12 + 9 + 9 = 42.",
     "exk": "42."
    },
    {
     "id": "s3",
     "t": "mc",
     "q": "Einzelkarten 42 €, Familienkarte 35 €. Was ist billiger?",
     "ko": "더 싼 것은?",
     "o": [
      "die Familienkarte",
      "die Einzelkarten",
      "beides gleich"
     ],
     "a": 0,
     "ex": "35 € < 42 €.",
     "exk": "가족권."
    },
    {
     "id": "s4",
     "t": "mc",
     "q": "Von 250 auf 500. Was ist passiert?",
     "ko": "250 → 500",
     "o": [
      "verdoppelt",
      "verdreifacht",
      "um 100 gestiegen"
     ],
     "a": 0,
     "ex": "250 · 2 = 500.",
     "exk": "두 배."
    },
    {
     "id": "s5",
     "t": "mc",
     "q": "Von 150 auf 250. Was ist passiert?",
     "ko": "150 → 250",
     "o": [
      "um 100 gestiegen",
      "verdoppelt",
      "um 200 gestiegen"
     ],
     "a": 0,
     "ex": "150 + 100 = 250.",
     "exk": "+100."
    },
    {
     "id": "s6",
     "t": "order",
     "q": "In welcher Reihenfolge schreibst du eine Sachaufgabe?",
     "ko": "순서",
     "items": [
      "F: Frage",
      "R: Rechnung",
      "A: Antwortsatz"
     ],
     "ex": "F – R – A.",
     "exk": "F–R–A."
    },
    {
     "id": "s7",
     "t": "num",
     "q": "24 Kinder bilden 3er-Gruppen. Wie viele Gruppen gibt es?",
     "ko": "모둠 수",
     "a": "8",
     "ex": "24 : 3 = 8.",
     "exk": "8."
    }
   ]
  },
  {
   "id": "u7",
   "title": "Geometrische Körper",
   "sub": "Ecken, Kanten, Flächen, Ansichten",
   "ko": "입체도형과 성질",
   "c": "koerper",
   "merk": [
    "[[Würfel]]: 6 gleich große Quadrate, 8 Ecken, 12 Kanten.",
    "[[Quader]]: 6 Rechtecke, 8 Ecken, 12 Kanten.",
    "[[Pyramide]]: Die Seitenflächen sind Dreiecke. Mit quadratischer Grundfläche: 5 Ecken, 8 Kanten, 5 Flächen.",
    "[[Zylinder]]: zwei gegenüberliegende Kreise, 2 Kanten, 3 Flächen, keine Ecken.",
    "[[Kegel]]: eine Spitze, 1 Kante, 2 Flächen.",
    "[[Kugel]]: 1 runde Fläche, keine Ecken, keine Kanten.",
    "[[Ansichten|Ansicht]]: Ein Bauwerk sieht von vorn, von oben und von der Seite anders aus."
   ],
   "koSum": "입체도형 이름, 성질 표, 겉모습 찾기가 모두 정확했습니다. 표의 Kegel(원뿔)과 Pyramide(사각뿔)는 교과서마다 꼭짓점(Spitze)을 세는 방법이 조금 달라서, 선생님 표시를 확인해 보시면 좋습니다(일반적으로 Kegel: Ecken 0, Kanten 1, Flächen 2).",
   "words": [
    {
     "w": "der Würfel",
     "s": "Wür·fel",
     "ko": "정육면체",
     "d": "6 gleiche Quadrate."
    },
    {
     "w": "der Quader",
     "s": "Qua·der",
     "ko": "직육면체",
     "d": "Wie eine Schachtel."
    },
    {
     "w": "die Pyramide",
     "s": "Py·ra·mi·de",
     "ko": "각뿔",
     "d": "Seitenflächen sind Dreiecke."
    },
    {
     "w": "der Zylinder",
     "s": "Zy·lin·der",
     "ko": "원기둥",
     "d": "Wie eine Dose."
    },
    {
     "w": "der Kegel",
     "s": "Ke·gel",
     "ko": "원뿔",
     "d": "Wie eine Eiswaffel."
    },
    {
     "w": "die Kugel",
     "s": "Ku·gel",
     "ko": "구",
     "d": "Wie ein Ball."
    },
    {
     "w": "die Ecke",
     "s": "E·cke",
     "ko": "꼭짓점",
     "d": "Hier treffen Kanten zusammen."
    },
    {
     "w": "die Kante",
     "s": "Kan·te",
     "ko": "모서리",
     "d": "Hier treffen zwei Flächen zusammen."
    },
    {
     "w": "die Fläche",
     "s": "Flä·che",
     "ko": "면",
     "d": "Die Seite eines Körpers."
    },
    {
     "w": "die Ansicht",
     "s": "An·sicht",
     "ko": "보이는 모양",
     "d": "So sieht es von einer Seite aus."
    }
   ],
   "lesson": {
    "steps": [
     {
      "t": "Sechs Körper",
      "figs": [
       {
        "k": "solid",
        "n": "wuerfel",
        "label": "Würfel",
        "w": 96
       },
       {
        "k": "solid",
        "n": "quader",
        "label": "Quader",
        "w": 96
       },
       {
        "k": "solid",
        "n": "pyramide",
        "label": "Pyramide",
        "w": 96
       },
       {
        "k": "solid",
        "n": "zylinder",
        "label": "Zylinder",
        "w": 96
       },
       {
        "k": "solid",
        "n": "kegel",
        "label": "Kegel",
        "w": 96
       },
       {
        "k": "solid",
        "n": "kugel",
        "label": "Kugel",
        "w": 96
       }
      ],
      "txt": "Würfel, Quader, Pyramide, Zylinder, Kegel und Kugel. Tippe auf die Wörter im Merktext und hör sie dir an.",
      "ko": "여섯 가지 입체도형의 이름을 익혀요."
     },
     {
      "t": "Ecken, Kanten, Flächen",
      "fig": {
       "k": "solid",
       "n": "wuerfel",
       "w": 120
      },
      "txt": "Fläche: eine Seite. Kante: wo zwei Flächen zusammenstoßen. Ecke: wo Kanten zusammentreffen. Ein Würfel hat 6 Flächen, 12 Kanten und 8 Ecken. Die gestrichelten Linien sind hinten versteckt.",
      "ko": "면, 모서리(두 면이 만나는 선), 꼭짓점. 정육면체는 면 6, 모서리 12, 꼭짓점 8. 점선은 뒤에 숨은 모서리예요."
     },
     {
      "t": "Rollen oder nicht?",
      "txt": "Kugel, Zylinder und Kegel haben runde Flächen. Sie können rollen. Würfel, Quader und Pyramide haben nur gerade Flächen.",
      "ko": "둥근 면이 있는 구·원기둥·원뿔은 굴러가요."
     },
     {
      "t": "Ansichten",
      "txt": "Von oben sieht ein Zylinder aus wie ein Kreis. Von vorn sieht er aus wie ein Rechteck. Eine Pyramide sieht von vorn aus wie ein Dreieck.",
      "ko": "원기둥은 위에서 보면 원, 앞에서 보면 직사각형. 각뿔은 앞에서 보면 삼각형."
     }
    ],
    "try": {
     "txt": "In der Küche Körper suchen: Dose (Zylinder), Müslipackung (Quader), Orange (Kugel).",
     "ko": "부엌에서 입체도형 찾기 놀이: 캔(원기둥), 시리얼 상자(직육면체), 오렌지(구)."
    },
    "fehler": {
     "txt": "Würfel und Quader nicht verwechseln: Beim Würfel sind alle Flächen gleich große Quadrate.",
     "ko": "정육면체는 모든 면이 같은 정사각형."
    }
   },
   "q": [
    {
     "id": "k1",
     "t": "mc",
     "fig": {
      "k": "solid",
      "n": "zylinder"
     },
     "q": "Wie heißt dieser Körper?",
     "ko": "이 도형의 이름은?",
     "o": [
      "Zylinder",
      "Kegel",
      "Quader"
     ],
     "a": 0,
     "ex": "Zwei Kreise oben und unten.",
     "exk": "원기둥."
    },
    {
     "id": "k2",
     "t": "mc",
     "fig": {
      "k": "solid",
      "n": "pyramide"
     },
     "q": "Wie heißt dieser Körper?",
     "ko": "이 도형의 이름은?",
     "o": [
      "Pyramide",
      "Kegel",
      "Würfel"
     ],
     "a": 0,
     "ex": "Die Seitenflächen sind Dreiecke.",
     "exk": "각뿔."
    },
    {
     "id": "k3",
     "t": "num",
     "q": "Wie viele Kanten hat ein Würfel?",
     "ko": "정육면체의 모서리 수",
     "a": "12",
     "ex": "4 oben, 4 unten, 4 an der Seite.",
     "exk": "12."
    },
    {
     "id": "k4",
     "t": "num",
     "q": "Wie viele Ecken hat ein Quader?",
     "ko": "직육면체의 꼭짓점 수",
     "a": "8",
     "ex": "4 oben, 4 unten.",
     "exk": "8."
    },
    {
     "id": "k5",
     "t": "num",
     "q": "Wie viele Flächen hat ein Zylinder?",
     "ko": "원기둥의 면 수",
     "a": "3",
     "ex": "2 Kreise und die runde Seitenfläche.",
     "exk": "3."
    },
    {
     "id": "k6",
     "t": "mc",
     "q": "„Alle Flächen sind gleich große Quadrate.“ Welcher Körper ist das?",
     "ko": "설명에 맞는 도형",
     "o": [
      "Würfel",
      "Quader",
      "Pyramide"
     ],
     "a": 0,
     "ex": "Das ist der Würfel.",
     "exk": "정육면체."
    },
    {
     "id": "k7",
     "t": "mc",
     "q": "Was passt nicht in die Reihe? Geschenkpaket, Zauberwürfel, Zelt, Spielwürfel",
     "ko": "다른 하나는?",
     "o": [
      "Zelt",
      "Geschenkpaket",
      "Spielwürfel"
     ],
     "a": 0,
     "ex": "Das Zelt ist eine Pyramide, die anderen sind Würfel oder Quader.",
     "exk": "텐트."
    },
    {
     "id": "k8",
     "t": "mc",
     "q": "Wie sieht ein Zylinder von oben aus?",
     "ko": "원기둥을 위에서 보면?",
     "o": [
      "wie ein Kreis",
      "wie ein Dreieck",
      "wie ein Quadrat"
     ],
     "a": 0,
     "ex": "Oben ist die Kreisfläche.",
     "exk": "원."
    }
   ]
  },
  {
   "id": "u8",
   "title": "Würfelgebäude und Würfelnetze",
   "sub": "Bauplan, Netz, Spielwürfel",
   "ko": "쌓기나무 설계도와 전개도",
   "c": "netze",
   "merk": [
    "Ein [[Bauplan]] zeigt das Gebäude von oben. Jede Zahl sagt, wie viele Würfel übereinander stehen.",
    "Die unterste Reihe im Bauplan ist vorne.",
    "Ein [[Würfelnetz]] hat 6 Quadrate. Man kann es zu einem Würfel falten.",
    "Nie 5 Quadrate in einer Reihe. Und nie 4 Quadrate als großes Quadrat.",
    "[[Gegenüberliegende Flächen|gegenüberliegend]] berühren sich im Netz nicht. In einer Reihe ist jedes zweite Feld gegenüber.",
    "Auf einem Spielwürfel sind gegenüberliegende Augen zusammen immer 7."
   ],
   "koSum": "설계도, 쌓기나무, 전개도 모두 체크를 받았습니다. 앱에서는 설계도 숫자를 바꾸면 건물이 바로 바뀌고, 칸을 골라 전개도를 만들면 접히는지와 마주 보는 면을 알려 줍니다. 주사위의 마주 보는 눈의 합은 7입니다.",
   "words": [
    {
     "w": "der Bauplan",
     "s": "Bau·plan",
     "ko": "설계도",
     "d": "Zahlen zeigen, wie viele Würfel übereinander stehen."
    },
    {
     "w": "das Würfelgebäude",
     "s": "Wür·fel·ge·bäu·de",
     "ko": "쌓기나무 건물",
     "d": "Ein Bau aus Würfeln."
    },
    {
     "w": "das Würfelnetz",
     "s": "Wür·fel·netz",
     "ko": "정육면체 전개도",
     "d": "6 Quadrate zum Falten."
    },
    {
     "w": "gegenüberliegend",
     "s": "ge·gen·über·lie·gend",
     "ko": "마주 보는",
     "d": "Auf der anderen Seite."
    },
    {
     "w": "falten",
     "s": "fal·ten",
     "ko": "접다",
     "d": "Knicken und zusammenlegen."
    },
    {
     "w": "kippen",
     "s": "kip·pen",
     "ko": "넘어뜨리다",
     "d": "Umfallen lassen."
    }
   ],
   "lesson": {
    "steps": [
     {
      "t": "Bauplan und Gebäude",
      "sim": "bauplan",
      "txt": "Tippe auf die Felder im Bauplan. Das Gebäude rechts ändert sich sofort.",
      "ko": "설계도 칸을 눌러 보세요. 오른쪽 건물이 바로 바뀌어요."
     },
     {
      "t": "Ist das ein Würfelnetz?",
      "sim": "netz",
      "txt": "Tippe Felder an oder weg, bis es 6 sind. Die App prüft, ob man es zu einem Würfel falten kann. Mit „Gegenüber zeigen“ siehst du gegenüberliegende Flächen.",
      "ko": "칸을 6개 만들면 접어서 정육면체가 되는지 앱이 알려 줘요. \"Gegenüber zeigen\"으로 마주 보는 면을 확인해요."
     },
     {
      "t": "Spielwürfel",
      "fig": {
       "k": "net",
       "cells": [
        [
         0,
         1
        ],
        [
         1,
         0
        ],
        [
         1,
         1
        ],
        [
         1,
         2
        ],
        [
         2,
         1
        ],
        [
         3,
         1
        ]
       ],
       "nums": [
        "2",
        "4",
        "1",
        "3",
        "5",
        "6"
       ]
      },
      "txt": "Gegenüber liegen 1 und 6, 2 und 5, 3 und 4. Zusammen immer 7!",
      "ko": "주사위의 마주 보는 눈: 1-6, 2-5, 3-4. 합은 항상 7."
     }
    ],
    "try": {
     "txt": "Ein Würfelnetz auf Papier zeichnen, ausschneiden und falten.",
     "ko": "종이에 전개도를 그려 오려 접어 보세요. 접히지 않는 모양도 일부러 만들어 보면 좋아요."
    },
    "fehler": {
     "txt": "Im Bauplan ist unten vorne. Nicht oben und unten vertauschen.",
     "ko": "설계도 아래쪽 줄이 앞쪽이에요."
    }
   },
   "q": [
    {
     "id": "w1",
     "t": "num",
     "fig": {
      "k": "iso",
      "plan": [
       [
        1,
        2
       ],
       [
        2,
        3
       ]
      ],
      "s": 28
     },
     "q": "Wie viele Würfel hat das Gebäude?",
     "ko": "쌓기나무 개수",
     "a": "8",
     "ex": "Bauplan 1 2 / 2 3 → 1 + 2 + 2 + 3 = 8.",
     "exk": "8."
    },
    {
     "id": "w2",
     "t": "mc",
     "fig": {
      "k": "iso",
      "plan": [
       [
        0,
        1,
        0
       ],
       [
        1,
        3,
        1
       ]
      ],
      "s": 26
     },
     "q": "Welcher Bauplan passt? (obere Reihe = hinten)",
     "ko": "맞는 설계도는?",
     "o": [
      "hinten 0 1 0 / vorne 1 3 1",
      "hinten 1 3 1 / vorne 0 1 0",
      "hinten 1 1 1 / vorne 3 3 3"
     ],
     "a": 0,
     "ex": "Vorne in der Mitte stehen 3 Würfel.",
     "exk": "첫 번째."
    },
    {
     "id": "w3",
     "t": "tf",
     "fig": {
      "k": "net",
      "cells": [
       [
        0,
        1
       ],
       [
        1,
        0
       ],
       [
        1,
        1
       ],
       [
        1,
        2
       ],
       [
        2,
        1
       ],
       [
        3,
        1
       ]
      ]
     },
     "q": "Ist das ein Würfelnetz?",
     "ko": "정육면체 전개도인가?",
     "a": true,
     "ex": "Ja, das Kreuz kann man zu einem Würfel falten.",
     "exk": "예."
    },
    {
     "id": "w4",
     "t": "tf",
     "fig": {
      "k": "net",
      "cells": [
       [
        0,
        0
       ],
       [
        0,
        1
       ],
       [
        0,
        2
       ],
       [
        0,
        3
       ],
       [
        0,
        4
       ],
       [
        1,
        0
       ]
      ]
     },
     "q": "Ist das ein Würfelnetz?",
     "ko": "정육면체 전개도인가?",
     "a": false,
     "ex": "Nein. 5 Quadrate in einer Reihe gehen nie.",
     "exk": "아니오."
    },
    {
     "id": "w5",
     "t": "tf",
     "fig": {
      "k": "net",
      "cells": [
       [
        0,
        0
       ],
       [
        0,
        1
       ],
       [
        1,
        1
       ],
       [
        1,
        2
       ],
       [
        2,
        2
       ],
       [
        2,
        3
       ]
      ]
     },
     "q": "Ist das ein Würfelnetz?",
     "ko": "정육면체 전개도인가?",
     "a": true,
     "ex": "Ja, die Treppe ist ein Würfelnetz.",
     "exk": "예."
    },
    {
     "id": "w6",
     "t": "num",
     "q": "Spielwürfel: Was liegt gegenüber von 2?",
     "ko": "2의 반대편 눈",
     "a": "5",
     "ex": "2 + 5 = 7.",
     "exk": "5."
    },
    {
     "id": "w7",
     "t": "num",
     "q": "Spielwürfel: Was liegt gegenüber von 6?",
     "ko": "6의 반대편 눈",
     "a": "1",
     "ex": "6 + 1 = 7.",
     "exk": "1."
    }
   ]
  },
  {
   "id": "u9",
   "title": "Plus und Minus bis 1000",
   "sub": "ohne Hunderterübergang",
   "ko": "1000까지 덧셈·뺄셈",
   "c": "rechnen1000",
   "gen": "plusminus1000",
   "merk": [
    "Rechne [[stellengerecht]]: Hunderter mit Hundertern, Zehner mit Zehnern, Einer mit Einern.",
    "352 + 120: 300 + 100 = 400, 50 + 20 = 70, 2 + 0 = 2 → 472.",
    "[[Schrittweise|schrittweise]]: 265 − 45 → 265 − 40 = 225, dann 225 − 5 = 220.",
    "[[Kleine Aufgabe – große Aufgabe|kleine Aufgabe]]: 14 + 14 = 28, also 140 + 140 = 280.",
    "Prüfen mit der Umkehraufgabe: 220 + 45 = 265. Stimmt!"
   ],
   "koSum": "1000까지 덧셈·뺄셈은 거의 다 맞았지만 265 − 45를 210으로 썼습니다(정답 220). 단계별로 나눠 쓰고 덧셈으로 검산하면 막을 수 있습니다. 앱의 Rechenweg 화면이 한 단계씩 보여 줍니다.",
   "words": [
    {
     "w": "stellengerecht",
     "s": "stel·len·ge·recht",
     "ko": "자리를 맞춰서",
     "d": "H mit H, Z mit Z, E mit E."
    },
    {
     "w": "schrittweise",
     "s": "schritt·wei·se",
     "ko": "한 단계씩",
     "d": "Erst die Zehner, dann die Einer."
    },
    {
     "w": "der Rechenweg",
     "s": "Re·chen·weg",
     "ko": "계산 방법",
     "d": "So hast du gerechnet."
    },
    {
     "w": "der Hunderterübergang",
     "s": "Hun·der·ter·über·gang",
     "ko": "백의 자리 받아올림",
     "d": "Man rechnet über einen Hunderter."
    },
    {
     "w": "das Ergebnis",
     "s": "Er·geb·nis",
     "ko": "결과",
     "d": "Die Lösung einer Aufgabe."
    }
   ],
   "lesson": {
    "steps": [
     {
      "t": "Schritt für Schritt",
      "sim": "rechenweg",
      "txt": "Drück auf „Nächster Schritt“. Die zweite Zahl wird in Hunderter, Zehner und Einer zerlegt.",
      "ko": "\"Nächster Schritt\"를 누르면 한 단계씩 계산해요."
     },
     {
      "t": "Kleine Aufgabe hilft",
      "txt": "48 − 24 = 24. Dann ist 480 − 240 = 240. Die große Aufgabe hat einfach eine Null mehr.",
      "ko": "48 − 24 = 24이면 480 − 240 = 240."
     },
     {
      "t": "Immer prüfen",
      "txt": "Im Heft stand einmal 265 − 45 = 210. Prüfe: 210 + 45 = 255, nicht 265! Richtig ist 220.",
      "ko": "265 − 45 = 210? 검산 210 + 45 = 255라서 틀렸어요. 정답은 220."
     }
    ],
    "try": {
     "txt": "Jeden Tag zwei Aufgaben mit Rechenweg ins Heft schreiben und mit der Umkehraufgabe prüfen.",
     "ko": "하루 두 문제씩 단계와 검산을 써 보세요."
    },
    "fehler": {
     "txt": "Bei Minus nicht die Zehner doppelt abziehen. Schreib jeden Schritt auf.",
     "ko": "뺄셈은 단계를 적어서 실수 줄이기."
    }
   },
   "q": [
    {
     "id": "r1",
     "t": "num",
     "q": "265 − 45 = ?",
     "ko": "계산",
     "a": "220",
     "ex": "265 − 40 = 225, 225 − 5 = 220.",
     "exk": "따님이 210으로 쓴 문제."
    },
    {
     "id": "r2",
     "t": "num",
     "q": "352 + 120 = ?",
     "ko": "계산",
     "a": "472",
     "ex": "300 + 100, 50 + 20, 2 → 472.",
     "exk": "472."
    },
    {
     "id": "r3",
     "t": "num",
     "q": "486 − 165 = ?",
     "ko": "계산",
     "a": "321",
     "ex": "486 − 100 = 386, − 60 = 326, − 5 = 321.",
     "exk": "321."
    },
    {
     "id": "r4",
     "t": "num",
     "q": "640 − 420 = ?",
     "ko": "계산",
     "a": "220",
     "ex": "64 − 42 = 22, also 220.",
     "exk": "220."
    },
    {
     "id": "r5",
     "t": "mc",
     "q": "Welche kleine Aufgabe hilft bei 480 − 240?",
     "ko": "도움이 되는 작은 문제",
     "o": [
      "48 − 24",
      "480 − 24",
      "4 − 2"
     ],
     "a": 0,
     "ex": "48 − 24 = 24 → 240.",
     "exk": "48 − 24."
    },
    {
     "id": "r6",
     "t": "mc",
     "q": "Welche Rechnung prüft 265 − 45 = 220?",
     "ko": "검산식",
     "o": [
      "220 + 45 = 265",
      "265 + 45 = 310",
      "220 − 45 = 175"
     ],
     "a": 0,
     "ex": "Ergebnis + abgezogene Zahl.",
     "exk": "220 + 45."
    },
    {
     "id": "r7",
     "t": "num",
     "q": "462 − 361 = ?",
     "ko": "계산",
     "a": "101",
     "ex": "462 − 300 = 162, − 60 = 102, − 1 = 101.",
     "exk": "101."
    }
   ]
  },
  {
   "id": "u10",
   "title": "Mathe erklären",
   "sub": "Mir fällt auf …",
   "ko": "규칙을 말로 설명하기",
   "c": "erklaeren",
   "merk": [
    "Bei „Was fällt dir auf?“ beschreibst du ein [[Muster]].",
    "Sag, was sich verändert und was [[gleich bleibt|gleich bleiben]].",
    "Satzanfänge: „Mir fällt auf, dass …“ „Die erste Zahl wird immer um … größer.“",
    "Benutze Fachwörter: Zehner, Einer, [[größer werden|größer]], [[kleiner werden|kleiner]], das Doppelte, das Dreifache.",
    "Beispiel: 200 + 800, 400 + 600, 600 + 400. „Die erste Zahl wird um 200 größer, die zweite um 200 kleiner. Das Ergebnis bleibt 1000.“"
   ],
   "koSum": "\"Was fällt dir auf? / Beschreibe\" 문제에서 따님 답은 맞는 관찰이지만 절반만 쓰거나(200 weniger), 문법이 흔들립니다(die Zehner vergrößern … die Einern). \"무엇이 변하는지 + 무엇이 그대로인지\"를 두 문장으로 쓰는 틀을 연습합니다. 수학에서도 서술 능력이 점수가 됩니다.",
   "words": [
    {
     "w": "das Muster",
     "s": "Mus·ter",
     "ko": "규칙, 패턴",
     "d": "Etwas, das sich wiederholt."
    },
    {
     "w": "größer",
     "s": "grö·ßer",
     "ko": "더 큰",
     "d": "Mehr."
    },
    {
     "w": "kleiner",
     "s": "klei·ner",
     "ko": "더 작은",
     "d": "Weniger."
    },
    {
     "w": "gleich bleiben",
     "s": "gleich blei·ben",
     "ko": "그대로이다",
     "d": "Es ändert sich nicht."
    },
    {
     "w": "sich verändern",
     "s": "sich ver·än·dern",
     "ko": "변하다",
     "d": "Anders werden."
    },
    {
     "w": "immer um",
     "s": "im·mer um",
     "ko": "항상 ~씩",
     "d": "Immer um 10 größer."
    }
   ],
   "lesson": {
    "steps": [
     {
      "t": "Was verändert sich?",
      "txt": "200 + 800, 400 + 600, 600 + 400, 800 + 200. Die erste Zahl wird immer um 200 größer. Die zweite Zahl wird immer um 200 kleiner.",
      "ko": "첫 수는 200씩 커지고, 둘째 수는 200씩 작아져요."
     },
     {
      "t": "Was bleibt gleich?",
      "txt": "Das Ergebnis bleibt immer 1000. Das gehört auch in die Antwort! Eine gute Antwort hat beides: Was sich verändert und was gleich bleibt.",
      "ko": "결과는 항상 1000으로 같아요. 좋은 답에는 \"변하는 것 + 그대로인 것\"이 모두 있어요."
     },
     {
      "t": "Die Tausendertafel",
      "txt": "512, 523, 534, 545: Die Zehner werden immer um 1 größer. Die Einer werden auch um 1 größer. Jede Zahl ist um 11 größer.",
      "ko": "512, 523, 534 → 십의 자리와 일의 자리가 1씩 커져서 11씩 커져요."
     },
     {
      "t": "Richtig formulieren",
      "txt": "Nicht: „die Zehner vergrößern“. Besser: „Die Zehner werden größer.“ Und: die Einer, nicht die Einern.",
      "ko": "\"die Zehner vergrößern\" 대신 \"Die Zehner werden größer\", \"die Einern\"이 아니라 \"die Einer\"."
     }
    ],
    "try": {
     "txt": "Eine Zahlenreihe erfinden, zum Beispiel 5, 10, 20, 40. Die Familie beschreibt das Muster.",
     "ko": "수 배열을 만들어 가족이 규칙을 독일어로 말해 보세요."
    },
    "fehler": {
     "txt": "Nicht nur sagen, was sich ändert. Sag auch, was gleich bleibt.",
     "ko": "변하는 것뿐 아니라 그대로인 것도 쓰기."
    }
   },
   "q": [
    {
     "id": "e1",
     "t": "mc",
     "q": "512, 523, 534, 545 – Was fällt dir auf?",
     "ko": "가장 좋은 설명은?",
     "o": [
      "Die Zehner und die Einer werden immer um 1 größer. Jede Zahl ist um 11 größer.",
      "Die Zahlen werden größer.",
      "Die Zehner vergrößern."
     ],
     "a": 0,
     "ex": "Die erste Antwort ist genau und vollständig.",
     "exk": "첫 번째."
    },
    {
     "id": "e2",
     "t": "cloze",
     "q": "200 + 800, 400 + 600, 600 + 400 – Setze ein.",
     "ko": "빈칸 채우기",
     "text": "Die erste Zahl wird um 200 {0}. Die zweite Zahl wird um 200 {1}. Das Ergebnis {2} immer 1000.",
     "ans": [
      "größer",
      "kleiner",
      "bleibt"
     ],
     "bank": [
      "kleiner",
      "bleibt",
      "größer",
      "wird"
     ],
     "ex": "größer – kleiner – bleibt.",
     "exk": "größer, kleiner, bleibt."
    },
    {
     "id": "e3",
     "t": "mc",
     "q": "2 · 5 = 10, 6 · 5 = 30. 3 · 3 = 9, 9 · 3 = 27. Was fällt dir auf?",
     "ko": "규칙은?",
     "o": [
      "Wenn die erste Zahl dreimal so groß ist, ist das Ergebnis auch dreimal so groß.",
      "Das Ergebnis ist immer 30.",
      "Die Zahlen werden kleiner."
     ],
     "a": 0,
     "ex": "Dreifache Zahl → dreifaches Ergebnis.",
     "exk": "세 배 → 결과도 세 배."
    },
    {
     "id": "e4",
     "t": "mc",
     "q": "Welcher Satz ist richtig?",
     "ko": "맞는 문장은?",
     "o": [
      "Die Einer werden größer.",
      "Die Einern vergrößern.",
      "Die Einer vergrößern."
     ],
     "a": 0,
     "ex": "die Einer (ohne n), und: größer werden.",
     "exk": "문법."
    },
    {
     "id": "e5",
     "t": "free",
     "q": "999 + 1, 998 + 2, 997 + 3, 996 + 4. Was fällt dir auf?",
     "ko": "규칙을 쓰세요.",
     "model": "Mir fällt auf, dass die erste Zahl immer um 1 kleiner wird. Die zweite Zahl wird immer um 1 größer. Das Ergebnis bleibt immer 1000.",
     "mk": "첫 수는 1씩 작아지고 둘째 수는 1씩 커져서 결과는 항상 1000."
    }
   ]
  }
 ],
 "schreiben": [
  {
   "id": "s1",
   "unit": "u10",
   "op": "muster",
   "q": "In der Tausendertafel sind 512, 523, 534, 545 und 556 blau. Was fällt dir auf?",
   "ko": "파란 칸의 수(512, 523, 534, 545, 556)의 규칙을 쓰세요.",
   "qk": [
    "mir fällt auf",
    "fällt"
   ],
   "start": "Mir fällt auf, dass …",
   "words": [
    [
     "Zehner",
     "zehner",
     "십의 자리"
    ],
    [
     "Einer",
     "einer",
     "일의 자리"
    ],
    [
     "größer",
     "größer",
     "더 큰"
    ],
    [
     "um 11",
     "11",
     "11씩"
    ],
    [
     "immer",
     "immer",
     "항상"
    ]
   ],
   "distract": [
    "kleiner",
    "Hunderter fehlt",
    "Würfel"
   ],
   "kern": {
    "o": [
     "Jede Zahl ist um 11 größer: Zehner und Einer wachsen um 1.",
     "Die Zahlen werden kleiner.",
     "Alle Zahlen sind gerade."
    ],
    "a": 0
   },
   "model": "Mir fällt auf, dass die Zehner immer um 1 größer werden. Die Einer werden auch immer um 1 größer. Deshalb ist jede Zahl um 11 größer als die Zahl davor.",
   "mk": "십의 자리가 1씩 커지고 일의 자리도 1씩 커진다. 그래서 각 수는 앞의 수보다 11 크다."
  },
  {
   "id": "s2",
   "unit": "u10",
   "op": "muster",
   "q": "200 + 800, 400 + 600, 600 + 400, 800 + 200. Was verändert sich? Beschreibe.",
   "ko": "무엇이 변하고 무엇이 그대로인지 쓰세요.",
   "qk": [
    "zahl",
    "verändert",
    "mir fällt auf",
    "erste"
   ],
   "start": "Die erste Zahl wird …",
   "words": [
    [
     "erste Zahl",
     "erste",
     "첫째 수"
    ],
    [
     "zweite Zahl",
     "zweite",
     "둘째 수"
    ],
    [
     "größer",
     "größer",
     "더 큰"
    ],
    [
     "kleiner",
     "kleiner",
     "더 작은"
    ],
    [
     "bleibt",
     "bleibt",
     "그대로이다"
    ],
    [
     "1000",
     "1000",
     "1000"
    ]
   ],
   "distract": [
    "verdoppelt",
    "Ecke"
   ],
   "min": 4,
   "parts": [
    {
     "de": "Was verändert sich?",
     "k": [
      "größer",
      "kleiner"
     ]
    },
    {
     "de": "Was bleibt gleich?",
     "k": [
      "bleibt",
      "gleich"
     ]
    }
   ],
   "kern": {
    "o": [
     "Eine Zahl wird größer, die andere kleiner. Das Ergebnis bleibt 1000.",
     "Es wird immer 200 weniger.",
     "Alle Zahlen werden größer."
    ],
    "a": 0
   },
   "model": "Die erste Zahl wird immer um 200 größer. Die zweite Zahl wird immer um 200 kleiner. Das Ergebnis bleibt immer 1000.",
   "mk": "첫 수는 200씩 커지고 둘째 수는 200씩 작아진다. 결과는 항상 1000이다."
  },
  {
   "id": "s3",
   "unit": "u6",
   "op": "sachaufgabe",
   "q": "Anita möchte mit ihrem Bruder und ihren Eltern dreimal Sommerrodelbahn fahren. Preise für 3 Fahrten: Erwachsene 12 €, Kinder 9 €, Familienkarte 35 €. Welche Fahrkarten sollten sie kaufen?",
   "ko": "F·R·A를 모두 써서 풀어 보세요.",
   "qk": [
    "fahrkarten",
    "welche",
    "kaufen"
   ],
   "start": "F: Welche Fahrkarten sollen sie kaufen?",
   "words": [
    [
     "Familienkarte",
     "familienkarte",
     "가족권"
    ],
    [
     "42 €",
     "42",
     "42 €"
    ],
    [
     "35 €",
     "35",
     "35 €"
    ],
    [
     "billiger",
     "billiger",
     "더 싼"
    ],
    [
     "Einzelkarten",
     "einzel",
     "개별권"
    ]
   ],
   "distract": [
    "Pyramide",
    "Rest"
   ],
   "parts": [
    {
     "de": "F: Frage",
     "k": [
      "/(^|\\s)F\\s*:/",
      "frage"
     ]
    },
    {
     "de": "R: Rechnung",
     "k": [
      "/(^|\\s)R\\s*:/",
      "="
     ]
    },
    {
     "de": "A: Antwort",
     "k": [
      "/(^|\\s)A\\s*:/",
      "antwort"
     ]
    }
   ],
   "kern": {
    "o": [
     "Einzeln kostet es 42 €, die Familienkarte nur 35 €. Also die Familienkarte.",
     "Einzelkarten, weil es 4 Personen sind.",
     "Egal, beides kostet gleich viel."
    ],
    "a": 0
   },
   "model": "F: Welche Fahrkarten sollen sie kaufen? R: 12 € + 12 € + 9 € + 9 € = 42 €. 42 € > 35 €. A: Sie sollen die Familienkarte kaufen, weil sie 7 € billiger ist.",
   "mk": "F: 어떤 표를 사야 하나? R: 12 + 12 + 9 + 9 = 42 €, 42 € > 35 €. A: 7 € 더 싼 가족권을 사야 한다."
  },
  {
   "id": "s4",
   "unit": "u6",
   "op": "sachaufgabe",
   "q": "Schuhe kosteten 73 €. Jetzt kosten sie 55 €. Um wie viel Euro wurde der Preis gesenkt?",
   "ko": "F·R·A를 모두 써서 풀어 보세요(교과서 5쪽).",
   "qk": [
    "preis",
    "gesenkt",
    "euro"
   ],
   "start": "F: Um wie viel Euro wurde der Preis gesenkt?",
   "words": [
    [
     "73 €",
     "73",
     "73 €"
    ],
    [
     "55 €",
     "55",
     "55 €"
    ],
    [
     "18 €",
     "18",
     "18 €"
    ],
    [
     "gesenkt",
     "gesenkt",
     "내려진"
    ],
    [
     "Preis",
     "preis",
     "가격"
    ]
   ],
   "distract": [
    "verdoppelt",
    "Kugel"
   ],
   "parts": [
    {
     "de": "F: Frage",
     "k": [
      "/(^|\\s)F\\s*:/",
      "frage"
     ]
    },
    {
     "de": "R: Rechnung",
     "k": [
      "/(^|\\s)R\\s*:/",
      "="
     ]
    },
    {
     "de": "A: Antwort",
     "k": [
      "/(^|\\s)A\\s*:/",
      "antwort"
     ]
    }
   ],
   "kern": {
    "o": [
     "Alter Preis minus neuer Preis: 73 € − 55 €.",
     "73 € + 55 €",
     "55 € − 18 €"
    ],
    "a": 0
   },
   "model": "F: Um wie viel Euro wurde der Preis gesenkt? R: 73 € − 55 € = 18 €. A: Der Preis wurde um 18 € gesenkt.",
   "mk": "F: 가격이 얼마 내렸나? R: 73 − 55 = 18. A: 가격이 18 € 내렸다."
  },
  {
   "id": "s5",
   "unit": "u9",
   "op": "beschreiben",
   "q": "Rechne 265 − 45. Beschreibe deinen Rechenweg.",
   "ko": "265 − 45의 계산 과정을 순서대로 쓰세요.",
   "qk": [
    "265",
    "rechne",
    "ich"
   ],
   "start": "Zuerst rechne ich 265 − 40 = …",
   "words": [
    [
     "265",
     "265",
     "265"
    ],
    [
     "40",
     "40",
     "40"
    ],
    [
     "225",
     "225",
     "225"
    ],
    [
     "5",
     "5",
     "5"
    ],
    [
     "220",
     "220",
     "220"
    ]
   ],
   "distract": [
    "210",
    "310"
   ],
   "min": 4,
   "kern": {
    "o": [
     "Erst die Zehner abziehen, dann die Einer: 225, dann 220.",
     "Erst 265 − 50, dann noch einmal 5 weg.",
     "265 − 45 = 210"
    ],
    "a": 0
   },
   "model": "Zuerst rechne ich 265 − 40 = 225. Dann rechne ich 225 − 5 = 220. Zum Schluss prüfe ich: 220 + 45 = 265. Das Ergebnis ist 220.",
   "mk": "먼저 265 − 40 = 225, 그다음 225 − 5 = 220. 마지막으로 220 + 45 = 265로 검산한다."
  },
  {
   "id": "s6",
   "unit": "u2",
   "op": "beschreiben",
   "q": "Wie kannst du 7 · 8 leicht ausrechnen? Beschreibe deinen Rechenweg.",
   "ko": "7 · 8을 쉽게 계산하는 방법을 순서대로 쓰세요.",
   "qk": [
    "7",
    "8",
    "rechne"
   ],
   "start": "Zuerst rechne ich 5 · 8 = …",
   "words": [
    [
     "5 · 8 = 40",
     "40",
     "5 · 8 = 40"
    ],
    [
     "2 · 8 = 16",
     "16",
     "2 · 8 = 16"
    ],
    [
     "56",
     "56",
     "56"
    ],
    [
     "zusammen",
     "zusammen",
     "합해서"
    ]
   ],
   "distract": [
    "15",
    "78"
   ],
   "min": 3,
   "kern": {
    "o": [
     "7 · 8 = 5 · 8 + 2 · 8",
     "7 · 8 = 7 + 8",
     "7 · 8 = 10 · 8 + 7"
    ],
    "a": 0
   },
   "model": "Zuerst rechne ich 5 · 8 = 40. Dann rechne ich 2 · 8 = 16. Zum Schluss rechne ich 40 + 16 = 56. Also ist 7 · 8 = 56.",
   "mk": "먼저 5 · 8 = 40, 그다음 2 · 8 = 16, 마지막으로 40 + 16 = 56."
  },
  {
   "id": "s7",
   "unit": "u7",
   "op": "erklaeren",
   "q": "Woran erkennst du einen Zylinder? Erkläre.",
   "ko": "원기둥을 알아보는 방법을 설명하세요.",
   "qk": [
    "zylinder",
    "erkennst",
    "erkenne"
   ],
   "start": "Einen Zylinder erkenne ich daran, dass …",
   "words": [
    [
     "Kreise",
     "kreis",
     "원"
    ],
    [
     "gegenüberliegend",
     "gegenüber",
     "마주 보는"
    ],
    [
     "Kanten",
     "kante",
     "모서리"
    ],
    [
     "keine Ecken",
     "ecke",
     "꼭짓점 없음"
    ],
    [
     "rollen",
     "roll",
     "구르다"
    ]
   ],
   "distract": [
    "Dreiecke",
    "Spitze"
   ],
   "kern": {
    "o": [
     "Er hat zwei gegenüberliegende Kreise und kann rollen.",
     "Er hat eine Spitze.",
     "Alle Flächen sind Quadrate."
    ],
    "a": 0
   },
   "model": "Einen Zylinder erkenne ich daran, dass zwei gegenüberliegende Flächen Kreise sind. Er hat 2 Kanten und keine Ecken. Deshalb kann er rollen.",
   "mk": "원기둥은 마주 보는 두 면이 원이다. 모서리 2개, 꼭짓점이 없어서 굴러간다.",
   "min": 3
  }
 ]
});
