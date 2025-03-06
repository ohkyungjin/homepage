'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Leaf, BookOpen, Gem } from 'lucide-react';

export default function CieloMainPage() {
  return (
    <div className="bg-white">
      {/* 헤더 섹션 */}
      <div className="relative h-[70vh] bg-primary/5 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cielo-ceremony.jpg"
            alt="씨엘로"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-transparent"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            씨엘로
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-10">
            소중한 반려동물을 위한 특별한 추모 서비스, 
            자연과 함께하는 평화로운 안식처를 제공합니다
          </p>
          <Link 
            href="/funeral-reservation" 
            className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-lg hover:bg-white/90 transition-colors text-lg font-medium"
          >
            상담 예약하기
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>

      {/* 소개 섹션 */}
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            씨엘로 서비스 소개
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            씨엘로는 소중한 반려동물을 위한 다양한 추모 서비스를 제공합니다.
            자연과 함께하는 자연장, 영원한 추억을 간직하는 봉안당, 
            시간을 초월한 석물 추모비까지 반려동물과의 마지막 이별을 
            아름답고 의미 있게 만들어 드립니다.
          </p>
        </div>

        {/* 서비스 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* 씨엘로 더 숲 */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/flower-ceremony.jpg"
                alt="씨엘로 더 숲"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <div className="inline-flex items-center bg-white/90 rounded-full px-4 py-1 mb-3">
                    <Leaf size={16} className="text-primary mr-2" />
                    <span className="text-primary font-medium">자연장 서비스</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">씨엘로 더 숲</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                자연과 함께하는 평화로운 안식처, 소중한 반려동물을 위한 
                자연장과 꽃 장례 서비스를 제공합니다. 자연 친화적인 방식으로 
                영원한 안식을 취할 수 있습니다.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>생분해성 친환경 유골함</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>꽃으로 장식된 특별한 장례식</span>
                </li>
              </ul>
              <Link 
                href="/cielo/forest" 
                className="inline-flex items-center justify-center w-full bg-primary/10 text-primary px-6 py-3 rounded-lg hover:bg-primary/20 transition-colors font-medium"
              >
                자세히 알아보기
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* 씨엘로 더 스토리 */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/basic-ceremony.jpg"
                alt="씨엘로 더 스토리"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <div className="inline-flex items-center bg-white/90 rounded-full px-4 py-1 mb-3">
                    <BookOpen size={16} className="text-primary mr-2" />
                    <span className="text-primary font-medium">봉안당 서비스</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">씨엘로 더 스토리</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                소중한 추억을 영원히 간직하는 공간, 반려동물을 위한 
                특별한 봉안당 서비스를 제공합니다. 언제든지 방문하여 
                그리움을 나눌 수 있는 아름다운 공간입니다.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>프리미엄 개인 봉안함</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>디지털 추모관 서비스</span>
                </li>
              </ul>
              <Link 
                href="/cielo/story" 
                className="inline-flex items-center justify-center w-full bg-primary/10 text-primary px-6 py-3 rounded-lg hover:bg-primary/20 transition-colors font-medium"
              >
                자세히 알아보기
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* 씨엘로 더 스톤 */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/cielo-ceremony.jpg"
                alt="씨엘로 더 스톤"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <div className="inline-flex items-center bg-white/90 rounded-full px-4 py-1 mb-3">
                    <Gem size={16} className="text-primary mr-2" />
                    <span className="text-primary font-medium">석물 서비스</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">씨엘로 더 스톤</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                영원히 기억될 아름다운 추모 공간, 소중한 반려동물을 위한 
                맞춤형 석물 서비스를 제공합니다. 최고급 소재와 정교한 기술로 
                특별한 추모 공간을 만들어 드립니다.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>맞춤형 석물 추모비 제작</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>프리미엄 추모 공원</span>
                </li>
              </ul>
              <Link 
                href="/cielo/stone" 
                className="inline-flex items-center justify-center w-full bg-primary/10 text-primary px-6 py-3 rounded-lg hover:bg-primary/20 transition-colors font-medium"
              >
                자세히 알아보기
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* 추가 정보 */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              소중한 반려동물을 위한 특별한 선택
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              씨엘로는 반려동물과의 마지막 이별을 아름답고 의미 있게 만들어 드립니다.
              자연장, 봉안당, 석물 추모비 등 다양한 서비스를 통해 소중한 반려동물을 
              기억하고 추모할 수 있는 특별한 공간을 제공합니다. 
              전문 상담사와의 상담을 통해 가장 적합한 서비스를 선택하세요.
            </p>
            <Link 
              href="/funeral-reservation" 
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-lg font-medium"
            >
              상담 예약하기
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 