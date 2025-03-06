'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Heart } from 'lucide-react';

export default function CieloStoryPage() {
  return (
    <div className="bg-white">
      {/* 헤더 섹션 */}
      <div className="relative h-[60vh] bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1437751695201-298be97a82a8?q=80&w=2872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="씨엘로 더 스토리"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-transparent"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            씨엘로 더 스토리
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            소중한 추억을 영원히 간직하는 공간, 반려동물을 위한 특별한 봉안당 서비스
          </p>
        </div>
      </div>

      {/* 소개 섹션 */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            영원한 이야기가 담긴 공간
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            씨엘로 더 스토리는 소중한 반려동물의 추억과 이야기를 영원히 간직할 수 있는 
            특별한 봉안당 서비스를 제공합니다. 언제든지 방문하여 그리움을 나눌 수 있는 
            아름답고 품격 있는 공간에서 소중한 인연을 기억하세요.
          </p>
        </div>

        {/* 서비스 특징 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="aspect-[4/3] relative">
              <Image
                src="https://media.istockphoto.com/id/1308172172/ko/%EC%82%AC%EC%A7%84/%EA%B4%80%EA%B3%BC-%EC%8B%AD%EC%9E%90%EA%B0%80%EB%A5%BC-%EA%B3%BC%EB%B6%80%EC%97%90%EA%B2%8C-%EB%B3%B4%EC%97%AC%EC%A3%BC%EB%8A%94-%EC%88%98%ED%96%89%EC%9E%90.jpg?s=1024x1024&w=is&k=20&c=UawiDYAFklRM-TlyN7oWOhpR4xK9EHfqtjFzUvSDmOU="
                alt="프리미엄 봉안당"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6">
                  <div className="inline-flex items-center bg-white/90 rounded-full px-4 py-1 mb-3">
                    <BookOpen size={16} className="text-primary mr-2" />
                    <span className="text-primary font-medium">프리미엄 봉안당</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary mb-4">품격 있는 영원한 안식처</h3>
              <p className="text-gray-600 mb-6">
                고급스러운 인테리어와 편안한 분위기의 프리미엄 봉안당에서 소중한 반려동물을 
                기억하세요. 개인 맞춤형 공간 디자인과 다양한 추모 서비스를 제공합니다.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>개인 맞춤형 봉안함 디자인</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>24시간 방문 가능한 추모 공간</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>디지털 추모관 서비스 제공</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>정기적인 추모식 및 기념일 서비스</span>
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
                alt="디지털 추모관"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6">
                  <div className="inline-flex items-center bg-white/90 rounded-full px-4 py-1 mb-3">
                    <Heart size={16} className="text-secondary mr-2" />
                    <span className="text-secondary font-medium">디지털 추모관</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-secondary mb-4">디지털로 이어지는 추억</h3>
              <p className="text-gray-600 mb-6">
                언제 어디서나 접속 가능한 디지털 추모관을 통해 소중한 반려동물의 추억을 
                간직하세요. 사진, 영상, 이야기를 담아 영원히 기억할 수 있습니다.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-2"></div>
                  <span>개인 맞춤형 디지털 추모 페이지</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-2"></div>
                  <span>사진 및 영상 갤러리 제공</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-2"></div>
                  <span>추억의 이야기 공유 기능</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-2"></div>
                  <span>기념일 알림 및 추모 메시지 서비스</span>
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
              소중한 이야기를 영원히
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              씨엘로 더 스토리는 반려동물과의 소중한 추억을 영원히 간직할 수 있는 
              특별한 공간을 제공합니다. 아름답고 품격 있는 봉안당에서 언제든지 
              방문하여 그리움을 나눌 수 있습니다. 디지털 추모관을 통해 시간과 
              공간의 제약 없이 소중한 추억을 간직하세요.
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