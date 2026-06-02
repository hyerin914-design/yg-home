/* app.js - YG Sports Gateway MVP Logic */

// ==================== MOCK DATA ====================

const TOURNAMENTS_DATA = [
  {
    id: 1,
    title: "2026년도 ITF 양구국제주니어 테니스투어대회(J60)",
    status: "ongoing", // ongoing, upcoming, completed
    statusKo: "진행중",
    category: "테니스",
    date: "2026.06.01 ~ 2026.06.08",
    venue: "초롱이 테니스장 실외",
    address: "강원특별자치도 양구군 양구읍 함춘로 102",
    mapQuery: "초롱이테니스장",
    mapUrl: "https://m.map.naver.com/search2/search.naver?query=" + encodeURIComponent("초롱이테니스장"),
    kakaoMapUrl: "https://map.kakao.com/?q=" + encodeURIComponent("초롱이테니스장"),
    contact: "(재)양구군스포츠재단 (033-482-9607)",
    organizer: "대한테니스협회, ITF / 대한테니스협회",
    description: "국제테니스연맹(ITF) 공인 주니어 국제 대회로, 전 세계 유망주 선수들이 참가하여 주니어 세계 랭킹 포인트를 두고 치열하게 경쟁하는 권위 있는 대회입니다.",
    schedules: [
      { day: "Day 1 (6/1)", date: "6월 1일 (월)", matches: ["남/여 예선전 및 대진표 확정 (09:00 ~ 17:00)", "선수단 등록 및 오리엔테이션"] },
      { day: "Day 2 (6/2)", date: "6월 2일 (화)", matches: ["남/여 단식 본선 64강전 (09:00 ~ 18:00)", "복식 조 추첨식"] },
      { day: "Day 3 (6/3)", date: "6월 3일 (수)", matches: ["남/여 단식 본선 32강전 및 복식 1회전 (09:30 ~ 17:00)"] },
      { day: "Day 4 (6/4)", date: "6월 4일 (목)", matches: ["남/여 단식 16강전 및 복식 8강전 (09:30 ~ 17:00)"] },
      { day: "Day 5 (6/5)", date: "6월 5일 (금)", matches: ["남/여 단식 8강전 및 복식 준결승전 (10:00 ~ 16:00)"] },
      { day: "Day 6 (6/6)", date: "6월 6일 (토)", matches: ["남/여 단식 준결승전 및 복식 결승전/시상식 (10:00 ~ 15:00)"] },
      { day: "Day 7 (6/7)", date: "6월 7일 (일)", matches: ["남/여 단식 결승전 및 전체 시상식, 폐회식 (10:00 ~ 13:00)"] }
    ],
    liveMatches: [
      { id: "m1", time: "09:30", category: "남자 단식 64강 (1코트)", teams: "김태우 (KOR) vs 타카시 (JPN)", score: "6-2, 6-4", status: "종료" },
      { id: "m2", time: "11:00", category: "여자 단식 64강 (2코트)", teams: "이지혜 (KOR) vs 리나 (CHN)", score: "3-6, 4-6", status: "종료" },
      { id: "m3", time: "13:20", category: "남자 단식 64강 (3코트)", teams: "정성환 (KOR) vs 아르투르 (FRA)", score: "6-7, 6-4, 4-2", status: "진행중" },
      { id: "m4", time: "15:00", category: "남자 단식 64강 (1코트)", teams: "홍지민 (KOR) vs 존슨 (USA)", score: "- : -", status: "대기" },
      { id: "m5", time: "16:20", category: "여자 복식 32강 (2코트)", teams: "김도희/윤민아 (KOR) vs 첸/왕 (CHN)", score: "- : -", status: "대기" }
    ],
    bracketType: "tennis-singles",
    downloadUrl: "#"
  },
  {
    id: 2,
    title: "양정모 올림픽제패기념 제51회 KBS배 전국레슬링대회",
    status: "upcoming",
    statusKo: "예정됨",
    category: "레슬링",
    date: "2026.06.12 ~ 2026.06.18",
    venue: "양구문화체육회관",
    address: "강원특별자치도 양구군 양구읍 양록길23번길 17",
    mapQuery: "양구문화체육회관",
    mapUrl: "https://m.map.naver.com/search2/search.naver?query=" + encodeURIComponent("양구문화체육회관"),
    kakaoMapUrl: "https://map.kakao.com/?q=" + encodeURIComponent("양구문화체육회관"),
    contact: "(재)양구군스포츠재단 (033-482-9607)",
    organizer: "대한레슬링협회 / 대한레슬링협회",
    description: "대한민국 최초의 올림픽 금메달리스트 양정모 선수의 업적을 기리는 권위 있는 전국 대회입니다. 초등부부터 일반부까지 전국의 레슬링 우수 인재들이 한자리에 모여 자유형 및 그레코로만형 최강자를 가립니다.",
    schedules: [
      { day: "Day 1 (6/12)", date: "6월 12일 (금)", matches: ["개회식 및 초·중등부 그레코로만형 예선 (10:00 ~)", "개막 세레머니 및 대표자 회의"] },
      { day: "Day 2 (6/13)", date: "6월 13일 (토)", matches: ["중·고등부 그레코로만형 및 자유형 예선/결승전 (09:00 ~ 17:00)"] },
      { day: "Day 3 (6/14)", date: "6월 14일 (일)", matches: ["고등부 자유형 결승전 및 시상식", "대학부 그레코로만형 경기 개막"] },
      { day: "Day 4 (6/15)", date: "6월 15일 (월)", matches: ["대학부 및 일반부 그레코로만형 체급별 결승전 (10:00 ~ 17:00)"] },
      { day: "Day 5 (6/16)", date: "6월 16일 (화)", matches: ["남/여 일반부 자유형 예선전 (09:30 ~ 17:00)"] },
      { day: "Day 6 (6/17)", date: "6월 17일 (수)", matches: ["일반부 자유형 준결승 및 결승전 경기"] },
      { day: "Day 7 (6/18)", date: "6월 18일 (목)", matches: ["부문별 최우수 선수 시상 및 대회 종합 폐막식 (11:00)"] }
    ],
    liveMatches: [],
    bracketType: "wrestling-bracket",
    downloadUrl: "#"
  },
  {
    id: 3,
    title: "2026 청춘양구 중학교 1학년 축구 페스티벌",
    status: "upcoming",
    statusKo: "예정됨",
    category: "축구",
    date: "2026.06.13 ~ 2026.06.16",
    venue: "축구보조구장(B,C구장)",
    address: "강원특별자치도 양구군 양구읍 스포츠로 136",
    mapQuery: "양구종합운동장",
    mapUrl: "https://m.map.naver.com/search2/search.naver?query=" + encodeURIComponent("양구종합운동장"),
    kakaoMapUrl: "https://map.kakao.com/?q=" + encodeURIComponent("양구종합운동장"),
    contact: "(재)양구군스포츠재단 (033-482-9607)",
    organizer: "리본코퍼레이션랩 / 리본코퍼레이션랩",
    description: "대한민국 축구의 꿈나무들인 전국 중학교 1학년 선수단이 한자리에 모여 경기를 치르는 유소년 축구 축제입니다. 승패 위주의 경기에서 벗어나 건강한 스포츠맨십과 기량 발전을 도모하는 페스티벌 형태로 운영됩니다.",
    schedules: [
      { day: "Day 1 (6/13)", date: "6월 13일 (토)", matches: ["예선 조별 리그 1라운드 경기 (09:00 ~ 17:00)", "참가팀 환영 리셉션"] },
      { day: "Day 2 (6/14)", date: "6월 14일 (일)", matches: ["예선 조별 리그 2라운드 경기 및 지역 문화 탐방 행사"] },
      { day: "Day 3 (6/15)", date: "6월 15일 (월)", matches: ["예선 최종전 및 순위별 토너먼트 (8강~준결승전)"] },
      { day: "Day 4 (6/16)", date: "6월 16일 (화)", matches: ["그룹별 최종 결승전 (10:00, 종합운동장)", "종합 시상식 및 폐막 세레머니 (13:00)"] }
    ],
    liveMatches: [],
    bracketType: "soccer-groups",
    downloadUrl: "#"
  },
  {
    id: 4,
    title: "하나증권 제5회 대한테니스협회장배 (10,12세부)",
    status: "upcoming",
    statusKo: "예정됨",
    category: "테니스",
    date: "2026.06.16 ~ 2026.06.21",
    venue: "초롱이 테니스장 실외",
    address: "강원특별자치도 양구군 양구읍 함춘로 102",
    mapQuery: "초롱이테니스장",
    mapUrl: "https://m.map.naver.com/search2/search.naver?query=" + encodeURIComponent("초롱이테니스장"),
    kakaoMapUrl: "https://map.kakao.com/?q=" + encodeURIComponent("초롱이테니스장"),
    contact: "(재)양구군스포츠재단 (033-482-9607)",
    organizer: "대한테니스협회 / 대한테니스협회",
    description: "테니스 미래를 이끌어갈 10세부 및 12세부 주니어 꿈나무들이 대거 참여하는 대회입니다. 남녀 단식 및 복식 경기가 토너먼트 형태로 활기차게 운영됩니다.",
    schedules: [
      { day: "Day 1 (6/16)", date: "6월 16일 (화)", matches: ["각 연령별 남녀 단식 예선 조별 리그전 (09:00 ~)"] },
      { day: "Day 2 (6/17)", date: "6월 17일 (수)", matches: ["단식 예선 리그 최종전 및 복식 대진표 확정"] },
      { day: "Day 3 (6/18)", date: "6월 18일 (목)", matches: ["단식 본선 1, 2회전 및 남녀 복식 1회전 경기"] },
      { day: "Day 4 (6/19)", date: "6월 19일 (금)", matches: ["단식 16강 및 8강 토너먼트전", "복식 본선 2회전 및 8강전"] },
      { day: "Day 5 (6/20)", date: "6월 20일 (토)", matches: ["단/복식 준결승 경기 및 이벤트 게임 (10:00 ~)"] },
      { day: "Day 6 (6/21)", date: "6월 21일 (일)", matches: ["단식 및 복식 결승전, 종합 시상식 (10:00 ~ 13:00)"] }
    ],
    liveMatches: [],
    bracketType: "tennis-singles",
    downloadUrl: "#"
  },
  {
    id: 5,
    title: "2026 양구사과와 함께하는 전국 초등티볼대회",
    status: "upcoming",
    statusKo: "예정됨",
    category: "티볼",
    date: "2026.06.19 ~ 2026.06.21",
    venue: "하리야구장",
    address: "강원특별자치도 양구군 양구읍 하리 299-5",
    mapQuery: "하리야구장",
    mapUrl: "https://m.map.naver.com/search2/search.naver?query=" + encodeURIComponent("하리야구장"),
    kakaoMapUrl: "https://map.kakao.com/?q=" + encodeURIComponent("하리야구장"),
    contact: "(재)양구군스포츠재단 (033-482-9607)",
    organizer: "전국대학야구협의회(KUBA) / 전국대학야구협의회(KUBA)",
    description: "청정 양구의 명품 특산물인 '양구사과'를 알리고, 전국의 초등학교 티볼 클럽들이 모여 화합하는 어린이 스포츠 축제입니다. 누구나 쉽고 재미있게 참여하는 안전한 야구형 뉴스포츠 경기입니다.",
    schedules: [
      { day: "Day 1 (6/19)", date: "6월 19일 (금)", matches: ["참가팀 접수 및 안전 교육", "경기장 적응 훈련 및 장비 점검"] },
      { day: "Day 2 (6/20)", date: "6월 20일 (토)", matches: ["예선 A~D조 조별 풀리그 경기 (09:00 ~ 17:00)", "양구사과 체험 부스 운영"] },
      { day: "Day 3 (6/21)", date: "6월 21일 (일)", matches: ["본선 8강/4강 토너먼트", "대망의 결승전 및 종합 시상식 (14:00)"] }
    ],
    liveMatches: [],
    bracketType: "tball-bracket",
    downloadUrl: "#"
  },
  {
    id: 6,
    title: "제98회 전국남자역도선수권대회 및 제40회 전국여자역도선수권대회",
    status: "completed",
    statusKo: "종료",
    category: "역도",
    date: "2026.05.25 ~ 2026.05.31",
    venue: "용하체육관",
    address: "강원특별자치도 양구군 국토정중앙면 정중앙로 609",
    mapQuery: "용하체육관",
    mapUrl: "https://m.map.naver.com/search2/search.naver?query=" + encodeURIComponent("용하체육관"),
    kakaoMapUrl: "https://map.kakao.com/?q=" + encodeURIComponent("용하체육관"),
    contact: "(재)양구군스포츠재단 (033-482-9607)",
    organizer: "대한역도연맹 / 대한역도연맹",
    description: "대한민국 역사들의 최대 제전으로, 중·고·대·일반부 전국의 엘리트 역도 선수들이 총출동하는 공인 선수권 대회입니다. 한국 신기록 및 다수의 대회 신기록을 쏟아내는 수준 높은 경기들이 진행되었습니다.",
    schedules: [
      { day: "Day 1 (5/25)", date: "5월 25일 (월)", matches: ["남자 중·고등부 경량급 인상/용상 결선 (09:00~)", "개회식 및 축하 공연"] },
      { day: "Day 2 (5/26)", date: "5월 26일 (화)", matches: ["여자 중·고등부 전 체급 경기 및 시상식"] },
      { day: "Day 3 (5/27)", date: "5월 27일 (수)", matches: ["남자 대학부 및 일반부 중강급 경기 진행"] },
      { day: "Day 4 (5/28)", date: "5월 28일 (목)", matches: ["여자 대학부 및 일반부 체급별 예선/결선"] },
      { day: "Day 5 (5/29)", date: "5월 29일 (금)", matches: ["남자 일반부 중량급 (89kg, 102kg) 경기"] },
      { day: "Day 6 (5/30)", date: "5월 30일 (토)", matches: ["남녀 일반부 무제한급 경기 및 신기록 수립"] },
      { day: "Day 7 (5/31)", date: "5월 31일 (일)", matches: ["종합 성적 집계 및 모범 선수/지도자 시상식, 대회 폐막"] }
    ],
    liveMatches: [],
    bracketType: "weightlifting-table",
    downloadUrl: "#"
  },
  {
    id: 7,
    title: "하나증권 제5회 대한테니스협회장배 (14,16,18세부)",
    status: "upcoming",
    statusKo: "예정됨",
    category: "테니스",
    date: "2026.06.22 ~ 2026.07.01",
    venue: "초롱이 테니스장 실외",
    address: "강원특별자치도 양구군 양구읍 함춘로 102",
    mapQuery: "초롱이테니스장",
    mapUrl: "https://m.map.naver.com/search2/search.naver?query=" + encodeURIComponent("초롱이테니스장"),
    kakaoMapUrl: "https://map.kakao.com/?q=" + encodeURIComponent("초롱이테니스장"),
    contact: "(재)양구군스포츠재단 (033-482-9607)",
    organizer: "대한테니스협회 / 대한테니스협회",
    description: "대한테니스협회 주관으로 진행되는 공인 주니어 엘리트 대회입니다. 중·고등부 연령에 해당하는 전국 최고의 선수들이 참가하여 단식 및 복식 왕좌를 가립니다.",
    schedules: [
      { day: "Day 1 (6/22)", date: "6월 22일 (월)", matches: ["남/여 14, 16, 18세부 단식 예선 1회전 (09:00 ~)"] },
      { day: "Day 2 (6/23)", date: "6월 23일 (화)", matches: ["단식 예선 최종 예선 및 본선 진출자 대진 추첨"] },
      { day: "Day 3 (6/24)", date: "6월 24일 (수)", matches: ["본선 단식 1회전 및 남녀 복식 대진표 등록"] },
      { day: "Day 4 (6/25)", date: "6월 25일 (목)", matches: ["본선 단식 2회전 및 남녀 복식 1회전 경기"] },
      { day: "Day 5 (6/26)", date: "6월 26일 (금)", matches: ["단식 32강 및 복식 16강 본선 매치"] },
      { day: "Day 6 (6/27)", date: "6월 27일 (토)", matches: ["단식 16강/8강 및 복식 8강전 경기 진행"] },
      { day: "Day 7 (6/28)", date: "6월 28일 (일)", matches: ["단식 준결승 및 복식 준결승 경기"] },
      { day: "Day 8 (6/29)", date: "6월 29일 (월)", matches: ["복식 결승전 경기 및 복식 시상식"] },
      { day: "Day 9 (6/30)", date: "6월 30일 (화)", matches: ["단식 결승전 경기 진행"] },
      { day: "Day 10 (7/1)", date: "7월 1일 (수)", matches: ["단식 잔여 경기 완료 및 종합 시상식, 대회 폐막"] }
    ],
    liveMatches: [],
    bracketType: "tennis-singles",
    downloadUrl: "#"
  },
  {
    id: 8,
    title: "2026 전국실업대항 및 학교대항(대학) 배드민턴 선수권대회",
    status: "upcoming",
    statusKo: "예정됨",
    category: "배드민턴",
    date: "2026.06.23 ~ 2026.07.04",
    venue: "청춘 체육관",
    address: "강원특별자치도 양구군 양구읍 함춘로 64",
    mapQuery: "양구청춘체육관",
    mapUrl: "https://m.map.naver.com/search2/search.naver?query=" + encodeURIComponent("양구청춘체육관"),
    kakaoMapUrl: "https://map.kakao.com/?q=" + encodeURIComponent("양구청춘체육관"),
    contact: "(재)양구군스포츠재단 (033-482-9607)",
    organizer: "한국실업배드민턴연맹 / 한국실업배드민턴연맹",
    description: "전국의 대학팀 및 실업팀이 모두 참가하는 배드민턴 시즌 최강의 대회입니다. 대학부/실업부 단체전 및 남녀 단식, 복식, 혼합복식 개인전 타이틀을 다투는 최고 수준의 경기입니다.",
    schedules: [
      { day: "Day 1 (6/23)", date: "6월 23일 (화)", matches: ["대학부 단체 예선 1라운드전 (09:00 ~)"] },
      { day: "Day 2 (6/24)", date: "6월 24일 (수)", matches: ["실업부 단체 예선 1라운드전 경기 개시"] },
      { day: "Day 3 (6/25)", date: "6월 25일 (목)", matches: ["대학부/실업부 단체전 준결승 토너먼트"] },
      { day: "Day 4 (6/26)", date: "6월 26일 (금)", matches: ["단체전 최종 결승 및 시상식, 개인전 대진 추첨"] },
      { day: "Day 5 (6/27)", date: "6월 27일 (토)", matches: ["개인전 남녀 단식/복식 예선전 경기"] },
      { day: "Day 6 (6/28)", date: "6월 28일 (일)", matches: ["개인전 단/복식 64강 및 32강 경기"] },
      { day: "Day 7 (6/29)", date: "6월 29일 (월)", matches: ["개인전 혼합복식 조별 예선 시작"] },
      { day: "Day 8 (6/30)", date: "6월 30일 (화)", matches: ["개인전 단식/복식 16강전 경기"] },
      { day: "Day 9 (7/1)", date: "7월 1일 (수)", matches: ["개인전 체급별 8강 및 준결승전 경기"] },
      { day: "Day 10 (7/2)", date: "7월 2일 (목)", matches: ["혼합복식 및 개인 복식 결승전"] },
      { day: "Day 11 (7/3)", date: "7월 3일 (금)", matches: ["남녀 개인 단식 최종 결승전"] },
      { day: "Day 12 (7/4)", date: "7월 4일 (토)", matches: ["대회 전체 정리, 종합 시상 및 폐막식 (11:00)"] }
    ],
    liveMatches: [],
    bracketType: "badminton-bracket",
    downloadUrl: "#"
  }
];

