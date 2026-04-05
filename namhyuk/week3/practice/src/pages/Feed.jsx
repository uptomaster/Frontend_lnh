import { FeedAction } from '../components/FeedAction';
import { FeedHeader } from '../components/FeedHeader';
import { FeedImage } from '../components/FeedImage';
import { useEffect, useState } from 'react';

export const Feed = () => {
    const [feedData, setFeedData] = useState([{
            "name": "ln_h_929",
            "profile" : null,
            "feedImg" : null,
            "date": "2일",
            "likes" : 5,
        }]);

        useEffect(() => {
          console.log(feedData);
        }, [feedData]);

    const handleLike=() => {
      setFreeData(([feed])=> [{
        ...feed,
        likes:fead.likes+1}]);
    };


    return (
      <main className="w-full h-[602px] bg-white flex flex-col border-t border-b border-[#AEAEAE]">
        <FeedHeader profile={feedData[0].profile} name={feedData[0].name} date={feedData[0].date}/>
        <FeedImage feedImg={feedData[0].feedImg} />
        <FeedAction likes={feedData[0].likes} onLike={handleLike}/>
      </main>
    );
};
