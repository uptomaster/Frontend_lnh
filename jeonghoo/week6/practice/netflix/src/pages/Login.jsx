import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../apis/authApi";
import useAuthStore from "../stores/useAuthStore";

const Login = () => {
  const setAccessToken = useAuthStore(
    (state) => state.setAccessToken
  );

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const accessToken = await loginAPI({
        username,
        password,
      });

      setAccessToken(accessToken);

      alert("로그인 성공");

      navigate("/");
    } catch (error) {
      alert("로그인 실패");
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md rounded-lg bg-zinc-900 p-8">
        <h1 className="mb-6 text-3xl font-bold text-white">
          로그인
        </h1>

        <form
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(event) =>
              setUsername(event.target.value)
            }
            className="h-12 w-full rounded bg-zinc-800 px-4 text-white outline-none"
          />

          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            className="h-12 w-full rounded bg-zinc-800 px-4 text-white outline-none"
          />

          <button
            type="submit"
            className="h-12 w-full rounded bg-red-600 font-bold text-white"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;