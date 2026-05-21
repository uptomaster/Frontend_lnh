import InfoCard from "../components/InformationCard";
import infoList from '../data/InformationCardList';
import HotelCard from "../components/HotelCard";
import hotelList1 from '../data/HotelList01';
import hotelList2 from '../data/HotelList02';
import Search from '../components/Search';
import Img from '../assets/hongik.jpg';
import MoreButton from "../components/MoreButton";
import { useState } from 'react';
import PlusMinus from "../components/PlusMinus";
import facebook from '../assets/facebook.png';

const Home = () => {
  const [priceChange, setPriceChange] = useState(0);

  const handlePlus = () => {
    setPriceChange((prev) => prev + 10000);
  };

  const handleMinus = () => {
    setPriceChange((prev) => Math.max(prev - 10000, 0));
  };

  return (
    <div>

      <main>
        <section className=" flex flex-col items-center justify-center pt-[80px] pl-[30px] pr-[30px] md:pl-[200px] md:pr-[200px] md:relative  ">
          <div className="  md:w-[70%] md:ml-auto">
            <img
              src={Img}
              className="  w-full max-w-[1400px] md:aspect-[21/11]  object-cover rounded-[12px]"
            />
          </div>
          <div className=" mx-auto block w-[420px] rounded-[24px] md:absolute md:left-[220px] md:top-[100px]  ">
          <Search />
          </div>
        </section>


        <section className="flex flex-col items-center justify-center pt-[80px] pl-[60px] pr-[60px] gap-[12px] md:pl-[160px] md:pr-[160px] md:flex-row md:gap-[48px]">
          {infoList.map((info) => (
            <InfoCard image={info.image} title={info.title} desc={info.desc} />
          ))}
        </section>

        <section className="pt-[64px] pl-[60px] pr-[60px] md:pl-[160px] md:pr-[160px]">
          <h3 className="text-[32px]">서울의 게스트 선호 숙소</h3>
          <p className="text-[18px] pb-[24px]">평점, 후기, 신뢰도를 바탕으로 에어비앤비에서 가장 사랑받는 숙소로 손꼽히는 곳입니다.</p>
          <div className="flex gap-[24px] justify-center md:hidden">
            {hotelList1.slice(0, 2).map((hotel) => (
              <HotelCard
                key={hotel.id}
                image={hotel.image}
                title={hotel.title}
                rating={hotel.rating}
                description={hotel.description}
                bed={hotel.bed}
                date={hotel.date}
                price={hotel.price + priceChange}
              />
            ))}
          </div>
          
          <div className="hidden md:flex gap-[24px] justify-center">
            {hotelList1.map((hotel) => (
              <HotelCard
                key={hotel.id}
                image={hotel.image}
                title={hotel.title}
                rating={hotel.rating}
                description={hotel.description}
                bed={hotel.bed}
                date={hotel.date}
                price={hotel.price + priceChange}
              />
            ))}
          </div>
        </section>

        <section className="pt-[64px] pl-[60px] pr-[60px] md:pl-[160px] md:pr-[160px]">
          <h3 className="text-[32px]">넓은 공간을 갖춘 숙소</h3>
          <p className="text-[18px] pb-[24px]">꿈에 그리던 휴가를 위한 편안한 독채 숙소를 찾아보세요.</p>
          <div className="flex gap-[24px] justify-center md:hidden">
            {hotelList2.slice(0, 2).map((hotel) => (
              <HotelCard
                key={hotel.id}
                image={hotel.image}
                title={hotel.title}
                rating={hotel.rating}
                description={hotel.description}
                bed={hotel.bed}
                date={hotel.date}
                price={hotel.price + priceChange}
              />
            ))}
          </div>
          
          <div className="hidden md:flex gap-[24px] justify-center">
            {hotelList2.map((hotel) => (
              <HotelCard
                key={hotel.id}
                image={hotel.image}
                title={hotel.title}
                rating={hotel.rating}
                description={hotel.description}
                bed={hotel.bed}
                date={hotel.date}
                price={hotel.price + priceChange}
              />
            ))}
          </div>
          <div className="pt-[32px] flex gap-[15px]">
            <MoreButton />
            <PlusMinus onMinus={handleMinus} onPlus={handlePlus} />
          </div>
          
        </section>

        <section className="py-[32px] pl-[60px] pr-[60px] md:pl-[160px] md:pr-[160px]">
          자주 묻는 질문과 답변 영역 // 미구현
          
        </section>
      </main>

      <footer className="w-full bg-[#F4F4F4] px-16 text-[#5C5C5C] pt-5 pb-2">
        <div className=" md:hidden flex items-center gap-6 text-[#222222] pb-2">
            <div className="w-6 h-6 bg-gray-400">
              <img src={facebook} />
            </div>
            <div className="w-6 h-6 bg-gray-400">
              <img src={facebook} />
            </div>
            <div className="w-6 h-6 bg-gray-400">
              <img src={facebook} />
            </div>
        </div>
        <div className="flex items-center justify-between border-b border-[#D9D9D9] pb-2">
          <div className="flex flex-wrap items-center gap-2 text-[15px] text-[#2B2B2B]">
            <p className="pb-1">© 2026 Airbnb, Inc.</p>
            <p>· 개인정보 처리방침 · 쿠키 정책 · 이용약관 · 한국의 변경된 환불 정책 · 회사 세부정보</p>
          </div>
          <div className="hidden md:flex md:items-center gap-6 bg-[#F4F4F4]">
            <div className="w-6 h-6 bg-gray-400">
              <img src={facebook} />
            </div>
            <div className="w-6 h-6 bg-gray-400">
              <img src={facebook} />
            </div>
            <div className="w-6 h-6 bg-gray-400">
              <img src={facebook} />
            </div>
          </div>
        </div>

        <div className="text-[8px] pt-2 md:text-[14px]  text-[#7A7A7A]">
          웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2, D02 DP23
          Ireland | 이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L |
          사업자 등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅 서비스 제공업체:
          아마존 웹서비스 | 에어비앤비는 통신판매 중개자로 에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에
          이루어지는 통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트
          서비스에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.
        </div>
        <h1 className=" text-center pt-6 text-[36px] text-red-500">클론 코딩 입니다</h1>
      </footer>
    </div>
  );
};

export default Home;