const MILITARY_UNITS = [
  {
    id: "unit21",
    name: "21사단 (백두산부대) 신병교육대",
    nextCeremony: "2026년 6월 10일 (수요일) 오전 10:00",
    location: "백두산부대 신병교육대대 연병장 (양구읍 한전리)",
    address: "강원특별자치도 양구군 양구읍 금강산로 745 (또는 네비게이션에 '백두산신병교육대' 입력)",
    mapQuery: "백두산신병교육대",
    mapUrl: "https://m.map.naver.com/search2/search.naver?query=백두산신병교육대",
    kakaoMapUrl: "https://map.kakao.com/?q=백두산신병교육대",
    gateTime: "08:30부터 위병소 개방 (09:40까지 등록 및 착석 권장)",
    contacts: "신병교육대대 행정실: 033-480-1234",
    checklist: [
      { id: "chk1", text: "장병 신분증 (나라사랑카드 - 부대 내 매점 PX 이용 필수)", defaultChecked: true },
      { id: "chk2", text: "가족/면회객 신분증 (주민등록증, 운전면허증 등 위병소 출입 확인용)", defaultChecked: true },
      { id: "chk3", text: "신병교육대 수료식 초청장 (부대 발송 모바일 문자 또는 우편물)", defaultChecked: true },
      { id: "chk4", text: "보조 배터리 및 고속 충전기 (장병 수료식 후 스마트폰 집중 사용 대비)", defaultChecked: false },
      { id: "chk5", text: "가벼운 복용 상비약 (감기약, 소화제 - 훈련소 생활 동안 지친 신병을 위해)", defaultChecked: false },
      { id: "chk6", text: "돗자리 혹은 텐트 (연병장 내 개별 휴식공간 세팅용)", defaultChecked: false },
      { id: "chk7", text: "따뜻한 외투 혹은 담요 (강원도 산간 지형 특성상 기온 변화 대비)", defaultChecked: false },
      { id: "chk8", text: "장병이 가장 먹고 싶어 하는 수제 음식 (치킨, 피자 등)", defaultChecked: false }
    ],
    pensions: [
      { name: "백두산 힐링펜션", rating: 4.9, distance: "신병교육대 정문에서 도보 3분 (가장 가까움)", benefits: "수료식 면회객 15% 현장 할인, 당일 퇴실 18:00까지 연장 무료", tel: "033-481-9988", desc: "훈련소 정문과 마주보고 있어 도보 이동이 가능하며 깔끔한 개별 바베큐장과 넓은 마당이 완비된 가족 펜션입니다." },
      { name: "양구 청춘 로그하우스", rating: 4.8, distance: "신병교육대에서 차량 5분", benefits: "장병 방문 시 삼겹살 불판 및 숯불 서비스 제공", tel: "033-482-1234", desc: "편백나무향 가득한 고급 통나무 독채 펜션으로 소음 없이 장병들과 편안하게 독립적인 휴식을 취할 수 있습니다." },
      { name: "파로호 리버사이드 펜션", rating: 4.7, distance: "양구 시내권, 신병교육대에서 차량 10분", benefits: "시내 배달음식 주문 용이, 주중 특별 대실 패키지(09:00~17:00) 운영", tel: "033-481-5544", desc: "파로호가 한눈에 보이는 전망 좋은 펜션입니다. 양구 시내와 가까워 대형마트 및 식당 인프라 이용이 편리합니다." }
    ],
    restaurants: [
      { name: "양구 시래기 명가 시래원", category: "한식", rating: 4.8, benefits: "군장병 동반 테이블 시 시원한 음료수 서비스 제공", tel: "033-481-4200", desc: "양구 펀치볼 특산물인 명품 시래기를 들기름에 달달 볶아 지어낸 시래기 밥 정식과 매콤한 시래기 갈비찜이 일품입니다." },
      { name: "백두산 숯불왕갈비", category: "육류", rating: 4.9, benefits: "수료식 당일 방문 군장병 전원 정성 어린 냉면 무료 서비스", tel: "033-482-5522", desc: "두툼한 한돈 수제 돼지갈비와 소갈비를 가성비 좋게 제공하는 식당으로, 수료 직후 장병들이 가장 가고 싶어하는 고깃집 중 하나입니다." },
      { name: "양구 수타 손짜장", category: "중식", rating: 4.6, benefits: "군인 테이블 수제 만두 서비스 제공", tel: "033-481-1122", desc: "쫄깃한 면발의 전통 수타면으로 맛을 낸 짜장면과 바삭하고 쫀득한 찹쌀 탕수육 전문점입니다. 신속한 조리로 대기가 적습니다." },
      { name: "도사리 매운탕", category: "한식/민물", rating: 4.7, benefits: "군장병 식사 시 라면사리 무제한 공짜", tel: "033-481-7788", desc: "양구 청정 계곡에서 잡은 신선한 쏘가리, 빠가사리로 얼큰하게 끓여낸 로컬 민물 매운탕 맛집입니다. 부모님들 만족도가 높습니다." }
    ]
  },
  {
    id: "unit21sub",
    name: "21사단 사단본부 & 직할대 (면회객)",
    nextCeremony: "수료식 외 일반 면회 상시 가능 (주말/휴일)",
    location: "양구읍 종합운동장 인근 사단 위병소 및 각 부대 면회실",
    address: "강원특별자치도 양구군 양구읍 죽곡리 일대 (부대 보안상 사전 안내된 주소로 네비 검색 필수)",
    mapQuery: "양구종합체육공원",
    mapUrl: "https://m.map.naver.com/search2/search.naver?query=양구종합체육공원",
    kakaoMapUrl: "https://map.kakao.com/?q=양구종합체육공원",
    gateTime: "토/일/공휴일 09:00 ~ 17:00 (위병소에서 접수 필요)",
    contacts: "사단 종합상황실: 033-480-1114",
    checklist: [
      { id: "chkb1", text: "외출/외박 허가증 (해당 장병이 행정반에서 발급 완료했는지 확인)", defaultChecked: true },
      { id: "chkb2", text: "면회객 신분증 (주민등록증 또는 운전면허증 등 반드시 지참)", defaultChecked: true },
      { id: "chkb3", text: "장병 휴대폰 필수 지참 (외출 시 통신망 사용에 필요)", defaultChecked: false }
    ],
    pensions: [
      { name: "파로호 리버사이드 펜션", rating: 4.7, distance: "양구 시내(사단본부 차량 5분)", benefits: "주중/주말 대실 할인 혜택", tel: "033-481-5544", desc: "시내와 인접해 면회 외출 나온 장병들과 복귀 부담 없이 가깝게 머물기 좋은 전망 좋은 펜션입니다." },
      { name: "양구 스카이 모던 호텔", rating: 4.6, distance: "양구 버스터미널 옆 도보 2분", benefits: "외박 장병 숙박 시 레이트 체크아웃(13:00) 제공", tel: "033-482-8877", desc: "최신식 모던 인테리어와 에어컨, 넷플릭스 제공 등으로 젊은 용사들이 휴가/외출 시 압도적으로 선호하는 시내 호텔입니다." }
    ],
    restaurants: [
      { name: "백두산 숯불왕갈비", category: "육류", rating: 4.9, benefits: "수료식 당일 방문 군장병 전원 정성 어린 냉면 무료 서비스", tel: "033-482-5522", desc: "시내 중심가에 위치하여 사단본부 및 직할대 장병들이 외출 나왔을 때 도보 또는 기본 택시요금으로 즐길 수 있는 갈비 맛집입니다." },
      { name: "중앙 돈까스 & 파스타", category: "양식", rating: 4.7, benefits: "군인 동반 시 에이드 음료 한 잔 서비스", tel: "033-481-3311", desc: "수제 통모짜렐라 치즈돈까스와 파스타 전문점으로 사제 음식을 그리워하는 군인들에게 트렌디하고 만족도 높은 맛을 제공합니다." }
    ]
  }
];

