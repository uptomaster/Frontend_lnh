import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../apis/authApi";
import useAuthStore from "../stores/useAuthStore";

const Login = () => {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const navigate = useNavigate();

  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const accessToken = await loginAPI(username, password)

    setAccessToken(accessToken);

    alert("로그인 성공");

    navigate('/');
  }

  return (
    <div className="min-h-screen text-white flex items-center justify-center">
      <div className="w-full max-w-[420px] rounded-lg bg-black75 p-10">
        <h1 className="mb-6 text-3xl font-bold">Login</h1>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input type="text" placeholder="아이디" value={username} onChange={(e)=>setusername(e.target.value)} className="border-gray-500"></input>
          <input type="password" placeholder="비밀번호" value={password} onChange={(e)=>setpassword(e.target.value)} className="border-gray-500"></input>

          <button
            type="submit"
            className="mt-1 h-12 w-full rounded bg-blue-800 text-base font-bold cursor-pointer shadow-inner"
          >
            로그인
          </button>

          <Link to="/signup" className="text-gray-700 underline block text-center pt-[15px]">
            sign up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
