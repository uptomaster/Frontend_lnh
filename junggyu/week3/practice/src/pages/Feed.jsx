import { FeedAction } from '../components/FeedAction';
import { FeedHeader } from '../components/FeedHeader';
import { FeedImage } from '../components/FeedImage';
import { useState,useEffect } from 'react';
import profileImg from '../assets/profile.png';
import feedImg from '../assets/cat.png';



export const Feed = () => {
    
    const [feedData, setFeedData] = useState([
      {
          "name": "jung_gyu",
          "profile" : profileImg,
          "feedImg" : feedImg,
          "date": "2일",
          "likes" : 5,
          "clickLike" : false,
      }
    ]);

    useEffect(()=>{
      console.log(feedData);
    },[feedData]);

    const handleLike=()=>{
      setFeedData(([feed])=>[{
        ...feed,
        clickLike : !feed.clickLike,
        likes: feed.clickLike ? feed.likes-1 : feed.likes+1 }]);
    };


    return (
      <main className="w-full h-[602px] bg-white flex flex-col border-t border-b border-[#AEAEAE]">
        <FeedHeader profile={feedData[0].profile} name={feedData[0].name} date={feedData[0].date}/>
        <FeedImage feedImg={feedData[0].feedImg} />
        <FeedAction likes={feedData[0].likes} clickLike={feedData[0].clickLike} onLike={handleLike}/>
      </main>
    );
};
