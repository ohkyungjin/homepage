'use client';

import { useState } from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function CTA() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
      </div>
      
      <div className="max-w-container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            소중한 가족과의 마지막 순간
          </h2>
          <p className="text-lg text-text/80 max-w-3xl mx-auto">
            씨엘로펫은 언제나 여러분 곁에서 따뜻한 위로와 정성 어린 서비스로 함께합니다.
            24시간 연중무휴로 운영되어 갑작스러운 이별에도 빠르게 도움을 드립니다.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-primary mb-6">
                상담 문의
              </h3>
              <p className="text-text/80 mb-8">
                반려동물과의 마지막 여정에 관한 모든 문의사항을 친절하게 안내해 드립니다.
                언제든지 연락주시면 성심성의껏 답변 드리겠습니다.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">전화 상담</h4>
                    <p className="text-text/80">
                      <a href="tel:1588-1234" className="hover:text-primary transition-colors">
                        1588-1234
                      </a>
                      <span className="text-primary font-medium ml-2">
                        (24시간 긴급 상담)
                      </span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">이메일 문의</h4>
                    <p className="text-text/80">
                      <a href="mailto:info@cielopet.co.kr" className="hover:text-primary transition-colors">
                        info@cielopet.co.kr
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">운영 시간</h4>
                    <p className="text-text/80">
                      연중무휴 24시간 운영
                      <br />
                      <span className="text-primary/80">
                        * 장례 예약은 사전 문의 부탁드립니다
                      </span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">오시는 길</h4>
                    <p className="text-text/80">
                      서울특별시 강남구 테헤란로 123
                      <br />
                      씨엘로펫 빌딩 4층
                    </p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setShowModal(true)}
                className="w-full py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium"
              >
                긴급 상담 문의
              </button>
            </div>
            
            <div className="md:w-1/2 bg-primary p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">
                씨엘로펫 서비스 안내
              </h3>
              <p className="mb-8 text-white/90">
                반려동물과의 마지막 순간을 품격 있고 따뜻하게 함께합니다.
                다양한 서비스 옵션을 통해 소중한 가족에게 가장 적합한 장례 서비스를 제공해 드립니다.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-3 flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>플라워 장례 서비스</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-3 flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>갤럭시 스톤 제작</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-3 flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>하늘 정원 봉안</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-3 flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>자연장 서비스</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-3 flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>추모 기념품 제작</span>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6">
                <p className="text-lg font-medium mb-2">
                  "소중한 가족과의 마지막 순간, 씨엘로펫이 함께하겠습니다"
                </p>
                <p className="text-white/80 text-sm">
                  24시간 긴급 출동 서비스 | 연중무휴 운영
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 모달 */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label="닫기"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <h3 className="text-xl font-bold text-primary mb-4">
              긴급 상담 문의
            </h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-medium mb-2">고객센터</h4>
                <p className="text-lg font-bold">1588-1234</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">운영 시간</h4>
                <p>연중무휴 24시간 운영</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">긴급 출동 서비스</h4>
                <p>전화 연락 후 최대한 빠르게 도움 드리겠습니다.</p>
              </div>
            </div>
            
            <button 
              onClick={() => setShowModal(false)}
              className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </section>
  );
} 