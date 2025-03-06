'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, Car, Clock, Check, MapPin } from 'lucide-react';

// 장례 절차 데이터
const funeralProcessSteps = [
  {
    id: 1,
    title: '장례예약 (1577-7332)',
    description: '24시간 언제든지 연락 가능한 전화번호로 장례 예약을 진행해 주세요.',
    icon: <Phone className="w-8 h-8 text-primary" />,
    image: '/images/basic-ceremony.jpg',
  },
  {
    id: 2,
    title: '장례식장 방문',
    description: '예약 후 장례식장을 방문하시면 전문 상담사가 맞이해 드립니다.',
    icon: <MapPin className="w-8 h-8 text-primary" />,
    image: '/images/cielo-ceremony.jpg',
  },
  {
    id: 3,
    title: '상담',
    description: '반려동물의 특성과 보호자님의 요구사항을 고려한 맞춤형 상담을 진행합니다.',
    icon: <Clock className="w-8 h-8 text-primary" />,
    image: '/images/flower-ceremony.jpg',
  },
  {
    id: 4,
    title: '염습 및 입관',
    description: '정성을 다해 반려동물을 깨끗이 씻기고 입관하는 과정을 진행합니다.',
    icon: <Check className="w-8 h-8 text-primary" />,
    image: '/images/basic-ceremony.jpg',
  },
  {
    id: 5,
    title: '추모예식',
    description: '소중한 반려동물을 위한 특별한 추모예식을 진행합니다.',
    icon: <Check className="w-8 h-8 text-primary" />,
    image: '/images/cielo-ceremony.jpg',
  },
  {
    id: 6,
    title: '단독 화장',
    description: '반려동물만을 위한 단독 화장 서비스를 제공합니다.',
    icon: <Check className="w-8 h-8 text-primary" />,
    image: '/images/flower-ceremony.jpg',
  },
  {
    id: 7,
    title: '수.분골 및 인도',
    description: '화장 후 유골을 정성스럽게 수습하고 보호자님께 인도해 드립니다.',
    icon: <Check className="w-8 h-8 text-primary" />,
    image: '/images/basic-ceremony.jpg',
  },
  {
    id: 8,
    title: '씨엘로 더 스톤 / 씨엘로 더 스토리',
    description: '원하시는 경우 씨엘로의 특별한 봉안 서비스를 이용하실 수 있습니다.',
    icon: <Check className="w-8 h-8 text-primary" />,
    image: '/images/cielo-ceremony.jpg',
  },
];

// 씨엘로 서비스 데이터
const cieloServices = [
  {
    id: 'forest',
    title: '씨엘로 더 숲',
    description: '자연과 함께하는 평화로운 안식처, 소중한 반려동물을 위한 자연장과 꽃 장례 서비스를 제공하는 공간입니다.',
    image: '/images/flower-ceremony.jpg',
    features: [
      '자연 친화적인 환경',
      '생분해성 유골함 제공',
      '나무 또는 꽃과 함께 안식',
      '개별 표식 제공',
      '정기적인 관리 서비스',
    ],
    link: '/cielo/forest',
  },
  {
    id: 'story',
    title: '씨엘로 더 스토리',
    description: '소중한 추억을 영원히 간직하는 공간, 반려동물을 위한 특별한 봉안당 서비스를 제공하는 공간입니다.',
    image: '/images/basic-ceremony.jpg',
    features: [
      '개별 봉안함 제공',
      '디지털 추모관 서비스',
      '정기적인 헌화 서비스',
      '연중무휴 방문 가능',
      '추모 행사 지원',
    ],
    link: '/cielo/story',
  },
  {
    id: 'stone',
    title: '씨엘로 더 스톤',
    description: '영원히 기억될 아름다운 추모 공간, 소중한 반려동물을 위한 맞춤형 석물 서비스를 제공하는 공간입니다.',
    image: '/images/cielo-ceremony.jpg',
    features: [
      '맞춤형 석물 제작',
      '다양한 디자인 옵션',
      '반려동물 사진 각인 서비스',
      '내구성 있는 고급 소재 사용',
      '정기적인 관리 서비스',
    ],
    link: '/cielo/stone',
  },
];

