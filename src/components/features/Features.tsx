'use client';

import Image from 'next/image';
import { 
  Heart, 
  Clock, 
  Flower, 
  Users, 
  Leaf, 
  Home 
} from 'lucide-react';

// 특징 데이터
const features = [
  {
    icon: Flower,
    title: '플라워 장례',
    description: '씨엘로펫은 아이가 꽃밭에서 편히 잠들 수 있도록 생화 재단을 고집합니다. 더욱 아름답고 향기로운 이별을 선물해드립니다.'
  },
  {
    icon: Heart,
    title: '갤럭시 스톤',
    description: '영원히 빛나는 보석처럼, 씨엘로펫의 섬세한 기술로 물방울 모양의 빛이 아이를 기억합니다.'
  },
  {
    icon: Home,
    title: '하늘 정원 (봉안당)',
    description: '잔디 위에서 자유롭게 뛰노는 아이를 언제든지 만나실 수 있도록 돕겠습니다.'
  },
  {
    icon: Clock,
    title: '연중무휴 서비스',
    description: '언제든지 도움이 필요할 때 연락 주세요. 연중무휴로 운영되는 서비스로 빠르게 도움을 드립니다.'
  },
  {
    icon: Users,
    title: '전문 장례지도사',
    description: '반려동물 상실의 아픔을 이해하는 전문 장례지도사가 함께합니다. 슬픔을 위로하고 아름다운 추억을 간직할 수 있도록 도와드립니다.'
  },
  {
    icon: Leaf,
    title: '편안한 시설',
    description: '반려동물과 보호자가 편안하게 마지막 시간을 보낼 수 있는 따뜻하고 안락한 시설을 갖추고 있습니다.'
  }
];

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            씨엘로펫, 고요히 전하는 위로
          </h2>
          <p className="text-lg text-text/80 max-w-3xl mx-auto">
            사랑하는 반려동물과의 소중한 인연은 언제나 당신의 마음 속에 남아 있을 것입니다.
            씨엘로펫은 그 사랑을 기리며, 평온한 예식을 준비하였습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text/80">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-24 bg-white border border-gray-200 rounded-2xl p-8 md:p-12 lg:flex items-center gap-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              ALL PETS GO TO HEAVEN
            </h3>
            <p className="text-lg text-text/80 mb-6">
              씨엘로펫은 반려동물이 우리 가족의 소중한 일원이라는 믿음으로 시작되었습니다. 
              모든 반려동물은 사랑과 존중 속에서 마지막 여정을 떠날 자격이 있습니다.
            </p>
            <ul className="space-y-3">
              {[
                '플라워 장례 서비스',
                '갤럭시 스톤 제작',
                '하늘 정원 봉안',
                '추모 기념품 제작',
                '전문 장례지도사 상담'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center mt-1 mr-3">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-video relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://picsum.photos/id/237/800/450"
                alt="반려동물 추모 서비스"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <div className="text-primary font-bold text-xl">CIELO</div>
              <div className="text-sm text-text/70">씨엘로펫</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 