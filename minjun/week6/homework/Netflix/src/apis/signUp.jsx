import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 스웨거 /api/auth/signup 요청 데이터 전송
      await axios.post("http://13.209.77.164:8080/api/auth/signup", formData);
      alert("회원가입이 완료되었습니다!");
      navigate("/login");
    } catch (err) {
      // F12 -> Network 탭에서 에러 원인 분석 가능
      setError(err.response?.data?.message || "회원가입에 실패했습니다.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">회원가입</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          type="text"
          name="username"
          placeholder="이름"
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="이메일"
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white"
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white"
        />
        <button
          type="submit"
          className="w-full bg-red-600 p-2 rounded font-bold hover:bg-red-700 transition"
        >
          가입하기
        </button>
      </form>
    </div>
  );
};

export default SignUp;
