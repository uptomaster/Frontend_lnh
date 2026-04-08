import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ movie, onOpenModal }) => {
  const { movieImage, releaseDate, actor, title, director, description } =
    movie;

  return (
    <section
      onClick={() => onOpenModal(movie)}
      className="w-full bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
    >
      <img
        src={movieImage}
        alt={`${title} 영화 포스터`}
        className="w-full h-[380px] object-cover rounded mb-4"
      />
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <hr className="my-4 border-gray-500" />
      <p className="text-gray-200 mt-1">🎭 주연배우: {actor}</p>
      <p className="text-gray-200 mt-1">🎬 감독: {director}</p>
      {}
      <p className="text-gray-200 mt-1 leading-7 line-clamp-2">
        📝 설명: {description}
      </p>
      <p className="text-gray-400 text-sm mt-3">📅 개봉일: {releaseDate}</p>
    </section>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    movieImage: PropTypes.string,
    releaseDate: PropTypes.string,
    actor: PropTypes.string,
    title: PropTypes.string,
    director: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default MovieCard;
