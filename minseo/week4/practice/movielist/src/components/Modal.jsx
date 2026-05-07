import { X, Star, Calendar, Tv } from 'lucide-react';

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  const summary = show.summary?.replace(/<[^>]+>/g, '') ?? '설명이 없습니다.';

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl flex flex-col md:flex-row" onClick={(e) => e.stopPropagation()}>
        {/* 포스터 섹션 */}
        <img
          src={show.image?.original ?? show.image?.medium ?? 'https://via.placeholder.com/400x600?text=No+Image'}
          alt={show.name}
          className="w-full md:w-64 object-cover"
        />

        {/* 정보 섹션 */}
        <div className="p-6 flex flex-col gap-4 overflow-y-auto">
          <div className="flex items-start justify-between">
            <h2 className="text-white text-2xl font-bold">{show.name}</h2>
            <button onClick={onClose} className="text-zinc-500 hover:text-white"><X /></button>
          </div>

          <div className="flex flex-wrap gap-2">
            {show.genres?.map((g) => (
              <span key={g} className="bg-zinc-800 text-zinc-300 text-[10px] px-2 py-1 rounded-md border border-zinc-700">{g}</span>
            ))}
          </div>

          <div className="flex flex-col gap-2 text-sm text-zinc-400">
            {show.rating?.average && (
              <div className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-500" /><span>{show.rating.average} / 10</span></div>
            )}
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{show.premiered}</span></div>
            {show.network?.name && <div className="flex items-center gap-2"><Tv className="w-4 h-4" /><span>{show.network.name}</span></div>}
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed">{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;