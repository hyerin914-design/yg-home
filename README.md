# YG Sports Gateway MVP

양구군을 방문하는 스포츠 대회 참가자(선수, 학부모, 지도자) 및 군 장병 면회객(신병 수료식 가족, 면회객)을 위한 모바일 중심 정적 웹 플랫폼(Single Page Application)입니다.

## 🏆 주요 기능

1. **스포츠 대회 정보 (Sports Tournaments)**
   - 대회 일정 조회 및 실시간 매치 스코어(LIVE) 안내
   - 일자별 세부 일정 필터링 및 카테고리(종목)별 슬라이드 필터
   - 벡터(SVG) 기반으로 모바일 화면에서도 고화질로 확대/축소 및 드래그 이동이 가능한 대진표 뷰어
   - 경기장 상세 주소 복사 및 네이버 지도 길찾기 딥링크(Deep Link) 연동

2. **군부대 면회 안내 (Military Visitation)**
   - 21사단(백두산부대) 신병교육대대 및 사단본부/직할대 선택형 정보 노출
   - 수료식 일정, 행사 장소, 위병소 개방 시간 안내
   - 훈련소 오시는 길 주소 복사 및 내비게이션 연결
   - 면회객 필수 체크리스트 (브라우저 로컬 저장소 `localStorage` 연동으로 영구 보존)
   - 주변 군장병 우대 펜션 및 맛집 추천 리스트 (전화걸기 `tel:` 링크 및 실시간 검색 지원)

3. **양구군 관광 정보 및 대중교통 안내 (Yanggu Info)**
   - 한반도의 중앙 양구군 소개 및 양구 8경 관광 링크
   - 양구 터미널 중심의 시내/시외버스 요약 시간표
   - 긴급 연락처(양구 콜택시, 양구군청 대표전화) 바로 전화걸기 링크

## 🛠 기술 스택

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6)
- **Icons**: Lucide Icons (CDN)
- **Deployment**: GitHub Pages, Cloudflare Pages, Netlify 등 정적 호스팅 서비스에 최적화
- **금지 스택 미사용**: React, Vue, Angular, Next.js 등 프레임워크나 빌드 도구를 사용하지 않는 순수 웹 아키텍처

## 📂 파일 구조

- [index.html](file:///c:/Users/USER16/Desktop/yg-home/index.html): 단일 페이지 구조 마크업 (SPA)
- [style.css](file:///c:/Users/USER16/Desktop/yg-home/style.css): 글래스모피즘(Glassmorphism) 기반 다크/라이트 하이엔드 디자인 시스템 및 컴포넌트 스타일링
- [app.js](file:///c:/Users/USER16/Desktop/yg-home/app.js): 실시간 양구군 스포츠재단(ygsf.or.kr) 대회 데이터 연동 및 군부대 면회/편의시설 데이터 관리, 검색, 필터, 체크리스트, 대진표 줌/드래그 인터랙션 제어

## 🚀 로컬 실행 방법

이 플랫폼은 빌드 과정이나 로컬 서버 구동이 필수가 아닙니다. 브라우저에서 `index.html` 파일을 바로 더블클릭하여 실행하거나, VS Code의 Live Server 등의 정적 웹 서버 확장을 이용해 바로 확인할 수 있습니다.

### 정적 호스팅 배포 방법
1. **GitHub Pages**: 이 저장소를 GitHub에 업로드한 후, `Settings > Pages` 메뉴에서 `main` 브랜치를 지정하여 바로 배포할 수 있습니다.
2. **Netlify / Cloudflare Pages**: 프로젝트 폴더를 드래그 앤 드롭하는 방식으로 몇 초 안에 정적 웹 서비스 배포가 완료됩니다.