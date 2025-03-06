'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, ChevronDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // basePath 설정 (GitHub Pages 배포 환경에서 사용)
  const basePath = process.env.NODE_ENV === 'production' ? '/homepage' : '';
  
  // 이미지 경로 생성 함수
  const getImagePath = (path: string) => {
    return `${basePath}${path}`;
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1739361133037-77be66a4ea6a?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="반려동물 장례식장 건물"
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAJAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgcI/8QAIhAAAgEEAQQDAAAAAAAAAAAAAQIDBAUGEQAHEiExQVFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAaEQACAgMAAAAAAAAAAAAAAAABAgADESHw/9oADAMBAAIRAxEAPwCU9Qb/AJDi+Ry2+1UVFUUcVQ0UUcKrJJKFYgFmJAUEgbJPgDWt+MZuGYWW7VdLaKOsq6qjqJKeKSZYwZFQkKSoJAJA8E+TrXnQDEsYvOJZlJeKCWpqJKdUlSWdpEZQ4JBBIIJ0D4OtDXnVnKLJa6e3UdRQRU8SqiLTsQAB+k7P7vXJWKxkzMdTnf/Z"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
      </div>

      {/* 스크롤 다운 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center animate-bounce z-10">
        <span className="text-xs sm:text-sm mb-1 sm:mb-2 font-medium">스크롤</span>
        <ChevronDown size={20} />
      </div>

      {/* 히어로 콘텐츠 */}
      <div className="relative h-full flex items-center justify-center pt-16 sm:pt-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 w-full">
          <div 
            ref={ref} 
            className={`text-center text-white transition-all duration-1000 transform ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight drop-shadow-lg">
              이별을 맞이한 당신에게<br />
              <span className="text-accent">고요한 위로</span>를
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white mb-8 sm:mb-10 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
              소중한 반려동물과의 마지막 순간을 따뜻하게 지켜드립니다.<br />
              존엄하고 아름다운 이별을 위해 정성을 다하겠습니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
              <Link 
                href="/funeral-services" 
                className="bg-accent text-black px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-accent/90 transition-all transform hover:scale-105 flex items-center justify-center font-bold shadow-lg text-sm sm:text-base"
              >
                장례 서비스 안내
                <ArrowRight size={16} className="ml-2" />
              </Link>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-white/10 transition-all transform hover:scale-105 flex items-center justify-center font-bold backdrop-blur-sm text-sm sm:text-base"
              >
                <Phone size={16} className="mr-2" />
                장례 예약 문의
              </button>
            </div>
            
            <div className="mt-8 sm:mt-10 text-white/90 text-xs sm:text-sm flex items-center justify-center">
              <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              연중무휴 24시간 상담 가능
            </div>
          </div>
        </div>
      </div>
      
      {/* 긴급 연락 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl p-6 sm:p-8 max-w-md w-full shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">장례 예약 문의</h3>
            <p className="mb-5 sm:mb-6 text-text/80 text-sm sm:text-base">
              언제든지 연락 주시면 빠르게 도움 드리겠습니다.
            </p>
            
            <div className="bg-gray-50 p-5 sm:p-6 rounded-lg mb-5 sm:mb-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="font-medium text-sm sm:text-base">고객센터</span>
                <a href="tel:1577-7332" className="text-primary font-bold text-lg sm:text-xl">
                  1577-7332
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm sm:text-base">운영시간</span>
                <span className="text-primary font-bold text-sm sm:text-base">
                  연중무휴 24시간
                </span>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="bg-primary text-white px-5 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-primary/90 transition-colors text-sm sm:text-base"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 