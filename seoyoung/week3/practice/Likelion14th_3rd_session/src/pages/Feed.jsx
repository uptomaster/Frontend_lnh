import { FeedAction } from '../components/FeedAction';
import { FeedHeader } from '../components/FeedHeader';
import { FeedImage } from '../components/FeedImage';
import { useState, useEffect } from 'react';

export const Feed = () => {
  const [feedData, setFeedData] = useState([
    {
      name: 'youngyoom_',
      profile: '/src/assets/profile.png',
      feedImg: '/src/assets/FeedImg.png',
      date: '2일',
      likes: 5,
    },
  ]);

  useEffect(() => {
    console.log(feedData);
  }, [feedData]); //feedData가 바뀔때마다 console에 출력이 되도록 함

  const handlelike = () => {
    setFeedData(([feed]) => [
      {
        ...feed,
        likes: feed.likes + 1, //likes가 커질때만 수정이 되도록 처리
      },
    ]);
  };

  return (
    <main className="w-full h-[602px] bg-white flex flex-col border-t border-b border-[#AEAEAE]">
      <FeedHeader
        profile={feedData[0].profile}
        name={feedData[0].name}
        date={feedData[0].date}
      />
      <FeedImage feedImg={feedData[0].feedImg} />
      <FeedAction likes={feedData[0].likes} onLike={handlelike} />
    </main>
  );
};
