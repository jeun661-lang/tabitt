import { TypeInfo } from '@/types';

export const travelTypes: TypeInfo[] = [
  {
    id: 'shiba',
    name: '시바견',
    subTitle: '계획가',
    emoji: '🐕',
    image: '/images/shiba.png',
    description: '완벽한 동선, 빈틈없는 계획의 달인',
    detailedDescription:
      '여행 전에 이미 여행의 80%가 끝나 있는 타입. 식당 예약 시간에 맞춰 이동하고, 구글맵에 핀 30개 찍어두고, 일행이 "다음 어디 가?" 하면 3초 안에 답이 나온다. 가끔 계획이 틀어지면 살짝 당황하지만, 플랜 B도 이미 준비되어 있다. 여행이 끝나면 가계부 정리까지 하는 사람.',
    englishName: 'Shiba Tone',
    englishSubTitle: 'The master planner with a perfect itinerary',
    props: '체크리스트 + 펜',
    accentColor: '#E8922F',
    lightColor: '#F5C56A',
    bgColor: '#FFF5EB',
  },
  {
    id: 'cat',
    name: '고양이',
    subTitle: '탐색가',
    emoji: '🐱',
    image: '/images/cat.png',
    description: '숨은 명소를 파헤치는 정보 수집가',
    detailedDescription:
      '남들 다 가는 곳은 재미없다. 블로그 5페이지, 현지인 리뷰 번역, 구글 스트리트뷰로 가게 외관까지 확인하는 타입. "이거 아는 사람 별로 없을걸?"이 최고의 칭찬. 여행 후에 친구가 "거기 어떻게 알았어?"라고 물어보면 내심 뿌듯하다. 정보를 모으는 과정 자체가 여행의 절반.',
    englishName: 'Cat Tone',
    englishSubTitle: 'The hidden-gem hunter who digs deep',
    props: '돋보기 + 목에 카메라',
    accentColor: '#9B7FD4',
    lightColor: '#C8C0D8',
    bgColor: '#F3EFFE',
  },
  {
    id: 'tanuki',
    name: '너구리',
    subTitle: '개척자',
    emoji: '🦝',
    description: '아무도 안 가본 길을 여는 개척자',
    detailedDescription:
      '관광지? 패스. 이미 다 가봤거나, 가봤어도 남들이랑 같은 건 싫은 타입. "여기 사람들 왜 안 가지?" 싶은 곳을 직접 가보고, 자기만의 루트를 만들어낸다. 실패할 수도 있지만 그게 뭐 어때. 그 실패가 나중에 최고의 여행 얘기가 된다. 여행 후에 "나만의 코스"를 공유하는 걸 좋아한다.',
    englishName: 'Tanuki Tone',
    englishSubTitle: 'The trailblazer who carves a new path',
    props: '탐험 모자 + 지도',
    accentColor: '#5DAA68',
    lightColor: '#A68B6B',
    bgColor: '#EEF6EF',
  },
  {
    id: 'fox',
    name: '여우',
    subTitle: '모험가',
    emoji: '🦊',
    description: '즉흥과 우연을 즐기는 모험가',
    detailedDescription:
      '계획은 한 20%만. 큰 방향만 정하고 나머지는 현장에서 결정하는 타입. 지나가다 맛있는 냄새 나면 들어가고, 현지인이 추천하면 바로 루트 변경. 예상 못한 상황이 오히려 여행의 하이라이트가 된다. "어떻게 그런 데를 찾았어?"라고 물으면 "그냥 가다가 발견했어"가 진심인 사람.',
    englishName: 'Fox Tone',
    englishSubTitle: 'The spontaneous adventurer who trusts the moment',
    props: '빨간 스카프 + 타코야키 + 윙크 표정',
    accentColor: '#E8734A',
    lightColor: '#F0943A',
    bgColor: '#FFF0EB',
  },
  {
    id: 'deer',
    name: '사슴',
    subTitle: '방랑자',
    emoji: '🦌',
    description: '흐름에 몸을 맡기는 감성 방랑자',
    detailedDescription:
      '효율 같은 건 모르겠고, 지금 이 순간이 좋으면 그게 최고의 여행. 카페에서 반나절 보내도 좋고, 골목에서 하늘 사진 찍으며 서 있어도 좋다. 일정에 쫓기는 건 여행이 아니라 출장이라고 생각한다. 여행에서 돌아오면 사진은 별로 없는데 감정은 가득 차 있는 사람.',
    englishName: 'Deer Tone',
    englishSubTitle: 'The wanderer who flows with the vibe',
    props: '이어폰 + 커피잔 + 뿔에 작은 꽃',
    accentColor: '#5B9ECF',
    lightColor: '#D4A87A',
    bgColor: '#EBF3FA',
  },
];

export const typeMap: Record<string, TypeInfo> = Object.fromEntries(
  travelTypes.map((t) => [t.id, t])
);
