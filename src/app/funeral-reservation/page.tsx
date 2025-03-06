'use client';

import { Phone, MessageCircle, Clock, MapPin, Users } from 'lucide-react';

const FuneralReservation = () => {
  return (
    <div className="max-w-container mx-auto px-6 py-16">
      {/* 헤더 섹션 */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">장례 예약</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          갑작스러운 이별의 순간에도 존엄한 마지막을 함께 하겠습니다.
          24시간 언제든 연락주시면 빠르게 도움드리겠습니다.
        </p>
      </div>

      {/* 예약 방법 */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {/* 네이버 예약 */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="p-8">
            <div className="w-16 h-16 bg-[#03C75A] rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-white font-bold text-2xl">N</span>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center">네이버 예약</h2>
            <p className="text-gray-600 mb-8 text-center">
              네이버 예약을 통해 편리하게<br />장례 예약을 진행하실 수 있습니다.
            </p>
            <a
              href="https://booking.naver.com/booking/6/bizes/1135347"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-[#03C75A] text-white py-4 rounded-md font-medium hover:bg-opacity-90 transition-all"
            >
              <span className="mr-2 font-bold">N</span>
              네이버 예약하기
            </a>
          </div>
        </div>

        {/* 전화 상담 */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="p-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center">전화 상담</h2>
            <p className="text-gray-600 mb-8 text-center">
              24시간 언제든 연락주시면<br />친절히 상담해드립니다.
            </p>
            <a
              href="tel:1588-1234"
              className="inline-flex items-center justify-center w-full bg-primary text-white py-4 rounded-md font-medium hover:bg-opacity-90 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              1588-1234
            </a>
          </div>
        </div>

        {/* 카카오톡 상담 */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="p-8">
            <div className="w-16 h-16 bg-[#FFE812] rounded-full flex items-center justify-center mb-6 mx-auto">
              <MessageCircle className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center">카카오톡 상담</h2>
            <p className="text-gray-600 mb-8 text-center">
              실시간 채팅으로<br />빠른 답변을 받아보세요.
            </p>
            <a
              href="https://pf.kakao.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-[#FFE812] text-black py-4 rounded-md font-medium hover:bg-opacity-90 transition-all"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              카카오톡 상담하기
            </a>
          </div>
        </div>
      </div>

      {/* 서비스 특징 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-12">서비스 특징</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">24시간 상담 가능</h3>
            <p className="text-gray-600">
              365일 24시간 언제든<br />연락주시면 친절히 상담해드립니다.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">전국 어디서나 가능</h3>
            <p className="text-gray-600">
              전국 어디서나<br />1시간 이내 출동 가능합니다.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">전문 장례 지도사 상주</h3>
            <p className="text-gray-600">
              숙련된 전문 장례 지도사가<br />처음부터 끝까지 함께합니다.
            </p>
          </div>
        </div>
      </div>

      {/* 안내사항 */}
      <div className="bg-gray-50 p-8 rounded-xl">
        <h3 className="text-lg font-semibold mb-4">안내사항</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>예약 접수 후 담당자가 확인하여 연락드립니다.</li>
          <li>긴급한 경우 전화로 직접 문의해주시기 바랍니다.</li>
          <li>예약 확정은 담당자와 통화 후 최종 확정됩니다.</li>
          <li>부득이한 경우 예약이 변경될 수 있습니다.</li>
        </ul>
      </div>
    </div>
  );
};

export default FuneralReservation; 