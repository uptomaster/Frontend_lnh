import { useState } from 'react'; //리액트 상태 훅
import { useNavigate } from 'react-router-dom'; //페이지 이동(로그인 성공 시 홈화면으로 넘어가도록)
import { loginAPI } from '../apis/authApi'; //로그인 API 함수
import useAuthStore from '../stores/useAuthStore'; //zustand 인증 상태 관리 스토어

const Login = () => {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); //폼 제출 기본 동작인 페이지 새로고침을 방지함

    const accessToken = await loginAPI({ username, password });

    setAccessToken(accessToken); //토큰 저장

    alert('로그인 성공'); //확인용
    console.log('발급된 토큰 ,', accessToken);

    navigate('/'); //로그인 성공 후 홈페이지로 이동
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-[420px] rounded-lg bg-black/75 p-10">
        <h1 className="mb-6 text-3xl font-bold">로그인</h1>
        {/*로그인 폼 */}
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="아이디"
            className="w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="비밀번호"
            className="w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            type="submit"
            className="mt-1 h-12 w-full rounded bg-blue-600 text-base font-bold text-white"
          >
            로그인 하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
