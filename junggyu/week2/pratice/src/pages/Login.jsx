const Login = () => {
  return (
    <main className="p-10">
      <section className="">
        <h1 className="text-3xl font-bold">로그인 하세요</h1>

        <div className="mt-8 flex gap-5">
          <input
            type="text"
            placeholder="아이디를 입력하세요"
            className="border border-gray-500 rounded-lg px-4 py-2"
          />
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            className="border border-gray-500 rounded-lg px-4 py-2"
          />
          <button className="border border-white rounded-lg px-3 py-2 hover:bg-white hover:text-black">
            로그인
          </button>
        </div>
      </section>
    </main>
  );
}


export default Login