import { TravelType, TestScores } from '@/types';

const VALID_TYPES: TravelType[] = ['shiba', 'cat', 'tanuki', 'fox', 'deer'];

export function calculateResult(answers: TravelType[]): TravelType {
  if (answers.length === 0) {
    return 'shiba';
  }

  const scores: TestScores = {
    shiba: 0,
    cat: 0,
    tanuki: 0,
    fox: 0,
    deer: 0,
  };

  const firstSeen: Partial<Record<TravelType, number>> = {};

  answers.forEach((type, index) => {
    if (VALID_TYPES.includes(type)) {
      scores[type]++;
      if (!(type in firstSeen)) {
        firstSeen[type] = index;
      }
    }
  });

  const maxScore = Math.max(...Object.values(scores));

  if (maxScore === 0) {
    return 'shiba';
  }

  const topTypes = (Object.keys(scores) as TravelType[]).filter(
    (t) => scores[t] === maxScore
  );

  if (topTypes.length > 1) {
    topTypes.sort((a, b) => (firstSeen[a] ?? 99) - (firstSeen[b] ?? 99));
  }

  return topTypes[0];
}
