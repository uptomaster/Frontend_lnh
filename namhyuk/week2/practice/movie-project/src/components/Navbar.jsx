import React from 'react';
// 실습 때 만들었던 노트북을 두고와서 새로만듭니다(컴포넌트 뭐있었는지 기억이 안남)

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-black tracking-tighter text-indigo-400">
          NETFLUX
        </h1>
        <ul className="flex gap-8 font-medium">
          <li className="hover:text-indigo-400 cursor-pointer transition">Home</li>
          <li className="hover:text-indigo-400 cursor-pointer transition">Movies</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;