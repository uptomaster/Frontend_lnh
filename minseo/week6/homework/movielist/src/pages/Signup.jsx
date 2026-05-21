// src/pages/Signup.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupAPI } from '../apis/authApi';

const Signup = () => {
  const navigate = useNavigate();
  
  // [팩트체크 완료] 회원가입은 email과 password 딱 2개만 요구합니다.
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signupAPI(formData);
      alert("회원가입이 완료되었습니다! 로그인해 주세요.");
      navigate('/login');
    } catch (error) {
      alert("회원가입에 실패했습니다. 양식을 확인해주세요.");
    }
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-[420px] rounded-lg bg-black/75 p-10">
        <h1 className="mb-6 text-3xl font-bold">회원가입</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* 아이디 역할을 하는 이메일 입력칸 */}
          <input type="email" placeholder="이메일 주소" required
            value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3 bg-[#333] rounded outline-none text-white text-sm" />
          
          {/* 비밀번호 입력칸 */}
          <input type="password" placeholder="비밀번호" required
            value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full p-3 bg-[#333] rounded outline-none text-white text-sm" />

          <button type="submit" className="mt-4 h-12 w-full rounded bg-red-600 text-base font-bold hover:bg-red-700 transition">
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;