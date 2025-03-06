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

## GitHub Pages 배포

이 프로젝트는 GitHub Pages를 통해 배포할 수 있습니다. 파일을 수정한 후 다음 단계를 따라 재배포하세요:

### 수동 배포 방법

```bash
# 변경사항 커밋
git add .
git commit -m "변경 내용 설명"
git push origin main

# GitHub Pages에 배포
npm run deploy
```

`npm run deploy` 명령은 프로젝트를 빌드하고 `gh-pages` 브랜치에 배포합니다.

### 자동 배포 설정

이 프로젝트는 GitHub Actions를 사용하여 자동 배포가 설정되어 있습니다. `main` 브랜치에 변경사항을 푸시하면 자동으로 GitHub Pages에 배포됩니다.

1. GitHub 저장소의 Settings > Pages 섹션에서 다음 설정을 확인하세요:
   - Source: GitHub Actions
   - 또는 Source: Deploy from a branch, Branch: gh-pages / (root)

2. 배포 상태는 GitHub 저장소의 Actions 탭에서 확인할 수 있습니다.

3. 배포가 완료되면 `https://[username].github.io/[repository-name]/`에서 웹사이트를 확인할 수 있습니다.

### 배포 문제 해결

- 배포 후 사이트가 보이지 않는 경우, 브라우저 캐시를 초기화하거나 시크릿 모드에서 접속해 보세요.
- GitHub Actions 워크플로우에 문제가 있는 경우, `.github/workflows/deploy.yml` 파일을 확인하세요.
- `next.config.js` 파일에서 `basePath`와 `assetPrefix`가 저장소 이름과 일치하는지 확인하세요.

### 정적 이미지 문제 해결

배포 후 정적 이미지가 보이지 않는 경우 다음 방법을 시도해 보세요:

1. **커스텀 Image 컴포넌트 사용**:
   - `src/app/components/Image.tsx`에 있는 커스텀 Image 컴포넌트를 사용하세요.
   - 모든 `import Image from 'next/image'`를 `import Image from '@/app/components/Image'`로 변경하세요.

2. **이미지 경로 수정**:
   - 모든 이미지 경로 앞에 basePath를 추가하세요. 예: `/images/example.jpg` → `/homepage/images/example.jpg`
   - 또는 상대 경로를 사용하세요. 예: `./images/example.jpg`

3. **public 폴더 구조 확인**:
   - 이미지가 `public` 폴더 내에 올바르게 위치해 있는지 확인하세요.
   - 빌드 후 `out` 폴더에 이미지가 포함되어 있는지 확인하세요.

4. **next.config.js 설정 확인**:
   ```js
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
     basePath: '/homepage',  // 저장소 이름으로 변경
     assetPrefix: '/homepage',  // 저장소 이름으로 변경
     trailingSlash: true,
   };
   ```

5. **배포 후 확인**:
   - 변경 사항을 적용한 후 다시 배포하세요: `npm run deploy`
   - 브라우저 캐시를 초기화하고 페이지를 새로고침하세요.

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