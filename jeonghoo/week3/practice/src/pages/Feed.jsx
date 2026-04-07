import { FeedAction } from '../components/FeedAction';
import { FeedHeader } from '../components/FeedHeader';
import { FeedImage } from '../components/FeedImage';
import { useEffect, useState } from 'react';

import profileImg from "../assets/IMG_5370.jpg";
import feedMainImg from "../assets/IMG_5366.jpeg";


export const Feed = () => {
    const[feedData, setFeedDate] =useState([
      {
        "name": "j.hee_e",
        "profile" : profileImg,
        "feedImg" : feedMainImg,
        "date": "2일",
        "likes" : 5,
    }

    ]);
    useEffect(()=>{
      console.log(feedData)
    });

    const handleLike=()=>{
      setFeedDate(([feed])=>[{
        ...feed,
        likes:feed.likes+1
      }]);
    };
    


    return (
      <main className="w-full h-[602px] bg-white flex flex-col border-t border-b border-[#AEAEAE]">
        <FeedHeader profile={feedData[0].profile} name={feedData[0].name} date={feedData[0].date}/>
        <FeedImage feedImg={feedData[0].feedImg} />
        <FeedAction likes={feedData[0].likes} onLike={handleLike}/>
      </main>
    );
};
