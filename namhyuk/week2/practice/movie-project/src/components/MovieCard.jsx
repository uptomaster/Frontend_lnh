import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card-item">
      {/* 1. 영화 포스터 사진 */}
      <img src={movie.poster} alt={movie.title} width="200" />

      <div className="movie-info">
        {/* 2. 영화 제목 */}
        <h3>{movie.title}</h3>

        {/* 3. 개봉일 */}
        <span>개봉일: {movie.releaseDate}</span>

        {/* 5. 감독 이름 */}
        <p>감독: {movie.director}</p>

        {/* 4. 출연진 */}
        <p>출연: {movie.cast}</p>

        {/* 6. 줄거리 */}
        <p>줄거리: {movie.plot}</p>
      </div>
    </div>
  );
};

export default MovieCard;