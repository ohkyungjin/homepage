'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// 스토리 데이터
const storyItems = [
  {
    id: 'service',
    title: '장례 서비스',
    subtitle: '소중한 가족과의 마지막 순간',
    description: '씨엘로펫은 반려동물과의 마지막 이별을 존엄하고 아름답게 함께합니다. 개별 추모실에서 가족들과 함께하는 시간을 제공하며, 전문 장례지도사가 정성을 다해 도와드립니다.',
    image: 'https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=2074&auto=format&fit=crop',
    buttonText: '서비스 알아보기',
    buttonLink: '/services',
    accent: 'bg-gray-100'
  },
  {
    id: 'price',
    title: '장례 비용',
    subtitle: '투명하고 정직한 가격 정책',
    description: '추가 비용 없이 정직한 가격으로 장례 서비스를 제공합니다. 반려동물의 크기와 선택하신 서비스에 따라 맞춤형 견적을 제공해 드립니다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2036&auto=format&fit=crop',
    buttonText: '비용 확인하기',
    buttonLink: '/pricing',
    accent: 'bg-gray-100'
  },
  {
    id: 'facility',
    title: '시설 안내',
    subtitle: '깨끗하고 편안한 공간',
    description: '현대적이고 깨끗한 시설에서 반려동물과의 마지막을 함께합니다. 개별 추모실, 장례식장, 화장시설 등 모든 공간이 정성스럽게 관리됩니다.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    buttonText: '시설 둘러보기',
    buttonLink: '/facilities',
    accent: 'bg-gray-100'
  },
  {
    id: 'premium',
    title: '프리미엄 서비스',
    subtitle: '특별한 추억을 위한 선택',
    description: '씨엘로펫 더 숲, 씨엘로펫 더 스토리, 씨엘로펫 더 스톤 등 소중한 반려동물과의 추억을 영원히 간직할 수 있는 프리미엄 서비스를 제공합니다.',
    image: 'https://images.unsplash.com/photo-1437751695201-298be97a82a8?q=80&w=2872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    buttonText: '프리미엄 서비스',
    buttonLink: '/premium',
    accent: 'bg-gray-100'
  }
];

export default function HomeStory() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 스크롤 애니메이션 효과
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {storyItems.map((item, index) => (
          <div 
            key={item.id}
            ref={(el) => { sectionRefs.current[index] = el; }}
            className={`mb-32 last:mb-0 opacity-0 translate-y-10 transition-all duration-1000 ease-out`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className={`relative ${index % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'} md:w-[90%]`}>
              {/* 배경 액센트 */}
              <div 
                className={`absolute -z-10 rounded-3xl ${item.accent} ${
                  index % 2 === 0 
                    ? 'right-[-5%] top-[-5%] w-[70%] h-[70%]' 
                    : 'left-[-5%] bottom-[-5%] w-[70%] h-[70%]'
                }`}
              ></div>
              
              <div className={`
                grid grid-cols-1 md:grid-cols-12 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden
                ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}
              `}>
                {/* 이미지 영역 */}
                <div className={`
                  relative md:h-auto min-h-[300px]
                  ${index % 2 === 0 ? 'md:col-span-7 order-1' : 'md:col-span-7 md:order-2'}
                `}>
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      priority={index === 0}
                    />
                    <div className={`absolute inset-0 mix-blend-multiply bg-gray-200/30`}></div>
                  </div>
                </div>
                
                {/* 텍스트 영역 */}
                <div className={`
                  flex items-center p-8 md:p-0
                  ${index % 2 === 0 ? 'md:col-span-5 order-2' : 'md:col-span-5 md:order-1'}
                `}>
                  <div>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-1 bg-gray-400 mr-4`}></div>
                      <span className="text-gray-500 font-medium uppercase tracking-wider text-sm">
                        {item.subtitle}
                      </span>
                    </div>
                    
                    <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-gray-700`}>
                      {item.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <Link 
                      href={item.buttonLink}
                      className={`
                        group inline-flex items-center font-medium transition-all text-gray-600 hover:text-gray-900
                      `}
                    >
                      <span className="relative">
                        {item.buttonText}
                        <span className={`absolute left-0 bottom-0 w-full h-0.5 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100 bg-gray-400`}></span>
                      </span>
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 