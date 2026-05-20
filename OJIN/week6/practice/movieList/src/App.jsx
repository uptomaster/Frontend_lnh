import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Mypage from "./pages/MyPage";
import NotFound from "./pages/NotFound";
import Top100 from "./pages/Top100";
import MovieList from "./pages/MovieList";
import Login from "./pages/Login";
import Layout from "./components/layouts/Layout";
import useAuthStore from "./stores/useAuthStore";
import SignUp from "./pages/SignUp";

function App() {
  const accessToken = useAuthStore((state) => state.accessToken); // zustand 스토어에서 accessToken 상태 가져오기

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MovieList />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route
            path="mypage"
            element={
              accessToken ? <Mypage /> : <Navigate to="/login" replace />
            }
          />
          <Route path="top100" element={<Top100 />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
