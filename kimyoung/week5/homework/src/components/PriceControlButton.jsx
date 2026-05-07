function PriceControlButton({ text, onClick }) {
  return (
    <button className="price-button" onClick={onClick}>
      {text}
    </button>
  );
}

export default PriceControlButton;
