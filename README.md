# 매일메일

AI 기반 스마트 이메일 센티널

## 👥 팀원 소개 & 역할

| 이름 | 소속 | 담당 영역 |
| --- | --- | --- |
| 정한묵 | LG전자 | 조장, 기말발표 |
| 김지연 | 정보시스템학과 22 | 아키텍처 설계, 문서화 |
| 양병현 | 정보시스템학과 23 | 개발, 중간발표 |
| 홍예원 | 정보시스템학과 24 | 개발 |

---

## 📌 프로그램 소개

### 매일메일 (AI 기반 스마트 이메일 센티널)이란?

현대 비즈니스 환경에서 이메일은 핵심 소통 수단이지만, 폭발적인 메일 양으로 인한 업무 효율 저하와 지능화된 피싱 메일 등 보안 위협이 증가하고 있습니다.

**매일메일**은 AI를 활용해 메일의 핵심 내용을 요약하고 일정을 자동 관리하며, 보이지 않는 '다크 데이터' 분석과 보안 탐지를 통해 **생산성 향상**과 **보안 강화**를 동시에 실현하는 스마트 이메일 에이전트입니다.

### 핵심 기능 (Key Features)

1. **다크 데이터(Dark Data) 분석 및 필터링**
   - **Hidden Data Discovery**: 첨부파일 메타데이터·숨겨진 패턴 등을 분석해 유의미한 정보 도출
   - **Smart Filtering**: 불필요한 정보·중복 데이터 필터링으로 이메일함 순도 향상
2. **보안 강화 및 비정상 텍스트 감지**
   - **Phishing Detection**: 단순 키워드 매칭을 넘어 문장의 어조와 형식을 분석하여 피싱·스캠 등 비정상 텍스트 감지 및 경고

### 기대 효과

- 📉 메일 확인 및 일정 정리 시간 **50% 이상 단축**
- ✅ 업무 누락 및 스케줄 충돌 방지
- 🔒 지능형 보안 필터를 통한 기업 정보 자산 보호 및 범죄 예방

---

## 🛠️ 기술 스택

### 프론트엔드

- **Framework**: React 19 + TypeScript
- **스타일링**: Tailwind CSS v4
- **빌드 도구**: Vite

### 백엔드 (예정)

- **AI**: Gemini API
- **DB**: Supabase (PostgreSQL)

---

## ⚙️ 로컬 실행 방법

### 1. 패키지 설치

```bash
npm install
```

### 2. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일 생성 후 아래 내용 입력:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

> Supabase 키는 [Supabase 대시보드](https://supabase.com/dashboard) → 프로젝트 선택 → Settings → API 에서 확인

### 3. Supabase 테이블 설정

Supabase에서 아래 테이블을 생성하고 RLS를 비활성화하세요.

**tb_user**
| 컬럼 | 타입 |
|---|---|
| id | int8 (PK) |
| email | varchar |
| name | varchar |
| created_at | timestamptz |

**tb_mail**
| 컬럼 | 타입 |
|---|---|
| id | int8 (PK) |
| content | varchar |
| is_dark | bool |
| dark_reason | varchar |
| security_level | varchar |
| user_id | int8 |
| created_at | timestamptz |

**tb_spam_keywords**
| 컬럼 | 타입 |
|---|---|
| id | int8 (PK) |
| keyword | varchar |
| is_active | bool |
| created_at | timestamptz |

### 4. 개발 서버 실행

```bash
npm run dev
```

---

## 📱 화면 구성

| 화면 | 설명 |
|---|---|
| 로그인 | 서비스 진입 화면 |
| 대시보드 | 메일 수동 분석 및 통계 |
| 받은 메일함 | 전체 메일 시간순 목록 |
| 보안 센터 | 위험/주의/안전 등급별 분류 |
| 다크 데이터 | 피싱·스팸·불필요 데이터 감지 메일 |
| 스마트 필터 | 스팸 키워드 직접 관리 |