const CAFES_DATA = [
  {
    name: "아인53 (Ain 53)",
    type: "브런치 / 호수뷰",
    address: "강원특별자치도 양구군 양구읍 파로호로 1007-53",
    contact: "033-481-5300",
    rating: 4.8,
    benefits: "파로호 & 한반도섬이 한눈에 보이는 멋진 전망의 대형 브런치 카페. 주차가 매우 넓고 편리함.",
    mapUrl: "https://m.map.naver.com/search2/search.naver?query=" + encodeURIComponent("아인53"),
    desc: "2층 규모의 대형 목조 건물로 통창을 통해 시원하게 드러나는 파로호의 전경을 보며 정통 브런치와 스페셜티 커피를 즐길 수 있습니다."
  },
  {
    name: "카페 레이크한 (Lake Han)",
    type: "디저트 / 섬내뷰",
    address: "강원특별자치도 양구군 양구읍 한반도섬길 61-12",
    contact: "033-482-0123",
    rating: 4.7,
    benefits: "한반도섬 내부에 위치하여 아름다운 호수 산책로와 인접함. 짚라인 및 수상레저 체험 가능.",
    mapUrl: "https://m.map.naver.com/search2/search.naver?query=" + encodeURIComponent("카페 레이크한"),
    desc: "파로호 한반도섬 내부 수변공원에 위치해 있어 잔잔한 호수 물결을 바로 옆에서 바라볼 수 있는 최고의 전망을 선사합니다."
  },
  {
    name: "르쏠레이475",
    type: "커피 / 루프탑",
    address: "강원특별자치도 양구군 양구읍 군량길 475",
    contact: "0507-1355-4750",
    rating: 4.8,
    benefits: "양구 시내 전체가 시원하게 내려다보이는 높은 지대의 마운틴 & 시티뷰 루프탑 명소.",
    mapUrl: "https://m.map.naver.com/search2/search.naver?query=" + encodeURIComponent("르쏠레이475"),
    desc: "언덕 위에 위치하여 가슴이 뻥 뚫리는 시야를 제공합니다. 고급 원두를 사용한 아메리카노와 시그니처 크림라떼가 인기 메뉴입니다."
  },
  {
    name: "카페 공삼삼 (033)",
    type: "로컬 F&B / 갤러리",
    address: "강원특별자치도 양구군 양구읍 파로호로 875",
    contact: "033-481-0033",
    rating: 4.9,
    benefits: "양구의 대표 농특산물(시래기, 감자)을 활용한 독창적인 식사와 디저트 메뉴를 판매하는 핫플레이스.",
    mapUrl: "https://m.map.naver.com/search2/search.naver?query=" + encodeURIComponent("카페 공삼삼"),
    desc: "빈티지하고 힙한 인테리어 속에서 '시래기 빠에야', '양구 감자 크림 파스타' 등 오직 양구에서만 맛볼 수 있는 로컬 시그니처 다이닝과 굿즈를 제공합니다."
  },
  {
    name: "양구제빵소",
    type: "베이커리 / 빵지순례",
    address: "강원특별자치도 양구군 양구읍 함춘로 52",
    contact: "033-482-8253",
    rating: 4.7,
    benefits: "양구 사과로 만든 귀여운 빨간 사과빵과 양구 시래기를 이식한 건강한 시래기 식빵이 시그니처.",
    mapUrl: "https://m.map.naver.com/search2/search.naver?query=" + encodeURIComponent("양구제빵소"),
    desc: "매일 아침 갓 구워낸 신선한 빵을 판매하며, 양구 특산물을 활용한 아이디어 빵들이 가득해 양구 여행 필수 기념 코스로 통합니다."
  },
  {
    name: "까미노사이더리",
    type: "애플사이더 / 친환경",
    address: "강원특별자치도 양구군 국토정중앙면 국토정중앙로 45",
    contact: "033-481-8880",
    rating: 4.8,
    benefits: "양구 사과로 만드는 천연 애플사이더(식초/음료)와 친환경 사과 디저트가 가득한 농촌 테마 카페.",
    mapUrl: "https://m.map.naver.com/search2/search.naver?query=" + encodeURIComponent("까미노사이더리"),
    desc: "버려지는 못난이 사과를 가치 있게 재생하여 로컬 브랜딩을 실천하는 복합 문화 공간입니다. 따뜻하고 자연 친화적인 돌담 인테리어가 편안함을 줍니다."
  }
];

