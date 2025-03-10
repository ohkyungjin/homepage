'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, Car, Clock, Check, MapPin, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// 장례 절차 데이터
const funeralProcessSteps = [
  {
    id: 1,
    title: '장례예약 (1577-7332)',
    description: '24시간 언제든지 연락 가능한 전화번호로 장례 예약을 진행해 주세요.',
    icon: <Phone className="w-8 h-8 text-primary" />,
    image: 'https://images.unsplash.com/photo-1516967124798-10656f7dca28?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 2,
    title: '장례식장 방문',
    description: '예약 후 장례식장을 방문하시면 전문 상담사가 맞이해 드립니다.',
    icon: <MapPin className="w-8 h-8 text-primary" />,
    image: 'https://images.unsplash.com/photo-1449480881392-716d0ea24a47?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 3,
    title: '상담',
    description: '반려동물의 특성과 보호자님의 요구사항을 고려한 맞춤형 상담을 진행합니다.',
    icon: <Clock className="w-8 h-8 text-primary" />,
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=2986&auto=format&fit=crop',
  },
  {
    id: 4,
    title: '염습 및 입관',
    description: '정성을 다해 반려동물을 깨끗이 씻기고 입관하는 과정을 진행합니다.',
    icon: <Check className="w-8 h-8 text-primary" />,
    image: 'https://images.unsplash.com/photo-1583336663277-620dc1996580?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 5,
    title: '추모예식',
    description: '소중한 반려동물을 위한 특별한 추모예식을 진행합니다.',
    icon: <Check className="w-8 h-8 text-primary" />,
    image: 'https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 6,
    title: '단독 화장',
    description: '반려동물만을 위한 단독 화장 서비스를 제공합니다.',
    icon: <Check className="w-8 h-8 text-primary" />,
    image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=2988&auto=format&fit=crop',
  },
  {
    id: 7,
    title: '수.분골 및 인도',
    description: '화장 후 유골을 정성스럽게 수습하고 보호자님께 인도해 드립니다.',
    icon: <Check className="w-8 h-8 text-primary" />,
    image: 'https://images.unsplash.com/photo-1444212477490-ca407925329e?q=80&w=2928&auto=format&fit=crop',
  },
  {
    id: 8,
    title: '씨엘로 더 스톤 / 씨엘로 더 스토리',
    description: '원하시는 경우 씨엘로의 특별한 봉안 서비스를 이용하실 수 있습니다.',
    icon: <Check className="w-8 h-8 text-primary" />,
    image: 'https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?q=80&w=2940&auto=format&fit=crop',
  },
];

// 씨엘로 서비스 데이터
const cieloServices = [
  {
    id: 'forest',
    title: '씨엘로 더 숲',
    description: '자연과 함께하는 평화로운 안식처, 소중한 반려동물을 위한 자연장과 꽃 장례 서비스를 제공하는 공간입니다.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2940&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1525785967371-87ba44b3e6cf?q=80&w=3276&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1496769336828-c522a3a7e33c?q=80&w=3173&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2940&auto=format&fit=crop',
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* 헤더 섹션 */}
      <div className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{
            y: scrollY * 0.5,
            scale: 1 + scrollY * 0.0005
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2940&auto=format&fit=crop"
            alt="장례 서비스"
            fill
            className="object-cover filter brightness-75"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-white"></div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            마지막 여정의 <br/>
            <span className="text-primary-light">아름다운 동행</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl font-light px-4">
            소중한 반려동물과의 이별을 
            <span className="font-medium">존엄과 사랑</span>으로 함께합니다
          </p>
        </motion.div>
      </div>

      {/* 장례 절차 섹션 */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              마지막 여정의 순간들
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              씨엘로 펫은 소중한 반려동물의 마지막 순간을 
              <span className="text-primary font-medium">정성과 존중</span>으로 함께합니다
            </p>
          </motion.div>

          <div className="space-y-8 sm:space-y-12">
            {funeralProcessSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-1/2 h-48 sm:h-64">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm sm:text-base">
                      {step.id}
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 씨엘로 서비스 섹션 */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              특별한 안식을 위한 공간
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              각각의 반려동물에게 가장 적합한 
              <span className="text-primary font-medium">맞춤형 안식 공간</span>을 제공합니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cieloServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="relative h-48 sm:h-56">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm sm:text-base">
                        <Heart size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={service.link}
                    className="inline-flex items-center text-primary font-medium text-sm sm:text-base hover:text-primary-dark transition-colors"
                  >
                    자세히 알아보기
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-12 sm:py-16 md:py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              마지막 순간까지 <br/>
              <span className="text-primary-dark">함께하는 여정</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              씨엘로 펫은 소중한 반려동물과의 이별이 <br/>
              <span className="text-primary font-medium">아름답고 존엄한 기억</span>으로 
              남을 수 있도록 함께합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/funeral-reservation" 
                className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-medium shadow-md hover:bg-primary-dark transition-colors"
              >
                예약 상담하기
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                href="/facility" 
                className="inline-flex items-center justify-center bg-white text-primary border-2 border-primary px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-primary/5 transition-colors"
              >
                시설 둘러보기
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 