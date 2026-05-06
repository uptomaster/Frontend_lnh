import { useState } from 'react';

function Button({total}) {
  const [price, setPrice] = useState();

  const onClickPlus = () => {
    setPrice(price+10000);
  }

  const onClickMinus = () => {
    if (total>=10000) setPrice(price-10000);
  }

  return (

    <div>
      <div className="my-[20px]">
        <a href='#' className="border border-gray-800 rounded-lg px-[20px] py-[11px] inline-flex items-center justify-center"> 더 찾아보기 </a>
        <button id="plus" className="mx-[25px] cursor-pointer" onClick={onClickPlus} > + </button>
        <button id="minus" className="mx-[8px] cursor-pointer" onClick={onClickMinus} > – </button>
      </div>
    </div>
  );
}

export default Button;
