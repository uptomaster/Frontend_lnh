import React from 'react';
import MovieCard from './components/MovieCard';
import movies from './movies.json';

function App() {
  return (
    <div>
      <h1>영화 정보</h1>

      {/* map으로 데이터 호출 */}
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>
    </div>
  )
}

export default App;