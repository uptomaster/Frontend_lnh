import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI } from '../apis/authApi';
import useAuthStore from '../stores/useAuthStore';

const Login = () => {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const accessToken = await loginAPI({ username, password });
      setAccessToken(accessToken);

      alert('로그인 성공');
      navigate('/');
    } catch (error) {
      console.error('로그인 에러:', error);
      alert('로그인에 실패했습니다. 아이디나 비밀번호를 확인하세요.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-[420px] rounded-lg bg-gray-900 p-10">
        <h1 className="mb-6 text-3xl font-bold">로그인</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            className="w-full rounded bg-black border border-gray-700 px-4 py-3 text-white outline-none focus:border-red-600"
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="w-full rounded bg-black border border-gray-700 px-4 py-3 text-white outline-none focus:border-red-600"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="h-12 w-full rounded bg-red-600 text-base font-bold hover:bg-red-700 transition"
          >
            로그인
          </button>
        </form>

        <p className="mt-5 text-sm text-gray-400">
          계정이 없나요?{' '}
          <Link to="/signup" className="text-white">
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
