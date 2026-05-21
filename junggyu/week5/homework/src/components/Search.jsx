const Search = () => {
  return (
    <div className="w-[420px] bg-white rounded-[24px] shadow-2xl py-4 px-8">
      <h2 className="text-[32px] font-bold text-[#222222] pt-0 mb-2">
        서울 숙소 찾기
      </h2>

      <p className="text-[16px] text-[#717171] mb-4">
        멋진 여행의 시작은 에어비앤비. 어떤 여행에도 딱 맞는 특별한 숙소를 찾아보세요.
      </p>

      <button className="w-full border border-[#CFCFCF] rounded-[16px] px-6 py-2 text-left mb-2">
        <p className="text-[14px] text-[#717171] mb-1">위치</p>
        <p className="text-[14px] text-[#222222]">Seoul, Korea</p>
      </button>

      <div className="flex border border-[#CFCFCF] rounded-[16px] overflow-hidden mb-2">
        <button className="w-1/2 px-6 py-2 text-left border-r border-[#CFCFCF]">
          <p className="text-[14px] text-[#717171] mb-1">체크인</p>
          <p className="text-[14px] text-[#B0B0B0]">날짜 추가</p>
        </button>

        <button className="w-1/2 px-6 py-2 text-left">
          <p className="text-[14px] text-[#717171] mb-1">체크아웃</p>
          <p className="text-[14px] text-[#B0B0B0]">날짜 추가</p>
        </button>
      </div>

      <div className="flex border border-[#CFCFCF] rounded-[16px] overflow-hidden mb-6">
        <button className="w-1/2 px-6 py-2 text-left border-r border-[#CFCFCF] flex items-end justify-between">
          <div>
            <p className="text-[14px] text-[#717171] mb-1">성인</p>
            <p className="text-[14px] text-[#222222]">2</p>
          </div>
        </button>

        <button className="w-1/2 px-6 py-2 text-left flex items-end justify-between">
          <div>
            <p className="text-[14px] text-[#717171] mb-1">어린이</p>
            <p className="text-[14px] text-[#222222]">0</p>
          </div>
        </button>
      </div>

      <button className="w-full h-[64px] rounded-[14px] bg-[#FF385C] text-white text-[20px] font-semibold">
        검색하기
      </button>
    </div>
  );
};

export default Search;