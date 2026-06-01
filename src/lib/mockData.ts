import type { MailRecord } from '../types'

export const MOCK_MAILS: MailRecord[] = [
  {
    id: 1,
    subject: '[긴급] 계좌 이상 거래 감지 — 즉시 확인 요망',
    content: `안녕하세요 고객님,

국민은행 보안팀입니다. 고객님의 계좌에서 해외 비정상 거래가 감지되었습니다.

지금 즉시 아래 링크를 클릭하여 본인인증을 완료하지 않으시면 계좌가 24시간 내 정지됩니다.

▶ 본인인증 바로가기: http://kb-secure-verify.xyz/auth?token=8f3kd

계좌번호, 비밀번호, OTP 번호를 입력하여 인증을 완료해주세요.
국민은행 고객센터 02-1588-9999`,
    is_dark: true,
    dark_reason: `피싱 도메인: kb-secure-verify.xyz는 국민은행 공식 도메인(kbstar.com)이 아닙니다\n계좌번호·비밀번호·OTP 동시 요구: 정상 은행은 세 가지를 한 번에 요구하지 않습니다\n공포 유발 문구: "24시간 내 계좌 정지" 등 즉각 행동을 유도하는 전형적인 피싱 패턴입니다`,
    security_level: 'danger',
    user_id: 1,
    created_at: '2026-05-30T09:12:00.000Z',
  },
  {
    id: 2,
    subject: '🎁 축하합니다! 에어팟 Pro 당첨 — 오늘까지만',
    content: `안녕하세요!

귀하께서 삼성 공식 이벤트 추첨에서 에어팟 Pro(정가 359,000원)에 당첨되셨습니다!

배송비 3,900원만 결제하시면 무료로 받으실 수 있습니다.
단, 오늘 자정까지만 신청 가능합니다.

▶ 당첨 수령하기: http://samsung-gift2026.net/claim

결제 정보: 카드번호, 유효기간, CVC를 입력해주세요.
삼성전자 이벤트팀 드림`,
    is_dark: true,
    dark_reason: `비공식 도메인 사용: samsung-gift2026.net은 삼성 공식 도메인이 아닙니다\n카드 정보 탈취 시도: 배송비 명목으로 카드번호·CVC를 요구합니다\n긴박감 조성: "오늘 자정까지" 문구로 충동 결제를 유도합니다`,
    security_level: 'danger',
    user_id: 1,
    created_at: '2026-05-29T14:35:00.000Z',
  },
  {
    id: 3,
    subject: '[네이버] 로그인 차단 안내 — 비밀번호 재설정 필요',
    content: `안녕하세요,

네이버 계정 보안팀에서 알립니다.
회원님의 계정에 여러 국가에서 동시 로그인 시도가 감지되어 계정을 임시 차단하였습니다.

계정을 복구하려면 아래 링크를 클릭하여 비밀번호를 재설정해주세요.

▶ 계정 복구: http://naver-account-reset.info/recover

재설정 시 현재 비밀번호와 새 비밀번호, 연결된 이메일 주소를 입력해주세요.
24시간 내 조치하지 않으면 계정이 영구 삭제됩니다.

네이버 보안센터`,
    is_dark: false,
    dark_reason: `피싱 도메인: naver-account-reset.info는 네이버 공식 도메인(naver.com)이 아닙니다\n계정 영구 삭제 협박: 극단적인 결과를 언급해 즉각 행동을 유도합니다\n현재 비밀번호 요구: 정상 서비스는 현재 비밀번호를 이메일로 요구하지 않습니다`,
    security_level: 'danger',
    user_id: 1,
    created_at: '2026-05-28T11:20:00.000Z',
  },
  {
    id: 4,
    subject: '[광고] 직장인 대출 한도 UP! 무심사 1,000만원 당일 승인',
    content: `안녕하세요!

바쁜 직장인을 위한 특별 대출 상품을 안내드립니다.

✅ 무서류·무심사 당일 승인
✅ 최대 1,000만원 한도
✅ 연 3.9% 특별금리 (기간 한정)
✅ 신용등급 무관 누구나 OK

지금 바로 신청하시면 추가 20만원 지원!
▶ 신청하기: 010-9988-7766 또는 대출신청.com

*본 메일은 광고성 정보입니다. 수신 거부를 원하시면 reply로 'STOP'을 보내주세요.
금융감독원 등록 제2024-서울-0392호`,
    is_dark: true,
    dark_reason: `미등록 도메인 사용: '대출신청.com'은 금융감독원 공식 등록 기관 도메인이 아닙니다\n비현실적 조건: 무심사·무서류 당일 승인은 정상 금융기관 상품과 다릅니다\n개인정보 수집 가능성: 전화·웹을 통한 개인정보 탈취 위험이 있습니다`,
    security_level: 'warn',
    user_id: 1,
    created_at: '2026-05-27T08:45:00.000Z',
  },
  {
    id: 5,
    subject: '[광고] 오늘만! 건강기능식품 80% 할인 + 무료배송',
    content: `안녕하세요 회원님!

오늘 하루만 진행되는 특가 이벤트를 안내드립니다.

🌿 프리미엄 오메가3 (정가 89,000원) → 오늘만 17,800원
🌿 홍삼 6년근 정 (정가 150,000원) → 오늘만 29,000원

재고 소진 시 조기 마감됩니다!
▶ 지금 구매하기: health-sale2026.kr

본 메일은 이전에 동의하신 마케팅 수신에 의해 발송되었습니다.
수신 거부: 하단 링크 클릭`,
    is_dark: false,
    dark_reason: null,
    security_level: 'warn',
    user_id: 1,
    created_at: '2026-05-26T13:10:00.000Z',
  },
  {
    id: 6,
    subject: '계약서 초안 공유 — 검토 부탁드립니다',
    content: `안녕하세요 김예원 님,

지난 회의에서 논의했던 외주 계약서 초안을 공유드립니다.

주요 변경 사항:
- 납품 기한: 7월 15일 → 7월 31일로 조정
- 중도금 지급 조건 수정 (3조 2항)
- 손해배상 조항 추가 (5조)

계약서에 이홍철 대표님 주민등록번호 앞자리(850312)와 계좌번호(하나은행 123-456789-01234)가 포함되어 있으니 보안 주의 부탁드립니다.

검토 후 수정사항 있으시면 알려주세요.
이진수 드림`,
    is_dark: true,
    dark_reason: `개인식별정보 노출: 주민등록번호 앞자리가 본문에 평문으로 포함되어 있습니다\n금융정보 노출: 계좌번호가 암호화 없이 이메일 본문에 포함되어 있습니다`,
    security_level: 'safe',
    user_id: 1,
    created_at: '2026-05-25T10:00:00.000Z',
  },
  {
    id: 7,
    subject: '인사 기록 첨부 — 사내 열람 전용',
    content: `안녕하세요,

인사팀 박서연입니다.
요청하신 직원 인사 기록 파일을 공유드립니다.

대상: 개발팀 전원 (총 12명)
포함 정보: 생년월일, 연봉, 성과 등급, 이직 이력

파일은 암호화 없이 첨부되어 있으며, 내부 열람 후 즉시 삭제해주세요.
외부 유출 시 법적 책임이 발생할 수 있습니다.

인사팀 박서연 드림
내선: 3214`,
    is_dark: true,
    dark_reason: `민감 개인정보 다수 포함: 생년월일·연봉·성과등급·이직이력 등 개인정보보호법 대상 정보가 포함됩니다\n암호화 없는 전송: 민감 정보가 암호화 없이 이메일로 전달되었습니다`,
    security_level: 'safe',
    user_id: 1,
    created_at: '2026-05-24T15:30:00.000Z',
  },
  {
    id: 8,
    subject: '6월 팀 회식 일정 안내',
    content: `안녕하세요 팀원 여러분,

6월 팀 회식 일정을 안내드립니다.

일시: 2026년 6월 13일 (금) 오후 7시
장소: 강남구 역삼동 [모임] 한식당 (역삼역 2번 출구 도보 3분)
복장: 자유

참석 여부를 6월 10일까지 회신 부탁드립니다.
불참 시에도 꼭 알려주세요!

즐거운 자리가 될 것 같습니다 :)
개발팀 리더 최민준 드림`,
    is_dark: false,
    dark_reason: null,
    security_level: 'safe',
    user_id: 1,
    created_at: '2026-05-31T09:00:00.000Z',
  },
]

