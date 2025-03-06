import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MainLayout from '@/components/layout/MainLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '씨엘로 펫 - 반려동물 장례 서비스',
  description: '소중한 가족과의 마지막 이별을 위한 맞춤형 장례 서비스',
  icons: {
    icon: [
      {
        url: '/homepage/favicon.ico',
        href: '/homepage/favicon.ico',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
} 