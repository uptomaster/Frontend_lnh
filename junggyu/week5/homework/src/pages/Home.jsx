import InfoCard from "../components/InformationCard";
import infoList from '../data/InformationCardList';

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

        <section className="flex gap-[48px]">
          {infoList.map((info) => (
            <InfoCard image={info.image} title={info.title} desc={info.desc} />
          ))}
        </section>

        <section>
          서울의 게스트 선호 숙소 영역
          
        </section>

        <section>
          넓은 공간을 갖춘 숙소 영역
          
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