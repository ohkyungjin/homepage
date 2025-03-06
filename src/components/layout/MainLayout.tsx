'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ChevronRight } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const pathname = usePathname();
  
  // 빵 부스러기 네비게이션을 위한 경로 분석
  const breadcrumbs = pathname.split('/').filter(Boolean);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* 빵 부스러기 네비게이션 */}
      {breadcrumbs.length > 0 && (
        <div className="bg-white py-3 border-b border-gray-200">
          <div className="max-w-container mx-auto px-6">
            <nav className="flex text-sm">
              <Link href="/" className="text-gray-500 hover:text-primary transition-colors">
                홈
              </Link>
              {breadcrumbs.map((crumb, index) => {
                const href = `/${breadcrumbs.slice(0, index + 1).join('/')}`;
                const isLast = index === breadcrumbs.length - 1;
                
                // 경로명을 보기 좋게 변환
                const formattedCrumb = crumb
                  .replace(/-/g, ' ')
                  .split(' ')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ');
                
                return (
                  <div key={crumb} className="flex items-center">
                    <ChevronRight size={14} className="mx-2 text-gray-400" />
                    {isLast ? (
                      <span className="font-medium text-primary">{formattedCrumb}</span>
                    ) : (
                      <Link href={href} className="text-gray-500 hover:text-primary transition-colors">
                        {formattedCrumb}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      )}
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout; 