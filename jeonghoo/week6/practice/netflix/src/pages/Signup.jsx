import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupAPI } from '../apis/authApi';

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signupAPI({
        email,
        password,
      });

      alert('회원가입 성공');

      navigate('/login');
    } catch (error) {
      alert('회원가입 실패');
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md rounded-lg bg-zinc-900 p-8">
        <h1 className="mb-6 text-3xl font-bold text-white">
          회원가입
        </h1>

        <form
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
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
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;