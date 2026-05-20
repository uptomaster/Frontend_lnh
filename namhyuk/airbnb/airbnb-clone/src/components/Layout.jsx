import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="layout-root">
      <Navbar />
      <main className="container">
        {children}
      </main>
    </div>
  );
}