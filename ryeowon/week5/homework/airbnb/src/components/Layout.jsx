import Navbar from './Navbar'
import SearchBox from './SearchBox/SearchBox'
import mainImg from '../assets/mainimg.png'
import Information from './Information'
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
            <div className="w-[1710-px] h-[560px]">
                <div className="relative w-[1440px] mx-[135px] pt-[48px] px-[80px]">
                    <img className="absolute right-20 w-[960px] h-[512px] object-cover rounded-[24px]" alt="청계천 사진" src={mainImg} />
                    <div className="absolute top-[85px] w-[420px] bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                        <SearchBox />
                    </div>
                </div>
            </div>
            <div className="py-[48px]">
                <div className="max-w-[1280px] mx-auto flex gap-[48px]">
                    {infos.map((item)=> (
                        <Information key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Layout;