const Login = () => {
  return (
    <main className="text-center p-4 flex flex-col items-center bg-gray-800 m-4 rounded">
      <h2 className="text-xl font-bold bg-gray-800">LOGIN</h2>
      <input
        type="email"
        placeholder="이메일"
        className="m-4 bg-gray-500 rounded border-gray-600 border-2"
      />
      <input
        type="password"
        placeholder="비밀번호"
        className="m-4 bg-gray-500 rounded border-gray-600 border-2"
      />
      <button className="w-20 bg-black rounded">로그인</button>
    </main>
  );
};

export default Login;
