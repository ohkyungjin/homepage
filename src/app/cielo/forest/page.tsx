'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Leaf, Flower2 } from 'lucide-react';

export default function CieloForestPage() {
  return (
    <div className="bg-white">
      {/* 헤더 섹션 */}
      <div className="relative h-[60vh] bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1590034790591-5fec2c82c056?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="씨엘로 더 숲"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-transparent"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            씨엘로 더 숲
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            자연과 함께하는 평화로운 안식처, 소중한 반려동물을 위한 자연장과 꽃 장례 서비스
          </p>
        </div>
      </div>

      {/* 소개 섹션 */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            자연으로 돌아가는 평화로운 여정
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            씨엘로 더 숲은 소중한 반려동물이 자연의 품으로 돌아가 영원한 안식을 취할 수 있도록 
            자연 친화적인 장례 서비스를 제공합니다. 아름다운 꽃과 함께하는 특별한 이별의 순간을 만들어 드립니다.
          </p>
        </div>

        {/* 서비스 특징 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="aspect-[4/3] relative">
              <Image
                src="https://images.unsplash.com/photo-1437751695201-298be97a82a8?q=80&w=2872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="자연장 서비스"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6">
                  <div className="inline-flex items-center bg-white/90 rounded-full px-4 py-1 mb-3">
                    <Leaf size={16} className="text-primary mr-2" />
                    <span className="text-primary font-medium">자연장 서비스</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary mb-4">자연과 하나 되는 안식</h3>
              <p className="text-gray-600 mb-6">
                자연 분해되는 친환경 유골함과 함께 아름다운 자연 속에서 영원한 안식을 취할 수 있는 
                자연장 서비스입니다. 나무, 꽃, 식물과 함께 자연의 일부로 돌아가는 평화로운 여정을 함께합니다.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>생분해성 친환경 유골함 제공</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>나무 또는 꽃과 함께 심는 수목장</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>자연 친화적 추모 공간 조성</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>정기적인 관리 및 방문 서비스</span>
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
                src="/images/cielo-ceremony.jpg"
                alt="꽃 장례 서비스"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6">
                  <div className="inline-flex items-center bg-white/90 rounded-full px-4 py-1 mb-3">
                    <Flower2 size={16} className="text-secondary mr-2" />
                    <span className="text-secondary font-medium">꽃 장례 서비스</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-secondary mb-4">꽃으로 전하는 마지막 인사</h3>
              <p className="text-gray-600 mb-6">
                아름다운 꽃으로 장식된 특별한 장례식을 통해 소중한 반려동물과의 마지막 이별을 
                더욱 의미 있고 아름답게 만들어 드립니다. 계절별 다양한 꽃으로 맞춤 장식을 제공합니다.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-2"></div>
                  <span>신선한 생화로 장식된 장례식장</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-2"></div>
                  <span>반려동물의 성격과 취향을 반영한 꽃 선택</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-2"></div>
                  <span>꽃잎 의식 및 특별 추모 행사</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-2"></div>
                  <span>보존 가능한 추모 꽃 액자 제작</span>
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
              자연과 함께하는 영원한 안식
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              씨엘로 더 숲은 반려동물과 가족 모두에게 위로와 평화를 선사합니다. 
              자연 속에서 영원히 기억될 수 있는 특별한 공간을 마련해 드립니다.
              언제든지 방문하여 그리움을 나눌 수 있는 아름다운 추모 공간을 경험해보세요.
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