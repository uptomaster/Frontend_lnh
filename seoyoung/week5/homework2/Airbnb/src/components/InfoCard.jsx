import SearchCard from './SearchCard';
import Infoimage from '../assets/Info_image.png';
import InfoItem from './InfoItem';

const InfoCard = () => {
  const Data = [
    {
      icon: '⌨︎',
      title: '유연한 일정 변경이 가능한 숙소',
      description:
        '환불 정책이 유연한 숙소를 예약하면 여행 계획이 변경될 경우 쉽게 예약을 조정할 수 있습니다.',
    },
    {
      icon: '♨︎',
      title: '원하는 편의시설을 갖춘 숙소',
      description:
        '온수 욕조, 수영장, 바비큐 시설 등 수십 가지 편의시설 중에서 내가 원하는 시설을 갖춘 숙소를 찾으세요.',
    },
    {
      icon: '★',
      title: '실제 후기 읽기',
      description:
        '숙소에 머물렀던 사람들의 멋진 경험을 참고하여 마음에 드는 숙소를 찾아보세요.',
    },
  ];

  return (
    <div className="my-[40px] mx-[30px] md:mx-[50px] lg:mx-[200px] flex flex-col gap-20">
      <div className="relative flex flex-col w-full max-w-[2000px] mx-auto md:gap-4">
        <div className="flex justify-end">
          <img
            src={Infoimage}
            alt="Info"
            className="w-full md:w-[75%] h-[300px] md:h-[500px] rounded-2xl object-cover "
          />
        </div>
        <div className="w-full flex justify-center md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0 md:z-20 md:w-[450px] lg:w-[500px]">
          <SearchCard />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {Data.map((item, index) => (
          <InfoItem
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
