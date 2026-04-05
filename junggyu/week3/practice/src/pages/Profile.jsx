import profileImg from '../assets/profile.png';
import { useState } from 'react';


export const Profile = () => {
  
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(70);
  
  const handleFollow = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowers(followers - 1);
    } else {
      setIsFollowing(true);
      setFollowers(followers + 1);
    }
    };
    return (
      <main className="-mt-130 ">
        <section className=" flex justify-center mb-[8px]">
        <h1 className="text-[24px] font-bold">jung_gyu</h1>
        </section>
        <section className="pt-[20px] flex flex-row items-center gap-[80px] ">
          <div className="ml-[-40px]  w-[86px] h-[86px] rounded-full overflow-hidden">
            <img
              src={profileImg}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        
          <div className="ml-[40px] flex flex-row gap-[25px]">
            <div className="flex flex-col items-center">
              <span className="text-[18px] font-bold">1</span>
              <span className="text-[14px]">게시물</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-[18px] font-bold">{followers}</span>
              <span className="text-[14px]">팔로워</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-[18px] font-bold">100</span>
              <span className="text-[14px]">팔로잉</span>
            </div>
          </div>
        </section>
        <section className="pt-[30px] flex justify-center gap-[5px]">
          <button onClick={handleFollow} className="cursor-pointer w-[160px] border border-black rounded-lg px-6 py-2 font-semibold">
            {isFollowing ? '팔로잉' : '팔로우'}
          </button>
          <button className="w-[160px] border border-black rounded-lg px-6 py-2 font-semibold">
            메세지
          </button>
        </section>
      </main>
    );
  };
