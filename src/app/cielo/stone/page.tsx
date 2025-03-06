'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Gem, Star } from 'lucide-react';

export default function CieloStonePage() {
  return (
    <div className="bg-white">
      {/* 헤더 섹션 */}
      <div className="relative h-[60vh] bg-primary/5 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cielo-ceremony.jpg"
            alt="씨엘로 더 스톤"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-transparent"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            씨엘로 더 스톤
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            영원히 기억될 아름다운 추모 공간, 소중한 반려동물을 위한 맞춤형 석물 서비스
          </p>
        </div>
      </div>

      {/* 소개 섹션 */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            시간을 초월한 영원한 기억
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            씨엘로 더 스톤은 소중한 반려동물을 위한 맞춤형 석물 추모 서비스를 제공합니다.
            최고급 소재와 정교한 기술로 제작된 석물을 통해 영원히 기억될 수 있는 
            특별한 추모 공간을 만들어 드립니다.
          </p>
        </div>

        {/* 서비스 특징 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/basic-ceremony.jpg"
                alt="맞춤형 석물 제작"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6">
                  <div className="inline-flex items-center bg-white/90 rounded-full px-4 py-1 mb-3">
                    <Gem size={16} className="text-primary mr-2" />
                    <span className="text-primary font-medium">맞춤형 석물 제작</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary mb-4">정성을 담은 석물 추모비</h3>
              <p className="text-gray-600 mb-6">
                반려동물의 개성과 특징을 반영한 맞춤형 석물 추모비를 제작합니다.
                최고급 대리석과 화강암을 사용하여 시간이 지나도 변하지 않는 
                아름다운 추모 공간을 만들어 드립니다.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>최고급 대리석, 화강암 소재 사용</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>반려동물 모습 조각 서비스</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>맞춤형 디자인 및 문구 각인</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>정기적인 관리 및 청소 서비스</span>
                </li>
              </ul>
              <Link 
                href="/funeral-reservation" 
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                자세히 알아보기
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/flower-ceremony.jpg"
                alt="프리미엄 추모 공원"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6">
                  <div className="inline-flex items-center bg-white/90 rounded-full px-4 py-1 mb-3">
                    <Star size={16} className="text-secondary mr-2" />
                    <span className="text-secondary font-medium">프리미엄 추모 공원</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-secondary mb-4">아름다운 추모 공간</h3>
              <p className="text-gray-600 mb-6">
                자연과 조화를 이루는 아름다운 추모 공원에서 소중한 반려동물을 기억하세요.
                평화로운 환경과 세심한 관리로 언제나 편안하게 방문할 수 있는 
                특별한 공간을 제공합니다.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-2"></div>
                  <span>자연 친화적 추모 공원 조성</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-2"></div>
                  <span>개인 또는 가족 전용 구역 제공</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-2"></div>
                  <span>계절별 꽃 식재 및 환경 관리</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-2"></div>
                  <span>편안한 휴식 공간 및 방문 편의시설</span>
                </li>
              </ul>
              <Link 
                href="/funeral-reservation" 
                className="inline-flex items-center text-secondary font-medium hover:underline"
              >
                자세히 알아보기
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* 추가 정보 */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              영원히 기억될 특별한 공간
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              씨엘로 더 스톤은 소중한 반려동물을 위한 특별한 추모 공간을 제공합니다.
              최고급 소재와 정교한 기술로 제작된 석물을 통해 영원히 기억될 수 있는 
              아름다운 공간에서 소중한 추억을 간직하세요. 맞춤형 디자인 상담을 통해 
              반려동물의 개성을 담은 특별한 추모비를 만들어 드립니다.
            </p>
            <Link 
              href="/funeral-reservation" 
              className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              상담 예약하기
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 