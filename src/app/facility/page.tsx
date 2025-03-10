'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight, Heart, Flower2, Building2, Home } from 'lucide-react';
import { motion } from 'framer-motion';

// 슬라이드 데이터
const facilityData = [
  {
    id: 'exterior',
    title: '외부전경',
    description: '자연과 조화를 이루는 아름다운 씨엘로 펫 외부 전경입니다. 평화로운 분위기 속에서 소중한 반려동물을 추모할 수 있는 공간을 제공합니다.',
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2940&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=2940&auto=format&fit=crop'
    ],
    link: null,
  },
  {
    id: 'memorial',
    title: '추모실',
    description: '소중한 반려동물을 기억하고 추모할 수 있는 특별한 공간입니다. 편안하고 따뜻한 분위기에서 마음을 나눌 수 있습니다.',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2940&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2940&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2940&auto=format&fit=crop'
    ],
    link: null,
  },
  {
    id: 'farewell',
    title: '고별실',
    description: '소중한 반려동물과의 마지막 이별을 위한 특별한 공간입니다. 평화롭고 아름다운 환경에서 존엄한 작별 인사를 나눌 수 있습니다.',
    images: [
      'https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?q=80&w=2940&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?q=80&w=2940&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2940&auto=format&fit=crop'
    ],
    link: null,
  },
  {
    id: 'forest',
    title: '씨엘로 더 숲',
    description: '자연과 함께하는 평화로운 안식처, 소중한 반려동물을 위한 자연장과 꽃 장례 서비스를 제공하는 공간입니다.',
    images: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2940&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2940&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2940&auto=format&fit=crop'
    ],
    link: '/cielo/forest',
  },
  {
    id: 'story',
    title: '씨엘로 더 스토리',
    description: '소중한 추억을 영원히 간직하는 공간, 반려동물을 위한 특별한 봉안당 서비스를 제공하는 공간입니다.',
    images: [
      'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=2940&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2940&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1604537466158-719b1972feb8?q=80&w=2940&auto=format&fit=crop'
    ],
    link: '/cielo/story',
  },
  {
    id: 'stone',
    title: '씨엘로 더 스톤',
    description: '영원히 기억될 아름다운 추모 공간, 소중한 반려동물을 위한 맞춤형 석물 서비스를 제공하는 공간입니다.',
    images: [
      'https://images.unsplash.com/photo-1496769336828-c522a3a7e33c?q=80&w=2940&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?q=80&w=2940&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1630699144867-37acec97df5a?q=80&w=2940&auto=format&fit=crop'
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
    <div className="bg-gradient-to-b from-white via-primary/5 to-white">
      {/* 헤더 섹션 */}
      <section className="relative h-[70vh] sm:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2940&auto=format&fit=crop"
            alt="시설 안내"
            fill
            className="object-cover filter brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/40 to-white"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-24 mb-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center"
          >
            <Building2 size={40} className="text-white" />
          </motion.div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            마음을 담은 <br/>
            <span className="text-primary-light relative">
              특별한 공간
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-0 left-0 h-1 bg-white/30"
              />
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl font-light px-4 mb-8">
            소중한 반려동물과 함께하는 
            <span className="font-medium">평화로운 안식처</span>
          </p>
        </motion.div>
      </section>

      {/* 시설 소개 섹션 */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Home size={24} className="text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              씨엘로 펫 시설 안내
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              씨엘로 펫은 소중한 반려동물을 위한 다양한 시설을 갖추고 있습니다.
              아름답고 평화로운 환경에서 소중한 반려동물을 기억하고 추모할 수 있는
              특별한 공간을 경험해보세요.
            </p>
          </motion.div>

          {/* 시설 목록 */}
          <div className="space-y-32">
            {facilityData.map((facility, index) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group flex flex-col ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                } gap-12 md:gap-16 items-center`}
              >
                {/* 이미지 슬라이더 */}
                <div className="w-full md:w-1/2 h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform group-hover:-translate-y-2 transition-all duration-500">
                  <ImageSlider images={facility.images} />
                </div>

                {/* 텍스트 정보 */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <div className="inline-flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Flower2 size={16} className="text-primary" />
                    </div>
                    <span className="text-primary font-medium">{facility.id}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    {facility.description}
                  </p>
                  {facility.link && (
                    <motion.div
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link 
                        href={facility.link}
                        className="inline-flex items-center text-primary font-medium group"
                      >
                        <span className="border-b-2 border-transparent group-hover:border-primary transition-all duration-300">
                          자세히 알아보기
                        </span>
                        <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-5"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-6 text-center relative"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Heart size={24} className="text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            직접 방문해보세요
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            씨엘로 펫의 다양한 시설을 직접 방문하여 경험해보세요.
            전문 상담사가 친절하게 안내해 드립니다.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/funeral-reservation" 
              className="inline-flex items-center justify-center bg-primary text-white px-10 py-5 rounded-full hover:bg-primary/90 transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl"
            >
              방문 예약하기
              <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
} 