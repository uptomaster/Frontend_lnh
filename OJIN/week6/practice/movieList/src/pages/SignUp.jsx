import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signupAPI } from "../apis/authApi";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signupAPI(email, password);

      alert("회원가입 성공!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("회원가입 실패");
    }
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-[420px] rounded-lg bg-black75 p-10">
        <h1 className="mb-6 text-3xl font-bold">회원가입</h1>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="mt-1 h-12 w-full rounded bg-blue-600 text-base font-bold"
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
