// src/data/stays.js
import img1 from '../assets/image1.png'; // 경로 주의! src/assets에 이미지가 있어야 함
import img2 from '../assets/image2.png';
import img3 from '../assets/image3.png';
import img4 from '../assets/image4.png';

export const initialStays = [
  { id: 1, loc: "서울의 집", rating: "신규", desc: "Yuo Stay / 코지하우스...", beds: "침대 3개", dates: "4월 23일~28일", basePrice: 918647, img: img1, badge: false },
  { id: 2, loc: "군자동의 아파트", rating: "4.77 (13)", desc: "Hail602/신축...", beds: "퀸사이즈 침대 1개", dates: "5월 6일~11일", basePrice: 621941, img: img2, badge: "게스트 선호" },
  { id: 3, loc: "서울의 집", rating: "신규", desc: "[NEW 오픈특가]...", beds: "퀸사이즈 침대 3개", dates: "4월 13일~18일", basePrice: 1064478, img: img3, badge: false },
  { id: 4, loc: "송파1동의 아파트", rating: "5.0 (10)", desc: "무료짐보관...", beds: "침대 3개", dates: "6월 7일~12일", basePrice: 553471, img: img4, badge: "게스트 선호" },
];