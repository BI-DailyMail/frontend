# 매일메일 디자인 시스템

AI 기반 이메일 보안 서비스 **매일메일**의 UI 설계 기준입니다.

---

## 1. 디자인 원칙

| 원칙 | 설명 |
|------|------|
| **신뢰감** | 보안 제품답게 차분하고 명확한 색상 사용. 과도한 장식 지양. |
| **명확성** | 위협 수준(안전/주의/위험)은 색상으로 즉시 파악 가능해야 함. |
| **일관성** | 동일 의미의 요소는 앱 전반에서 동일하게 표현. |
| **간결함** | 정보 위계를 명확히 하여 사용자가 핵심에 집중하도록. |

---

## 2. 컬러 팔레트

### 기본 색상

| 토큰 | 값 | 용도 |
|------|----|------|
| `bg-page` | `#f1f5f9` | 페이지 배경 (slate-100) |
| `bg-card` | `#ffffff` | 카드, 패널 배경 |
| `bg-input` | `#f8fafc` | 입력 필드 기본 배경 |
| `text-primary` | `#0f172a` | 제목, 주요 텍스트 |
| `text-secondary` | `#64748b` | 설명, 보조 텍스트 |
| `text-muted` | `#94a3b8` | 힌트, 비활성 텍스트 |
| `border` | `#e2e8f0` | 카드·입력 테두리 |

### 브랜드 색상

| 토큰 | 값 | 용도 |
|------|----|------|
| `brand` | `#0ea5e9` | 링크, 포커스 링, 액티브 사이드바 |
| `brand-dark` | `#0284c7` | 호버 상태 |

### 사이드바

| 토큰 | 값 | 용도 |
|------|----|------|
| `sidebar-bg` | `#0f172a` | 사이드바 배경 |
| `sidebar-active-bg` | `rgba(14,165,233,0.10)` | 활성 메뉴 배경 |
| `sidebar-active-text` | `#38bdf8` | 활성 메뉴 텍스트 |
| `sidebar-text` | `rgba(255,255,255,0.45)` | 기본 메뉴 텍스트 |
| `sidebar-hover` | `rgba(255,255,255,0.05)` | 호버 메뉴 배경 |

### 시맨틱 색상 (보안 상태)

| 상태 | 텍스트 | 배경 | 용도 |
|------|--------|------|------|
| **안전** `safe` | `#15803d` | `#f0fdf4` | 위협 없음 |
| **주의** `warn` | `#b45309` | `#fffbeb` | 의심 항목 존재 |
| **위험** `danger` | `#b91c1c` | `#fef2f2` | 명확한 위협 탐지 |

---

## 3. 타이포그래피

### 폰트 패밀리

```css
--font-sans:  'Noto Sans KR', sans-serif;   /* UI 전반 */
--font-serif: 'Noto Serif KR', serif;        /* 로고·브랜드명만 사용 */
```

### 타입 스케일

| 역할 | 크기 | 굵기 | 사용 위치 |
|------|------|------|-----------|
| 브랜드명 | 18–22px | 700 | 사이드바, 로그인 패널 |
| 페이지 제목 | 15px | 600 | Topbar |
| 카드 제목 | 13–14px | 600 | 분석 카드, 입력 카드 |
| 본문 | 13px | 400 | 요약 텍스트, 항목 설명 |
| 보조 텍스트 | 11–12px | 400–500 | 레이블, 서브텍스트, 뱃지 |
| 힌트 | 10–11px | 400 | 사이드바 섹션, 입력 힌트 |

### 줄 간격

| 역할 | 값 |
|------|-----|
| 제목류 | `leading-tight` (1.25) |
| 본문 · 요약 | `leading-relaxed` (1.625) → `leading-[1.8]` |
| 보조 설명 | `leading-relaxed` (1.625) |

---

## 4. 간격 (Spacing)

4px 그리드 기반. Tailwind 기본 단위(`1 = 4px`) 사용.

| 용도 | 값 |
|------|----|
| 컴포넌트 내부 패딩 (카드) | `px-6 py-5` (24px / 20px) |
| 섹션 간격 | `gap-5` (20px) |
| 그리드 열 간격 | `gap-4` (16px) |
| 요소 간 소간격 | `gap-2` ~ `gap-3` (8–12px) |
| 텍스트 스택 | `mt-0.5` ~ `mt-1` (2–4px) |
| 사이드바 내부 패딩 | `px-5 py-7` |
| 페이지 콘텐츠 패딩 | `p-7` (28px) |

---

## 5. 테두리 반경 (Border Radius)

| 이름 | 값 | 사용 위치 |
|------|-----|-----------|
| `rounded-md` | 6px | 작은 뱃지, 아이콘 배경 |
| `rounded-lg` | 8px | 버튼, 입력 필드, 아이템 |
| `rounded-xl` | 12px | 스탯 카드 |
| `rounded-2xl` | 16px | 로그인 카드, 분석 카드 |
| `rounded-full` | 9999px | 뱃지, 아바타 |

---

## 6. 그림자 (Shadow)

| 이름 | 값 | 사용 위치 |
|------|-----|-----------|
| 카드 | `none` (border로 대체) | 대시보드 카드 |
| 로그인 카드 | `0 8px 40px rgba(0,0,0,0.12)` | 로그인 패널 |
| Topbar | `border-b border-[#e2e8f0]` | 상단 바 |

---

## 7. 컴포넌트

### Button

```tsx
<Button variant="primary">로그인</Button>
<Button variant="secondary">Google로 계속하기</Button>
<Button variant="ghost">취소</Button>
<Button loading>분석 중...</Button>
```

