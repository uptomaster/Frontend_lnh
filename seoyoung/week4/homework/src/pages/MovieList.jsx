import axios from 'axios';
import MovieCard from '../components/MovieCard';
import MovieData from '../data/movie.json';
import { useState } from 'react';

const MovieList = () => {
  //TV show 목록 저장
  const [shows, setShows] = useState([]);

  //검색창에 입력한 값 저장
  const [query, setQuery] = useState('');

  //검색 결과를 저장
  const [searchResult, setSearchResult] = useState([]);

  //클릭한 영화 정보를 저장
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <div className=" flex flex-row items-stretch">
      {MovieData.map((movie) => (
        <MovieCard key={movie.title} movie={movie} /> // 중요!!!
      ))}
    </div>
  );
};

export default MovieList;
