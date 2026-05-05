function PriceControlButton({ onIncrease, onDecrease }) {
  return (
    <div className="flex gap-10">
      <button
        onClick={onIncrease}
        className="text-[14px] border border-black rounded-[12px] px-6 py-3 cursor-pointer"
      >
        +
      </button>
      <button
        onClick={onDecrease}
        className="text-[14px] border border-black rounded-[12px] px-6 py-3 cursor-pointer"
      >
        -
      </button>
    </div>
  );
}

export default PriceControlButton;
