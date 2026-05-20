import Navbar from './Navbar.jsx'
import './Layout.css'

// 페이지 전체 레이아웃 래퍼: 상단 Navbar + 본문 슬롯
function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

export default Layout
