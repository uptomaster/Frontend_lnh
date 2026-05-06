import Navbar from './Navbar'
import SearchBox from './SearchBox/SearchBox'
import mainImg from '../assets/mainimg.png'

function Layout() {
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
        </div>
    )
}

export default Layout;