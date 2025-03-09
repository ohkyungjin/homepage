'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Stats() {
  const [count, setCount] = useState(0);
  const targetCount = 30000;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
  
  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000; // 애니메이션 지속 시간 (ms)
    const steps = 50; // 총 단계 수
    const stepValue = targetCount / steps; // 각 단계별 증가값
    const stepTime = duration / steps; // 각 단계별 시간
    
    let currentStep = 0;
    
    const interval = setInterval(() => {
      if (currentStep < steps) {
        setCount(Math.min(Math.round(stepValue * (currentStep + 1)), targetCount));
        currentStep++;
      } else {
        clearInterval(interval);
      }
    }, stepTime);
    
    return () => clearInterval(interval);
  }, [isVisible]);

  // 통계 아이템 데이터
  const statItems = [
    {
      label: "누적 장례",
      value: count.toLocaleString(),
      suffix: "건+",
      color: "from-gray-500 to-gray-700"
    },
    {
      label: "서비스 만족도",
      value: "98",
      suffix: "%",
      color: "from-gray-500 to-gray-700"
    },
    {
      label: "전문 장례지도사",
      value: "24",
      suffix: "명",
      color: "from-gray-500 to-gray-700"
    },
    {
      label: "연중무휴",
      value: "24",
      suffix: "시간",
      color: "from-gray-500 to-gray-700"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
    >
      {/* 배경 장식 요소 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-gray-100 mix-blend-multiply opacity-60"></div>
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-gray-100 mix-blend-multiply opacity-60"></div>
        <div className="absolute top-[40%] right-[20%] w-40 h-40 rounded-full bg-gray-100 mix-blend-multiply opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            소중한 가족과의 마지막 순간,<br />
            <span className="italic">씨엘로펫이 함께합니다</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            3만 건 이상의 장례를 통해 쌓인 경험과 노하우로<br />
            반려동물과의 마지막 이별을 따뜻하게 함께합니다.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 3) }}
            >
              {/* 배경 그라데이션 */}
              <div className={`absolute top-0 left-0 h-2 w-full bg-gradient-to-r ${item.color}`}></div>
              
              <div className="p-8">
                <p className="text-gray-500 font-medium mb-2">{item.label}</p>
                <div className="flex items-baseline">
                  <span className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}>
                    {item.value}
                  </span>
                  <span className="text-xl ml-1 text-gray-600">{item.suffix}</span>
                </div>
              </div>
              
              {/* 장식 요소 */}
              <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-10 bg-gradient-to-r ${item.color}`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 