import InfoCard from "../components/InformationCard";
import infoList from '../data/InformationCardList';
import HotelCard from "../components/HotelCard";
import hotelList1 from '../data/HotelList01';
import hotelList2 from '../data/HotelList02';

const Home = () => {
  return (
    <div>
      <div>
        레이아웃 / 네브바
      </div>

      <main>
        <section>
          서울 숙소 찾기 영역
        </section>

        <section className="flex gap-[48px] justify-center pl-[80px] pr-[80px]">
          {infoList.map((info) => (
            <InfoCard image={info.image} title={info.title} desc={info.desc} />
          ))}
        </section>

        <section className="pl-[80px] pr-[80px]">
          <h3>서울의 게스트 선호 숙소</h3>
          <p>평점, 후기, 신뢰도를 바탕으로 에어비앤비에서 가장 사랑받는 숙소로 손꼽히는 곳입니다.</p>
          <div className="flex gap-[24px] justify-center">
            {hotelList1.map((hotel) => (
              <HotelCard
                image={hotel.image}
                title={hotel.title}
                rating={hotel.rating}
                description={hotel.description}
                bed={hotel.bed}
                date={hotel.date}
                price={hotel.price}
              />
            ))}
          </div>
        </section>

        <section className="pl-[80px] pr-[80px]">
          <h3>넓은 공간을 갖춘 숙소</h3>
          <p>꿈에 그리던 휴가를 위한 편안한 독채 숙소를 찾아보세요.</p>
          <div className="flex gap-[24px] justify-center">
            {hotelList2.map((hotel) => (
              <HotelCard
                image={hotel.image}
                title={hotel.title}
                rating={hotel.rating}
                description={hotel.description}
                bed={hotel.bed}
                date={hotel.date}
                price={hotel.price}
              />
            ))}
          </div>
        </section>

        <section>
          자주 묻는 질문과 답변 영역
          
        </section>
      </main>

      <footer>
        푸터 영역
      </footer>
    </div>
  );
};

export default Home;