// 차량 서비스 데이터
const transportServices = [
  {
    id: 'kakao',
    title: '카카오 T 펫 이동 서비스',
    description: '소중한 반려동물을 위한 편리하고 안전한 이동 서비스를 카카오 T 펫과 함께 제공합니다.',
    image: '/images/basic-ceremony.jpg',
    features: [
      '교육을 이수한 친절한 펫 메이트와 함께 이동',
      '반려동물 전용 비품이 비치된 전문 차량',
      '보호자와 반려동물 모두를 위한 상해 보험 적용',
      '차량 내 오염 발생 시 클리닝비 지원',
      '출발일과 시간, 장소 지정 및 시간 대절 가능',
    ],
  }
];

// 탭 컴포넌트
const TabComponent = ({ tabs, activeTab, setActiveTab }: { 
  tabs: { id: string; title: string }[]; 
  activeTab: string; 
  setActiveTab: (id: string) => void;
}) => {
  return (
    <div className="flex flex-wrap border-b border-gray-200 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`py-3 px-6 font-medium text-sm md:text-base transition-colors ${
            activeTab === tab.id
              ? 'border-b-2 border-primary text-primary'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default function FuneralServicesPage() {
  const [activeServiceTab, setActiveServiceTab] = useState('forest');
  const [activeTransportTab, setActiveTransportTab] = useState('kakao');

  return (
    <div className="bg-white">
      {/* 헤더 섹션 */}
      <div className="relative h-[50vh] bg-primary/5 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cielo-ceremony.jpg"
            alt="장례 서비스"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-transparent"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            장례 서비스
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            소중한 반려동물을 위한 씨엘로 펫의 특별한 장례 서비스를 소개합니다
          </p>
        </div>
      </div>

      {/* 장례 절차 섹션 */}
      <section id="funeral-process" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              장례 절차
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              씨엘로 펫은 소중한 반려동물의 마지막 여정을 정성을 다해 함께합니다.
              아래의 절차를 통해 존엄하고 특별한 장례 서비스를 제공해 드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {funeralProcessSteps.map((step) => (
              <div key={step.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100 flex flex-col h-full">
                <div className="relative h-56 w-full">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center text-white font-bold">
                    {step.id}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 씨엘로 서비스 섹션 */}
      <section id="cielo-services" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              씨엘로 서비스
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              씨엘로 펫은 소중한 반려동물을 위한 특별한 서비스를 제공합니다.
              각 서비스는 반려동물과 보호자님의 특별한 관계를 기억하고 기리기 위해 설계되었습니다.
            </p>
          </div>

          <TabComponent 
            tabs={cieloServices.map(service => ({ id: service.id, title: service.title }))}
            activeTab={activeServiceTab}
            setActiveTab={setActiveServiceTab}
          />

          {cieloServices.map((service) => (
            <div 
              key={service.id} 
              className={`${activeServiceTab === service.id ? 'block' : 'hidden'}`}
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                <div className="w-full md:w-1/2 h-64 md:h-96 relative rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.description}</p>
                  <div className="mb-8">
                    <h4 className="font-medium text-gray-800 mb-4">주요 특징</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start bg-gray-50 p-3 rounded-lg">
                          <Check size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    href={service.link} 
                    className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  >
                    자세히 알아보기
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 차량 서비스 섹션 */}
      <section id="transport-services" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              차량 서비스
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              씨엘로 펫은 소중한 반려동물의 이동을 위한 안전하고 편리한 차량 서비스를 제공합니다.
              카카오 T 펫과의 제휴를 통해 더욱 편안하고 안전한 이동 경험을 제공해 드립니다.
            </p>
          </div>

          <TabComponent 
            tabs={transportServices.map(service => ({ id: service.id, title: service.title }))}
            activeTab={activeTransportTab}
            setActiveTab={setActiveTransportTab}
          />

          {transportServices.map((service) => (
            <div 
              key={service.id} 
              className={`${activeTransportTab === service.id ? 'block' : 'hidden'}`}
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                <div className="w-full md:w-1/2 h-64 md:h-96 relative rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.description}</p>
                  <div className="mb-8">
                    <h4 className="font-medium text-gray-800 mb-4">서비스 특징</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start bg-gray-50 p-3 rounded-lg">
                          <Check size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    href="/funeral-reservation" 
                    className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  >
                    예약하기
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            소중한 반려동물을 위한 특별한 여정
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            씨엘로 펫은 소중한 반려동물의 마지막 여정을 함께합니다.
            정성을 다한 서비스로 아름다운 이별을 도와드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/funeral-reservation" 
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-lg font-medium"
            >
              장례 예약하기
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link 
              href="/facility" 
              className="inline-flex items-center justify-center bg-white text-primary border border-primary px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors text-lg font-medium"
            >
              시설 둘러보기
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 