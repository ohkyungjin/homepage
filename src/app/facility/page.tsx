'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// 슬라이드 데이터
const facilityData = [
  {
    id: 'exterior',
    title: '외부전경',
    description: '자연과 조화를 이루는 아름다운 씨엘로 펫 외부 전경입니다. 평화로운 분위기 속에서 소중한 반려동물을 추모할 수 있는 공간을 제공합니다.',
    images: [
      '/images/basic-ceremony.jpg',
      '/images/cielo-ceremony.jpg',
      '/images/flower-ceremony.jpg',
    ],
    link: null,
  },
  {
    id: 'memorial',
    title: '추모실',
    description: '소중한 반려동물을 기억하고 추모할 수 있는 특별한 공간입니다. 편안하고 따뜻한 분위기에서 마음을 나눌 수 있습니다.',
    images: [
      '/images/cielo-ceremony.jpg',
      '/images/flower-ceremony.jpg',
      '/images/basic-ceremony.jpg',
    ],
    link: null,
  },
  {
    id: 'farewell',
    title: '고별실',
    description: '소중한 반려동물과의 마지막 이별을 위한 특별한 공간입니다. 평화롭고 아름다운 환경에서 존엄한 작별 인사를 나눌 수 있습니다.',
    images: [
      '/images/flower-ceremony.jpg',
      '/images/basic-ceremony.jpg',
      '/images/cielo-ceremony.jpg',
    ],
    link: null,
  },
  {
    id: 'forest',
    title: '씨엘로 더 숲',
    description: '자연과 함께하는 평화로운 안식처, 소중한 반려동물을 위한 자연장과 꽃 장례 서비스를 제공하는 공간입니다.',
    images: [
      '/images/flower-ceremony.jpg',
      '/images/cielo-ceremony.jpg',
      '/images/basic-ceremony.jpg',
    ],
    link: '/cielo/forest',
  },
  {
    id: 'story',
    title: '씨엘로 더 스토리',
    description: '소중한 추억을 영원히 간직하는 공간, 반려동물을 위한 특별한 봉안당 서비스를 제공하는 공간입니다.',
    images: [
      '/images/basic-ceremony.jpg',
      '/images/flower-ceremony.jpg',
      '/images/cielo-ceremony.jpg',
    ],
    link: '/cielo/story',
  },
  {
    id: 'stone',
    title: '씨엘로 더 스톤',
    description: '영원히 기억될 아름다운 추모 공간, 소중한 반려동물을 위한 맞춤형 석물 서비스를 제공하는 공간입니다.',
    images: [
      '/images/cielo-ceremony.jpg',
      '/images/basic-ceremony.jpg',
      '/images/flower-ceremony.jpg',
    ],
    link: '/cielo/stone',
  },
];

// 슬라이드 컴포넌트
const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    // 자동 슬라이드
    timeoutRef.current = setTimeout(nextSlide, 5000);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl">
      {/* 이미지 슬라이더 */}
      <div 
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <Image
              src={image}
              alt={`슬라이드 ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* 네비게이션 버튼 */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-md z-10 transition-all"
        aria-label="이전 슬라이드"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-md z-10 transition-all"
        aria-label="다음 슬라이드"
      >
        <ChevronRight size={24} />
      </button>

      {/* 인디케이터 */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setCurrentIndex(index);
              setTimeout(() => setIsTransitioning(false), 500);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            aria-label={`슬라이드 ${index + 1}로 이동`}
          />
        ))}
      </div>
    </div>
  );
};

export default function FacilityPage() {
  return (
    <div className="bg-white">
      {/* 헤더 섹션 */}
      <div className="relative h-[50vh] bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1540018177157-957400dbd08a?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="시설 안내"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-transparent"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            시설 안내
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            소중한 반려동물을 위한 씨엘로 펫의 특별한 공간을 소개합니다
          </p>
        </div>
      </div>

      {/* 시설 소개 섹션 */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            씨엘로 펫 시설 안내
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            씨엘로 펫은 소중한 반려동물을 위한 다양한 시설을 갖추고 있습니다.
            아름답고 평화로운 환경에서 소중한 반려동물을 기억하고 추모할 수 있는
            특별한 공간을 경험해보세요.
          </p>
        </div>

        {/* 시설 목록 */}
        <div className="space-y-24">
          {facilityData.map((facility, index) => (
            <div 
              key={facility.id}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12`}
            >
              {/* 이미지 슬라이더 */}
              <div className="w-full md:w-1/2 h-[300px] md:h-[400px]">
                <ImageSlider images={facility.images} />
              </div>

              {/* 텍스트 정보 */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  {facility.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {facility.description}
                </p>
                {facility.link && (
                  <Link 
                    href={facility.link}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    자세히 알아보기
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA 섹션 */}
      <div className="bg-primary/5 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            직접 방문해보세요
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            씨엘로 펫의 다양한 시설을 직접 방문하여 경험해보세요.
            전문 상담사가 친절하게 안내해 드립니다.
          </p>
          <Link 
            href="/funeral-reservation" 
            className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-lg font-medium"
          >
            방문 예약하기
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
} 