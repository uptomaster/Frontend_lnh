const PlusMinus = ({ onMinus, onPlus }) => {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onPlus}
        className="cursor-pointer px-3 py-1 border border-[#222222] rounded-[10px] text-[16px] font-medium"
      >
        +
      </button>
      
      <button
        onClick={onMinus}
        className="cursor-pointer px-3 py-1 border border-[#222222] rounded-[10px] text-[16px] font-medium"
      >
        -
      </button>

    </div>
  );
};

export default PlusMinus;