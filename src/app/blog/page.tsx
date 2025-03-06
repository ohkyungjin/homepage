'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

// 하이라이트 포스트 데이터
const highlightedPost = {
  title: '반려동물과의 이별, 그 슬픔을 어떻게 극복할 수 있을까요?',
  excerpt: '반려동물과의 이별은 깊은 슬픔과 상실감을 가져옵니다. 이 글에서는 반려동물 상실 후 경험하는 감정들과 그것을 건강하게 극복하는 방법에 대해 이야기합니다.',
  image: 'https://picsum.photos/id/1025/1200/600',
  date: '2023년 10월 15일',
  author: '김민지 수의사',
  category: '그리프 케어',
  slug: '/blog/pet-loss-grief'
};

// 최근 포스트 데이터
const recentPosts = [
  {
    title: '반려동물을 위한 자연장과 수목장의 의미',
    excerpt: '자연으로 돌아가는 친환경적인 장례 방식인 자연장과 수목장의 의미와 과정에 대해 알아봅니다.',
    image: 'https://picsum.photos/id/129/600/400',
    date: '2023년 9월 28일',
    author: '박준호 원장',
    category: '장례 방식',
    slug: '/blog/natural-burial'
  },
  {
    title: '반려동물 장례식, 아이들과 함께하는 방법',
    excerpt: '어린 자녀들에게 반려동물의 죽음을 설명하고 함께 장례식에 참여하는 방법에 대한 가이드입니다.',
    image: 'https://picsum.photos/id/177/600/400',
    date: '2023년 9월 15일',
    author: '이수연 상담사',
    category: '가족 케어',
    slug: '/blog/children-pet-funeral'
  },
  {
    title: '반려동물을 기억하는 의미있는 추모 방법 10가지',
    excerpt: '소중한 반려동물을 오래도록 기억하고 추모할 수 있는 창의적이고 의미있는 방법들을 소개합니다.',
    image: 'https://picsum.photos/id/169/600/400',
    date: '2023년 8월 30일',
    author: '최지원 추모 전문가',
    category: '추모 방법',
    slug: '/blog/memorial-ideas'
  },
  {
    title: '반려동물 화장, 알아두어야 할 모든 것',
    excerpt: '반려동물 화장 과정과 준비 사항, 그리고 화장 후 선택할 수 있는 다양한 옵션에 대해 설명합니다.',
    image: 'https://picsum.photos/id/237/600/400',
    date: '2023년 8월 12일',
    author: '박준호 원장',
    category: '화장 서비스',
    slug: '/blog/cremation-guide'
  },
  {
    title: '반려동물 장례식 준비를 위한 체크리스트',
    excerpt: '갑작스러운 이별에 당황하지 않도록, 미리 알아두면 좋은 반려동물 장례식 준비 사항들을 정리했습니다.',
    image: 'https://picsum.photos/id/1062/600/400',
    date: '2023년 7월 25일',
    author: '김민지 수의사',
    category: '장례 준비',
    slug: '/blog/funeral-checklist'
  },
  {
    title: '반려동물 사전 장례 계획의 중요성',
    excerpt: '미리 준비하는 반려동물 장례 계획이 왜 중요한지, 그리고 어떻게 준비할 수 있는지 알아봅니다.',
    image: 'https://picsum.photos/id/20/600/400',
    date: '2023년 7월 10일',
    author: '이수연 상담사',
    category: '사전 계획',
    slug: '/blog/pre-planning'
  }
];

// 카테고리 데이터
const categories = [
  { name: '그리프 케어', count: 8, slug: '/blog/category/grief-care' },
  { name: '장례 방식', count: 12, slug: '/blog/category/funeral-types' },
  { name: '추모 방법', count: 10, slug: '/blog/category/memorial-ideas' },
  { name: '화장 서비스', count: 6, slug: '/blog/category/cremation' },
  { name: '사전 계획', count: 5, slug: '/blog/category/pre-planning' },
  { name: '가족 케어', count: 7, slug: '/blog/category/family-care' },
  { name: '반려동물 이야기', count: 15, slug: '/blog/category/pet-stories' }
];

export default function BlogPage() {
  return (
    <div>
      {/* 블로그 소개 섹션 */}
      <section className="mb-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            마음의 안식처 블로그
          </h1>
          <p className="text-lg text-text/80 max-w-3xl mx-auto">
            반려동물과의 이별, 그리고 그 후의 여정에 대한 이야기를 나눕니다.
            슬픔을 함께 나누고 치유하는 과정을 돕는 다양한 정보와 이야기를 만나보세요.
          </p>
        </div>
      </section>
      
      {/* 하이라이트 포스트 섹션 */}
      <section className="mb-16">
        <Link href={highlightedPost.slug} className="block group">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <div className="relative h-[400px]">
              <Image
                src={highlightedPost.image}
                alt={highlightedPost.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <div className="flex items-center space-x-4 mb-3 text-sm">
                <span className="bg-secondary px-3 py-1 rounded-full font-medium">
                  {highlightedPost.category}
                </span>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  <span>{highlightedPost.date}</span>
                </div>
                <div className="flex items-center">
                  <User size={16} className="mr-1" />
                  <span>{highlightedPost.author}</span>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-secondary transition-colors">
                {highlightedPost.title}
              </h2>
              <p className="text-white/80 mb-4 max-w-3xl">
                {highlightedPost.excerpt}
              </p>
              <div className="flex items-center text-secondary font-medium">
                <span>자세히 읽기</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      </section>
      
      {/* 최근 포스트 그리드 */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            최근 게시물
          </h2>
          <Link 
            href="/blog/archive" 
            className="flex items-center text-secondary font-medium hover:underline"
          >
            모든 게시물 보기
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <Link 
              key={index} 
              href={post.slug}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all group"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 text-sm text-text/60 mb-3">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <span className="bg-primary/10 px-2 py-0.5 rounded text-primary">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>
                <p className="text-text/80 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text/60">{post.author}</span>
                  <div className="flex items-center text-secondary font-medium">
                    <span>읽기</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* 카테고리 섹션 */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
          카테고리
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <Link 
                key={index} 
                href={category.slug}
                className="flex items-center justify-between p-3 rounded-md hover:bg-primary/5 transition-colors group"
              >
                <div className="flex items-center">
                  <Tag size={18} className="text-primary mr-2" />
                  <span className="font-medium group-hover:text-secondary transition-colors">
                    {category.name}
                  </span>
                </div>
                <span className="bg-primary/10 text-primary text-sm px-2 py-0.5 rounded-full">
                  {category.count}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 