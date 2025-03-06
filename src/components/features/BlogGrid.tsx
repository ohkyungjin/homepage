'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

// 블로그 포스트 데이터
const blogPosts = [
  {
    id: 1,
    title: '반려동물 상실의 슬픔, 어떻게 극복할 수 있을까요?',
    excerpt: '소중한 반려동물과의 이별 후 경험하는 상실감과 슬픔을 극복하는 방법에 대해 알아봅니다.',
    image: 'https://picsum.photos/id/169/800/500',
    date: '2023-10-15',
    author: '김수의',
    category: '반려동물 심리',
    slug: '/blog/pet-loss-grief'
  },
  {
    id: 2,
    title: '갤럭시 스톤으로 영원히 간직하는 추억',
    excerpt: '씨엘로펫의 갤럭시 스톤 서비스를 통해 반려동물의 추억을 아름답게 간직하는 방법을 소개합니다.',
    image: 'https://picsum.photos/id/175/800/500',
    date: '2023-09-28',
    author: '박장례',
    category: '추모 서비스',
    slug: '/blog/galaxy-stone-memories'
  },
  {
    id: 3,
    title: '플라워 장례의 의미와 아름다움',
    excerpt: '꽃으로 가득한 마지막 이별, 플라워 장례의 의미와 진행 과정에 대해 자세히 알아봅니다.',
    image: 'https://picsum.photos/id/177/800/500',
    date: '2023-09-10',
    author: '이꽃님',
    category: '장례 서비스',
    slug: '/blog/flower-funeral-meaning'
  },
  {
    id: 4,
    title: '반려동물 장례, 어떤 방식이 우리 가족에게 맞을까?',
    excerpt: '다양한 반려동물 장례 방식의 특징과 장단점을 비교하여 가족에게 맞는 방식을 선택하는 데 도움을 드립니다.',
    image: 'https://picsum.photos/id/237/800/500',
    date: '2023-08-22',
    author: '최상담',
    category: '장례 안내',
    slug: '/blog/choosing-pet-funeral'
  },
  {
    id: 5,
    title: '하늘 정원에서 만나는 우리 아이들',
    excerpt: '씨엘로펫의 하늘 정원 봉안 서비스와 그 의미, 그리고 방문 방법에 대해 안내해 드립니다.',
    image: 'https://picsum.photos/id/179/800/500',
    date: '2023-08-05',
    author: '정원장',
    category: '봉안 서비스',
    slug: '/blog/sky-garden-guide'
  },
  {
    id: 6,
    title: '반려동물 자연장, 자연으로의 아름다운 회귀',
    excerpt: '환경을 생각하는 자연장 서비스의 의미와 진행 과정, 그리고 장소 선택에 대한 안내입니다.',
    image: 'https://picsum.photos/id/181/800/500',
    date: '2023-07-19',
    author: '한자연',
    category: '자연장',
    slug: '/blog/natural-burial'
  }
];

// 블로그 카테고리 데이터
const categories = [
  { name: '전체 보기', slug: '/blog' },
  { name: '반려동물 심리', slug: '/blog/category/pet-psychology' },
  { name: '장례 서비스', slug: '/blog/category/funeral-services' },
  { name: '추모 서비스', slug: '/blog/category/memorial-services' },
  { name: '봉안 서비스', slug: '/blog/category/columbarium' },
  { name: '자연장', slug: '/blog/category/natural-burial' },
  { name: '장례 안내', slug: '/blog/category/funeral-guide' }
];

export default function BlogGrid() {
  // 첫 번째 포스트는 하이라이트로 표시
  const highlightedPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1, 5); // 나머지 4개 포스트
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            씨엘로펫 블로그
          </h2>
          <p className="text-lg text-text/80 max-w-3xl mx-auto">
            반려동물과의 이별, 그리고 그 후의 시간에 대한 이야기와 정보를 나눕니다.
            소중한 가족을 기억하는 다양한 방법과 위로의 글을 만나보세요.
          </p>
        </div>
        
        {/* 카테고리 네비게이션 */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              href={category.slug}
              className="px-5 py-2 rounded-full bg-gray-100 text-text hover:bg-primary hover:text-white transition-colors"
            >
              {category.name}
            </Link>
          ))}
        </div>
        
        {/* 하이라이트 포스트 */}
        <div className="mb-16">
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="md:flex">
              <div className="md:w-1/2 relative">
                <div className="aspect-[16/9] md:aspect-auto md:h-full relative">
                  <Image
                    src={highlightedPost.image}
                    alt={highlightedPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {highlightedPost.category}
                  </span>
                  <div className="flex items-center text-text/60 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {highlightedPost.date}
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  {highlightedPost.title}
                </h3>
                
                <p className="text-text/80 mb-6">
                  {highlightedPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                      <User size={16} />
                    </div>
                    <span className="text-sm">{highlightedPost.author}</span>
                  </div>
                  
                  <Link 
                    href={highlightedPost.slug} 
                    className="flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                  >
                    자세히 보기
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 일반 포스트 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {regularPosts.map((post) => (
            <div key={post.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 md:h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="text-text/60 text-xs flex items-center">
                    <Calendar size={12} className="mr-1" />
                    {post.date}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-text/70 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={post.slug} 
                  className="flex items-center text-primary text-sm font-medium hover:text-primary-dark transition-colors"
                >
                  자세히 보기
                  <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            모든 글 보기
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
} 