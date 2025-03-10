'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Check, Phone, Calendar, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

// 장례 컨셉 데이터
const funeralConceptPlans = [
  {
    id: 'basic',
    title: '베이직 예식',
    price: '390,000원',
    description: '소중한 반려동물을 위한 기본적인 장례 서비스로, 정중하고 품격 있는 마지막 길을 제공합니다.',
    image: 'https://images.unsplash.com/photo-1605493725784-75d4288298c3?q=80&w=2940&auto=format&fit=crop',
    features: [
      '기본 장례용품 제공',
      '단독 화장 서비스',
      '기본 수의 제공',
      '1시간 추모실 이용',
      '유골함 제공',
      '장례 증명서 발급',
    ],
    details: '베이직 예식은 반려동물과의 마지막 이별을 위한 기본적인 서비스를 제공합니다. 정중하고 품격 있는 의식을 통해 소중한 가족과의 작별을 도와드립니다. 모든 필수 장례용품과 서비스가 포함되어 있어 별도의 준비 없이도 편안하게 장례를 치를 수 있습니다.',
  },
  {
    id: 'cielo',
    title: '씨엘로 예식',
    price: '590,000원',
    description: '프리미엄 장례 서비스로, 고급스러운 의식과 특별한 추모 경험을 제공합니다.',
    image: 'https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?q=80&w=2940&auto=format&fit=crop',
    features: [
      '프리미엄 장례용품 제공',
      '단독 화장 서비스',
      '고급 수의 제공',
      '2시간 추모실 이용',
      '프리미엄 유골함 제공',
      '장례 영상 촬영 및 제공',
      '추모 꽃 제공',
    ],
    details: '씨엘로 예식은 반려동물을 위한 최고급 장례 서비스입니다. 고급스러운 장례용품과 넓은 추모실에서 충분한 시간 동안 소중한 반려동물과의 마지막을 함께할 수 있습니다. 전문 스태프의 세심한 케어와 함께 품격 있는 의식을 통해 아름다운 이별을 경험하실 수 있습니다.',
    popular: true
  },
  {
    id: 'flower',
    title: '플라워 예식',
    price: '690,000원',
    description: '아름다운 꽃으로 장식된 특별한 장례 서비스로, 화사하고 따뜻한 분위기에서 마지막 작별을 할 수 있습니다.',
    image: 'https://images.unsplash.com/photo-1544813545-4827b64fcacb?q=80&w=2940&auto=format&fit=crop',
    features: [
      '꽃으로 장식된 추모실',
      '단독 화장 서비스',
      '꽃 장식 수의 제공',
      '1.5시간 추모실 이용',
      '특별 디자인 유골함 제공',
      '추모 꽃다발 증정',
    ],
    details: '플라워 예식은 아름다운 꽃으로 장식된 특별한 장례 서비스입니다. 화사하고 따뜻한 분위기에서 소중한 반려동물과의 마지막을 함께할 수 있습니다. 계절별 신선한 꽃으로 장식된 추모실과 꽃 장식 수의를 통해 아름다운 이별의 시간을 만들어 드립니다.',
  },
];

// 중요 안내 사항 데이터
const importantNotices = [
  {
    id: 'size',
    icon: 'package',
    title: '기본 제공 서비스',
    description: '염습과정 + 단독 추모실 + 단독 화장 + 헌화 + 삼베 덮개 + 기본 유골함 + 고급 보자기 + 제단 사진'
  },
  {
    id: 'visit',
    icon: 'info',
    title: '비용 안내',
    description: '모든 서비스는 비용은 부가세(VAT) 별도 금액입니다.'
  },
  {
    id: 'additional',
    icon: 'flower',
    title: '플로리스트 서비스',
    description: '씨엘로펫은 전문 플로리스트가 디자인한 생화 장식으로 보다 향기롭고 특별한 장례를 제공합니다.'
  },
  {
    id: 'transparent',
    icon: 'alert',
    title: '추가 비용',
    description: '장례 용품 사이즈 변경 시 추가비용 발생합니다.'
  }
];

