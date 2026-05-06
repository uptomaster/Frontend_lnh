import firstImage from '../assets/PlaceImage/first.png';
import secondImage from '../assets/PlaceImage/second.png';
import thirdImage from '../assets/PlaceImage/third.png';
import fourthImage from '../assets/PlaceImage/fourth.png';
import PlaceItem from './PlaceItem';
import MoreButton from './MoreButton';
import PriceButton from './PriceButton';
import { useState } from 'react';

const PlaceCard = () => {
  const [state, setState] = useState([
    {
      id: 1,
      image: firstImage,
      geustFavorite: false,
      title: '서울의 집',
      star: '신규',
      description: 'Yuo Stay/코지하우스/등촌역6분/염창역근처/쌈!',
      bed: '침대 3개',
      date: '4월23일~28일',
      price: '918,647',
    },
    {
      id: 2,
      image: secondImage,
      geustFavorite: true,
      title: '서울의 집',
      star: '4.77 (13)',
      description: 'Hail602/신축/Residence/성수/건국,세종&숭실대 근처',
      bed: '퀸사이즈침대 1개',
      date: '5월 6일~11일',
      price: '621,941',
    },
    {
      id: 3,
      image: thirdImage,
      geustFavorite: true,
      title: '군자동의 아파트',
      star: '신규',
      description: '[NEW 오픈특가] 신당역 5분/2룸 3침대',
      bed: '퀸사이즈 침대 3개',
      date: '4월 13일~18일',
      price: '1,064,478',
    },
    {
      image: fourthImage,
      geustFavorite: true,
      title: '송파1동의 아파트',
      star: '5.0 (10)',
      description: '무료짐보관/송파나루5분/석촌역7분/역세권',
      bed: '침대 3개',
      date: '6월 7일~12일',
      price: '553,471',
    },
  ]);

  const onIncreaseClick = () => {
    setState(
      state.map((p) => {
        const numberPrice = Number(p.price.replaceAll(',', ''));
        return {
          ...p,
          price: (numberPrice + 10000).toLocaleString(),
        };
      })
    );
  };

  const onDecreaseClick = () => {
    setState(
      state.map((p) => {
        const numberPrice = Number(p.price.replaceAll(',', ''));
        return {
          ...p,
          price:
            numberPrice - 10000 > 0
              ? (numberPrice - 10000).toLocaleString()
              : p.price,
        };
      })
    );
  };

  return (
    <div className="m-[30px] md:mx-[50px] lg:mx-[150px] flex flex-col gap-5 md:mx-[30px]">
      <div className="p-4 mb-3">
        <h1 className="text-[30px] font-bold">서울의 게스트 선호 숙소</h1>
        <p>
          평점, 후기, 신뢰도를 바탕으로 에어비앤비에서 가장 사랑받는 숙소로
          손꼽히는 곳입니다.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {state.map((item, index) => (
          <div
            key={index}
            className={
              index === 3
                ? 'hidden lg:block'
                : index === 2
                  ? 'hidden md:block'
                  : 'block'
            }
          >
            <PlaceItem
              image={item.image}
              geustFavorite={item.geustFavorite}
              star={item.star}
              title={item.title}
              description={item.description}
              bed={item.bed}
              date={item.date}
              price={item.price}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <MoreButton />
        <div className="flex gap-5">
          <PriceButton label="+" onClick={onIncreaseClick} />
          <PriceButton label="-" onClick={onDecreaseClick} />
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
