import image1 from '../assets/image.png'
import image2 from '../assets/image-2.png'
import image3 from '../assets/image-3.png'
import image4 from '../assets/image-4.png'

// 숙소 카드 리스트 — 배열 데이터로 관리해서 map() 으로 렌더링
export const stays = [
  {
    id: 1,
    image: image1,
    name: '서울의 집',
    rating: '신규',
    description: 'Yuo Stay / 코지하우스 / 등촌역...',
    date: '4월 23일~28일',
    price: 918647,
  },
  {
    id: 2,
    image: image2,
    name: '군자동의 아파트',
    rating: '4.77',
    description: 'Hail602 / 신축 / Residence / 성수...',
    date: '5월 6일~11일',
    price: 621941,
  },
  {
    id: 3,
    image: image3,
    name: '서울의 집',
    rating: '신규',
    description: '[NEW 오픈특가] 신당역 5분 / 2룸 3침대 ...',
    date: '4월 13일~18일',
    price: 1064478,
  },
  {
    id: 4,
    image: image4,
    name: '송파1동의 아파트',
    rating: '5.0',
    description: '무료 짐보관 / 송파나루 5분 / 석촌역 7분 ...',
    date: '6월 7일~12일',
    price: 553471,
  },
]
