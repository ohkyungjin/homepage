'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, ArrowRight } from 'lucide-react';

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // 인터섹션 옵저버로 화면에 보이는지 감지
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // 연락처 정보
  const contactInfo = [
    {
      icon: Phone,
      title: '전화 상담',
      description: '24시간 언제든지 연락주세요',
      value: '1577-7332',
      action: '전화하기',
      link: 'tel:1577-7332',
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: MessageCircle,
      title: '장례 예약하기',
      description: '네이버 / 간편예약을 이용해주세요',
      value: '씨엘로펫',
      action: '예약하기',
      link: '/funeral-reservation',
      color: 'from-gray-600 to-gray-800'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 text-white"
    >
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2000&auto=format&fit=crop"
            alt="배경 이미지"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-r from-gray-600 to-gray-700 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-r from-gray-700 to-gray-600 opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              소중한 가족과의 <span className="text-gray-300">마지막 순간</span>,<br />
              <span className="italic">씨엘로펫이 함께하겠습니다</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              갑작스러운 이별에도 24시간 언제든지 연락주시면 빠르게 도움드리겠습니다.
              전문 장례지도사가 정성을 다해 반려동물과의 마지막을 함께합니다.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 overflow-hidden group hover:bg-white/15 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  whileHover={{ y: -5 }}
                >
                  {/* 배경 그라데이션 */}
                  <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${item.color}`}></div>
                  
                  <div className="flex items-start mb-4">
                    <div className={`p-3 rounded-full bg-gray-700 mr-4`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                      <p className="text-white/70 text-sm">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-2xl font-bold">{item.value}</p>
                  </div>
                  
                  <Link 
                    href={item.link}
                    className="inline-flex items-center text-white font-medium group-hover:text-accent transition-colors"
                  >
                    {item.action}
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                  
                  {/* 장식 요소 */}
                  <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-10 bg-gradient-to-r ${item.color}`}></div>
                </motion.div>
              );
            })}
          </div>
          
          {/* 네이버 지도 위젯 */}
          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="bg-white/10 backdrop-blur-sm p-6 text-center">
              <div className="flex items-center justify-center mb-4">
                <MapPin size={24} className="text-white mr-2" />
                <h3 className="text-xl font-bold">찾아오시는 길</h3>
              </div>
              <p className="text-white/80 mb-4">서울특별시 강남구 테헤란로 123 씨엘로펫 빌딩</p>
            </div>
            <div className="relative w-full h-[400px] bg-gray-200">
              {/* 네이버 지도 iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.4515690893822!2d127.0282632!3d37.4969958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15aee9ab0cb%3A0x31793fc63e0cf9d3!2z7YWM7Iqk7YyM7J207Iuc7Iqk!5e0!3m2!1sko!2skr!4v1653557720146!5m2!1sko!2skr"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="씨엘로펫 위치"
              ></iframe>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 text-center">
              <p className="text-white/80 text-sm">
                <span className="font-bold">운영시간:</span> 연중무휴 24시간 운영
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 