// ==================== STATE MANAGEMENT ====================

let activeView = 'home';
let selectedTournamentId = null;
let currentDetailTab = 'info';
let activeMilitaryUnitId = 'unit21';
let activeMilSubTab = 'ceremony';
let currentCategory = '전체';
let zoomScale = 1.0;
let isDragging = false;
let startX, startY;
let translateX = 0, translateY = 0;

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Theme from localStorage
  const savedTheme = localStorage.getItem('yg-theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }

  // Initialize Lucide Icons
  lucide.createIcons();
  
  // Set default active buttons on bottom nav
  updateBottomNavActiveState();
  
  // Set initial theme icon in HTML
  updateThemeIcon(savedTheme);
  
  // Render lists
  renderSportsCategories();
  renderTournamentList();
  renderMilitaryUnitTabs();
  renderMilitaryContent();
  renderCafeList();
  
  // Setup Event Listeners for search
  document.getElementById('sports-search').addEventListener('input', (e) => {
    renderTournamentList(e.target.value, currentCategory);
  });
  
  document.getElementById('pension-search').addEventListener('input', (e) => {
    renderPensionList(e.target.value);
  });
  
  document.getElementById('food-search').addEventListener('input', (e) => {
    renderFoodList(e.target.value);
  });
  
  document.getElementById('cafe-search').addEventListener('input', (e) => {
    renderCafeList(e.target.value);
  });
  
  // Initialize Checklist state from LocalStorage
  initChecklistState();

  // Setup Modal dragging/zooming event listeners
  setupModalDragEvents();

  // Setup Scroll Progress & Top Button Controls
  setupScrollControls();

  // Fetch real-time weather
  updateRealTimeWeather();
});


// ==================== NAVIGATION / ROUTING ====================

function switchView(viewName) {
  // Hide all sections
  const views = document.querySelectorAll('.view-section');
  views.forEach(view => view.classList.remove('active'));
  
  // Activate selected section
  let targetViewId = `${viewName}-view`;
  const targetView = document.getElementById(targetViewId);
  if (targetView) {
    targetView.classList.add('active');
  }
  
  // Update State
  activeView = viewName;
  updateBottomNavActiveState();
  
  // Custom headers and logos
  const headerLogo = document.getElementById('header-logo');
  if (viewName === 'military') {
    headerLogo.classList.add('military-theme');
  } else {
    headerLogo.classList.remove('military-theme');
  }

  // Scroll to top
  window.scrollTo(0, 0);
  document.querySelector('main').scrollTop = 0;
}

function updateBottomNavActiveState() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.classList.remove('active');
    item.classList.remove('military-theme');
  });
  
  let activeNavBtn = null;
  if (activeView === 'home') activeNavBtn = document.getElementById('nav-home');
  else if (activeView === 'sports' || activeView === 'sports-detail') activeNavBtn = document.getElementById('nav-sports');
  else if (activeView === 'military') activeNavBtn = document.getElementById('nav-military');
  else if (activeView === 'info') activeNavBtn = document.getElementById('nav-info');
  
  if (activeNavBtn) {
    activeNavBtn.classList.add('active');
    if (activeView === 'military') {
      activeNavBtn.classList.add('military-theme');
    }
  }
}

// ==================== SPORTS SECTION LOGIC ====================

function renderSportsCategories() {
  const categories = ['전체', '테니스', '레슬링', '축구', '티볼', '역도', '배드민턴'];
  const container = document.getElementById('sports-categories');
  container.innerHTML = '';
  
  categories.forEach(cat => {
    const badge = document.createElement('div');
    badge.className = `category-badge ${cat === currentCategory ? 'active' : ''}`;
    badge.textContent = cat;
    badge.onclick = () => {
      currentCategory = cat;
      // Toggle active styling
      document.querySelectorAll('.category-badge').forEach(b => b.classList.remove('active'));
      badge.classList.add('active');
      // Re-filter list
      const searchValue = document.getElementById('sports-search').value;
      renderTournamentList(searchValue, currentCategory);
    };
    container.appendChild(badge);
  });
}

function renderTournamentList(query = '', category = '전체') {
  const container = document.getElementById('tournament-list-container');
  container.innerHTML = '';
  
  const filtered = TOURNAMENTS_DATA.filter(item => {
    const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase()) || 
                         item.category.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === '전체' || item.category === category;
    return matchesQuery && matchesCategory;
  });
  
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="glass-card text-center" style="padding: 30px;">
        <i data-lucide="alert-circle" style="font-size: 24px; color: var(--text-muted); margin-bottom: 8px;"></i>
        <p style="color: var(--text-secondary); font-size: 14px;">검색된 대회 정보가 없습니다.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }
  
  filtered.forEach(t => {
    const card = document.createElement('div');
    card.className = 'glass-card tournament-card';
    card.onclick = () => openTournamentDetail(t.id);
    
    card.innerHTML = `
      <div class="card-top">
        <span class="status-badge ${t.status}">${t.statusKo}</span>
        <span style="font-size: 11px; color: var(--sports-secondary); font-weight: 700;">${t.category}</span>
      </div>
      <h3 class="tournament-title">${t.title}</h3>
      <div class="info-row">
        <i data-lucide="calendar"></i>
        <span>${t.date}</span>
      </div>
      <div class="info-row">
        <i data-lucide="map-pin"></i>
        <span>${t.venue}</span>
      </div>
    `;
    container.appendChild(card);
  });
  
  lucide.createIcons();
}

// Open detail view for sports
function openTournamentDetail(id) {
  selectedTournamentId = id;
  const t = TOURNAMENTS_DATA.find(item => item.id === id);
  if (!t) return;
  
  // Hide sports list view, show detail view
  document.getElementById('sports-view').classList.remove('active');
  const detailView = document.getElementById('sports-detail-view');
  detailView.classList.add('active');
  
  // Populate Title & Status
  document.getElementById('detail-title').textContent = t.title;
  const statusBadge = document.getElementById('detail-status');
  statusBadge.className = `status-badge ${t.status}`;
  statusBadge.textContent = t.statusKo;
  
  // Switch to default detail tab
  switchDetailTab('info');
  
  // Active Navigation Sync
  activeView = 'sports-detail';
  updateBottomNavActiveState();
}

function backToSportsList() {
  selectedTournamentId = null;
  document.getElementById('sports-detail-view').classList.remove('active');
  
  const sportsView = document.getElementById('sports-view');
  sportsView.classList.add('active');
  
  activeView = 'sports';
  updateBottomNavActiveState();
}


function switchDetailTab(tabName) {
  currentDetailTab = tabName;
  
  // Toggle Active State in Tab Buttons
  const tabs = document.querySelectorAll('.detail-tab');
  tabs.forEach(tab => {
    tab.classList.remove('active');
    if (tab.textContent === getTabLabel(tabName)) {
      tab.classList.add('active');
    }
  });
  
  // Hide/Show contents
  const contents = document.querySelectorAll('.detail-tab-content');
  contents.forEach(content => content.classList.remove('active'));
  
  const targetContent = document.getElementById(`detail-tab-${tabName}`);
  if (targetContent) {
    targetContent.classList.add('active');
  }
  
  // Populate individual tabs
  populateDetailTabContent(tabName);
}

function getTabLabel(tabName) {
  switch (tabName) {
    case 'info': return '대회 정보';
    case 'schedule': return '경기 일정';
    case 'bracket': return '대진표';
    case 'location': return '경기장 위치';
    default: return '';
  }
}

