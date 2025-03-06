'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-xl font-bold mb-4">장례식장 마케팅</h3>
            <p className="mb-4 text-gray-300">
              장례식장을 위한 맞춤형 마케팅 솔루션으로 비즈니스 성장을 도와드립니다.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="text-gray-300 hover:text-white transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="text-gray-300 hover:text-white transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="text-gray-300 hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-xl font-bold mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  회사 소개
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  서비스
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  블로그
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          {/* 서비스 */}
          <div>
            <h3 className="text-xl font-bold mb-4">서비스</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/seo" className="text-gray-300 hover:text-white transition-colors">
                  검색 엔진 최적화
                </Link>
              </li>
              <li>
                <Link href="/services/social-media" className="text-gray-300 hover:text-white transition-colors">
                  소셜 미디어 마케팅
                </Link>
              </li>
              <li>
                <Link href="/services/content" className="text-gray-300 hover:text-white transition-colors">
                  콘텐츠 마케팅
                </Link>
              </li>
              <li>
                <Link href="/services/ppc" className="text-gray-300 hover:text-white transition-colors">
                  PPC 광고
                </Link>
              </li>
              <li>
                <Link href="/services/web-design" className="text-gray-300 hover:text-white transition-colors">
                  웹사이트 디자인
                </Link>
              </li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-xl font-bold mb-4">연락처</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 text-gray-300" size={18} />
                <span className="text-gray-300">서울특별시 강남구 테헤란로 123, 4층</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-gray-300" size={18} />
                <a href="tel:02-123-4567" className="text-gray-300 hover:text-white transition-colors">
                  02-123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-gray-300" size={18} />
                <a href="mailto:info@funeralmarketing.kr" className="text-gray-300 hover:text-white transition-colors">
                  info@funeralmarketing.kr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 저작권 */}
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 장례식장 마케팅. 모든 권리 보유.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 