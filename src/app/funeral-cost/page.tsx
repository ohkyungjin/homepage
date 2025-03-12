'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Check, Phone, Calendar, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { funeralConceptPlans, importantNotices, frequentlyAskedQuestions } from '@/data/funeralCostData';

export default function FuneralCostPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* 헤더 섹션 */}
      <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1507878866276-a947ef722fee?q=80&w=2942&auto=format&fit=crop"
            alt="장례 서비스 비용 안내"
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