function populateDetailTabContent(tabName) {
  const t = TOURNAMENTS_DATA.find(item => item.id === selectedTournamentId);
  if (!t) return;
  
  const container = document.getElementById(`detail-tab-${tabName}`);
  container.innerHTML = '';
  
  if (tabName === 'info') {
    container.innerHTML = `
      <div class="glass-card">
        <h3>📋 대회 요약</h3>
        <p class="subtitle" style="margin-bottom: 12px;">대회 주관 및 주요 개요</p>
        <div class="flex-col gap-12" style="font-size: 13px; line-height: 1.6;">
          <div>
            <strong style="color: white;">주최/주관:</strong> 
            <span style="color: var(--text-secondary);">${t.organizer}</span>
          </div>
          <div>
            <strong style="color: white;">대회 일시:</strong> 
            <span style="color: var(--text-secondary);">${t.date}</span>
          </div>
          <div>
            <strong style="color: white;">개최 장소:</strong> 
            <span style="color: var(--text-secondary);">${t.venue}</span>
          </div>
          <div>
            <strong style="color: white;">문의처:</strong> 
            <span style="color: var(--text-secondary);">${t.contact}</span>
          </div>
        </div>
      </div>
      <div class="glass-card">
        <h3>📢 대회 소개</h3>
        <p style="font-size: 13px; line-height: 1.6; color: var(--text-secondary); margin-top: 10px;">
          ${t.description}
        </p>
      </div>
    `;
  }
  else if (tabName === 'schedule') {
    let daysTabsHtml = '';
    t.schedules.forEach((sch, index) => {
      daysTabsHtml += `<button class="day-tab ${index === 0 ? 'active' : ''}" onclick="switchScheduleDay(this, ${index})">${sch.day}</button>`;
    });
    
    let defaultDayMatchesHtml = '';
    t.schedules[0].matches.forEach(m => {
      defaultDayMatchesHtml += `
        <div class="match-card">
          <div class="match-teams" style="font-size:13px; color: var(--text-primary); font-weight:500;">
            <i data-lucide="check-square" style="width:16px; height:16px; color: var(--sports-primary); margin-right:8px; display:inline-block; vertical-align:middle;"></i>
            <span>${m}</span>
          </div>
        </div>
      `;
    });

    let liveScoreSection = '';
    if (t.liveMatches && t.liveMatches.length > 0) {
      let liveCards = '';
      t.liveMatches.forEach(lm => {
        let statusColor = lm.status === '진행중' ? 'color: #ef4444; font-weight: 700;' : 'color: var(--text-muted);';
        let badgeGlow = lm.status === '진행중' ? 'border: 1px solid rgba(239, 68, 68, 0.4); background: rgba(239, 68, 68, 0.05);' : '';
        liveCards += `
          <div class="match-card" style="${badgeGlow}">
            <div class="match-header">
              <span class="match-category">${lm.category}</span>
              <span style="${statusColor}">${lm.status === '진행중' ? '● LIVE' : lm.status}</span>
            </div>
            <div class="match-teams">
              <span>${lm.teams}</span>
              <span class="match-score">${lm.score}</span>
            </div>
            <div style="font-size: 11px; color: var(--text-muted); margin-top: 6px; text-align: right;">
              <i data-lucide="clock" style="width: 12px; height:12px; display: inline-block; vertical-align: middle; margin-right: 2px;"></i> 예정시간 ${lm.time}
            </div>
          </div>
        `;
      });
      liveScoreSection = `
        <div class="glass-card" style="margin-bottom: 12px;">
          <h3 style="display:flex; align-items:center; gap: 6px;">
            <span style="display:inline-block; width:8px; height:8px; background-color:#ef4444; border-radius:50%; animation: pulse 1.5s infinite;"></span>
            실시간 경기 스코어
          </h3>
          <p class="subtitle">코트별 매치 현황</p>
          <div class="match-list mt-4">${liveCards}</div>
        </div>
      `;
    }
    
    container.innerHTML = `
      ${liveScoreSection}
      <div class="glass-card">
        <h3>일자별 전체 일정</h3>
        <p class="subtitle">날짜를 탭하여 일정을 전환하세요.</p>
        <div class="schedule-day-tabs mt-4" id="schedule-day-tabs">
          ${daysTabsHtml}
        </div>
        <div class="match-list mt-4" id="schedule-matches-container">
          ${defaultDayMatchesHtml}
        </div>
      </div>
    `;
  }
  else if (tabName === 'bracket') {
    // Generate crisp vectors for brackets dynamically!
    let bracketContent = '';
    
    if (t.bracketType === 'tennis-singles') {
      // 8-player bracket as high-resolution SVG!
      bracketContent = `
        <div class="glass-card">
          <h3>🏆 토너먼트 본선 대진표 (8강)</h3>
          <p class="subtitle">대진표를 탭하여 줌 가능한 원본 뷰어로 보실 수 있습니다.</p>
          <div class="bracket-preview mt-4" onclick="openBracketModal('${t.title}')">
            <!-- Render miniature SVG bracket -->
            <svg width="100%" height="100%" viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" style="background:#111827; padding: 10px;">
              <!-- 8강 선수 노드 -->
              <!-- 1경기 -->
              <rect x="20" y="20" width="110" height="26" rx="4" fill="#1f2937" stroke="#374151" stroke-width="1"/>
              <text x="30" y="38" fill="#f3f4f6" font-size="11" font-family="Noto Sans KR">홍길동 (1시드)</text>
              <rect x="20" y="50" width="110" height="26" rx="4" fill="#1f2937" stroke="#374151" stroke-width="1"/>
              <text x="30" y="68" fill="#9ca3af" font-size="11" font-family="Noto Sans KR">이철수</text>
              <path d="M 130 33 L 160 33 L 160 63 L 130 63 M 160 48 L 190 48" fill="none" stroke="#3b82f6" stroke-width="2"/>
              
              <!-- 2경기 -->
              <rect x="20" y="100" width="110" height="26" rx="4" fill="#1f2937" stroke="#374151" stroke-width="1"/>
              <text x="30" y="118" fill="#9ca3af" font-size="11" font-family="Noto Sans KR">김민준</text>
              <rect x="20" y="130" width="110" height="26" rx="4" fill="#1f2937" stroke="#374151" stroke-width="1"/>
              <text x="30" y="148" fill="#f3f4f6" font-size="11" font-family="Noto Sans KR">박성하</text>
              <path d="M 130 113 L 160 113 L 160 143 L 130 143 M 160 128 L 190 128" fill="none" stroke="#3b82f6" stroke-width="2"/>

              <!-- 4강 1경기 연결선 -->
              <rect x="190" y="35" width="110" height="26" rx="4" fill="#1f2937" stroke="#3b82f6" stroke-width="1"/>
              <text x="200" y="53" fill="#f3f4f6" font-size="11" font-family="Noto Sans KR" font-weight="bold">홍길동</text>
              <rect x="190" y="115" width="110" height="26" rx="4" fill="#1f2937" stroke="#374151" stroke-width="1"/>
              <text x="200" y="133" fill="#9ca3af" font-size="11" font-family="Noto Sans KR">박성하</text>
              <path d="M 300 48 L 330 48 L 330 128 L 300 128 M 330 88 L 370 88" fill="none" stroke="#3b82f6" stroke-width="2"/>

              <!-- 3경기 -->
              <rect x="20" y="180" width="110" height="26" rx="4" fill="#1f2937" stroke="#374151" stroke-width="1"/>
              <text x="30" y="198" fill="#f3f4f6" font-size="11" font-family="Noto Sans KR">최정우 (3시드)</text>
              <rect x="20" y="210" width="110" height="26" rx="4" fill="#1f2937" stroke="#374151" stroke-width="1"/>
              <text x="30" y="228" fill="#9ca3af" font-size="11" font-family="Noto Sans KR">정하늘</text>
              <path d="M 130 193 L 160 193 L 160 223 L 130 223 M 160 208 L 190 208" fill="none" stroke="#3b82f6" stroke-width="2"/>
              
              <!-- 4경기 -->
              <rect x="20" y="260" width="110" height="26" rx="4" fill="#1f2937" stroke="#374151" stroke-width="1"/>
              <text x="30" y="278" fill="#9ca3af" font-size="11" font-family="Noto Sans KR">이민재</text>
              <rect x="20" y="280" width="110" height="26" rx="4" fill="#1f2937" stroke="#374151" stroke-width="1"/>
              <text x="30" y="298" fill="#f3f4f6" font-size="11" font-family="Noto Sans KR">김선우 (2시드)</text>
              <path d="M 130 273 L 160 273 L 160 303 L 130 303 M 160 288 L 190 288" fill="none" stroke="#3b82f6" stroke-width="2"/>

              <!-- 4강 2경기 연결선 -->
              <rect x="190" y="195" width="110" height="26" rx="4" fill="#1f2937" stroke="#3b82f6" stroke-width="1"/>
              <text x="200" y="213" fill="#f3f4f6" font-size="11" font-family="Noto Sans KR" font-weight="bold">최정우</text>
              <rect x="190" y="275" width="110" height="26" rx="4" fill="#1f2937" stroke="#374151" stroke-width="1"/>
              <text x="200" y="293" fill="#f3f4f6" font-size="11" font-family="Noto Sans KR">김선우</text>
              <path d="M 300 208 L 330 208 L 330 288 L 300 288 M 330 248 L 370 248" fill="none" stroke="#3b82f6" stroke-width="2"/>

              <!-- 결승 매치 -->
              <rect x="370" y="75" width="110" height="26" rx="4" fill="#1f2937" stroke="#3b82f6" stroke-width="1"/>
              <text x="380" y="93" fill="#f3f4f6" font-size="11" font-family="Noto Sans KR">홍길동</text>
              <rect x="370" y="235" width="110" height="26" rx="4" fill="#1f2937" stroke="#3b82f6" stroke-width="1"/>
              <text x="380" y="253" fill="#f3f4f6" font-size="11" font-family="Noto Sans KR">최정우</text>
              <path d="M 480 88 L 510 88 L 510 168 L 480 168 M 510 128 L 530 128" fill="none" stroke="#f59e0b" stroke-width="2"/>

              <!-- 우승자 트로피 -->
              <rect x="530" y="113" width="60" height="30" rx="6" fill="#f59e0b" stroke="#d97706" stroke-width="1"/>
              <text x="548" y="132" fill="#090d16" font-size="11" font-family="Noto Sans KR" font-weight="900">👑 우승</text>
            </svg>
            <div class="bracket-overlay">
              <i data-lucide="zoom-in"></i>
              <span style="font-size:12px; font-weight:700;">크게 보기 및 다운로드</span>
            </div>
          </div>
          <div class="mt-4">
            <button class="btn btn-sports" onclick="downloadBracketMock('${t.title}')">
              <i data-lucide="download"></i> 대진표 PDF 파일 다운로드
            </button>
          </div>
        </div>
      `;
    } else if (t.bracketType === 'soccer-groups') {
      bracketContent = `
        <div class="glass-card">
          <h3>⚽ 예선 리그 조 편성표</h3>
          <p class="subtitle">A, B조 8개 유소년 팀 편성 정보</p>
          <div class="flex-col gap-12" style="font-size: 13px; line-height: 1.6; margin-top: 10px;">
            <div style="background: rgba(59, 130, 246, 0.05); padding: 12px; border-radius: 8px; border: 1px solid rgba(59, 130, 246, 0.15);">
              <strong style="color: var(--sports-primary); font-size:14px;">A조</strong>
              <ol style="margin-left: 20px; margin-top: 6px; color: var(--text-secondary);">
                <li>FC 양구 유소년 (강원)</li>
                <li>서울 슛돌이 FC (서울)</li>
                <li>인천 네오축구단 (인천)</li>
                <li>춘천 유나이티드 (강원)</li>
              </ol>
            </div>
            <div style="background: rgba(6, 182, 212, 0.05); padding: 12px; border-radius: 8px; border: 1px solid rgba(6, 182, 212, 0.15);">
              <strong style="color: var(--sports-secondary); font-size:14px;">B조</strong>
              <ol style="margin-left: 20px; margin-top: 6px; color: var(--text-secondary);">
                <li>대전 싸이커스 U12 (대전)</li>
                <li>경기 주니어클럽 (경기)</li>
                <li>대구 레오파드 FC (대구)</li>
                <li>양구 드림 FC (강원)</li>
              </ol>
            </div>
          </div>
          <div class="mt-4">
            <button class="btn btn-outline" onclick="showToast('대진표가 아직 작성 전입니다. 대회 전일 등록됩니다.')" style="width: 100%;">
              <i data-lucide="clock"></i> 세부 토너먼트 대진표 대기중
            </button>
          </div>
        </div>
      `;
    } else if (t.bracketType === 'tball-bracket') {
      bracketContent = `
        <div class="glass-card">
          <h3>⚾ 전국 초등 티볼 예선 조 편성</h3>
          <p class="subtitle">티볼 리그전 조 편성 현황</p>
          <div class="flex-col gap-12" style="font-size: 13px; line-height: 1.6; margin-top: 10px;">
            <div style="background: rgba(59, 130, 246, 0.05); padding: 12px; border-radius: 8px; border: 1px solid rgba(59, 130, 246, 0.15);">
              <strong style="color: var(--sports-primary); font-size:14px;">예선 A조</strong>
              <div style="margin-top: 6px; color: var(--text-secondary);">초등 A팀, 초등 B팀, 초등 C팀, 초등 D팀</div>
            </div>
            <div style="background: rgba(6, 182, 212, 0.05); padding: 12px; border-radius: 8px; border: 1px solid rgba(6, 182, 212, 0.15);">
              <strong style="color: var(--sports-secondary); font-size:14px;">예선 B조</strong>
              <div style="margin-top: 6px; color: var(--text-secondary);">초등 E팀, 초등 F팀, 초등 G팀, 초등 H팀</div>
            </div>
          </div>
        </div>
      `;
    } else if (t.bracketType === 'badminton-bracket') {
      bracketContent = `
        <div class="glass-card">
          <h3>🏸 개인전/단체전 토너먼트 대진표</h3>
          <p class="subtitle">배드민턴 대진 정보</p>
          <div class="flex-col gap-8" style="margin-top:10px;">
            <div class="util-btn" onclick="showToast('대진표를 다운로드합니다.')">
              <i data-lucide="file-text" style="color: var(--accent-gold);"></i>
              <span>[공식] 단체전 및 개인전 대진표.pdf</span>
            </div>
          </div>
        </div>
      `;
    } else if (t.bracketType === 'wrestling-bracket') {
      bracketContent = `
        <div class="glass-card">
          <h3>🤼 체급별 토너먼트 대진 및 기록</h3>
          <p class="subtitle">체급별 공식 출전 및 대진표 다운로드</p>
          <div class="flex-col gap-8" style="margin-top:10px;">
            <div class="util-btn" onclick="showToast('대진표를 다운로드합니다.')">
              <i data-lucide="file-text" style="color: var(--accent-gold);"></i>
              <span>[공식] 대회 대진표 및 출전 선수 명단.pdf</span>
            </div>
          </div>
        </div>
      `;
    } else {
      // General match table style (e.g. weightlifting)
      bracketContent = `
        <div class="glass-card">
          <h3>🏋️ 체급별 공인 기록 대진/기록표</h3>
          <p class="subtitle">체급별 공식 출전 및 경기 기록표 파일</p>
          <div class="flex-col gap-8" style="margin-top:10px;">
            <div class="util-btn" onclick="showToast('기록지를 다운로드합니다.')">
              <i data-lucide="file-text" style="color: var(--accent-gold);"></i>
              <span>남자 일반부 체급별 출전표.pdf</span>
            </div>
            <div class="util-btn" onclick="showToast('기록지를 다운로드합니다.')">
              <i data-lucide="file-text" style="color: var(--accent-gold);"></i>
              <span>여자 일반부 체급별 출전표.pdf</span>
            </div>
          </div>
        </div>
      `;
    }
    
    container.innerHTML = bracketContent;
  }
  else if (tabName === 'location') {
    container.innerHTML = `
      <div class="glass-card">
        <h3>📍 경기장 안내</h3>
        <p class="subtitle">양구 최신 경기 시설 정보</p>
        <div class="map-box">
          <iframe class="map-iframe" src="https://maps.google.com/maps?q=${encodeURIComponent(t.address)}&t=&z=16&ie=UTF8&iwloc=&output=embed" loading="lazy"></iframe>
          <div class="map-info-title">${t.venue}</div>
          <div class="map-address">
            <strong>주소:</strong> ${t.address}
          </div>
          <div class="map-actions">
            <button class="btn btn-outline" onclick="copyAddress('${t.address}')">
              <i data-lucide="copy"></i> 주소 복사
            </button>
            <a href="${t.mapUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sports">
              <i data-lucide="map"></i> 네이버 지도 앱 길찾기
            </a>
          </div>
        </div>
      </div>
    `;
  }
  
  lucide.createIcons();
}

