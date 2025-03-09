'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Expand, X } from 'lucide-react';

// 갤러리 이미지 데이터
const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
    alt: '반려동물 추모관 내부',
    category: 'facilities',
    description: '따뜻하고 편안한 분위기의 추모관 내부'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2068&auto=format&fit=crop',
    alt: '반려견 추모 행사',
    category: 'funerals',
    description: '소중한 반려견을 위한 개별 추모 행사'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1518709414768-a88981a4515d?q=80&w=1974&auto=format&fit=crop',
    alt: '추모 화환',
    category: 'memorials',
    description: '아름다운 추모 화환과 장식'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1588421357574-87938a86fa28?q=80&w=2070&auto=format&fit=crop',
    alt: '야외 추모 공간',
    category: 'facilities',
    description: '자연 속에서 평화로운 안식을 취할 수 있는 야외 공간'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1548366086-7f1b76106622?q=80&w=1924&auto=format&fit=crop',
    alt: '반려묘 추모식',
    category: 'funerals',
    description: '소중한 반려묘를 위한 특별한 추모식'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1605493725784-56651e4c7565?q=80&w=1974&auto=format&fit=crop',
    alt: '추모 기념품',
    category: 'memorials',
    description: '소중한 추억을 간직할 수 있는 맞춤형 추모 기념품'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1517677129300-07b130802f46?q=80&w=2070&auto=format&fit=crop',
    alt: '실내 장례식장',
    category: 'facilities',
    description: '가족들이 편안하게 추모할 수 있는 실내 장례식장'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?q=80&w=1947&auto=format&fit=crop',
    alt: '작은 동물 추모식',
    category: 'funerals',
    description: '작은 반려동물을 위한 맞춤형 추모식'
  }
];

// 카테고리 데이터
const categories = [
  { id: 'all', label: '전체 보기' },
  { id: 'facilities', label: '시설 안내' },
  { id: 'funerals', label: '장례식' },
  { id: 'memorials', label: '추모 상품' }
];

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
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
      { threshold: 0.1 }
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

  // 이미지 클릭 핸들러
  const handleImageClick = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // 모달 열릴 때 스크롤 방지
  };

  // 모달 닫기 핸들러
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = ''; // 모달 닫힐 때 스크롤 복원
  };

  // 키보드 이벤트 핸들러 (ESC로 모달 닫기)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        closeModal();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  // 자동 슬라이드 효과
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      if (galleryImages.length > 0) {
        setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
        
        if (containerRef.current) {
          const cardWidth = containerRef.current.offsetWidth / 2;
          containerRef.current.scrollTo({
            left: cardWidth * ((currentSlide + 1) % galleryImages.length),
            behavior: 'smooth'
          });
        }
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide, isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-700">
            갤러리
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            마음의 안식처의 시설과 서비스를 사진으로 만나보세요.
            소중한 반려동물을 위한 따뜻하고 존엄한 공간을 확인하실 수 있습니다.
          </p>
        </motion.div>
        
        {/* 3D 카드 캐러셀 */}
        <div className="relative max-w-5xl mx-auto">
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
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                className={`flex-shrink-0 w-full md:w-1/2 px-4 snap-center`}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                <div 
                  className={`
                    relative bg-white rounded-2xl overflow-hidden shadow-xl
                    transform transition-all duration-500
                    ${index === currentSlide ? 'scale-100 rotate-0 z-10' : 'scale-95 opacity-70'}
                    hover:shadow-2xl cursor-pointer
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
                  onClick={() => handleImageClick(image)}
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                    
                    {/* 카테고리 배지 */}
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-xs font-medium">
                        {categories.find(cat => cat.id === image.category)?.label}
                      </span>
                    </div>
                    
                    {/* 확대 아이콘 */}
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full">
                      <Expand size={16} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-800 mb-2">{image.alt}</h3>
                    <p className="text-gray-600 text-sm">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="flex-shrink-0 w-1/4"></div>
          </div>
          
          {/* 인디케이터 */}
          <div className="flex justify-center mt-8 gap-2">
            {galleryImages.map((_, index) => (
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
                aria-label={`${index + 1}번 이미지로 이동`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* 이미지 모달 */}
      {selectedImage && (
        <motion.div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white font-bold text-xl mb-2">{selectedImage.alt}</h3>
              <p className="text-white/90">{selectedImage.description}</p>
            </div>
            <button 
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              onClick={closeModal}
            >
              <X size={24} />
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
} 