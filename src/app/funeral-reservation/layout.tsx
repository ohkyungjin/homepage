import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '장례 예약 | 씨엘로펫',
  description: '24시간 언제든 연락주시면 빠르게 도움드리겠습니다.'
};

export default function FuneralReservationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 