function switchScheduleDay(button, dayIndex) {
  // Toggle day buttons active state
  document.querySelectorAll('.day-tab').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
  
  const t = TOURNAMENTS_DATA.find(item => item.id === selectedTournamentId);
  if (!t) return;
  
  const schedule = t.schedules[dayIndex];
  const container = document.getElementById('schedule-matches-container');
  container.innerHTML = '';
  
  schedule.matches.forEach(m => {
    container.innerHTML += `
      <div class="match-card">
        <div class="match-teams" style="font-size:13px; color: var(--text-primary); font-weight:500;">
          <i data-lucide="check-square" style="width:16px; height:16px; color: var(--sports-primary); margin-right:8px; display:inline-block; vertical-align:middle;"></i>
          <span>${m}</span>
        </div>
      </div>
    `;
  });
  
  lucide.createIcons();
}

// ==================== MILITARY SECTION LOGIC ====================

function renderMilitaryUnitTabs() {
  const container = document.getElementById('military-unit-tabs');
  container.innerHTML = '';
  
  MILITARY_UNITS.forEach(unit => {
    const tabBtn = document.createElement('button');
    tabBtn.className = `mil-tab ${unit.id === activeMilitaryUnitId ? 'active' : ''}`;
    tabBtn.textContent = unit.name;
    tabBtn.onclick = () => {
      activeMilitaryUnitId = unit.id;
      document.querySelectorAll('.mil-tab').forEach(b => b.classList.remove('active'));
      tabBtn.classList.add('active');
      renderMilitaryContent();
    };
    container.appendChild(tabBtn);
  });
}

function switchMilSubTab(subTabName) {
  activeMilSubTab = subTabName;
  
  // Update UI active buttons
  const tabs = document.querySelectorAll('.mil-sub-tab');
  tabs.forEach(tab => {
    tab.classList.remove('active');
    tab.classList.remove('military-theme');
    
    if (tab.textContent === getMilTabLabel(subTabName)) {
      tab.classList.add('active');
    }
  });
  
  // Toggle Visibility of sub tabs content
  const contents = [
    document.getElementById('mil-tab-ceremony'),
    document.getElementById('mil-tab-checklist'),
    document.getElementById('mil-tab-pension'),
    document.getElementById('mil-tab-food')
  ];
  
  contents.forEach(c => {
    if (c) c.classList.remove('active');
  });
  
  const activeContent = document.getElementById(`mil-tab-${subTabName}`);
  if (activeContent) {
    activeContent.classList.add('active');
  }
  
  renderMilitaryContent();
}

function getMilTabLabel(subTabName) {
  switch (subTabName) {
    case 'ceremony': return '수료식 안내';
    case 'checklist': return '면회 준비물';
    case 'pension': return '주변 펜션';
    case 'food': return '주변 맛집';
    default: return '';
  }
}

function renderMilitaryContent() {
  const u = MILITARY_UNITS.find(unit => unit.id === activeMilitaryUnitId);
  if (!u) return;
  
  // Render based on current sub-tab
  if (activeMilSubTab === 'ceremony') {
    const container = document.getElementById('mil-tab-ceremony');
    container.innerHTML = `
      <div class="glass-card">
        <h3>📅 차기 수료식 및 장소 안내</h3>
        <p class="subtitle" style="margin-bottom: 12px;">공식 수료 일정 정보</p>
        <div class="flex-col gap-12" style="font-size: 13.5px; line-height: 1.6;">
          <div>
            <strong style="color: var(--military-primary);">다음 수료식:</strong> 
            <span style="color: white; font-weight:700;">${u.nextCeremony}</span>
          </div>
          <div>
            <strong style="color: var(--military-primary);">행사 장소:</strong> 
            <span style="color: var(--text-secondary);">${u.location}</span>
          </div>
          <div>
            <strong style="color: var(--military-primary);">위병소 개방:</strong> 
            <span style="color: var(--text-secondary);">${u.gateTime}</span>
          </div>
          <div>
            <strong style="color: var(--military-primary);">부대 문의처:</strong> 
            <span style="color: var(--text-secondary);">${u.contacts}</span>
          </div>
        </div>
      </div>

      <div class="glass-card">
        <h3>📍 수료식장(신병교육대) 위치 및 딥링크</h3>
        <p class="subtitle">위치안내 및 지도 서비스 연동</p>
        <div class="map-box">
          <iframe class="map-iframe" src="https://maps.google.com/maps?q=${encodeURIComponent(u.address)}&t=&z=16&ie=UTF8&iwloc=&output=embed" loading="lazy"></iframe>
          <div class="map-info-title">${u.name}</div>
          <div class="map-address">${u.address}</div>
          <div class="map-actions">
            <button class="btn btn-outline" onclick="copyAddress('${u.address}')">
              <i data-lucide="copy"></i> 주소 복사
            </button>
            <a href="${u.mapUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-military">
              <i data-lucide="navigation"></i> 내비게이션 길찾기
            </a>
          </div>
        </div>
      </div>
    `;
  }
  else if (activeMilSubTab === 'checklist') {
    renderChecklist();
  }
  else if (activeMilSubTab === 'pension') {
    renderPensionList(document.getElementById('pension-search').value);
  }
  else if (activeMilSubTab === 'food') {
    renderFoodList(document.getElementById('food-search').value);
  }
  
  lucide.createIcons();
}

// Checklist logic using LocalStorage
function initChecklistState() {
  MILITARY_UNITS.forEach(unit => {
    unit.checklist.forEach(item => {
      const storageKey = `yg_chk_${unit.id}_${item.id}`;
      if (localStorage.getItem(storageKey) === null) {
        localStorage.setItem(storageKey, item.defaultChecked ? 'true' : 'false');
      }
    });
  });
}

