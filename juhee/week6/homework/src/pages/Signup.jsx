import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupAPI } from "../apis/authApi";

const Signup = ()=> {
    const navigate = useNavigate();
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = async (e) =>{
        e.preventDefaule();
        await signupAPI({email,password});

        alert("회원가입 성공 !!");
        navigate("/login");
    }

    return (
        <div className="min-h-screen bg-[#141414] text-white flex items-center justify-center">
            <div className="w-full max-w-[420px] rounded-lg bg-black p-10">
                <h1 className="mb-6 text-center text-3xl font-bold">회원가입</h1>

                <form className="space-y-3" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="이메일"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-12 rounded bg-[#333] px-4 text-white"
                    />
                    <input
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full h-12 rounded bg-[#333] px-4 text-white"
                    />

                    <button type="submit" className="mt-1 h-12 w-full rounded bg-blue-600 text-base">
                        회원가입 하기
                    </button>
                    
                </form>
            </div>
        </div>
    )
  }
  
  export default Signup