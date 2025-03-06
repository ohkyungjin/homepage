'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative bg-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* 배경 장식 요소 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      </div>

      <div className="max-w-container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* 텍스트 섹션 */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              이별을 맞이한 당신에게<br />
              <span className="text-secondary">고요한 위로</span>를
            </h1>
            
            <p className="text-lg md:text-xl text-text/80 mb-8 max-w-xl mx-auto md:mx-0">
              소중한 반려동물과의 마지막 순간을 따뜻하게 지켜드립니다.
              존엄하고 아름다운 이별을 위해 정성을 다하겠습니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                href="/services" 
                className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center"
              >
                장례 서비스 안내
                <ArrowRight size={18} className="ml-2" />
              </Link>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white border-2 border-primary text-primary px-8 py-3 rounded-md hover:bg-primary/5 transition-colors flex items-center justify-center"
              >
                <Phone size={18} className="mr-2" />
                장례 예약 문의
              </button>
            </div>
            
            <div className="mt-8 text-text/70 text-sm flex items-center justify-center md:justify-start">
              <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              연중무휴 24시간 상담 가능
            </div>
          </div>
          
          {/* 이미지 섹션 */}
          <div className="md:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="https://picsum.photos/id/169/800/800"
                alt="반려동물 추모 이미지"
                fill
                className="object-cover rounded-2xl shadow-xl"
                priority
              />
              
              {/* 이미지 위 장식 요소 */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-primary font-bold">ALL PETS</div>
                <div className="text-xs text-text/70">GO TO HEAVEN</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-primary font-bold">CIELO PET</div>
                <div className="text-xs text-text/70">씨엘로펫</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 긴급 연락 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-2xl font-bold text-primary mb-4">장례 예약 문의</h3>
            <p className="mb-6 text-text/80">
              언제든지 연락 주시면 빠르게 도움 드리겠습니다.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">고객센터</span>
                <a href="tel:1577-7332" className="text-primary font-bold text-lg">
                  1577-7332
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">운영시간</span>
                <span className="text-primary font-bold text-lg">
                  연중무휴
                </span>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
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