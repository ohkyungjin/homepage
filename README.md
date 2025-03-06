# 장례식장 마케팅 서비스 랜딩 페이지

장례식장을 위한 맞춤형 마케팅 서비스 랜딩 페이지입니다. Next.js와 Tailwind CSS를 사용하여 개발되었습니다.

## 기능

- 반응형 디자인
- 모던한 UI/UX
- 다양한 섹션 (히어로, 특징, 통계, 고객 후기, 블로그, CTA)
- 모바일 친화적인 네비게이션

## 기술 스택

- Next.js 14
- TypeScript
- Tailwind CSS
- Lucide React (아이콘)

## 시작하기

### 필수 조건

- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install
# 또는
yarn install

# 개발 서버 실행
npm run dev
# 또는
yarn dev
```

개발 서버는 기본적으로 http://localhost:3000 에서 실행됩니다.

### 빌드

```bash
# 프로덕션용 빌드
npm run build
# 또는
yarn build

# 프로덕션 서버 실행
npm run start
# 또는
yarn start
```

## 프로젝트 구조

```
src/
├── app/                # Next.js 앱 디렉토리
│   ├── layout.tsx      # 루트 레이아웃
│   ├── page.tsx        # 홈페이지
│   └── globals.css     # 전역 스타일
├── components/         # 컴포넌트
│   ├── layout/         # 레이아웃 컴포넌트
│   │   ├── Header.tsx  # 헤더 컴포넌트
│   │   └── Footer.tsx  # 푸터 컴포넌트
│   └── features/       # 기능 컴포넌트
│       ├── Hero.tsx    # 히어로 섹션
│       ├── Features.tsx # 특징 섹션
│       ├── Stats.tsx   # 통계 섹션
│       ├── Testimonials.tsx # 고객 후기 섹션
│       ├── BlogGrid.tsx # 블로그 그리드 섹션
│       └── CTA.tsx     # CTA 섹션
```

## 라이센스

MIT 