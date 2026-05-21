import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginApi } from "../apis/authApi";
import useAuthStore from "../stores/useAuthStore";

const Login = () => {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const accessToken = await loginApi({ username, password });
    setAccessToken(accessToken);

    alert("로그인 성공");
    console.log("발급된 토큰 : ", accessToken);

    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen bg[#141414] text-white flex item-center justify-center px-6">
      <div className="w-full maw-w-[420px] rounded-lg bg-black75 p-10">
        <h1 className="mb-6 text-3xl font-bold">로그인</h1>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            id={username}
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            id={username}
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button
            type="submit"
            className="mt-1 h-12 w-full rounded bg-blue-600 text-base font-bold"
          >
            로그인
          </button>
        </form>

        <div className="mt-4 text-sm text-gray-400">
          회원이 아니신가요?{" "}
          <Link to="/signup" className="text-white underline">
            가입하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
