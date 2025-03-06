'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Calendar, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  // 홈페이지인지 확인
  const isHomePage = pathname === '/' || pathname === '/home';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  // 스크롤 이벤트 감지
  useEffect(() => {
    // 홈페이지가 아닌 경우 초기에 scrolled를 true로 설정
    if (!isHomePage) {
      setScrolled(true);
    }

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // 홈페이지인 경우에만 스크롤 위치에 따라 배경색 변경
      if (isHomePage) {
        const hasScrolled = currentScrollPos > 50;
        setScrolled(hasScrolled);
      }
    };

    // 초기 로드 시 스크롤 위치 확인
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // basePath 설정 (GitHub Pages 배포 환경에서 사용)
  const basePath = process.env.NODE_ENV === 'production' ? '/homepage' : '';
  
  // 이미지 경로 생성 함수
  const getImagePath = (path: string) => {
    return `${basePath}${path}`;
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className={`text-xl sm:text-2xl md:text-3xl font-bold transition-colors duration-300 ${
            scrolled ? 'text-primary' : 'text-white'
          }`}>
            <span className="drop-shadow-md">CIELO PET</span>
          </Link>
        </div>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
          <Link href="/" className={`transition-colors text-sm lg:text-base font-medium ${
            scrolled ? 'text-text hover:text-primary' : 'text-white hover:text-white/80'
          }`}>
            홈
          </Link>
          
          <Link href="/funeral-services" className={`transition-colors text-sm lg:text-base font-medium ${
            scrolled ? 'text-text hover:text-primary' : 'text-white hover:text-white/80'
          }`}>
            장례 서비스
          </Link>
          
          <Link href="/funeral-cost" className={`transition-colors text-sm lg:text-base font-medium ${
            scrolled ? 'text-text hover:text-primary' : 'text-white hover:text-white/80'
          }`}>
            장례 비용
          </Link>
          
          {/* 시설 안내 메뉴 추가 */}
          <Link href="/facility" className={`transition-colors text-sm lg:text-base font-medium ${
            scrolled ? 'text-text hover:text-primary' : 'text-white hover:text-white/80'
          }`}>
            시설 안내
          </Link>
          
          {/* 씨엘로 메뉴 (드롭다운) */}
          <div className="relative group">
            <button className={`flex items-center transition-colors text-sm lg:text-base font-medium ${
              scrolled ? 'text-text group-hover:text-primary' : 'text-white group-hover:text-white/80'
            }`}>
              씨엘로
              <ChevronDown size={14} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 transition-transform origin-top">
              <Link href="/cielo/forest" className="flex p-3 hover:bg-gray-50 transition-colors border-b border-gray-100">
                <div className="w-14 h-14 rounded-md overflow-hidden mr-3 flex-shrink-0">
                  <img src={getImagePath("/images/flower-ceremony.jpg")} alt="씨엘로 더 숲" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-medium text-primary text-sm">씨엘로 더 숲</h3>
                  <p className="text-xs text-gray-600">자연장, 꽃 장례 서비스</p>
                </div>
              </Link>
              <Link href="/cielo/story" className="flex p-3 hover:bg-gray-50 transition-colors border-b border-gray-100">
                <div className="w-14 h-14 rounded-md overflow-hidden mr-3 flex-shrink-0">
                  <img src={getImagePath("/images/cielo-ceremony.jpg")} alt="씨엘로 더 스토리" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-medium text-primary text-sm">씨엘로 더 스토리</h3>
                  <p className="text-xs text-gray-600">봉안당 서비스</p>
                </div>
              </Link>
              <Link href="/cielo/stone" className="flex p-3 hover:bg-gray-50 transition-colors">
                <div className="w-14 h-14 rounded-md overflow-hidden mr-3 flex-shrink-0">
                  <img src={getImagePath("/images/basic-ceremony.jpg")} alt="씨엘로 더 스톤" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-medium text-primary text-sm">씨엘로 더 스톤</h3>
                  <p className="text-xs text-gray-600">스톤 서비스</p>
                </div>
              </Link>
            </div>
          </div>
          
          <Link href="/blog" className={`transition-colors text-sm lg:text-base font-medium ${
            scrolled ? 'text-text hover:text-primary' : 'text-white hover:text-white/80'
          }`}>
            블로그
          </Link>
        </nav>

        {/* CTA 버튼 */}
        <div className="hidden md:flex items-center">
          <Link 
            href="/funeral-reservation" 
            className={`flex items-center px-4 py-2 lg:px-6 lg:py-3 rounded-md transition-all text-sm lg:text-base font-medium ${
              scrolled 
                ? 'bg-secondary text-white hover:bg-secondary/90' 
                : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30'
            }`}
          >
            <Calendar size={16} className="mr-2" />
            <span>장례 예약</span>
          </Link>
        </div>

        {/* 모바일 메뉴 버튼 */}
        <button 
          className={`md:hidden ${scrolled ? 'text-text' : 'text-white'}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="flex justify-between items-center p-4 border-b border-gray-100">
            <Link href="/" className="text-xl font-bold text-primary" onClick={() => setIsMenuOpen(false)}>
              CIELO PET
            </Link>
            <button 
              className="text-text"
              onClick={toggleMenu}
              aria-label="메뉴 닫기"
            >
              <X size={22} />
            </button>
          </div>
          <div className="flex flex-col p-4 space-y-4">
            <Link 
              href="/" 
              className="text-text hover:text-primary transition-colors py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              홈
            </Link>
            
            <Link 
              href="/funeral-services" 
              className="text-text hover:text-primary transition-colors py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              장례 서비스
            </Link>
            
            <Link 
              href="/funeral-cost" 
              className="text-text hover:text-primary transition-colors py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              장례 비용
            </Link>
            
            {/* 모바일 시설 안내 메뉴 */}
            <Link 
              href="/facility" 
              className="text-text hover:text-primary transition-colors py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              시설 안내
            </Link>
            
            {/* 모바일 씨엘로 메뉴 */}
            <div className="py-2">
              <button 
                className="flex items-center justify-between w-full text-text hover:text-primary transition-colors text-base font-medium"
                onClick={toggleSubMenu}
              >
                <span>씨엘로</span>
                <ChevronDown size={16} className={`transition-transform ${isSubMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isSubMenuOpen && (
                <div className="mt-3 pl-3 space-y-3 border-l-2 border-gray-100">
                  <Link 
                    href="/cielo/forest" 
                    className="flex items-center py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="w-12 h-12 rounded-md overflow-hidden mr-3 flex-shrink-0">
                      <img src={getImagePath("/images/flower-ceremony.jpg")} alt="씨엘로 더 숲" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium text-primary text-sm">씨엘로 더 숲</h3>
                      <p className="text-xs text-gray-600">자연장, 꽃 장례 서비스</p>
                    </div>
                  </Link>
                  
                  <Link 
                    href="/cielo/story" 
                    className="flex items-center py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="w-12 h-12 rounded-md overflow-hidden mr-3 flex-shrink-0">
                      <img src={getImagePath("/images/cielo-ceremony.jpg")} alt="씨엘로 더 스토리" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium text-primary text-sm">씨엘로 더 스토리</h3>
                      <p className="text-xs text-gray-600">봉안당 서비스</p>
                    </div>
                  </Link>
                  
                  <Link 
                    href="/cielo/stone" 
                    className="flex items-center py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="w-12 h-12 rounded-md overflow-hidden mr-3 flex-shrink-0">
                      <img src={getImagePath("/images/basic-ceremony.jpg")} alt="씨엘로 더 스톤" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium text-primary text-sm">씨엘로 더 스톤</h3>
                      <p className="text-xs text-gray-600">스톤 서비스</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              href="/blog" 
              className="text-text hover:text-primary transition-colors py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              블로그
            </Link>
            
            <div className="pt-3 mt-3 border-t border-gray-100">
              <Link 
                href="/funeral-reservation" 
                className="flex items-center justify-center bg-secondary text-white px-4 py-3 rounded-md hover:bg-opacity-90 transition-all w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <Calendar size={16} className="mr-2" />
                <span className="font-medium text-sm">장례 예약</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 