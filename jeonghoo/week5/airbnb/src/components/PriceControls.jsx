const PriceControls = ({ onIncrease, onDecrease }) => {
    return (
      <>
        <button className="priceBtn" onClick={onDecrease}>
          -
        </button>
        <button className="priceBtn" onClick={onIncrease}>
          +
        </button>
      </>
    );
  };
  
  export default PriceControls;