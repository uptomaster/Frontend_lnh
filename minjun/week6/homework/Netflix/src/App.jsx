import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MovieList from "./pages/MovieList";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";
import Top100 from "./pages/Top100";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; // 1. 회원가입 컴포넌트 임포트
import { Layout } from "./components/layouts/Layout";
import useAuthStore from "./stores/useAuthStore";

function App() {
  const token = useAuthStore((state) => state.token);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MovieList />} />
          <Route
            path="mypage"
            element={token ? <MyPage /> : <Navigate to="/login" replace />}
          />
          <Route path="top100" element={<Top100 />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />{" "}
          {/* 2. 회원가입 경로 추가 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
