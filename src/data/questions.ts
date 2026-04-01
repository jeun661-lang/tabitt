import { Question } from '@/types';

export const questions: Question[] = [
  {
    id: 1,
    text: '비행기를 예약할 때 당신은?',
    options: [
      { text: '출발 2달 전에 이미 최저가 비교 완료', type: 'shiba' },
      { text: '후기 보면서 좌석 배치, 환승 시간까지 꼼꼼히 체크', type: 'cat' },
      { text: '멀리 있는 인천공항 갈 때 가까운 지방공항 감', type: 'tanuki' },
      { text: '가격 괜찮으면 바로 결제, 고민은 짧게', type: 'fox' },
      { text: '분위기 보다가 "에이 그냥 가자" 하고 충동 예매', type: 'deer' },
    ],
  },
  {
    id: 2,
    text: '환전할 때 당신은?',
    options: [
      { text: '환율 추이 확인하고 가장 좋은 타이밍에 환전', type: 'shiba' },
      { text: '어디서 환전하면 수수료가 가장 적은지 비교 분석', type: 'cat' },
      { text: '현지 ATM이 더 이득이라는 정보를 이미 알고 있음', type: 'tanuki' },
      { text: '공항에서 대충 필요한 만큼만 바꿈', type: 'fox' },
      { text: '카드 쓰면 되지 뭐, 환전 별로 안 함', type: 'deer' },
    ],
  },
  {
    id: 3,
    text: '숙소를 예약할 때 당신은?',
    options: [
      { text: '위치, 동선, 체크인 시간 다 고려해서 최적의 숙소 선택', type: 'shiba' },
      { text: '리뷰 100개는 읽고, 실제 사진까지 확인', type: 'cat' },
      { text: '현지인만 아는 게스트하우스나 독특한 숙소를 찾음', type: 'tanuki' },
      { text: '위치 괜찮고 깨끗하면 OK, 빠르게 결정', type: 'fox' },
      { text: '그날 기분에 따라 당일 예약도 괜찮음', type: 'deer' },
    ],
  },
  {
    id: 4,
    text: '출발 공항 면세점에서 당신은?',
    options: [
      { text: '살 거 리스트 미리 정리해서 효율적으로 쇼핑', type: 'shiba' },
      { text: '온라인 가격이랑 비교하면서 진짜 이득인지 따져봄', type: 'cat' },
      { text: '면세점은 패스, 현지에서 사는 게 더 재밌음', type: 'tanuki' },
      { text: '지나가다 눈에 띄는 거 있으면 삼', type: 'fox' },
      { text: '카페에서 커피 마시면서 비행기 시간 기다림', type: 'deer' },
    ],
  },
  {
    id: 5,
    text: '일본 공항에 도착해서 당신은?',
    options: [
      { text: '미리 조사한 루트대로 숙소까지 이동 시작', type: 'shiba' },
      { text: '공항 내 숨은 맛집이나 한정판 매장 먼저 체크', type: 'cat' },
      { text: '교통패스 안 사고 로컬 방식으로 이동해봄', type: 'tanuki' },
      { text: '일단 밖으로 나가서 공기부터 마셔봄', type: 'fox' },
      { text: '급할 거 없지, 공항 구경하면서 천천히', type: 'deer' },
    ],
  },
  {
    id: 6,
    text: '친구가 갑자기 "내일 놀자"고 하면?',
    options: [
      { text: '내일 일정 확인부터 함', type: 'shiba' },
      { text: '"뭐 할 건데?" 구체적으로 물어봄', type: 'cat' },
      { text: '"새로 생긴 데 가보자" 하고 장소를 제안함', type: 'tanuki' },
      { text: '"오케이!" 일단 답하고 디테일은 내일 정함', type: 'fox' },
      { text: '"좋아~ 근데 뭐 하든 상관없어"', type: 'deer' },
    ],
  },
  {
    id: 7,
    text: '맛집을 고를 때 당신은?',
    options: [
      { text: '별점 4.5 이상, 리뷰 많은 곳 위주로 선택', type: 'shiba' },
      { text: '블로그 깊이 파서 현지인 후기까지 확인', type: 'cat' },
      { text: '아무도 모르는 곳을 찾아야 직성이 풀림', type: 'tanuki' },
      { text: '지나가다 맛있는 냄새 나면 그냥 들어감', type: 'fox' },
      { text: '분위기 좋으면 맛은 그냥 괜찮아도 됨', type: 'deer' },
    ],
  },
  {
    id: 8,
    text: '여행에서 가장 기억에 남는 건?',
    options: [
      { text: '계획대로 완벽하게 돌아간 그 하루', type: 'shiba' },
      { text: '아무도 모르는 곳을 발견한 순간', type: 'cat' },
      { text: '내가 개척한 루트가 대박이었던 경험', type: 'tanuki' },
      { text: '예상 못한 해프닝이 만든 추억', type: 'fox' },
      { text: '아무것도 안 하고 멍 때린 오후', type: 'deer' },
    ],
  },
  {
    id: 9,
    text: '목적지까지 전철로 40분, 당신은?',
    options: [
      { text: '환승 정보 미리 확인하고 최적 루트로 이동', type: 'shiba' },
      { text: '차창 밖 풍경 보면서 재미있는 역 이름 검색', type: 'cat' },
      { text: '일부러 한 정거장 일찍 내려서 걸어봄', type: 'tanuki' },
      { text: '음악 들으면서 사람 구경', type: 'fox' },
      { text: '졸다가 지나칠 수도 있지만 그것도 여행', type: 'deer' },
    ],
  },
  {
    id: 10,
    text: '가려던 가게가 문을 닫았어요. 당신은?',
    options: [
      { text: '미리 저장해둔 플랜 B 가게로 이동', type: 'shiba' },
      { text: '바로 검색 시작, 근처에 더 좋은 데 있을 수도', type: 'cat' },
      { text: '오히려 좋아, 주변 탐색하다 보면 뭔가 나옴', type: 'tanuki' },
      { text: '옆에 있는 아무 가게나 들어가봄', type: 'fox' },
      { text: '그냥 근처 벤치에 앉아서 쉼', type: 'deer' },
    ],
  },
  {
    id: 11,
    text: '편의점에 들어갔을 때 당신은?',
    options: [
      { text: '미리 조사한 한정판 상품 체크', type: 'shiba' },
      { text: '현지인들이 뭘 사는지 관찰하면서 고름', type: 'cat' },
      { text: '한국에 없는 생소한 걸 골라봄', type: 'tanuki' },
      { text: '눈에 띄는 거 아무거나 집음', type: 'fox' },
      { text: '음료 하나 사서 밖에서 마시며 거리 구경', type: 'deer' },
    ],
  },
  {
    id: 12,
    text: '호텔에 돌아온 밤 10시, 당신은?',
    options: [
      { text: '오늘 일정 복기하고 내일 동선 최종 점검', type: 'shiba' },
      { text: '오늘 발견한 장소들 메모 정리 + 내일 갈 곳 추가 리서치', type: 'cat' },
      { text: '아직 에너지 남아서 호텔 주변 야간 산책 나감', type: 'tanuki' },
      { text: '근처 이자카야 찾아서 한 잔 더', type: 'fox' },
      { text: '불 끄고 오늘 하루를 천천히 떠올리며 잠듦', type: 'deer' },
    ],
  },
];
