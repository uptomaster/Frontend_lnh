const SearchBar = ({ value, onChange }) => {
    return (
      <div className="mb-8">
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="영화 또는 쇼 검색하기"
          className="w-full rounded-md border border-gray-700 bg-zinc-900 px-4 py-3 text-white outline-none placeholder:text-gray-500"
        />
      </div>
    );
  };
  
  export default SearchBar;