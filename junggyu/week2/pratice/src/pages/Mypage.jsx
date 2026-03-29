const favoriteMovies = [
  "영웅본색",
  "중경삼림",
  "엘리멘탈",
];

const favoriteDramas = [
  "Breaking Bad",
  "Friends",
  "White Collar",
];

const Mypage = () => {
  return (
    <main className="text-white p-10">
      <section className="flex flex-col gap-2">
        <img
            src="/src/assets/profile.png"
            alt="프로필 이미지"
            className="w-28 h-28 rounded-2xl"
        />
        
        <h1 className="text-xl font-semibold text-center w-28">안정규</h1>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">찜한 영화</h2>
        <div className="mt-3 flex flex-row gap-5">
          {favoriteMovies.map((movie, index) => (
            <p key={index} className="favorite-item">
              {movie}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">찜한 드라마</h2>
        <div className="mt-3 flex flex-row gap-5">
          {favoriteDramas.map((drama, index) => (
            <p key={index} className="favorite-item">
              {drama}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}


export default Mypage