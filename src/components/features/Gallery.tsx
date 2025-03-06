'use client';

import { useState } from 'react';
import Image from 'next/image';

// 갤러리 이미지 데이터
const galleryImages = [
  {
    id: 1,
    src: 'https://picsum.photos/id/169/600/400',
    alt: '반려동물 추모관 내부',
    category: 'facilities',
    description: '따뜻하고 편안한 분위기의 추모관 내부'
  },
  {
    id: 2,
    src: 'https://picsum.photos/id/237/600/400',
    alt: '반려견 추모 행사',
    category: 'funerals',
    description: '소중한 반려견을 위한 개별 추모 행사'
  },
  {
    id: 3,
    src: 'https://picsum.photos/id/582/600/400',
    alt: '추모 화환',
    category: 'memorials',
    description: '아름다운 추모 화환과 장식'
  },
  {
    id: 4,
    src: 'https://picsum.photos/id/659/600/400',
    alt: '야외 추모 공간',
    category: 'facilities',
    description: '자연 속에서 평화로운 안식을 취할 수 있는 야외 공간'
  },
  {
    id: 5,
    src: 'https://picsum.photos/id/1025/600/400',
    alt: '반려묘 추모식',
    category: 'funerals',
    description: '소중한 반려묘를 위한 특별한 추모식'
  },
  {
    id: 6,
    src: 'https://picsum.photos/id/200/600/400',
    alt: '추모 기념품',
    category: 'memorials',
    description: '소중한 추억을 간직할 수 있는 맞춤형 추모 기념품'
  },
  {
    id: 7,
    src: 'https://picsum.photos/id/219/600/400',
    alt: '실내 장례식장',
    category: 'facilities',
    description: '가족들이 편안하게 추모할 수 있는 실내 장례식장'
  },
  {
    id: 8,
    src: 'https://picsum.photos/id/1074/600/400',
    alt: '작은 동물 추모식',
    category: 'funerals',
    description: '작은 반려동물을 위한 맞춤형 추모식'
  },
  {
    id: 9,
    src: 'https://picsum.photos/id/177/600/400',
    alt: '추모 앨범',
    category: 'memorials',
    description: '소중한 추억을 담은 맞춤형 추모 앨범'
  }
];

// 카테고리 데이터
const categories = [
  { id: 'all', label: '전체 보기' },
  { id: 'facilities', label: '시설 안내' },
  { id: 'funerals', label: '장례식' },
  { id: 'memorials', label: '추모 상품' }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // 선택된 카테고리에 따라 이미지 필터링
  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(image => image.category === activeCategory);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            갤러리
          </h2>
          <p className="text-lg text-text/80 max-w-3xl mx-auto">
            마음의 안식처의 시설과 서비스를 사진으로 만나보세요.
            소중한 반려동물을 위한 따뜻하고 존엄한 공간을 확인하실 수 있습니다.
          </p>
        </div>
        
        {/* 카테고리 필터 버튼 */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-text hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* 갤러리 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-xl shadow-md"
            >
              <div className="aspect-[3/2] relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg mb-2">{image.alt}</h3>
                <p className="text-white/90 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 