import logo from '../assets/logo.png'

function Navbar() {
    return (
        <>
            <div className="flex justify-between items-center px-[80px] py-[20px]">
                <img className="flex-1" alt="에어비앤비 로고" src={logo} className="w-[115px] h-[39px]"/>
                <span className="text-[14px] font-normal text-gray-900 underline">당신의 공간을 에어비앤비하세요</span>
            </div>
            <div className="w-full h-[1px] bg-gray-200"></div>
        </>
    )
}

export default Navbar;