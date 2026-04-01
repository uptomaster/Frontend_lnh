import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onClickbutton = () => {
    console.log(`이메일 : ${email} 비밀번호 : ${password}`);
  };

  return (
    <div className="text-center p-4 flex flex-col items-center bg-gray-800 m-4 rounded">
      <h2 className="text-xl font-bold bg-gray-800">LOGIN</h2>
      <input
        type="email"
        placeholder="이메일"
        className="m-4 bg-gray-500 rounded border-gray-600 border-2"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="비밀번호"
        className="m-4 bg-gray-500 rounded border-gray-600 border-2"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={onClickbutton} className="w-20 bg-black rounded">
        로그인
      </button>
    </div>
  );
};

export default Login;
