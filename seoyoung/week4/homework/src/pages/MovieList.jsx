import axios from 'axios';
import MovieCard from '../components/MovieCard';
import MovieData from '../data/movie.json';
import { useState, useEffect, useMemo } from 'react';
import useRecentShows from '../hooks/useRecentShow';
import SearchBar from '../components/SearchBar';

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
  }, []); //처음 한번만 실행되도록

  //검색어 앞 뒤 공백 제거
  const trimmedQuery = query.trim();

  //검색어가 바뀔 때 마다 검색 API를 호출하기
  useEffect(() => {
    //검색어가 없으면, 검색 결과를 초기화하기
    if (!trimmedQuery) {
      setSearchResult([]);
      return;
    }

    const controller = new AbortController();
    //0.4초 기다렸다가 검색을 실행해서 타이핑할때마다 요청을 보내지는 않도록 설정
    const timer = setTimeout(() => {
      axios
        //trimmedQuery 관련 show를 찾아달라
        .get(`https://api.tvmaze.com/search/shows?q=${trimmedQuery}`, {
          signal: controller.signal,
        })
        //성공하면 show를 줘라
        .then((res) => setSearchResult(res.data.map((item) => item.show)))
        .catch(() => {});
    }, 400);

    //검색어가 바뀌면 이전 타이머로 다시 재고 + 이전 요청 취소하기
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [trimmedQuery]);
  //검색어가 바뀔때마다 useEffect 재실행됨

  //앞 0~4번째까지
  const featured = useMemo(() => shows.slice(0, 4), [shows]);
  //뒤 5~20번째까지 보여주기
  const grid = useMemo(() => shows.slice(4, 20), [shows]);

  //MovieCard 클릭 시 실행하는 함수
  const handleCardClick = (show) => {
    //최근 본 영화에 추가
    addshow(show);

    //선택된 영화 저장
    setSelectedShow(show);
  };

  return (
    <div className=" flex flex-row items-stretch">
      <SearchBar />
      {MovieData.map((movie) => (
        <MovieCard key={movie.title} movie={movie} /> // 중요!!!
      ))}
    </div>
  );
};

export default MovieList;
