import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Mypage from './pages/MyPages';
import NotFound from './pages/NotFound';
import Top100 from './pages/Top100';
import MovieList from './pages/MovieList';
import { Layout } from './components/layouts/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MovieList />} />
          <Route path="/Mypages" element={<Mypage />} />
          <Route path="/Top100" element={<Top100 />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//return <div className="text-red-400 hover:text-red-600">app</div>;
//속성(text=글자색상)-색상계열-밝기(500이 기본)
