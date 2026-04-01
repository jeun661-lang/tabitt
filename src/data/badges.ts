export interface Badge {
  id: string;
  name: string;
  emoji: string;
  category: 'type' | 'city' | 'area';
  city?: string;
}

export const typeBadges: Badge[] = [
  { id: 'type-shiba', name: '시바견', emoji: '🐕', category: 'type' },
  { id: 'type-cat', name: '고양이', emoji: '🐱', category: 'type' },
  { id: 'type-tanuki', name: '너구리', emoji: '🦝', category: 'type' },
  { id: 'type-fox', name: '여우', emoji: '🦊', category: 'type' },
  { id: 'type-deer', name: '사슴', emoji: '🦌', category: 'type' },
];

export const cityBadges: Badge[] = [
  { id: 'city-tokyo', name: '도쿄', emoji: '🗼', category: 'city' },
  { id: 'city-osaka', name: '오사카', emoji: '🏯', category: 'city' },
  { id: 'city-kyoto', name: '교토', emoji: '⛩️', category: 'city' },
  { id: 'city-hokkaido', name: '홋카이도', emoji: '🏔️', category: 'city' },
  { id: 'city-okinawa', name: '오키나와', emoji: '🏖️', category: 'city' },
];

export const areaBadges: Badge[] = [
  // Tokyo
  { id: 'area-shinjuku', name: '신주쿠', emoji: '📍', category: 'area', city: 'tokyo' },
  { id: 'area-shibuya', name: '시부야', emoji: '📍', category: 'area', city: 'tokyo' },
  { id: 'area-akihabara', name: '아키하바라', emoji: '📍', category: 'area', city: 'tokyo' },
  { id: 'area-harajuku', name: '하라주쿠', emoji: '📍', category: 'area', city: 'tokyo' },
  { id: 'area-asakusa', name: '아사쿠사', emoji: '📍', category: 'area', city: 'tokyo' },
  { id: 'area-ginza', name: '긴자', emoji: '📍', category: 'area', city: 'tokyo' },
  { id: 'area-ikebukuro', name: '이케부쿠로', emoji: '📍', category: 'area', city: 'tokyo' },
  { id: 'area-ueno', name: '우에노', emoji: '📍', category: 'area', city: 'tokyo' },
  // Osaka
  { id: 'area-dotonbori', name: '도톤보리', emoji: '📍', category: 'area', city: 'osaka' },
  { id: 'area-namba', name: '난바', emoji: '📍', category: 'area', city: 'osaka' },
  { id: 'area-umeda', name: '우메다', emoji: '📍', category: 'area', city: 'osaka' },
  { id: 'area-shinsaibashi', name: '신사이바시', emoji: '📍', category: 'area', city: 'osaka' },
  { id: 'area-tennoji', name: '텐노지', emoji: '📍', category: 'area', city: 'osaka' },
];

export const allBadges = [...typeBadges, ...cityBadges, ...areaBadges];
