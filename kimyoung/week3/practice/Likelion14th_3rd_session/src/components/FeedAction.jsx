import { useState } from 'react'; // 1. useState를 사용하기 위해 반드시 추가해야 합니다!
import dmIcon from '../assets/direct message.svg';
import commentIcon from '../assets/icon_comment.svg';
import bookmarkIcon from '../assets/icon_mookmark.svg';
import likeIcon from '../assets/like.svg';

// FeedActions 컴포넌트
export const FeedAction = ({ likes, onLike }) => {
  // 댓글 목록을 보여줄지 말지 결정하는 상태 (기본값: false)
  const [showComments, setShowComments] = useState(false);

  const comments = [
    { user: 'uglyLion', text: '기명.. 날다' },
    { user: 'fashionableLion', text: 'ㄷㄷ' },
  ];

  return (
    <div className="flex-none flex flex-col">
      {/* 1. 아이콘 바 */}
      <div className="flex flex-row items-center justify-between px-[16px] py-[10px]">
        <div className="flex flex-row gap-[13px]">
          <img
            src={likeIcon}
            onClick={onLike}
            alt="like"
            className="cursor-pointer w-[22px] h-[22px]"
          />
          <img src={commentIcon} alt="comment" className="w-[22px] h-[22px]" />
          <img src={dmIcon} alt="share" className="w-[22px] h-[22px]" />
        </div>
        <img src={bookmarkIcon} alt="bookmark" className="w-[22px] h-[22px]" />
      </div>

      {/* 2. 정보 및 댓글 영역 */}
      <div className="px-[16px] flex flex-col gap-1 pb-4">
        {/* 좋아요 개수 */}
        <div className="text-[14px] font-bold text-black">좋아요 {likes}개</div>

        {/* 게시물 작성자명 및 간단한 설명 */}
        <div className="text-[14px]">
          <span className="font-bold mr-2">__ki_men</span>
          <span>🫡</span>
        </div>

        {/* 댓글 보기 버튼: 클릭하면 showComments 상태를 반전시킵니다. */}
        <div
          className="text-[14px] text-[#737373] mt-1 cursor-pointer"
          onClick={() => setShowComments(!showComments)}
        >
          {showComments ? '댓글 숨기기' : `댓글 ${comments.length}개 모두 보기`}
        </div>

        {/* showComments가 true일 때만 댓글 목록을 렌더링합니다. */}
        {showComments && (
          <div className="flex flex-col gap-1 mt-1">
            {comments.map((comment, index) => (
              <div key={index} className="text-[14px]">
                <span className="font-bold mr-2">{comment.user}</span>
                <span>{comment.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* 날짜 */}
        <div className="text-[10px] text-[#737373] uppercase mt-1">
          2026년 4월 4일
        </div>
      </div>
    </div>
  );
};
