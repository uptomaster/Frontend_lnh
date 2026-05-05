function SearchBar() {
  return (
    <div className="md:w-[420px] md:border-gray-300 md:border md:p-8 md:rounded-3xl bg-white">
      <h1 className="text-[32px] font-bold pb-[8px]">서울 숙소 찾기</h1>
      <div className="text-[#717171]">
        멋진 여행의 시작은 에어비엔비. 어떤 여행에든 딱 맞는 특별한 숙소를
        찾아보세요.
      </div>
      <form className="mt-4">
        <label className="flex flex-col rounded-[12px] border border-gray-300 px-4 py-[10px]">
          <span className="text-[12px]">위치</span>
          <input className="outline-none" placeholder="Seoul, Korea" />
        </label>
        <fieldset className="grid grid-cols-2 rounded-[12px] border border-gray-300 mt-2">
          <label className="flex flex-col py-[10px] px-4">
            <span className="text-[12px]">체크인</span>
            <input
              type="text"
              className="outline-none"
              placeholder="날짜 추가"
            />
          </label>
          <label className="flex flex-col border-l border-gray-300 py-[10px] px-4">
            <span className="text-[12px]">체크아웃</span>
            <input
              type="text"
              className="outline-none"
              placeholder="날짜 추가"
            />
          </label>
        </fieldset>
        <fieldset className="grid grid-cols-2 rounded-[12px] border border-gray-300 mt-2 mb-4">
          <label className="flex flex-col py-[10px] px-4">
            <span className="text-[12px]">성인</span>
            <select className="outline-none">
              <option>1</option>
              <option selected>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </label>
          <label className="flex flex-col border-l border-gray-300 py-[10px] px-4">
            <span className="text-[12px]">어린이</span>
            <select className="outline-none">
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </label>
        </fieldset>
        <button
          type="button"
          className="w-full py-[14px] px-6 text-4 bg-[#FF385C] text-white rounded-lg"
        >
          검색하기
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
