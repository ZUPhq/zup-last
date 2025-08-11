import { Routes, Route } from 'react-router-dom'
import ZupHome from './pages/ZupHome'
import DispatchHome from './pages/dispatch/Home'
import DispatchAbout from './pages/dispatch/About'
import DispatchTerms from './pages/dispatch/Terms'
import DispatchPrivacy from './pages/dispatch/Privacy'
import MediaComingSoon from './pages/media/ComingSoon'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ZupHome />} />
      <Route path="/dispatch" element={<DispatchHome />} />
      <Route path="/dispatch/about" element={<DispatchAbout />} />
      <Route path="/dispatch/terms" element={<DispatchTerms />} />
      <Route path="/dispatch/privacy" element={<DispatchPrivacy />} />
      <Route path="/media" element={<MediaComingSoon />} />
    </Routes>
  )
}
