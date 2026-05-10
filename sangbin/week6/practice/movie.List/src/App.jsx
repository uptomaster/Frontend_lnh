import { BrowserRouter, Route, Routes } from "react-router-dom"
import Mypage from "./pages/Mypage"
import NotFound from "./pages/NotFound"
import Top100 from "./pages/Top100"
import MovieList from "./pages/MovieList"
import Login from "./pages/Login"
import { Layout } from "./components/layouts/Layout"
import useAuthStore from "./stores/useAuthStore"

function App() {
  const accessToken = useAuthStore((state) => state.accessToken) // 인증 상태 관리 훅에서 accessToken 상태 가져오기

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MovieList />} />
          <Route path="login" element={<Login />} />
          <Route path="mypage" element={accessToken ? <Mypage /> : <navigate to="/login"/>} />
          <Route path="top100" element={<Top100 />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
