import dmIcon from '../assets/direct message.svg';
import commentIcon from '../assets/icon_comment.svg';
import bookmarkIcon from '../assets/icon_mookmark.svg';
import likeIcon from '../assets/like.svg';
// FeedActions 컴포넌트
export const FeedAction = ({ likes, onLike }) => {
  return (
    <div className="flex-none flex flex-col justify-end h-[83px] ">
      <div className="flex flex-row items-center justify-between px-[16px] pb-[13px]">
        {' '}
        {/*오른쪽 왼쪽 둘다 16px이 됨 */}
        <div className="flex flex-row gap-[13px]">
          <img
            src={likeIcon}
            alt="like"
            className="w-[22px] h-[22px] cursor-pointer"
            onClick={onLike}
          />
          <img src={commentIcon} alt="comment" className="w-[22px] h-[22px]" />
          <img src={dmIcon} alt="share" className="w-[22px] h-[22px]" />
        </div>
        <img src={bookmarkIcon} alt="bookmark" className="w-[22px] h-[22px]" />
      </div>
      <div className="pl-[16px] pb-[13px] text-[14px] font-bold text-black">
        좋아요 {likes}개
      </div>
    </div>
  );
};
