/* app.js - YG Sports Gateway MVP Logic */

// ==================== MOCK DATA ====================

const TOURNAMENTS_DATA = [
  {
    id: 1,
    title: "제24회 양구 국토정중앙배 전국 동호인 테니스 대회",
    status: "ongoing", // ongoing, upcoming, completed
    statusKo: "진행중",
    category: "테니스",
    date: "2026.06.01 ~ 2026.06.05",
    venue: "양구 테니스파크 (실내/외 코트)",
    address: "강원특별자치도 양구군 양구읍 스포츠로 81",
    mapQuery: "양구테니스파크",
    mapUrl: "https://m.map.naver.com/search2/search.naver?query=양구테니스파크",
    kakaoMapUrl: "https://map.kakao.com/?q=양구테니스파크",
    contact: "양구군 테니스협회 (033-481-0000)",
    organizer: "양구군 체육회, 양구군 테니스협회",
    description: "전국의 테니스 동호인들이 한자리에 모여 실력을 겨루는 대규모 대회입니다. 개인전 단식, 복식 및 단체전 경기가 진행됩니다.",
    schedules: [
      { day: "Day 1 (6/1)", date: "6월 1일 (월)", matches: ["남자부 단식 64강전 (09:00~18:00)", "개회식 및 환영 만찬 (18:30, 문화체육회관)"] },
      { day: "Day 2 (6/2)", date: "6월 2일 (화)", matches: ["남자부 32강전 및 16강전 (09:00~17:00)", "여자부 복식 1회전 (10:00~18:00)"] },
      { day: "Day 3 (6/3)", date: "6월 3일 (수)", matches: ["남/여 복식 본선 토너먼트 (09:30~17:00)", "혼합복식 예선전 (11:00~)"] },
      { day: "Day 4 (6/4)", date: "6월 4일 (목)", matches: ["각 부문 준결승전 (10:00~16:00)", "부문별 순위 결정전"] },
      { day: "Day 5 (6/5)", date: "6월 5일 (금)", matches: ["남/여 개인 단식/복식 결승전 (10:00~13:00)", "시상식 및 폐회식 (13:30, 시상식장)"] }
    ],
    liveMatches: [
      { id: "m1", time: "09:30", category: "남자 복식 32강 (A코트)", teams: "김태우/박준서 vs 이재현/최도현", score: "6-4, 6-3", status: "종료" },
      { id: "m2", time: "11:00", category: "여자 단식 32강 (B코트)", teams: "이지혜 vs 한소윤", score: "2-6, 1-6", status: "종료" },
      { id: "m3", time: "13:20", category: "남자 단식 32강 (C코트)", teams: "정성환 vs 최우식", score: "6-7, 6-4, 3-2", status: "진행중" },
      { id: "m4", time: "15:00", category: "남자 단식 32강 (A코트)", teams: "홍지민 vs 박성진", score: "- : -", status: "대기" },
      { id: "m5", time: "16:20", category: "여자 복식 16강 (B코트)", teams: "김도희/윤민아 vs 서유경/정혜선", score: "- : -", status: "대기" }
    ],
    bracketType: "tennis-singles",
    downloadUrl: "#"
  },
  {
    id: 2,
    title: "2026 백두산배 전국 유소년 축구 챔피언십",
    status: "upcoming",
    statusKo: "예정됨",
    category: "축구",
    date: "2026.06.12 ~ 2026.06.15",
    venue: "양구 종합운동장 및 보조구장",
    address: "강원특별자치도 양구군 양구읍 스포츠로 136",
    mapQuery: "양구종합운동장",
    mapUrl: "https://m.map.naver.com/search2/search.naver?query=양구종합운동장",
    kakaoMapUrl: "https://map.kakao.com/?q=양구종합운동장",
    contact: "양구군 축구협회 (033-482-1111)",
    organizer: "한국유소년축구연맹, 양구군 체육회",
    description: "대한민국 축구의 미래를 책임질 전국 유소년(U-12, U-10) 클럽들이 모여 자웅을 겨루는 페스티벌 형식의 축구 대회입니다.",
    schedules: [
      { day: "Day 1 (6/12)", date: "6월 12일 (금)", matches: ["예선 리그 1회전 (10:00~17:00)", "참가팀 환영 리셉션 (18:00)"] },
      { day: "Day 2 (6/13)", date: "6월 13일 (토)", matches: ["예선 리그 2회전 및 본선 진출팀 결정", "클럽 친선 교류 행사"] },
      { day: "Day 3 (6/14)", date: "6월 14일 (일)", matches: ["본선 토너먼트 (8강전 ~ 준결승전)", "이벤트 경기 (지도자/학부모 매치)"] },
      { day: "Day 4 (6/15)", date: "6월 15일 (월)", matches: ["U-10 결승전 (10:00, 종합운동장)", "U-12 결승전 (11:30, 종합운동장)", "시상식 및 폐막식 (13:00)"] }
    ],
    liveMatches: [],
    bracketType: "soccer-groups",
    downloadUrl: "#"
  },
  {
    id: 3,
    title: "제18회 한국 실업 역도 연맹회장배 역도대회",
    status: "completed",
    statusKo: "종료",
    category: "역도",
    date: "2026.05.25 ~ 2026.05.28",
    venue: "양구 용하체육관 (역도 전용 경기장)",
    address: "강원특별자치도 양구군 국토정중앙면 정중앙로 609",
    mapQuery: "용하체육관",
    mapUrl: "https://m.map.naver.com/search2/search.naver?query=용하체육관",
    kakaoMapUrl: "https://map.kakao.com/?q=용하체육관",
    contact: "대한역도연맹 (02-420-0000)",
    organizer: "한국실업역도연맹, 대한역도연맹",
    description: "대한민국 실업 강자들이 대거 출전하는 고품격 역도 대회로 올림픽 국가대표 선발 포인트가 부여되는 권위 있는 경기입니다.",
    schedules: [
      { day: "Day 1 (5/25)", date: "5월 25일 (월)", matches: ["경량급 인상/용상 예선 및 결승 (55kg, 61kg)", "남자 일반부 67kg급 경기"] },
      { day: "Day 2 (5/26)", date: "5월 26일 (화)", matches: ["중량급 경기 (73kg, 81kg, 89kg)", "여자 일반부 55kg, 59kg 경기"] },
      { day: "Day 3 (5/27)", date: "5월 27일 (수)", matches: ["무제한급 경기 (+102kg, +109kg)", "단체 종합 점수 집계"] },
      { day: "Day 4 (5/28)", date: "5월 28일 (목)", matches: ["부문별 최우수 선수 시상식 및 폐막 (11:00)"] }
    ],
    liveMatches: [],
    bracketType: "weightlifting-table",
    downloadUrl: "#"
  },
  {
    id: 4,
    title: "2026 양구 오픈 배구 선수권 대회",
    status: "upcoming",
    statusKo: "예정됨",
    category: "배구",
    date: "2026.06.22 ~ 2026.06.26",
    venue: "양구 청춘체육관",
    address: "강원특별자치도 양구군 양구읍 스포츠로 125",
    mapQuery: "양구청춘체육관",
    mapUrl: "https://m.map.naver.com/search2/search.naver?query=양구청춘체육관",
    kakaoMapUrl: "https://map.kakao.com/?q=양구청춘체육관",
    contact: "양구군 배구협회 (033-481-2222)",
    organizer: "대한배구협회, 양구군",
    description: "대학 및 실업 배구 강호들이 양구에 모여 역동적인 코트 위의 혈투를 펼치는 오픈 선수권 대회입니다.",
    schedules: [
      { day: "Day 1 (6/22)", date: "6월 22일 (월)", matches: ["조별 라운드 로빈 예선 1일차"] },
      { day: "Day 2 (6/23)", date: "6월 23일 (화)", matches: ["조별 라운드 로빈 예선 2일차"] },
      { day: "Day 3 (6/24)", date: "6월 24일 (수)", matches: ["조별 라운드 로빈 예선 3일차 및 8강 대진 결정"] },
      { day: "Day 4 (6/25)", date: "6월 25일 (목)", matches: ["토너먼트 8강 및 준결승전"] },
      { day: "Day 5 (6/26)", date: "6월 26일 (금)", matches: ["남/여부 대망의 결승전 및 시상식"] }
    ],
    liveMatches: [],
    bracketType: "volleyball-bracket",
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
  // Initialize Lucide Icons
  lucide.createIcons();
  
  // Set default active buttons on bottom nav
  updateBottomNavActiveState();
  
  // Render lists
  renderSportsCategories();
  renderTournamentList();
  renderMilitaryUnitTabs();
  renderMilitaryContent();
  
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
  
  // Initialize Checklist state from LocalStorage
  initChecklistState();

  // Setup Modal dragging/zooming event listeners
  setupModalDragEvents();

  // Setup Scroll Progress & Top Button Controls
  setupScrollControls();
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
  const categories = ['전체', '테니스', '축구', '역도', '배구'];
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
    } else {
      // General match table style
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
          <div class="map-placeholder-bg">
            <i data-lucide="navigation"></i>
            <span>양구 정밀 2D 안내 지도 (네이버 맵 연계)</span>
          </div>
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
          <div class="map-placeholder-bg military-theme">
            <i data-lucide="shield"></i>
            <span>백두산 신병교육대 정밀 지도</span>
          </div>
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

