import Navbar from './Navbar'
import SearchBox from './SearchBox/SearchBox'
import mainImg from '../assets/mainimg.png'
import Information from './Information'
import Hotel from './Hotel/Hotel'
import info1 from '../assets/info1.png'
import info2 from '../assets/info2.png'
import info3 from '../assets/info3.png'


function Layout() {
    const infos = [
        {
            id:1,
            maintext:"유연한 일정 변경이 가능한 숙소",
            infotext:"환불 정책이 유연한 숙소를 예약하면 여행 계획이 변경될 경우 쉽게 예약을 조정할 수 있습니다.",
            src: info1
        },
        {
            id:2,
            maintext:"원하는 편의시설을 갖춘 숙소",
            infotext:"온수 욕조, 수영장, 바비큐 시설 등 수십 가지 편의시설 중에서 내가 원하는 시설을 갖춘 숙소를 찾으세요.",
            src: info2
        },
        {
            id:3,
            maintext:"실제 후기 읽기",
            infotext:"숙소에 머물렀던 사람들의 멋진 경험을 참고하여 마음에 드는 숙소를 찾아보세요.",
            src: info3
        }
    ]

    return (
        <div>
            <Navbar />
            <div className="w-full xl:w-[1710px] h-auto sm:h-[560px]">
                <div className="relative w-full xl:w-[1440px] xl:mx-[135px] pt-[48px] px-[16px] xl:px-[80px]">
                    <img className="hidden sm:block absolute right-20 w-[960px] h-[512px] object-cover rounded-[24px]" alt="청계천 사진" src={mainImg} />
                    <div className="relative sm:absolute top-0 sm:top-[85px] w-full sm:w-[420px] bg-white rounded-3xl sm:shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                        <SearchBox />
                    </div>
                </div>
            </div>
            <div className="pt-[40px] sm:pt-[100px] pb-[40px] sm:pb-[70px]">
                <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row gap-[24px] sm:gap-[48px] px-[16px] xl:px-0"> {/* 이 div의 최대 넓이를 1280px로 제한하고, 이 div를 화면 가운데에 배치하고, 그 안의 아이템들을 가로로 정렬하고 그 간격을 48px로 설정*/}
                    {infos.map((item)=> (
                        <Information {...item} />
                    ))}
                </div>
            </div>
            <div>
                <Hotel title="서울의 게스트 선호 숙소" info="평점, 후기, 신뢰도를 바탕으로 에어비앤비에서 가장 사랑받는 숙소로 손꼽히는 곳입니다."/>
            </div>
        </div>
    )
}

export default Layout;