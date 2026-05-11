import { useState } from 'react' // 1행 오타 수정됨!
import { useNavigate } from 'react-router-dom'
import { loginAPI } from '../apis/authApi'
import useAuthStore from '../stores/useAuthStore'

const Login = () => {
    const setAccessToken = useAuthStore((state) => state.setAccessToken)
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // [수정] authApi의 인자 형식과 일치시켰습니다.
            const accessToken = await loginAPI(username, password);

            if (accessToken) {
                setAccessToken(accessToken);
                alert("로그인 성공!");
                console.log("발급된 토큰:", accessToken);
                navigate('/');
            }
        } catch (error) {
            alert("로그인 실패: 아이디 또는 비밀번호를 확인하세요.");
        }
    }

    return (
        <div className='min-h-screen bg-[#141414] text-white flex items-center justify-center px-6'>
            {/* bg-black/75 등 Tailwind 표준 문법으로 수정 */}
            <div className ='w-full max-w-[420px] rounded-lg bg-black/75 p-10'>
                <h1 className="mb-6 text-3xl font-bold">로그인</h1>

                <form className = "space-y-3" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="아이디" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 bg-[#333] rounded outline-none"
                    />
                    <input 
                        type="password" 
                        placeholder="비밀번호" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 bg-[#333] rounded outline-none"
                    />

                    <button type="submit" className="mt-4 h-12 w-full rounded bg-red-600 text-base font-bold">
                        로그인
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login