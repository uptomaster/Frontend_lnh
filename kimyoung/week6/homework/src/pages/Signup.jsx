import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signupAPI } from '../apis/authApi';

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signupAPI({ email, password });
      alert('회원가입 성공');
      navigate('/login');
    } catch (error) {
      console.error('회원가입 에러:', error);
      alert('회원가입에 실패했습니다.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-[420px] rounded-lg bg-gray-900 p-10">
        <h1 className="mb-6 text-3xl font-bold">회원가입</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            className="w-full rounded bg-black border border-gray-700 px-4 py-3 text-white outline-none focus:border-red-600"
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            회원가입
          </button>
        </form>

        <p className="mt-5 text-sm text-gray-400">
          이미 계정이 있나요?{' '}
          <Link to="/login" className="text-white underline">
            로그인
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
