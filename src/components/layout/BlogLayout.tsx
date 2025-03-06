'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

interface BlogLayoutProps {
  children: React.ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = [
    { name: '마케팅 전략', slug: 'marketing-strategy', count: 12 },
    { name: '디지털 마케팅', slug: 'digital-marketing', count: 8 },
    { name: '소셜 미디어', slug: 'social-media', count: 6 },
    { name: 'SEO', slug: 'seo', count: 5 },
    { name: '콘텐츠 마케팅', slug: 'content-marketing', count: 7 },
    { name: '로컬 마케팅', slug: 'local-marketing', count: 4 },
  ];
  
  const recentPosts = [
    { title: '장례식장을 위한 효과적인 SEO 전략', slug: 'effective-seo-strategies-for-funeral-homes' },
    { title: '소셜 미디어에서 장례 서비스 마케팅하기', slug: 'marketing-funeral-services-on-social-media' },
    { title: '장례식장 웹사이트 최적화 가이드', slug: 'funeral-home-website-optimization-guide' },
  ];

  return (
    <div className="max-w-container mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* 메인 콘텐츠 영역 */}
        <div className="lg:w-2/3">
          {children}
        </div>
        
        {/* 사이드바 */}
        <div className="lg:w-1/3 space-y-8">
          {/* 검색 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">검색</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="블로그 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
          
          {/* 카테고리 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">카테고리</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link 
                    href={`/blog/category/${category.slug}`}
                    className="flex items-center justify-between text-text hover:text-primary transition-colors"
                  >
                    <span className="flex items-center">
                      <Tag size={16} className="mr-2" />
                      {category.name}
                    </span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* 최근 게시물 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">최근 게시물</h3>
            <ul className="space-y-4">
              {recentPosts.map((post) => (
                <li key={post.slug}>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-text hover:text-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* 소셜 공유 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">공유하기</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Facebook에 공유하기"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                aria-label="Twitter에 공유하기"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                aria-label="LinkedIn에 공유하기"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout; 