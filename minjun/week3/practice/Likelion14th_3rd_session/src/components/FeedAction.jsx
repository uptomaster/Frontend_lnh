import dmIcon from '../assets/direct message.svg';
import commentIcon from '../assets/icon_comment.svg';
import bookmarkIcon from '../assets/icon_mookmark.svg';
import likeIcon from '../assets/like.svg';

export const FeedAction = ({ likes, onLike }) => {
  return (
    <div className="flex-none h-[83px] flex flex-col justify-end">
      <div className="flex flex-row items-center justify-between px-[16px] pb-[12px]">
        <div className="flex flex-row gap-[13px] cursor-pointer">
          <img src={dmIcon} alt="share" className="w-[22px] h-[22px]" />
          <img src={commentIcon} alt="comment" className="w-[22px] h-[22px]" />

          <img
            src={likeIcon}
            onClick={onLike}
            alt="like"
            className="w-[22px] h-[22px] cursor-pointer"
          />
        </div>
        <img src={bookmarkIcon} alt="bookmark" className="w-[22px] h-[22px]" />
      </div>
      <div className="pl-[16px] pb-[13px] font-bold text-[14px] text-black">
        좋아요 {likes}개
      </div>
    </div>
  );
};
