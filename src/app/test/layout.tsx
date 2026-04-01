import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tabitt — 여행 유형 테스트',
  description: '12개 질문으로 나의 여행 유형을 찾아보세요. 시바견, 고양이, 너구리, 여우, 사슴 중 당신은?',
  openGraph: {
    title: 'Tabitt — 여행 유형 테스트',
    description: '12개 질문으로 나의 여행 유형을 찾아보세요!',
  },
};

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
