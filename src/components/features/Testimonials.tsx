'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

// 고객 후기 데이터
const testimonials = [
  {
    id: 1,
    name: '김지영',
    pet: '말티즈 초코, 14세',
    image: 'https://picsum.photos/id/64/300/300',
    rating: 5,
    text: '갑작스럽게 무지개 다리를 건넌 초코를 위해 씨엘로펫을 찾았습니다. 정말 따뜻하고 세심한 배려로 마지막 이별을 도와주셨어요. 특히 플라워 장례는 정말 아름다웠고, 갤럭시 스톤으로 초코를 항상 기억할 수 있게 되었습니다.'
  },
  {
    id: 2,
    name: '박준호',
    pet: '골든 리트리버 루시, 12세',
    image: 'https://picsum.photos/id/91/300/300',
    rating: 5,
    text: '12년 동안 가족이었던 루시가 떠나는 순간, 씨엘로펫의 장례지도사님들이 정말 큰 위로가 되었습니다. 추가 비용 압박 없이 정직하게 진행해주셨고, 하늘 정원에 모셔 언제든 찾아갈 수 있어 마음이 편합니다.'
  },
  {
    id: 3,
    name: '이하은',
    pet: '페르시안 고양이 나비, 16세',
    image: 'https://picsum.photos/id/26/300/300',
    rating: 5,
    text: '16년 함께한 나비의 갑작스러운 이별에 정말 힘들었는데, 씨엘로펫에서 진심 어린 위로와 세심한 배려로 도와주셨어요. 24시간 언제든 연락 가능하다는 점이 큰 위안이 되었습니다.'
  },
  {
    id: 4,
    name: '최민준',
    pet: '시츄 콩이, 15세',
    image: 'https://picsum.photos/id/177/300/300',
    rating: 5,
    text: '콩이의 마지막을 씨엘로펫과 함께했습니다. 전문 장례지도사님의 따뜻한 안내로 마음의 준비를 할 수 있었고, 플라워 장례와 갤럭시 스톤 서비스를 이용했는데 정말 만족스러웠습니다.'
  }
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  // 마우스 드래그 이벤트 핸들러
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // 스크롤 속도 조절
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // 자동 슬라이드 효과
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      
      if (containerRef.current) {
        const cardWidth = containerRef.current.offsetWidth / 2;
        containerRef.current.scrollTo({
          left: cardWidth * ((currentSlide + 1) % testimonials.length),
          behavior: 'smooth'
        });
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide, isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-700">
            고객님들의 진심 어린 이야기
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            씨엘로펫과 함께한 소중한 순간들을 고객님들의 진심 어린 이야기로 들어보세요.
            저희는 항상 반려동물과 가족 모두를 위한 최선의 서비스를 제공하기 위해 노력합니다.
          </p>
        </motion.div>
        
        {/* 3D 카드 캐러셀 */}
        <div className="relative max-w-5xl mx-auto">
          {/* 큰 따옴표 장식 */}
          <motion.div 
            className="absolute -top-10 -left-10 text-gray-300 hidden md:block"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Quote size={80} strokeWidth={1} />
          </motion.div>
          
          <div 
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory py-10 px-4"
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div className="flex-shrink-0 w-1/4"></div>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`flex-shrink-0 w-full md:w-1/2 px-4 snap-center`}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                <div 
                  className={`
                    relative bg-white rounded-2xl p-8 shadow-xl
                    transform transition-all duration-500
                    ${index === currentSlide ? 'scale-100 rotate-0 z-10' : 'scale-95 opacity-70'}
                    hover:shadow-2xl
                  `}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                    transform: index === currentSlide 
                      ? 'rotateY(0deg)' 
                      : index < currentSlide 
                        ? 'rotateY(-5deg)' 
                        : 'rotateY(5deg)'
                  }}
                >
                  {/* 배경 장식 */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full -mr-10 -mt-10"></div>
                  
                  <div className="relative">
                    <div className="flex items-center mb-6">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-gray-200">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.pet}</p>
                        <div className="flex mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={i < testimonial.rating ? 'text-gray-500 fill-gray-500' : 'text-gray-300'}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed italic relative">
                      <span className="absolute -left-2 -top-2 text-gray-300 text-2xl">"</span>
                      {testimonial.text}
                      <span className="absolute -right-2 bottom-0 text-gray-300 text-2xl">"</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="flex-shrink-0 w-1/4"></div>
          </div>
          
          {/* 인디케이터 */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  if (containerRef.current) {
                    const cardWidth = containerRef.current.offsetWidth / 2;
                    containerRef.current.scrollTo({
                      left: cardWidth * index,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gray-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`${index + 1}번 후기로 이동`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 