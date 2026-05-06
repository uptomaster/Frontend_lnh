import dmIcon from '../assets/direct message.svg';
import commentIcon from '../assets/icon_comment.svg';
import bookmarkIcon from '../assets/icon_mookmark.svg';
import likeIcon from '../assets/like.svg';
import likeIcon2 from '../assets/filled_like.png';
// FeedActions 컴포넌트
export const FeedAction = ({ likes, clickLike, onLike }) => {
    

    return (
    <div className="flex-none flex flex-col justify-end h-[83px]  "> 
      <div className="flex flex-row items-center justify-between px-[16px] pb-[13px]">
        <div className="flex flex-row gap-[13px] ">
          <img src={clickLike ? likeIcon2 : likeIcon } onClick={onLike} alt="like" className=" w-[22px] h-[22px] cursor-pointer" />
          <img src={commentIcon} alt="comment" className="w-[22px] h-[22px]" />
          <img src={dmIcon} alt="share" className="w-[22px] h-[22px]" />
        </div>
        <img src={bookmarkIcon} alt="bookmark" className="w-[22px] h-[22px]" />
      </div>
      <div className="px-[16px] pb-[13px] text-[14px] font-bold text-black">좋아요 {likes}개</div>
    </div>
  );
};