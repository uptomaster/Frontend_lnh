import { saveContentAPI } from "../apis/authApi";
import useAuthStore from "../stores/useAuthStore";

const MovieCard = ({ show }) => {
  const accessToken = useAuthStore((state)=> state.accessToken);
  const handleSave = async (e) => {
    e.stopPropagation()
    try {
      await saveContentAPI(accessToken, show)
      alert("저장 완료")
    } catch (error) {
      alert("저장 실패")
    }
  }

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg w-full">
      <img
        src={
          show.image?.medium ||
          "https://via.placeholder.com/210x295?text=No+Image"
        }
        alt={show.name}
        className="w-full aspect-[2/3] object-cover p-2 rounded-2xl"
      />

      <div className="p-2">
        {/* 제목 */}
        <p className="text-white font-semibold truncate">
          {show.name}
        </p>

        {/* 장르 */}
        <p className="text-gray-400 text-xs mt-1 truncate">
          {show.genres?.join(", ")}
        </p>

        {/* 날짜 */}
        <p className="text-gray-400 text-xs mt-1">
          📅 {show.premiered || "정보 없음"}
        </p>

        {/* 저장 버튼 */}
        {accessToken && (
          <button onClick={handleSave} className="mt-2 w-full rounded bg-gray-600 cursor-pointer py-1 text-sm text-white">
            저장
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;