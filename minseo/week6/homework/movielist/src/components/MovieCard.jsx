import { saveMovieAPI } from '../apis/movieApi';
import useAuthStore from '../stores/useAuthStore';

const MovieCard = ({ show }) => {
  const token = useAuthStore((state) => state.accessToken);

  const handleSave = async (e) => {
    e.stopPropagation(); // 모달 켜짐 방지
    
    if (!token) {
      alert("로그인이 필요합니다.");
      return;
    }

    try {
      // [팩트체크 완료] 스웨거가 요구한 정확한 Request Body 구조
      const payload = {
        id: show.id,
        name: show.name,
        image: {
          medium: show.image?.medium || 'https://via.placeholder.com/210x295?text=No+Image'
        }
      };

      await saveMovieAPI(payload, token);
      alert(`"${show.name}" 콘텐츠를 찜했습니다! 🍿`);
    } catch (error) {
      alert("이미 저장된 콘텐츠이거나 통신에 실패했습니다.");
    }
  };

  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg w-full border border-zinc-800 flex flex-col justify-between h-full group relative">
      <div>
        <img
          src={show.image?.medium ?? 'https://via.placeholder.com/210x295?text=No+Image'}
          alt={show.name}
          className="w-full aspect-[2/3] object-cover"
        />
        <div className="p-2 md:p-3">
          <p className="text-white font-semibold truncate text-sm md:text-base">{show.name}</p>
          <p className="text-zinc-500 text-[10px] md:text-xs mt-1 truncate">{show.genres?.join(', ') || 'No Genres'}</p>
          <p className="text-zinc-600 text-[9px] md:text-[10px] mt-1">📅 {show.premiered || 'N/A'}</p>
        </div>
      </div>

      <div className="p-2 pt-0 md:p-3 md:pt-0 z-10 relative">
        <button
          onClick={handleSave}
          className="w-full bg-red-600 hover:bg-red-700 text-white text-xs md:text-sm font-bold py-1.5 rounded transition"
        >
          ♥ 찜하기
        </button>
      </div>
    </div>
  );
};

export default MovieCard;