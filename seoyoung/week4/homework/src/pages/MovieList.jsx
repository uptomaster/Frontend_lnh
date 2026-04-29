import axios from 'axios';
import MovieCard from '../components/MovieCard';
import MovieData from '../data/movie.json';
import { useState, useEffect } from 'react';
import useRecentShows from '../hooks/useRecentShow';

const MovieList = () => {
  //TV show 목록 저장
  const [shows, setShows] = useState([]);

  //검색창에 입력한 값 저장
  const [query, setQuery] = useState('');

  //검색 결과를 저장
  const [searchResult, setSearchResult] = useState([]);

  //클릭한 영화 정보를 저장
  const [selectedShow, setSelectedShow] = useState(null);

  //최근 본 영화 추가해주는 함수
  const { addshow } = useRecentShows();

  //처음 페이지가 열릴 때, 전체 show의 목록들을 가져와야됨
  useEffect(() => {
    //요청을 취소하기위한 컨트롤러
    const controller = new AbortController();

    axios
      //서버에서 영화를 가져와서, {기존요청 취소해주는 컨트롤러}
      .get('http://api.tvmaze.com/shows', { signal: controller.signal })
      //요청이 성공하면 res : 서버의 응답 res.data : 실제 서버가 보내준 데이터 <- res.data를 shows에 저장
      .then((res) => setShows(res.data))
      //실패하면 실행
      .catch(() => []);

    //컴포넌트가 사라지면 요청 취소
    return () => controller.abort();
  });

  return (
    <div className=" flex flex-row items-stretch">
      {MovieData.map((movie) => (
        <MovieCard key={movie.title} movie={movie} /> // 중요!!!
      ))}
    </div>
  );
};

export default MovieList;
