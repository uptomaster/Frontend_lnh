import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // ✨ Link 컴포넌트 추가
import { loginAPI } from '../apis/authApi';
import useAuthStore from '../stores/useAuthStore';

const Login = () => {
    const setAccessToken = useAuthStore((state) => state.setAccessToken);
    const navigate = useNavigate();

    // [팩트체크 완료] 로그인은 username과 password를 요구합니다.
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const accessToken = await loginAPI({ username, password });
            if (accessToken) {
                setAccessToken(accessToken);
                alert("로그인 성공!");
                navigate('/');
            }
        } catch (error) {
            alert("로그인 실패: 아이디 또는 비밀번호를 확인하세요.");
        }
    };

    return (
        <div className='min-h-screen bg-[#141414] text-white flex items-center justify-center px-6'>
            <div className ='w-full max-w-[420px] rounded-lg bg-black/75 p-10'>
                <h1 className="mb-6 text-3xl font-bold">로그인</h1>

                <form className="space-y-4" onSubmit={handleSubmit}>
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

                    <button type="submit" className="mt-4 h-12 w-full rounded bg-red-600 text-base font-bold transition hover:bg-red-700">
                        로그인
                    </button>
                    
                    {/* 👇 여기가 추가된 핵심 포인트! 회원가입 페이지 이동 버튼 */}
                    <div className="mt-6 text-sm text-zinc-400 text-center">
                        Netflix 회원이 아니신가요?{' '}
                        <Link to="/signup" className="text-white hover:underline font-semibold ml-1">
                            지금 가입하세요.
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;