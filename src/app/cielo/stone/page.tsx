'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Gem, Star, Sparkles, Diamond } from 'lucide-react';

export default function CieloStonePage() {
  return (
    <div className="min-h-screen bg-[#F8F6F9]">
      {/* 헤더 섹션 */}
      <div className="relative h-[90vh] overflow-hidden">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2940&auto=format&fit=crop"
            alt="씨엘로 더 스톤"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
        </div>

        {/* 움직이는 빛나는 효과들 */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.2, 1],
                y: [-10, 10, -10]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              {i % 3 === 0 ? (
                <Diamond 
                  size={Math.random() * 10 + 10} 
                  className="text-purple-400/30"
                />
              ) : i % 3 === 1 ? (
                <Sparkles 
                  size={Math.random() * 15 + 15} 
                  className="text-amber-200/20"
                />
              ) : (
                <Gem 
                  size={Math.random() * 12 + 12} 
                  className="text-violet-300/30"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* 헤더 콘텐츠 */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 1.5 
            }}
            className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 relative"
          >
            <Gem size={48} className="text-white" />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full border border-white/30"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            씨엘로 더 스톤
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl font-light"
          >
            영원히 기억될 아름다운 추모 공간
          </motion.p>

          {/* 스크롤 가이드 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center text-white/70">
              <motion.div
                animate={{
                  y: [0, 10, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowRight size={24} className="rotate-90 text-white/50" />
              </motion.div>
              <span className="text-sm mt-2 tracking-wider">스크롤하여 더 알아보기</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 소개 섹션 */}
      <div className="relative z-10 -mt-20 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl"
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-20 h-20 rounded-full bg-purple-50 flex items-center justify-center mx-auto mb-8"
            >
              <Gem size={32} className="text-purple-600" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              시간을 초월한 영원한 기억
            </h2>
            <p className="text-lg text-gray-600">
              씨엘로 더 스톤은 소중한 반려동물을 위한 맞춤형 석물 추모 서비스를 제공합니다.
              최고급 소재와 정교한 기술로 제작된 석물을 통해 영원히 기억될 수 있는 
              특별한 추모 공간을 만들어 드립니다.
            </p>
          </div>
        </motion.div>
      </div>

      {/* 서비스 특징 */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 맞춤형 석물 제작 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop"
                  alt="맞춤형 석물 제작"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute bottom-6 left-6"
                >
                  <div className="inline-flex items-center bg-white/90 rounded-full px-4 py-2 backdrop-blur-sm">
                    <Gem size={16} className="text-purple-600 mr-2" />
                    <span className="text-purple-600 font-medium">맞춤형 석물 제작</span>
                  </div>
                </motion.div>
              </div>
              <div className="relative p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">정성을 담은 석물 추모비</h3>
                <p className="text-gray-600 mb-6">
                  반려동물의 개성과 특징을 반영한 맞춤형 석물 추모비를 제작합니다.
                  최고급 대리석과 화강암을 사용하여 시간이 지나도 변하지 않는 
                  아름다운 추모 공간을 만들어 드립니다.
                </p>
                <ul className="space-y-4 mb-6 text-black">
                  {[
                    "최고급 대리석, 화강암 소재 사용",
                    "반려동물 모습 조각 서비스",
                    "맞춤형 디자인 및 문구 각인",
                    "정기적인 관리 및 청소 서비스"
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-start group/item"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 mr-2 group-hover/item:scale-150 transition-transform"></div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    href="/funeral-reservation"
                    className="inline-flex items-center text-purple-600 font-medium hover:underline"
                  >
                    자세히 알아보기
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* 프리미엄 추모 공원 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2940&auto=format&fit=crop"
                  alt="프리미엄 추모 공원"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute bottom-6 left-6"
                >
                  <div className="inline-flex items-center bg-white/90 rounded-full px-4 py-2 backdrop-blur-sm">
                    <Star size={16} className="text-amber-600 mr-2" />
                    <span className="text-amber-600 font-medium">프리미엄 추모 공원</span>
                  </div>
                </motion.div>
              </div>
              <div className="relative p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">아름다운 추모 공간</h3>
                <p className="text-gray-600 mb-6">
                  자연과 조화를 이루는 아름다운 추모 공원에서 소중한 반려동물을 기억하세요.
                  평화로운 환경과 세심한 관리로 언제나 편안하게 방문할 수 있는 
                  특별한 공간을 제공합니다.
                </p>
                <ul className="space-y-4 mb-6 text-black">
                  {[
                    "자연 친화적 추모 공원 조성",
                    "개인 또는 가족 전용 구역 제공",
                    "계절별 꽃 식재 및 환경 관리",
                    "편안한 휴식 공간 및 방문 편의시설"
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-start group/item"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 mr-2 group-hover/item:scale-150 transition-transform"></div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    href="/funeral-reservation"
                    className="inline-flex items-center text-amber-600 font-medium hover:underline"
                  >
                    자세히 알아보기
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA 섹션 */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop"
            alt="배경"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80 backdrop-blur-sm"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto text-center px-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20 
            }}
            viewport={{ once: true }}
            className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-8"
          >
            <Diamond size={32} className="text-white" />
          </motion.div>

          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            영원히 기억될 특별한 공간
          </h3>
          <p className="text-lg text-white/90 mb-10">
            씨엘로 더 스톤은 소중한 반려동물을 위한 특별한 추모 공간을 제공합니다.
            최고급 소재와 정교한 기술로 제작된 석물을 통해 영원히 기억될 수 있는 
            아름다운 공간에서 소중한 추억을 간직하세요.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/funeral-reservation"
              className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-white/90 transition-colors"
            >
              상담 예약하기
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .floating {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 