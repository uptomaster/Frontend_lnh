import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search shows..."
        className="w-full bg-zinc-900 text-white placeholder-zinc-600 rounded-full pl-12 pr-4 py-3 outline-none border border-zinc-800 focus:ring-2 focus:ring-zinc-700 transition-all"
      />
    </div>
  );
};

export default SearchBar;