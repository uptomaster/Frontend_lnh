import { FeedAction } from '../components/FeedAction';
import { FeedHeader } from '../components/FeedHeader';
import { FeedImage } from '../components/FeedImage';
import { useState } from 'react';
import { useEffect } from 'react';
import img1 from '../assets/img2.JPG';
import img2 from '../assets/img1.JPG';

export const Feed = () => {
  const [feedData, setFeedData] = useState([
    {
      name: 'oigeei',
      profile: img1,
      feedImg: img2,
      date: '2일',
      likes: 5,
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
    <main className="w-full h-[602px] bg-white flex flex-col border-t border-b border-[#AEAEAE]">
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