function renderChecklist() {
  const u = MILITARY_UNITS.find(unit => unit.id === activeMilitaryUnitId);
  if (!u) return;
  
  const container = document.getElementById('checklist-container');
  container.innerHTML = '';
  
  u.checklist.forEach(item => {
    const storageKey = `yg_chk_${u.id}_${item.id}`;
    const isChecked = localStorage.getItem(storageKey) === 'true';
    
    const div = document.createElement('div');
    div.className = `checklist-item ${isChecked ? 'checked' : ''}`;
    div.onclick = () => toggleChecklist(u.id, item.id);
    
    div.innerHTML = `
      <div class="checklist-checkbox">
        <i data-lucide="check" style="width: 14px; height: 14px;"></i>
      </div>
      <span class="checklist-text">${item.text}</span>
    `;
    container.appendChild(div);
  });
  
  lucide.createIcons();
}

function toggleChecklist(unitId, itemId) {
  const storageKey = `yg_chk_${unitId}_${itemId}`;
  const currentValue = localStorage.getItem(storageKey) === 'true';
  localStorage.setItem(storageKey, (!currentValue).toString());
  
  renderChecklist();
  
  if (!currentValue) {
    showToast("체크 완료! 남은 준비물도 확인하세요.");
  }
}

// Pension and Food Lists
function renderPensionList(query = '') {
  const u = MILITARY_UNITS.find(unit => unit.id === activeMilitaryUnitId);
  if (!u) return;
  
  const container = document.getElementById('pension-list-container');
  container.innerHTML = '';
  
  const filtered = u.pensions.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
  
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="glass-card text-center" style="padding: 20px;">
        <p style="color: var(--text-muted); font-size: 13px;">해당 조건의 펜션이 없습니다.</p>
      </div>
    `;
    return;
  }
  
  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'directory-card';
    
    card.innerHTML = `
      <div style="width: 80px; height: 80px; border-radius: 6px; background: linear-gradient(135deg, #1b263b, #090d16); display:flex; justify-content:center; align-items:center;">
        <i data-lucide="home" style="width:32px; height:32px; color: var(--military-primary); opacity:0.6;"></i>
      </div>
      <div class="directory-info">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="directory-name">${p.name}</span>
            <a href="tel:${p.tel}" class="directory-call-btn"><i data-lucide="phone" style="width:14px; height:14px;"></i></a>
          </div>
          <div class="directory-tag">면회객 우대 혜택</div>
          <p class="directory-desc">${p.desc}</p>
        </div>
        <div class="directory-meta">
          <span><i data-lucide="map-pin"></i> ${p.distance}</span>
          <span><i data-lucide="star" class="star" style="fill: var(--accent-gold);"></i> ${p.rating}</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
  lucide.createIcons();
}

function renderFoodList(query = '') {
  const u = MILITARY_UNITS.find(unit => unit.id === activeMilitaryUnitId);
  if (!u) return;
  
  const container = document.getElementById('food-list-container');
  container.innerHTML = '';
  
  const filtered = u.restaurants.filter(r => r.name.toLowerCase().includes(query.toLowerCase()) || r.category.toLowerCase().includes(query.toLowerCase()));
  
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="glass-card text-center" style="padding: 20px;">
        <p style="color: var(--text-muted); font-size: 13px;">해당 조건의 식당이 없습니다.</p>
      </div>
    `;
    return;
  }
  
  filtered.forEach(r => {
    const card = document.createElement('div');
    card.className = 'directory-card';
    
    card.innerHTML = `
      <div style="width: 80px; height: 80px; border-radius: 6px; background: linear-gradient(135deg, #1b263b, #090d16); display:flex; justify-content:center; align-items:center;">
        <i data-lucide="utensils" style="width:32px; height:32px; color: var(--military-primary); opacity:0.6;"></i>
      </div>
      <div class="directory-info">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="directory-name">${r.name} (${r.category})</span>
            <a href="tel:${r.tel}" class="directory-call-btn"><i data-lucide="phone" style="width:14px; height:14px;"></i></a>
          </div>
          <div class="directory-tag">군장병 혜택</div>
          <p class="directory-desc">${r.desc}</p>
        </div>
        <div class="directory-meta">
          <span style="color: var(--military-primary); font-weight:500;">${r.benefits}</span>
          <span><i data-lucide="star" class="star" style="fill: var(--accent-gold);"></i> ${r.rating}</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
  lucide.createIcons();
}

function renderCafeList(query = '') {
  const container = document.getElementById('cafe-list-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  const filtered = CAFES_DATA.filter(c => 
    c.name.toLowerCase().includes(query.toLowerCase()) || 
    c.type.toLowerCase().includes(query.toLowerCase()) ||
    c.desc.toLowerCase().includes(query.toLowerCase())
  );
  
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="glass-card text-center" style="padding: 20px;">
        <p style="color: var(--text-muted); font-size: 13px;">해당 조건의 카페가 없습니다.</p>
      </div>
    `;
    return;
  }
  
  filtered.forEach(c => {
    const card = document.createElement('div');
    card.className = 'directory-card';
    
    card.innerHTML = `
      <div style="width: 80px; height: 80px; border-radius: 6px; background: linear-gradient(135deg, #1b263b, #090d16); display:flex; justify-content:center; align-items:center; flex-shrink: 0;">
        <i data-lucide="coffee" style="width:32px; height:32px; color: var(--military-primary); opacity:0.6;"></i>
      </div>
      <div class="directory-info">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; gap: 8px;">
            <span class="directory-name">${c.name} <span style="font-size: 11px; font-weight: normal; color: var(--text-secondary);">(${c.type})</span></span>
            <a href="tel:${c.contact}" class="directory-call-btn"><i data-lucide="phone" style="width:14px; height:14px;"></i></a>
          </div>
          <div class="directory-tag" style="background: rgba(216, 252, 56, 0.08); color: var(--military-primary); border-color: rgba(216, 252, 56, 0.2);">추천 포인트</div>
          <p class="directory-desc">${c.desc}</p>
        </div>
        <div class="directory-meta">
          <span style="color: var(--text-primary); font-weight:500;">${c.benefits}</span>
          <span style="display: flex; align-items: center; gap: 4px;">
            <i data-lucide="star" class="star" style="fill: var(--accent-gold); width: 12px; height: 12px;"></i> ${c.rating}
            <button onclick="copyAddress('${c.address}')" class="btn-copy-address" style="margin-left: 8px; font-size: 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--border-color); color: var(--text-secondary); padding: 2px 6px; border-radius: 4px; cursor: pointer;">주소 복사</button>
          </span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
  lucide.createIcons();
}

// ==================== UTILITY FUNCTIONS ====================

// Address copy and Toast alert
function copyAddress(address) {
  navigator.clipboard.writeText(address).then(() => {
    showToast("주소가 클립보드에 복사되었습니다!");
  }).catch(() => {
    // Fallback copy method
    const textarea = document.createElement('textarea');
    textarea.value = address;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showToast("주소가 복사되었습니다!");
    } catch (err) {
      showToast("복사 실패. 직접 복사해 주세요.");
    }
    document.body.removeChild(textarea);
  });
}

function showToast(message, isSports = false) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  const toastIcon = document.getElementById('toast-icon-type');
  
  toastMsg.textContent = message;
  
  if (isSports) {
    toastIcon.className = "toast-icon sports-theme";
    toastIcon.setAttribute('data-lucide', 'trophy');
  } else {
    toastIcon.className = "toast-icon";
    toastIcon.setAttribute('data-lucide', 'check');
  }
  
  lucide.createIcons();
  
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// ==================== BRACKET MODAL LOGIC ====================

function openBracketModal(title) {
  const modal = document.getElementById('bracket-modal');
  document.getElementById('modal-title').textContent = title;
  
  // Set vector svg inside the modal container
  const imgContainer = document.getElementById('modal-img-container');
  imgContainer.innerHTML = `
    <svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" style="background:#111827; padding: 20px; border-radius: 8px;">
      <!-- Title -->
      <text x="300" y="30" fill="#ffffff" font-size="16" font-family="Noto Sans KR" font-weight="900" text-anchor="middle">토너먼트 본선 8강 세부 대진표</text>
      
      <!-- 8강 선수 노드 -->
      <!-- 1경기 -->
      <rect x="20" y="60" width="120" height="30" rx="4" fill="#1f2937" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="30" y="80" fill="#f3f4f6" font-size="11" font-family="Noto Sans KR" font-weight="bold">홍길동 (1시드)</text>
      <rect x="20" y="100" width="120" height="30" rx="4" fill="#1f2937" stroke="#374151" stroke-width="1"/>
      <text x="30" y="120" fill="#9ca3af" font-size="11" font-family="Noto Sans KR">이철수</text>
      <path d="M 140 75 L 180 75 L 180 115 L 140 115 M 180 95 L 220 95" fill="none" stroke="#3b82f6" stroke-width="2"/>
      
      <!-- 2경기 -->
      <rect x="20" y="150" width="120" height="30" rx="4" fill="#1f2937" stroke="#374151" stroke-width="1"/>
      <text x="30" y="170" fill="#9ca3af" font-size="11" font-family="Noto Sans KR">김민준</text>
      <rect x="20" y="190" width="120" height="30" rx="4" fill="#1f2937" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="30" y="210" fill="#f3f4f6" font-size="11" font-family="Noto Sans KR" font-weight="bold">박성하</text>
      <path d="M 140 165 L 180 165 L 180 205 L 140 205 M 180 185 L 220 185" fill="none" stroke="#3b82f6" stroke-width="2"/>

      <!-- 4강 1경기 -->
      <rect x="220" y="80" width="120" height="30" rx="4" fill="#1f2937" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="230" y="100" fill="#f3f4f6" font-size="11" font-family="Noto Sans KR" font-weight="bold">홍길동</text>
      <rect x="220" y="170" width="120" height="30" rx="4" fill="#1f2937" stroke="#374151" stroke-width="1"/>
      <text x="230" y="190" fill="#9ca3af" font-size="11" font-family="Noto Sans KR">박성하</text>
      <path d="M 340 95 L 380 95 L 380 205 L 340 205 M 380 150 L 420 150" fill="none" stroke="#3b82f6" stroke-width="2"/>

      <!-- 3경기 -->
      <rect x="20" y="240" width="120" height="30" rx="4" fill="#1f2937" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="30" y="260" fill="#f3f4f6" font-size="11" font-family="Noto Sans KR" font-weight="bold">최정우 (3시드)</text>
      <rect x="20" y="280" width="120" height="30" rx="4" fill="#1f2937" stroke="#374151" stroke-width="1"/>
      <text x="30" y="280" fill="#9ca3af" font-size="11" font-family="Noto Sans KR">정하늘</text>
      <path d="M 140 255 L 180 255 L 180 295 L 140 295 M 180 275 L 220 275" fill="none" stroke="#3b82f6" stroke-width="2"/>
      
      <!-- 4경기 -->
      <rect x="20" y="330" width="120" height="30" rx="4" fill="#1f2937" stroke="#374151" stroke-width="1"/>
      <text x="30" y="350" fill="#9ca3af" font-size="11" font-family="Noto Sans KR">이민재</text>
      <rect x="20" y="350" width="120" height="30" rx="4" fill="#1f2937" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="30" y="370" fill="#f3f4f6" font-size="11" font-family="Noto Sans KR" font-weight="bold">김선우 (2시드)</text>
      <path d="M 140 335 L 180 335 L 180 375 L 140 375 M 180 355 L 220 355" fill="none" stroke="#3b82f6" stroke-width="2"/>

      <!-- 4강 2경기 -->
      <rect x="220" y="260" width="120" height="30" rx="4" fill="#1f2937" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="230" y="280" fill="#f3f4f6" font-size="11" font-family="Noto Sans KR" font-weight="bold">최정우</text>
      <rect x="220" y="340" width="120" height="30" rx="4" fill="#1f2937" stroke="#374151" stroke-width="1"/>
      <text x="230" y="360" fill="#9ca3af" font-size="11" font-family="Noto Sans KR">김선우</text>
      <path d="M 340 275 L 380 275 L 380 355 L 340 355 M 380 315 L 420 315" fill="none" stroke="#3b82f6" stroke-width="2"/>

      <!-- 결승 매치 -->
      <rect x="420" y="135" width="120" height="30" rx="4" fill="#1f2937" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="430" y="155" fill="#f3f4f6" font-size="11" font-family="Noto Sans KR">홍길동</text>
      <rect x="420" y="300" width="120" height="30" rx="4" fill="#1f2937" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="430" y="320" fill="#f3f4f6" font-size="11" font-family="Noto Sans KR">최정우</text>
      <path d="M 540 150 L 570 150 L 570 232.5 L 540 232.5 M 570 191.25 L 580 191.25" fill="none" stroke="#f59e0b" stroke-width="2"/>

      <!-- 결승선 연결 및 우승자 -->
      <path d="M 540 150 Q 570 150 570 232.5 Q 570 315 540 315" fill="none" stroke="#f59e0b" stroke-width="2"/>
      <line x1="570" y1="232.5" x2="590" y2="232.5" stroke="#f59e0b" stroke-width="2"/>
    </svg>
  `;
  
  modal.classList.add('active');
  resetZoomBracket();
}

