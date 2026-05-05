import Icon from "../../assets/ex.svg";

function InfoSection() {
  return (
    <section className="px-6 py-8 md:px-20 md:py-12">
      <div className="grid grid-cols-1 py-8 md:py-12 md:grid-cols-3 gap-12">
        <div>
          <div className="pb-3 md:pb-6">
            <img src={Icon} alt="Icon" />
          </div>
          <div>
            <h2 className="pb-3 text-[22px]">유연한 일정 변경이 가능한 숙소</h2>
            <div className="pb-1 text-[18px]">
              환불 정책이 유연한 숙소를 예약하면 여행 계획이 변경될 경우 쉽게
              예약을 조정할 수 있습니다.
            </div>
          </div>
        </div>
        <div>
          <div className="pb-3 md:pb-6">
            <img src={Icon} alt="Icon" />
          </div>
          <div>
            <h2 className="pb-3 text-[22px]">원하는 편의시설을 갖춘 숙소</h2>
            <div className="pb-1 text-[18px]">
              온수 욕조, 수영장, 바비큐 시설 등 수십 가지 편의시설 중에서 내가
              원하는 시설을 갖춘 숙소를 찾으세요.
            </div>
          </div>
        </div>
        <div>
          <div className="pb-3 md:pb-6">
            <img src={Icon} alt="Icon" />
          </div>
          <div>
            <h2 className="pb-3 text-[22px]">실제 후기 읽기</h2>
            <div className="pb-1 text-[18px]">
              숙소에 머물렀던 사람들의 멋진 경험을 참고하여 마음에 드는 숙소를
              찾아보세요.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