export const MOCK_STATS = {
  total: MOCK_MAILS.length,
  dark: MOCK_MAILS.filter(m => m.is_dark).length,
  alerts: MOCK_MAILS.filter(m => m.security_level === 'danger').length,
}

export interface AdItem {
  id: number
  brand: string
  tagline: string
  desc: string
  cta: string
  badge: string
  iconColor: string
  iconBg: string
}

export const MOCK_ADS: AdItem[] = [
  {
    id: 1,
    brand: 'SecureVault Pro',
    tagline: '기업 메일 암호화 솔루션',
    desc: '피싱·스팸으로부터 조직의 이메일을 완벽하게 보호하세요. 무료 14일 체험 제공.',
    cta: '무료 체험 시작',
    badge: '보안',
    iconColor: '#0ea5e9',
    iconBg: '#eff6ff',
  },
  {
    id: 2,
    brand: 'DataShield 기업보험',
    tagline: '개인정보 유출 사고 대비',
    desc: '다크데이터·개인정보 유출 시 법적 비용·배상금을 보장합니다. 중소기업 특화 플랜.',
    cta: '보험료 견적 받기',
    badge: '보험',
    iconColor: '#15803d',
    iconBg: '#f0fdf4',
  },
  {
    id: 3,
    brand: 'ComplianceAI',
    tagline: '개인정보보호법 자동 점검',
    desc: '메일·문서 내 민감정보를 AI가 실시간 탐지하고 컴플라이언스 리포트를 자동 생성합니다.',
    cta: '데모 신청',
    badge: '컴플라이언스',
    iconColor: '#b45309',
    iconBg: '#fffbeb',
  },
]