function closeBracketModal() {
  const modal = document.getElementById('bracket-modal');
  modal.classList.remove('active');
}

function downloadBracketMock(title) {
  showToast("대진표 다운로드가 시작되었습니다.", true);
}

// Drag & Zoom Controls for Bracket
function zoomBracket(factor) {
  zoomScale = Math.max(0.5, Math.min(3.0, zoomScale + factor));
  updateModalTransform();
}

function resetZoomBracket() {
  zoomScale = 1.0;
  translateX = 0;
  translateY = 0;
  updateModalTransform();
}

function updateModalTransform() {
  const container = document.getElementById('modal-img-container');
  container.style.transform = `translate(${translateX}px, ${translateY}px) scale(${zoomScale})`;
}

function setupModalDragEvents() {
  const container = document.getElementById('modal-img-container');
  const modalBody = document.getElementById('modal-body');
  
  modalBody.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
  });
  
  window.addEventListener('mouseup', () => {
    isDragging = false;
  });
  
  modalBody.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    updateModalTransform();
  });
  
  // Touch Events support for Mobile devices
  modalBody.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      startX = e.touches[0].clientX - translateX;
      startY = e.touches[0].clientY - translateY;
    }
  }, { passive: true });
  
  modalBody.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    if (e.touches.length === 1) {
      translateX = e.touches[0].clientX - startX;
      translateY = e.touches[0].clientY - startY;
      updateModalTransform();
    }
  }, { passive: true });
  
  modalBody.addEventListener('touchend', () => {
    isDragging = false;
  });
}

// ==================== SCROLL & SLIDER CONTROLS ====================

function setupScrollControls() {
  const mainEl = document.querySelector('main');
  const progressBar = document.getElementById('scroll-progress');
  const scrollTopBtn = document.getElementById('scroll-to-top');

  if (mainEl && progressBar && scrollTopBtn) {
    mainEl.addEventListener('scroll', () => {
      // Calculate scroll progress percentage
      const totalScrollHeight = mainEl.scrollHeight - mainEl.clientHeight;
      if (totalScrollHeight > 0) {
        const scrollPercent = (mainEl.scrollTop / totalScrollHeight) * 100;
        progressBar.style.width = `${scrollPercent}%`;
      } else {
        progressBar.style.width = '0%';
      }

      // Show/Hide Scroll to Top FAB
      if (mainEl.scrollTop > 200) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    });
  }
}

function scrollToTop() {
  const mainEl = document.querySelector('main');
  if (mainEl) {
    mainEl.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

function scrollSlider(sliderId, offset) {
  const slider = document.getElementById(sliderId);
  if (slider) {
    slider.scrollBy({
      left: offset,
      behavior: 'smooth'
    });
  }
}

// Fetch real-time weather from Open-Meteo (Yanggu-eup coordinates)
async function updateRealTimeWeather() {
  const weatherWidget = document.getElementById('weather-widget');
  if (!weatherWidget) return;

  // Make it interactive: click to open official KMA Yanggu-eup weather site
  weatherWidget.style.cursor = 'pointer';
  weatherWidget.title = '기상청 상세 날씨 보기 (새 창)';
  weatherWidget.onclick = () => {
    window.open('https://www.weather.go.kr/w/index.do#dong/5180025000/38.1100012808218/127.989950629022/%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%96%91%EA%B5%AC%EA%B5%B0%20%EC%96%91%EA%B5%AC%EC%9D%8D/SCH/%EC%96%91%EA%B5%AC%EC%9D%8D', '_blank');
  };

  try {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=38.1100&longitude=127.9900&current=temperature_2m,weather_code,relative_humidity_2m&timezone=Asia/Seoul');
    if (!response.ok) throw new Error('Weather API error');
    
    const data = await response.json();
    const temp = Math.round(data.current.temperature_2m);
    const code = data.current.weather_code;
    const humidity = data.current.relative_humidity_2m;
    
    const weatherInfo = mapWMOCodeToKorean(code);
    
    // Suggest guides based on real weather
    let activityGuide = '운동하기 좋은 날씨입니다.';
    if (code >= 50) {
      activityGuide = '비/눈 예보가 있으니 실내 시설을 권장합니다.';
    } else if (temp >= 30) {
      activityGuide = '폭염 주의! 야외 활동 시 수분을 충분히 섭취하세요.';
    } else if (temp <= 2) {
      activityGuide = '쌀쌀한 날씨, 야외 관람 시 방한 대책을 세우세요.';
    } else {
      activityGuide = `${weatherInfo.desc} • 습도 ${humidity}% • 운동하기 좋은 날씨`;
    }

    weatherWidget.innerHTML = `
      <div class="weather-info">
        <div class="weather-temp">${temp}°C</div>
        <div class="weather-details">
          <div class="weather-loc">강원특별자치도 양구군 (실시간)</div>
          <div class="weather-desc">${activityGuide}</div>
        </div>
      </div>
      <div class="weather-icon-placeholder">${weatherInfo.emoji}</div>
    `;
  } catch (error) {
    console.error('Failed to fetch real-time weather:', error);
    // Fallback clickable mockup
    weatherWidget.innerHTML = `
      <div class="weather-info">
        <div class="weather-temp">18°C</div>
        <div class="weather-details">
          <div class="weather-loc">강원특별자치도 양구군</div>
          <div class="weather-desc">클릭하시면 기상청 실시간 상세 날씨 페이지로 이동합니다.</div>
        </div>
      </div>
      <div class="weather-icon-placeholder">☀️</div>
    `;
  }
}

function mapWMOCodeToKorean(code) {
  if (code === 0) return { desc: '맑음', emoji: '☀️' };
  if (code === 1) return { desc: '대체로 맑음', emoji: '🌤️' };
  if (code === 2) return { desc: '구름 조금', emoji: '⛅' };
  if (code === 3) return { desc: '흐림', emoji: '☁️' };
  if (code === 45 || code === 48) return { desc: '안개', emoji: '🌫️' };
  if (code >= 51 && code <= 55) return { desc: '이슬비', emoji: '🌦️' };
  if (code >= 56 && code <= 57) return { desc: '얼어붙는 이슬비', emoji: '🌨️' };
  if (code === 61) return { desc: '약한 비', emoji: '🌧️' };
  if (code === 63) return { desc: '보통 비', emoji: '🌧️' };
  if (code === 65) return { desc: '강한 비', emoji: '☔' };
  if (code >= 66 && code <= 67) return { desc: '찬 비', emoji: '🌨️' };
  if (code === 71) return { desc: '약한 눈', emoji: '❄️' };
  if (code === 73) return { desc: '보통 눈', emoji: '❄️' };
  if (code === 75) return { desc: '강한 눈', emoji: '☃️' };
  if (code === 77) return { desc: '싸락눈', emoji: '🌨️' };
  if (code >= 80 && code <= 82) return { desc: '소나기', emoji: '🌦️' };
  if (code >= 85 && code <= 86) return { desc: '소낙눈', emoji: '🌨️' };
  if (code === 95) return { desc: '천둥번개', emoji: '⛈️' };
  if (code >= 96 && code <= 99) return { desc: '우박을 동반한 뇌우', emoji: '⛈️' };
  return { desc: '정보 없음', emoji: '☀️' };
}

// ==================== THEME TOGGLE LOGIC ====================

function toggleTheme() {
  const isLight = document.body.classList.toggle('light-mode');
  const theme = isLight ? 'light' : 'dark';
  localStorage.setItem('yg-theme', theme);
  updateThemeIcon(theme);
  showToast(isLight ? "밝은 모드로 전환되었습니다." : "어두운 모드로 전환되었습니다.");
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  
  if (theme === 'light') {
    icon.setAttribute('data-lucide', 'moon');
  } else {
    icon.setAttribute('data-lucide', 'sun');
  }
  lucide.createIcons();
}


