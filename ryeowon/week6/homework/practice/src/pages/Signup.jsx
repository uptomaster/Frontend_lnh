import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signupAPI } from "../apis/authApi";

const Signup = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();

      const message = await signupAPI(email, password);

      alert(message);
      navigate('/login')
    }

  return (
    <div className="min-h-screen text-white flex items-center justify-center">
      <div className="w-full max-w-[420px] rounded-lg bg-black75 p-10">
        <h1 className="mb-6 text-3xl font-bold block text-center pb-[15px]">Sign up</h1>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="이메일"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="border-gray-500"
          ></input>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="border-gray-500"
          ></input>

          <button
            type="submit"
            className="mt-1 h-12 w-full rounded bg-blue-800 text-base font-bold cursor-pointer shadow-inner"
          >
            회원 가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
