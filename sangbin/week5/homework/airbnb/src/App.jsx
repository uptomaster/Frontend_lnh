import { useState } from 'react'
import Layout from './components/Layout.jsx'
import SearchSection from './components/SearchSection.jsx'
import InfoCard from './components/InfoCard.jsx'
import StayList from './components/StayList.jsx'
import MoreButton from './components/MoreButton.jsx'
import PriceControl from './components/PriceControl.jsx'
import { stays as initialStays } from './data/stays.js'
import './App.css'

const PRICE_STEP = 10000

// 가운데 정보 카드 데이터
const infos = [
  {
    id: 'flexible',
    title: '유연한 일정 변경이 가능한 숙소',
    description: '환불 정책이 유연한 숙소를 예약하면 여행 계획이 변경될 경우 쉽게 예약을 조정할 수 있습니다.',
  },
  {
    id: 'amenities',
    title: '원하는 편의시설을 갖춘 숙소',
    description: '온수 욕조, 수영장, 바비큐 시설 등 수십 가지 편의시설 중에서 내가 원하는 시설을 갖춘 숙소를 찾으세요.',
  },
  {
    id: 'reviews',
    title: '실제 후기 읽기',
    description: '숙소에 머물렀던 사람들의 멋진 경험을 참고하여 마음에 드는 숙소를 찾아보세요.',
  },
]

function App() {
  // 4개 숙소 가격을 한 번에 ±10,000원 조절, 0원 미만으로 안 내려가게
  const [stays, setStays] = useState(initialStays)

  const handleIncrease = () => {
    setStays((prev) =>
      prev.map((stay) => ({ ...stay, price: stay.price + PRICE_STEP })),
    )
  }

  const handleDecrease = () => {
    setStays((prev) =>
      prev.map((stay) => ({
        ...stay,
        price: Math.max(0, stay.price - PRICE_STEP),
      })),
    )
  }

  return (
    <Layout>
      <SearchSection />

      <section className="section info-section">
        {infos.map((info) => (
          <InfoCard
            key={info.id}
            title={info.title}
            description={info.description}
          />
        ))}
      </section>

      <section className="section">
        <div className="main-title">
          <h2>서울의 게스트 선호 숙소</h2>
          <p>평점, 후기, 신뢰도를 바탕으로 에어비앤비에서 가장 사랑받는 숙소로 손꼽히는 곳입니다.</p>
        </div>

        <StayList stays={stays} />

        <div className="button-area">
          <MoreButton>더 찾아보기</MoreButton>
          <PriceControl onDecrease={handleDecrease} onIncrease={handleIncrease} />
        </div>
      </section>
    </Layout>
  )
}

export default App
