'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// 고객 후기 데이터
const testimonials = [
  {
    id: 1,
    name: '김지영',
    pet: '말티즈 초코, 14세',
    image: 'https://picsum.photos/id/64/300/300',
    rating: 5,
    text: '갑작스럽게 무지개 다리를 건넌 초코를 위해 씨엘로펫을 찾았습니다. 정말 따뜻하고 세심한 배려로 마지막 이별을 도와주셨어요. 특히 플라워 장례는 정말 아름다웠고, 갤럭시 스톤으로 초코를 항상 기억할 수 있게 되었습니다. 마지막까지 존중받는 느낌이 들어 감사했습니다.'
  },
  {
    id: 2,
    name: '박준호',
    pet: '골든 리트리버 루시, 12세',
    image: 'https://picsum.photos/id/91/300/300',
    rating: 5,
    text: '12년 동안 가족이었던 루시가 떠나는 순간, 씨엘로펫의 장례지도사님들이 정말 큰 위로가 되었습니다. 추가 비용 압박 없이 정직하게 진행해주셨고, 하늘 정원에 모셔 언제든 찾아갈 수 있어 마음이 편합니다. 루시의 마지막이 평화롭고 존엄했습니다.'
  },
  {
    id: 3,
    name: '이하은',
    pet: '페르시안 고양이 나비, 16세',
    image: 'https://picsum.photos/id/26/300/300',
    rating: 5,
    text: '16년 함께한 나비의 갑작스러운 이별에 정말 힘들었는데, 씨엘로펫에서 진심 어린 위로와 세심한 배려로 도와주셨어요. 24시간 언제든 연락 가능하다는 점이 큰 위안이 되었고, 자연장으로 진행했는데 정말 아름답게 보내드릴 수 있었습니다. 감사합니다.'
  },
  {
    id: 4,
    name: '최민준',
    pet: '시츄 콩이, 15세',
    image: 'https://picsum.photos/id/177/300/300',
    rating: 5,
    text: '콩이의 마지막을 씨엘로펫과 함께했습니다. 전문 장례지도사님의 따뜻한 안내로 마음의 준비를 할 수 있었고, 플라워 장례와 갤럭시 스톤 서비스를 이용했는데 정말 만족스러웠습니다. 콩이가 꽃밭에서 평화롭게 잠든 모습이 아직도 기억에 남습니다.'
  },
  {
    id: 5,
    name: '정수아',
    pet: '코리안 숏헤어 까미, 18세',
    image: 'https://picsum.photos/id/65/300/300',
    rating: 5,
    text: '18년 동안 함께한 까미의 마지막을 씨엘로펫에서 함께 해주셔서 감사합니다. 갑작스러운 이별이었지만 24시간 출동 서비스로 빠르게 도움을 받을 수 있었고, 정성스러운 장례 절차에 큰 위로를 받았습니다. 까미의 갤럭시 스톤을 보며 항상 함께하는 느낌이 듭니다.'
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            고객님들의 따뜻한 후기
          </h2>
          <p className="text-lg text-text/80 max-w-3xl mx-auto">
            씨엘로펫과 함께한 소중한 순간들을 고객님들의 진심 어린 이야기로 들어보세요.
            저희는 항상 반려동물과 가족 모두를 위한 최선의 서비스를 제공하기 위해 노력합니다.
          </p>
        </div>
        
        <div className="relative">
          {/* 데스크톱 뷰 - 3개 표시 */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {[0, 1, 2].map((offset) => {
              const index = (activeIndex + offset) % testimonials.length;
              const testimonial = testimonials[index];
              return (
                <TestimonialCard 
                  key={testimonial.id} 
                  testimonial={testimonial} 
                  isActive={offset === 0}
                />
              );
            })}
          </div>
          
          {/* 태블릿 뷰 - 2개 표시 */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
            {[0, 1].map((offset) => {
              const index = (activeIndex + offset) % testimonials.length;
              const testimonial = testimonials[index];
              return (
                <TestimonialCard 
                  key={testimonial.id} 
                  testimonial={testimonial} 
                  isActive={offset === 0}
                />
              );
            })}
          </div>
          
          {/* 모바일 뷰 - 1개 표시 */}
          <div className="md:hidden">
            <TestimonialCard 
              testimonial={testimonials[activeIndex]} 
              isActive={true}
            />
          </div>
          
          {/* 네비게이션 버튼 */}
          <div className="flex justify-center mt-10 gap-4">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="이전 후기"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="다음 후기"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* 인디케이터 */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`${index + 1}번 후기로 이동`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block bg-primary/5 rounded-xl px-8 py-6">
            <p className="text-xl font-medium text-primary mb-2">
              "소중한 가족과의 마지막 순간, 씨엘로펫이 함께하겠습니다"
            </p>
            <p className="text-text/70">
              24시간 상담 가능 | 연중무휴 서비스
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ 
  testimonial, 
  isActive 
}: { 
  testimonial: typeof testimonials[0]; 
  isActive: boolean;
}) {
  return (
    <div 
      className={`bg-white rounded-xl p-8 shadow-sm transition-all duration-300 ${
        isActive ? 'shadow-md transform scale-[1.02]' : ''
      }`}
    >
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 relative">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-lg">{testimonial.name}</h4>
          <p className="text-text/60 text-sm">{testimonial.pet}</p>
          <div className="flex mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-text/80 leading-relaxed">
        "{testimonial.text}"
      </p>
    </div>
  );
} 