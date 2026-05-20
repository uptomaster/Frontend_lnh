import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupAPI } from '../apis/authApi';

const Signup = () => {
  const navigate = useNavigate();
  // 스웨거 요구사항: username, password, email, nickname
  const [formData, setFormData] = useState({ username: '', password: '', email: '', nickname: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signupAPI(formData);
      alert("회원가입이 완료되었습니다! 로그인해 주세요.");
      navigate('/login');
    } catch (error) {
      alert("회원가입에 실패했습니다.");
    }
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-[420px] rounded-lg bg-black/75 p-10">
        <h1 className="mb-6 text-3xl font-bold">회원가입</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="text" placeholder="아이디" required
            value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="w-full p-3 bg-[#333] rounded outline-none text-white text-sm" />
          <input type="password" placeholder="비밀번호" required
            value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full p-3 bg-[#333] rounded outline-none text-white text-sm" />
          <input type="email" placeholder="이메일 주소" required
            value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3 bg-[#333] rounded outline-none text-white text-sm" />
          <input type="text" placeholder="닉네임" required
            value={formData.nickname} onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
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