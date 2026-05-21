import './PriceControl.css'

// 가격 조절 버튼 (+/-)
function PriceControl({ onDecrease, onIncrease }) {
  return (
    <div className="price-control">
      <button type="button" onClick={onDecrease}>-</button>
      <button type="button" onClick={onIncrease}>+</button>
    </div>
  )
}

export default PriceControl
