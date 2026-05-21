import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../apis/authApi"; // 로그인 API 함수
import useAuthStore from "../stores/useAuthStore"; // zustand 인증 상태 관리 스토어

const Login = () => {
  const setTokens = useAuthStore((state) => state.setTokens);
  const navigate = useNavigate(); //네비게이션 훅 초기화

  const [username, setUsername] = useState(""); // 아이디 상태
  const [password, setPassword] = useState(""); // 비밀번호 상태

  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼 제출 시 기본 동작(페이지 새로고침) 방지

    const { accessToken, refreshToken } = await loginAPI(username, password); // 로그인 API 호출하여 Token 받기

    setTokens(accessToken, refreshToken); // 받은 Token을 zustand 스토어에 저장
    alert("로그인 성공!"); // 로그인 성공 알림
    console.log("발급된 토큰:", accessToken); // 발급된 토큰 콘솔에 출력
    console.log("refreshToken:", refreshToken);

    navigate("/"); // 로그인 성공 후 홈 페이지로 이동
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-[420px] rounded-lg bg-black75 p-10">
        <h1 className="mb-6 text-3xl font-bold">로그인</h1>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="mt-1 h-12 w-full rounded bg-blue-600 text-base font-bold"
          >
            로그인
          </button>
        </form>
        <Link to="/signup" className="text-white hover:underline">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default Login;
