import { FeedAction } from '../components/FeedAction';
import { FeedHeader } from '../components/FeedHeader';
import { FeedImage } from '../components/FeedImage';
import { useState, useEffect } from 'react';
import profileImg from '../assets/profile.jpg';
import feedImg from '../assets/feed.jpg';

export const Feed = () => {
  const [feedData, setFeedData] = useState([
    {
      name: '__ki_men',
      profile: profileImg,
      feedImg: feedImg,
      date: '2일',
      likes: 5,
      likeText: 'lion 님 외 여러 명',
      caption: '🫡',
      comments: [
        { user: 'uglyLion', text: '기명.. 날다' },
        { user: 'fashionableLion', text: 'ㄷㄷ' },
      ],
    },
  ]);

  useEffect(() => {
    console.log(feedData);
  }, [feedData]);

  const handleLike = () => {
    setFeedData(([feed]) => [
      {
        ...feed,
        likes: feed.likes + 1,
      },
    ]);
  };

  return (
    <main className="w-full bg-white flex flex-col border-t border-b border-[#AEAEAE]">
      <FeedHeader
        profile={feedData[0].profile}
        name={feedData[0].name}
        date={feedData[0].date}
      />
      <FeedImage feedImg={feedData[0].feedImg} />
      <FeedAction likes={feedData[0].likes} onLike={handleLike} />
    </main>
  );
};
