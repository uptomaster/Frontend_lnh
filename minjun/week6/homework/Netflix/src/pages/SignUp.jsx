import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://13.209.77.164:8080/api/auth/signup", {
        email: username,
        password: password,
      });

      alert("회원가입 성공");
      navigate("/login");
    } catch (error) {
      console.error("회원가입 실패:", error);
      alert(
        "회원가입에 실패했습니다. 이미 존재하는 이메일이거나 서버 오류입니다.",
      );
    }
  };

  return (
    <div className="min-h-screen bg[#141414] text-white flex item-center justify-center px-6">
      <div className="w-full maw-w-[420px] rounded-lg bg-black75 p-10">
        <h1 className="mb-6 text-3xl font-bold">회원가입</h1>

        <form className="space-y-3" onSubmit={handleSubmit}>
          {/* 아이디 입력 필드 */}
          <input
            id={username}
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          {/* 비밀번호 입력 필드 */}
          <input
            id={password}
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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

export default Signup;
