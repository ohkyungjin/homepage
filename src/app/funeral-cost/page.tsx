'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Check, Phone, Clock, Calendar } from 'lucide-react';

// 장례 컨셉 데이터
const funeralConceptPlans = [
  {
    id: 'basic',
    title: '베이직 예식',
    price: '390,000원',
    description: '소중한 반려동물을 위한 기본적인 장례 서비스로, 정중하고 품격 있는 마지막 길을 제공합니다.',
    image: '/images/basic-ceremony.jpg',
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
    image: '/images/cielo-ceremony.jpg',
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
    price: '490,000원',
    description: '아름다운 꽃으로 장식된 특별한 장례 서비스로, 화사하고 따뜻한 분위기에서 마지막 작별을 할 수 있습니다.',
    image: '/images/flower-ceremony.jpg',
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
    description: '염습과정 + 단독 추모실 + 단독 화장 + 헌화 + 삼베 덮개 + 기본 유골함 + 고급 보자기 + 제단 사진'
  },
  {
    id: 'visit',
    description: '모든 서비스는 비용은 부가세(VAT) 별도 금액입니다.'
  },
  {
    id: 'additional',
    description: '씨엘로펫은 전문 플로리스트가 디자인한 생화 장식으로 보다 향기롭고 특별한 장례를 제공합니다.'
  },
  {
    id: 'transparent',
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
  return (
    <div className="min-h-screen">
      {/* 헤더 섹션 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl overflow-hidden shadow-sm">
            <div className="md:w-1/2 p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                소중한 가족과의 마지막 이별을 위한 <br />맞춤형 장례 비용
              </h1>
              <p className="text-gray-600 mb-8">
                씨엘로 펫은 소중한 반려동물의 마지막 여정을 정성을 다해 함께합니다.<br/>
                투명한 비용 안내와 맞춤형 서비스로 편안한 이별을 도와드립니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1577-7332" className="inline-flex items-center justify-center bg-accent text-black px-6 py-3 rounded-lg hover:bg-accent2 transition-colors font-medium">
                  <Phone size={18} className="mr-2" />
                  1577-7332
                </a>
                <a href="/funeral-reservation" className="inline-flex items-center justify-center bg-accent text-black px-6 py-3 rounded-lg hover:bg-accent2 transition-colors font-medium">
                  <Calendar size={18} className="mr-2" />
                  장례 예약하기
                </a>
              </div>
            </div>
            <div className="md:w-1/2 h-64 md:h-80 relative ml-auto">
              <Image
                src="/images/cielo-ceremony.jpg"
                alt="반려동물 장례 서비스"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 장례 컨셉 섹션 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* 중요 안내 사항 */}
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-sm border border-primary/10 p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* <div className="bg-primary/10 rounded-full p-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div> */}
                <div>
                  {/* <h3 className="text-2xl font-bold text-primary mb-4">장례 비용 안내 사항</h3> */}
                  <div className="space-y-4 text-gray-700">
                    {importantNotices.map((notice) => (
                      <p key={notice.id}>
                        * {notice.description}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {funeralConceptPlans.map((concept) => (
              <div key={concept.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 h-64 md:h-[400px] relative">
                    <Image
                      src={concept.image}
                      alt={concept.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover aspect-[4/3] md:aspect-auto"
                    />
                    {concept.popular && (
                      <div className="absolute top-4 left-4 bg-primary/90 text-white px-4 py-1 rounded-full text-sm font-medium">
                        가장 인기 있는 선택
                      </div>
                    )}
                  </div>
                  <div className="p-8 md:p-10 md:w-1/2 bg-gradient-to-br from-white to-gray-50">
                    <div className="md:flex md:justify-between md:items-start">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 md:mb-0">{concept.title}</h3>
                      <div className="bg-primary/10 text-primary rounded-full px-4 py-1 text-xl font-semibold inline-block mb-3 md:mb-0">
                        {concept.price}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{concept.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-800 mb-3 flex items-center">
                        <div className="w-1 h-5 bg-primary mr-2"></div>
                        포함 서비스
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {concept.features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <div className="bg-primary/10 rounded-full p-1 mr-2 mt-0.5 flex-shrink-0">
                              <Check size={18} className="text-primary" />
                            </div>
                            <span className="text-gray-600 text-base leading-tight">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 추가 정보 섹션 */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              자주 묻는 질문
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              장례 비용 및 서비스에 관한 자주 묻는 질문들을 모았습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {frequentlyAskedQuestions.map((faq) => (
              <div key={faq.id} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 