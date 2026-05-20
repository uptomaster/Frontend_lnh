import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginAPI } from "../apis/authApi"
import useAuthStore from "../stores/useAuthStore"

const Login = () => {
    const setAccessToken = useAuthStore((state)=> state.setAccessToken)
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault();

        const accessToken = await loginAPI({username, password});

        setAccessToken(accessToken);

        alert("로그인 성공");
        console.log("발급된 토큰:", accessToken);

        navigate('/');
    }

    return (
        <div className="min-h-screen bg[#141414] text-white flex item-center justify-center">
           <div className="w-full max-w-[420px] rounded-lg bg-black p-10">
            <h1 className="mb-6 text-3xl font-bold">로그인</h1>

            <form className="space-y-3" onSubmit={handleSubmit}>
                <input type="text" placeholder="아이디" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
                <input type="password" placeholder="비밀번호" value={password} onChange={(e)=>setPassword(e.target.value)}></input>

                <button type="submit" className="mt-1 h-12 w-full rounded bg-blue-600 text-base">로그인 하기</button>
                <button onClick={()=>navigate("/signup")} className="mt-1 h-12 w-full rounded bg-blue-600 text-base">회원가입</button>
                
            </form>
            </div> 
        </div>
    )
}

export default Login