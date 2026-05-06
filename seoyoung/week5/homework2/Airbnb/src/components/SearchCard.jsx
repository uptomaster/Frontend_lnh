const SearchCard = () => {
  return (
    <div className="flex  flex-col gap-4 bg-white md:rounded-2xl md:shadow-2xl p-7 w-md">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-3xl">서울 숙소 찾기</h1>
        <p className="text-gray-600 text-md leading-tight">
          멋진 여행의 시작은 에어비앤비. 어떤 여행에든 딱 맞는 특별한 숙소를
          찾아보세요.
        </p>
      </div>

      <div className="flex flex-col gap-2 text-5 item-center">
        <div className="rounded-xl border p-3 flex flex-col w-sm h-15 justify-center">
          <label className="pr-4">위치</label>
          <input type="text" placeholder="국가" />
        </div>

        <div className="rounded-xl border p-4 flex w-sm h-15">
          <div className="w-full flex flex-col mr-5 pr-4 border-r justify-center">
            <label>체크인</label>
            <input type="date" placeholder="날짜추가" />
          </div>
          <div className="w-full flex flex-col justify-center">
            <label className="">체크아웃</label>
            <input type="date" placeholder="날짜추가" />
          </div>
        </div>
        <div className=" rounded-xl border p-4 flex justify-center w-sm h-15">
          <div className="w-full flex flex-col justify-center mr-5 pr-4 border-r">
            <label>성인</label>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
            </select>
          </div>
          <div className="w-full flex flex-col justify-center">
            <label>어린이</label>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <button className="w-full p-3 rounded-xl text-center text-white font-bold bg-rose-500">
          검색하기
        </button>
      </div>
    </div>
  );
};

export default SearchCard;
