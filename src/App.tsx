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
          {/* Set ZupHome as the main landing page */}
          <Route path="/" element={<ZupHome />} />

          {/* Keep the other routes as they are */}
          <Route path="/dispatch" element={<DispatchHome />} />
          <Route path="/dispatch/about" element={<DispatchAbout />} />
          <Route path="/dispatch/privacy" element={<DispatchPrivacy />} />
          <Route path="/media" element={<MediaComingSoon />} />
          
          {/* Fallback route can still go to ZupHome */}
          <Route path="*" element={<ZupHome />} />
        </Routes>
      </main>
    </>
  );
}