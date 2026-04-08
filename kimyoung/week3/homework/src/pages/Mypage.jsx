import movieData from '../data/myMovie.json';

import MovieCard from '../components/layouts/MovieCard';

const Mypage = () => {
  return (
    <main className="p-10 grid grid-cols-4 gap-5">
      {movieData.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </main>
  );
};

export default Mypage;
