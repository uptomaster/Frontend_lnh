import './MoreButton.css'

// 더 살펴보기 버튼
function MoreButton({ children, onClick }) {
  return (
    <button className="more-btn" type="button" onClick={onClick}>
      {children}
    </button>
  )
}

export default MoreButton
