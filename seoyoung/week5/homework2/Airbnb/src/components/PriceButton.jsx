const PriceButton = ({ label, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="cursor-pointer p-4 mt-5 w-[50px] border b rounded-xl text-xl"
      >
        {label}
      </button>
    </div>
  );
};

export default PriceButton;