// 자주 묻는 질문 데이터
const frequentlyAskedQuestions = [
  {
    id: 'pricing',
    question: '장례 비용은 어떻게 책정되나요?',
    answer: '장례 비용은 선택하신 장례 컨셉, 반려동물의 크기, 추가 서비스 선택 여부에 따라 달라집니다. 기본 서비스에는 화장, 수의, 유골함, 장례 증명서 등이 포함되어 있으며, 추가 서비스는 별도로 선택하실 수 있습니다.'
  },
  {
    id: 'reservation',
    question: '장례 예약은 어떻게 하나요?',
    answer: '장례 예약은 24시간 운영되는 전화 상담을 통해 가능합니다. 예약 후 장례식장 방문 시간을 조율하며, 긴급한 경우 최대한 빠르게 도움을 드리고 있습니다. 온라인 예약도 가능하니 홈페이지의 예약 페이지를 이용해 주세요.'
  },
  {
    id: 'visit-service',
    question: '출장 서비스는 어떻게 이용하나요?',
    answer: '전국 어디서든 출장 서비스를 제공해 드립니다. 출장 비용은 지역에 따라 달라질 수 있으며, 예약 시 상담사와 상세히 논의하실 수 있습니다. 프리미엄 출장 서비스는 씨엘로 예식 이상 선택 시 특별 할인이 적용됩니다.'
  },
  {
    id: 'memorial',
    question: '장례 후 추모 서비스도 있나요?',
    answer: '네, 장례 후에도 다양한 추모 서비스를 제공하고 있습니다. 씨엘로 더 스토리(봉안당), 씨엘로 더 숲(자연장), 씨엘로 더 스톤(스톤 서비스) 등 소중한 반려동물을 기억할 수 있는 여러 옵션이 마련되어 있습니다.'
  }
];

export default function FuneralCostPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* 헤더 섹션 */}
      <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2940&auto=format&fit=crop"
            alt="장례 서비스"
            fill
            className="object-cover filter brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-white"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            마지막 여정을 위한 <br/>
            <span className="text-primary-light">정성어린 준비</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl font-light px-4 mb-8">
            소중한 가족과의 이별에 
            <span className="font-medium">정성과 예우</span>를 다하겠습니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:1577-7332"
              className="inline-flex items-center justify-center bg-white/90 text-primary px-6 py-3 rounded-full hover:bg-white transition-colors font-medium backdrop-blur-sm"
            >
              <Phone size={18} className="mr-2" />
              1577-7332
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/funeral-reservation"
              className="inline-flex items-center justify-center bg-primary/90 text-white px-6 py-3 rounded-full hover:bg-primary transition-colors font-medium backdrop-blur-sm"
            >
              <Calendar size={18} className="mr-2" />
              장례 예약하기
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* 중요 안내 사항 섹션 */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              투명한 비용 안내
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              씨엘로 펫은 모든 비용을 투명하게 공개하며, <br/>
              예상치 못한 추가 비용이 발생하지 않도록 안내해 드립니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {importantNotices.map((notice, index) => (
              <motion.div
                key={notice.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-primary/10"
              >
                <h3 className="text-lg font-bold text-primary mb-2">{notice.title}</h3>
                <p className="text-gray-600">{notice.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 장례 컨셉 섹션 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              맞춤형 장례 서비스
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              소중한 반려동물의 개성과 보호자님의 마음에 맞는 <br/>
              <span className="text-primary font-medium">특별한 장례 서비스</span>를 선택하실 수 있습니다
            </p>
          </motion.div>

          <div className="space-y-12">
            {funeralConceptPlans.map((concept, index) => (
              <motion.div
                key={concept.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative md:w-1/2">
                    <div className="relative h-64 md:h-full">
                      <Image
                        src={concept.image}
                        alt={concept.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-bold mb-2">{concept.title}</h3>
                      <div className="text-xl font-semibold">{concept.price}</div>
                    </div>
                    {concept.popular && (
                      <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                        가장 인기 있는 선택
                      </div>
                    )}
                  </div>
                  <div className="p-6 md:p-8 md:w-1/2">
                    <p className="text-gray-600 mb-6">{concept.description}</p>
                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-800 flex items-center">
                        <Heart size={16} className="text-primary mr-2" />
                        포함 서비스
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {concept.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-primary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              자주 묻는 질문
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              궁금하신 사항에 대한 답변을 찾아보세요
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {frequentlyAskedQuestions.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-primary mb-3">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 