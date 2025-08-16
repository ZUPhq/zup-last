// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import DispatchHome from './pages/dispatch/Home';
import DispatchAbout from './pages/dispatch/About';
import DispatchPrivacy from './pages/dispatch/Privacy';
import MediaComingSoon from './pages/media/ComingSoon';
import ZupHome from './pages/ZupHome';

export default function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<DispatchHome />} />
          <Route path="/dispatch" element={<DispatchHome />} />
          <Route path="/dispatch/about" element={<DispatchAbout />} />
          <Route path="/dispatch/privacy" element={<DispatchPrivacy />} />
          <Route path="/media" element={<MediaComingSoon />} />
          <Route path="/home-original" element={<ZupHome />} />
          {/* fallback: if you enter a wrong route, we take you "home" */}
          <Route path="*" element={<DispatchHome />} />
        </Routes>
      </main>
    </>
  );
}