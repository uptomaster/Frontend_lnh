import { FeedAction } from "../components/FeedAction";
import { FeedHeader } from "../components/FeedHeader";
import { FeedImage } from "../components/FeedImage";
import { useState, useEffect } from "react";
import profileImage from "../assets/profile.jpeg";
import feedImage from "../assets/feed-img.jpeg";

const formatFeedDate = (uploadedAt) => {
  const now = new Date();
  const uploadDate = new Date(uploadedAt);

  const diff = now - uploadDate;
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (diffHours < 24) return `${diffHours}시간 전`;
  if (diffDays < 7) return `${diffDays}일 전`;

  const month = String(uploadDate.getMonth() + 1);
  const day = String(uploadDate.getDate());

  return `${month}월 ${day}일`;
};

export const Feed = () => {
  const [feedData, setFeedData] = useState([
    {
      name: "welsh_koj_50",
      profile: profileImage,
      feedImg: feedImage,
      date: "2026-04-01T10:00:00",
      likes: 5,
    },
  ]);

  const handleLike = () => {
    setFeedData(([feed]) => [
      {
        ...feed,
        likes: feed.likes + 1,
      },
    ]);
  };

  useEffect(() => {
    console.log(feedData);
  }, [feedData]);

  return (
    <main className="w-full h-[602px] bg-white flex flex-col border-t border-b border-[#AEAEAE]">
      <FeedHeader
        profile={feedData[0].profile}
        name={feedData[0].name}
        date={formatFeedDate(feedData[0].date)}
      />
      <FeedImage feedImg={feedData[0].feedImg} />
      <FeedAction likes={feedData[0].likes} onLike={handleLike} />
    </main>
  );
};
