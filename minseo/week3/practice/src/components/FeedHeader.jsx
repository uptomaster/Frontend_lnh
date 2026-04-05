import moreIcon from '../assets/more.svg';
import OuterRing from '../assets/outer ring.svg'; 
import {useNavigate} from "react-router-dom";

// FeedHeader 컴포넌트
export const FeedHeader = ({ profile, name, date }) => {

    const navigate=useNavigate();

    const handleNameClick=() =>{
        navigate(`profile/${name}`);
    }

    return(
    <div className="flex-none flex flex-row items-center h-[51px] pl-[7px] pr-[18px] gap-[9px]">
      <div className="relative">
          <img  src={OuterRing} 
                alt="story ring" 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[44px] h-[44px]" />
          <img src={profile} alt="profile" className=" w-[32px] h-[32px] rounded-full object-cover" />
      </div>
      <span className="text-[14px] font-bold text-black cursor-pointer" onClick={handleNameClick}>{name}</span>
      <span className="text-xs text-[#737373]">{date}</span>
      <div className="flex-1" />
      <div className="flex-none"><img src={moreIcon} alt="more" className='w-4 h-4'/></div>
    </div>
    );
};