| Variant | 배경 | 텍스트 | 용도 |
|---------|------|--------|------|
| `primary` | `#0f172a` | white | 주요 액션 |
| `secondary` | white | `#0f172a` | 보조 액션 |
| `ghost` | transparent | `#64748b` | 최소 강조 액션 |

| Size | 패딩 | 텍스트 |
|------|------|--------|
| `sm` | `px-3 py-1.5` | 12px |
| `md` (기본) | `px-4 py-2` | 13px |
| `lg` | `px-5 py-2.5` | 14px |

---

### Input

```tsx
<Input id="email" label="이메일" type="email" placeholder="..." />
```

- 기본: `bg-[#f8fafc]` + `border-[#e2e8f0]`
- 포커스: `bg-white` + `border-[#0ea5e9]` + `ring-2 ring-[#0ea5e9]/10`

---

### Badge

```tsx
<Badge color="green" dot>보안 강화 모드</Badge>
<Badge color="red">위험</Badge>
<Badge color="amber">3개 발견</Badge>
```

| Color | 배경 | 텍스트 |
|-------|------|--------|
| `blue` | `#eff6ff` | `#1d4ed8` |
| `green` | `#f0fdf4` | `#15803d` |
| `amber` | `#fffbeb` | `#b45309` |
| `red` | `#fef2f2` | `#b91c1c` |
| `slate` | `#f1f5f9` | `#475569` |

---

### StatCard

```tsx
<StatCard label="분석된 메일" value={42} sub="총 누적" />
<StatCard label="보안 경고" value={3} sub="이번 세션" accent="#b91c1c" />
```

- 라벨: 11px uppercase tracking-wide
- 숫자: 28px semibold, `accent` prop으로 색상 지정
- 서브: 11px muted

---

## 8. 레이아웃 패턴

### 대시보드 레이아웃

```
┌─────────────────────────────────────────────┐
│  Sidebar (w-60 = 240px, fixed)              │
│  ┌───────────────────────────────────────┐  │
│  │  main (ml-60, flex-col)               │  │
│  │  ┌─────────────────────────────────┐  │  │
│  │  │  Topbar (sticky top-0)          │  │  │
│  │  └─────────────────────────────────┘  │  │
│  │  ┌─────────────────────────────────┐  │  │
│  │  │  Content (p-7, flex-col gap-5)  │  │  │
│  │  │  ┌──────┬──────┬──────┐        │  │  │
│  │  │  │Stat  │Stat  │Stat  │ grid-3 │  │  │
│  │  │  └──────┴──────┴──────┘        │  │  │
│  │  │  MailInput (full-width)         │  │  │
│  │  │  ┌────────────────────┐        │  │  │
│  │  │  │Summary   col-span-2│ grid-2 │  │  │
│  │  │  ├──────────┬─────────┤        │  │  │
│  │  │  │Security  │DarkData │        │  │  │
│  │  │  └──────────┴─────────┘        │  │  │
│  │  └─────────────────────────────────┘  │  │
│  └───────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
```

### 로그인 레이아웃

```
┌────────────────────────────────────────────┐
│  bg-[#f1f5f9]  (full screen)               │
│  ┌──────────────┬──────────────────────┐   │
│  │ Left Panel   │ Right Panel          │   │
│  │ w-[260px]    │ flex-1               │   │
│  │ bg-[#0a0f1a] │ bg-white             │   │
│  │              │                      │   │
│  │ Brand        │ Form (max-w-[320px]) │   │
│  │ Features     │ Inputs               │   │
│  │              │ Buttons              │   │
│  └──────────────┴──────────────────────┘   │
│  max-w-[680px], rounded-2xl, shadow-lg      │
└────────────────────────────────────────────┘
```

---

## 9. 애니메이션

| 이름 | 정의 | 용도 |
|------|------|------|
| `fade-in` | `opacity 0→1`, `translateY 8px→0`, `0.25s ease` | 분석 결과 카드 등장 |
| `animate-spin` | Tailwind 기본 | 로딩 스피너 |
| `transition-all duration-150` | Tailwind 기본 | 버튼·입력·네비 호버 |

분석 결과 3개 카드는 `animationDelay` (0ms / 60ms / 120ms)로 순차적으로 등장.

---

## 10. 폴더 구조

```
src/
├── types/
│   └── index.ts              # 공유 TypeScript 타입
├── constants/
│   └── nav.tsx               # 사이드바 네비게이션 데이터
├── lib/
│   └── api.ts                # Claude API 호출 함수
├── components/
│   ├── ui/                   # 재사용 가능한 UI 프리미티브
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Badge.tsx
│   ├── layout/               # 레이아웃 구조 컴포넌트
│   │   ├── Sidebar.tsx
│   │   └── Topbar.tsx
│   └── features/             # 도메인별 기능 컴포넌트
│       ├── auth/
│       │   └── FeatureItem.tsx
│       └── dashboard/
│           ├── StatCard.tsx
│           ├── MailInput.tsx
│           └── AnalysisResult.tsx
└── pages/                    # 페이지 단위 컴포넌트 (라우트)
    ├── LoginPage.tsx
    └── DashboardPage.tsx
```

### 레이어 의존 방향

```
pages → features → layout → ui → (외부 없음)
pages → lib, constants, types
```

- `ui/` 컴포넌트는 다른 내부 컴포넌트에 의존하지 않음
- `lib/api.ts`는 React에 의존하지 않음 (순수 함수)
- `pages/`는 모든 하위 레이어를 조합하는 진입점
