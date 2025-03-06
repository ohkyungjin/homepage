import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/home');
}

export function Home() {
  return (
    <main>
      {/* 기존 컨텐츠 */}
    </main>
  );
} 