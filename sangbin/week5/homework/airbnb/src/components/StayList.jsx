import StayCard from './StayCard.jsx'
import './StayList.css'

// 숙소 카드 리스트 — 배열 데이터를 map() 으로 렌더링
function StayList({ stays }) {
  return (
    <ul className="stay-list">
      {stays.map((stay) => (
        <li key={stay.id}>
          <StayCard stay={stay} />
        </li>
      ))}
    </ul>
  )
}

export default StayList
