'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Calendar, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            CIELO PET
          </Link>
        </div>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-text hover:text-primary transition-colors">
            홈
          </Link>
          
          <Link href="/funeral-services" className="text-text hover:text-primary transition-colors">
            장례 서비스
          </Link>
          
          <Link href="/funeral-cost" className="text-text hover:text-primary transition-colors">
            장례 비용
          </Link>
          
          {/* 시설 안내 메뉴 추가 */}
          <Link href="/facility" className="text-text hover:text-primary transition-colors">
            시설 안내
          </Link>
          
          {/* 씨엘로 메뉴 (드롭다운) */}
          <div className="relative group">
            <button className="flex items-center text-text group-hover:text-primary transition-colors">
              씨엘로
              <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 transition-transform origin-top">
              <Link href="/cielo/forest" className="flex p-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
                <div className="w-16 h-16 rounded-md overflow-hidden mr-4 flex-shrink-0">
                  <img src="/images/flower-ceremony.jpg" alt="씨엘로 더 숲" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-medium text-primary">씨엘로 더 숲</h3>
                  <p className="text-sm text-gray-600">자연장, 꽃 장례 서비스</p>
                </div>
              </Link>
              <Link href="/cielo/story" className="flex p-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
                <div className="w-16 h-16 rounded-md overflow-hidden mr-4 flex-shrink-0">
                  <img src="/images/cielo-ceremony.jpg" alt="씨엘로 더 스토리" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-medium text-primary">씨엘로 더 스토리</h3>
                  <p className="text-sm text-gray-600">봉안당 서비스</p>
                </div>
              </Link>
              <Link href="/cielo/stone" className="flex p-4 hover:bg-gray-50 transition-colors">
                <div className="w-16 h-16 rounded-md overflow-hidden mr-4 flex-shrink-0">
                  <img src="/images/basic-ceremony.jpg" alt="씨엘로 더 스톤" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-medium text-primary">씨엘로 더 스톤</h3>
                  <p className="text-sm text-gray-600">스톤 서비스</p>
                </div>
              </Link>
            </div>
          </div>
          
          <Link href="/blog" className="text-text hover:text-primary transition-colors">
            블로그
          </Link>
        </nav>

        {/* CTA 버튼 */}
        <div className="hidden md:flex items-center">
          <Link 
            href="/funeral-reservation" 
            className="flex items-center bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all"
          >
            <Calendar size={18} className="mr-2" />
            <span>장례 예약</span>
          </Link>
        </div>

        {/* 모바일 메뉴 버튼 */}
        <button 
          className="md:hidden text-text"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-20 left-0 w-full z-50">
          <div className="flex flex-col p-4 space-y-4">
            <Link 
              href="/" 
              className="text-text hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              홈
            </Link>
            
            <Link 
              href="/funeral-services" 
              className="text-text hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              장례 서비스
            </Link>
            
            <Link 
              href="/funeral-cost" 
              className="text-text hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              장례 비용
            </Link>
            
            {/* 모바일 시설 안내 메뉴 */}
            <Link 
              href="/facility" 
              className="text-text hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              시설 안내
            </Link>
            
            {/* 모바일 씨엘로 메뉴 */}
            <div className="py-2">
              <button 
                className="flex items-center justify-between w-full text-text hover:text-primary transition-colors"
                onClick={toggleSubMenu}
              >
                <span>씨엘로</span>
                <ChevronDown size={16} className={`transition-transform ${isSubMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isSubMenuOpen && (
                <div className="mt-2 pl-4 space-y-4 border-l-2 border-gray-100">
                  <Link 
                    href="/cielo/forest" 
                    className="flex items-center py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="w-12 h-12 rounded-md overflow-hidden mr-3 flex-shrink-0">
                      <img src="/images/flower-ceremony.jpg" alt="씨엘로 더 숲" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium text-primary">씨엘로 더 숲</h3>
                      <p className="text-xs text-gray-600">자연장, 꽃 장례 서비스</p>
                    </div>
                  </Link>
                  
                  <Link 
                    href="/cielo/story" 
                    className="flex items-center py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="w-12 h-12 rounded-md overflow-hidden mr-3 flex-shrink-0">
                      <img src="/images/cielo-ceremony.jpg" alt="씨엘로 더 스토리" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium text-primary">씨엘로 더 스토리</h3>
                      <p className="text-xs text-gray-600">봉안당 서비스</p>
                    </div>
                  </Link>
                  
                  <Link 
                    href="/cielo/stone" 
                    className="flex items-center py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="w-12 h-12 rounded-md overflow-hidden mr-3 flex-shrink-0">
                      <img src="/images/basic-ceremony.jpg" alt="씨엘로 더 스톤" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium text-primary">씨엘로 더 스톤</h3>
                      <p className="text-xs text-gray-600">스톤 서비스</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              href="/blog" 
              className="text-text hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              블로그
            </Link>
            <Link 
              href="/funeral-reservation" 
              className="flex items-center justify-center bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <Calendar size={18} className="mr-2" />
              <span>장례 예약</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 