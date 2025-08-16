import { NavLink, Routes, Route } from 'react-router-dom'
import ZupHome from './pages/ZupHome'
import DispatchHome from './pages/dispatch/Home'
import DispatchAbout from './pages/dispatch/About'
import DispatchPrivacy from './pages/dispatch/Privacy'
import MediaComingSoon from './pages/media/ComingSoon'

export default function App() {
  // mic helper ca să stilizăm linkul activ din meniu
  const linkStyle = ({ isActive }: { isActive: boolean }): React.CSSProperties => ({
    textDecoration: 'none',
    padding: '8px 12px',
    borderRadius: 8,
    color: isActive ? '#0b0b10' : '#222',
    background: isActive ? '#6ee7b7' : 'transparent',
    border: '1px solid #e8e8e8'
  })

  return (
    <>
      <header style={{display:'flex', alignItems:'center', gap:12, padding:16, borderBottom:'1px solid #eee', flexWrap:'wrap'}}>
        <strong style={{marginRight:8}}>ZUP!</strong>
        <nav style={{display:'flex', gap:8}}>
          <NavLink to="/" style={linkStyle} end>Acasă</NavLink>
          <NavLink to="/dispatch" style={linkStyle}>Dispatch</NavLink>
          <NavLink to="/dispatch/about" style={linkStyle}>Despre</NavLink>
          <NavLink to="/dispatch/terms" style={linkStyle}>Termeni</NavLink>
          <NavLink to="/dispatch/privacy" style={linkStyle}>Confidențialitate</NavLink>
          <NavLink to="/media" style={linkStyle}>Media</NavLink>
        </nav>
      </header>

      <main style={{minHeight:'calc(100vh - 70px)'}}>
        <Routes>
          <Route path="/" element={<ZupHome />} />
          <Route path="/dispatch" element={<DispatchHome />} />
          <Route path="/dispatch/about" element={<DispatchAbout />} />
          <Route path="/dispatch/privacy" element={<DispatchPrivacy />} />
          <Route path="/media" element={<MediaComingSoon />} />
          {/* fallback: dacă intri pe o rută greșită, te ducem „acasă” */}
          <Route path="*" element={<ZupHome />} />
        </Routes>
      </main>

      <footer style={{padding:16, borderTop:'1px solid #eee', fontSize:12, color:'#666', textAlign:'center'}}>
        © {new Date().getFullYear()} ZUP!
      </footer>
    </>
  )
}
