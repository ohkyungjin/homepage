'use client';

import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { Heart, Calendar, Users, Star } from 'lucide-react';

// 통계 데이터
const stats = [
  {
    icon: Heart,
    value: 5000,
    label: '함께한 가족',
    suffix: '+'
  },
  {
    icon: Calendar,
    value: 10,
    label: '서비스 연혁',
    suffix: '년'
  },
  {
    icon: Users,
    value: 20,
    label: '전문 장례지도사',
    suffix: '명'
  },
  {
    icon: Star,
    value: 98,
    label: '고객 만족도',
    suffix: '%'
  }
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [counters, setCounters] = useState(stats.map(() => 0));
  
  useEffect(() => {
    if (inView) {
      const intervals = stats.map((stat, index) => {
        const duration = 2000; // 애니메이션 지속 시간 (ms)
        const steps = 50; // 총 단계 수
        const stepValue = stat.value / steps; // 각 단계별 증가값
        const stepTime = duration / steps; // 각 단계별 시간
        
        let currentStep = 0;
        
        return setInterval(() => {
          if (currentStep < steps) {
            setCounters(prev => {
              const newCounters = [...prev];
              newCounters[index] = Math.min(Math.round(stepValue * (currentStep + 1)), stat.value);
              return newCounters;
            });
            currentStep++;
          } else {
            clearInterval(intervals[index]);
          }
        }, stepTime);
      });
      
      return () => {
        intervals.forEach(interval => clearInterval(interval));
      };
    }
  }, [inView]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            씨엘로펫과 함께한 여정
          </h2>
          <p className="text-lg text-text/80 max-w-3xl mx-auto">
            지난 10년간 많은 가족들과 함께하며 소중한 반려동물의 마지막 여정을 함께했습니다.
            씨엘로펫은 앞으로도 변함없는 정성으로 함께하겠습니다.
          </p>
        </div>
        
        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon size={32} className="text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {counters[index]}{stat.suffix}
                </div>
                <div className="text-text/80">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-20 bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="md:flex items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                씨엘로펫의 약속
              </h3>
              <p className="text-lg text-text/80">
                씨엘로펫은 반려동물과 보호자 모두를 위한 따뜻한 마음으로 서비스를 제공합니다.
                언제나 정성을 다해 소중한 가족과의 마지막 이별을 도와드리겠습니다.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <button className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-lg font-medium">
                상담 문의하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 