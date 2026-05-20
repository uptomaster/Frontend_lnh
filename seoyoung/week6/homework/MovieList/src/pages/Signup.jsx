import { useState } from 'react'; //리액트 상태 훅
import { useNavigate } from 'react-router-dom'; //페이지 이동(로그인 성공 시 홈화면으로 넘어가도록)
import { signupAPI } from '../apis/authApi'; //로그인 API 함수
import useAuthStore from '../stores/useAuthStore'; //zustand 인증 상태 관리 스토어

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkpassword, setCheckPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); //폼 제출 기본 동작인 페이지 새로고침을 방지함

    if (password !== checkpassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return; // 함수를 여기서 종료하여 API가 실행되지 않게 막음
    }
    try {
      await signupAPI({ email, password });

      alert('회원가입 성공');

      navigate('/Login'); //로그인 성공 후 홈페이지로 이동
    } catch (error) {
      // API 내부에서 throw 한 에러 메시지 출력
      alert(error.message || '회원가입에 실패했습니다.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
s    type="email"
          placeholder="email"
          className="w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="비밀번호"
          className="w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="비밀번호"
          className="w-full"
          value={checkpassword}
          onChange={(e) => setCheckPassword(e.target.value)}
        ></input>
        {checkpassword === password ? (
          <div>비밀번호가 일치합니다</div>
        ) : (
          <div className="text-red">비밀번호가 일치하지 않습니다</div>
        )}
        <button
          type="submit"
          className="mt-1 h-12 w-full rounded bg-blue-600 text-base font-bold text-white"
        >
          회원가입 하기
        </button>
      </form>
    </div>
  );
};

export default Signup;
