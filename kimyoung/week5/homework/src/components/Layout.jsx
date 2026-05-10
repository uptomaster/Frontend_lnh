function Layout({ children }) {
  return (
    <div className="page">
      <header className="navbar">
        <div className="logo">airbnb</div>

        <a href="#">당신의 공간을 에어비앤비하세요</a>
      </header>

      {children}
    </div>
  );
}

export default Layout;
