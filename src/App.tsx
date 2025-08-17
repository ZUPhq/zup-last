import { Routes, Route } from 'react-router-dom';
import AnimatedBackground from './components/layout/AnimatedBackground'; // Import the new component
import DispatchHome from './pages/dispatch/Home';
import DispatchAbout from './pages/dispatch/About';
import DispatchPrivacy from './pages/dispatch/Privacy';
import MediaComingSoon from './pages/media/ComingSoon';
import ZupHome from './pages/ZupHome';

export default function App() {
  return (
    <>
      <AnimatedBackground /> {/* Add the component here */}
      <main>
        <Routes>
          <Route path="/" element={<ZupHome />} />
          <Route path="/dispatch" element={<DispatchHome />} />
          <Route path="/dispatch/about" element={<DispatchAbout />} />
          <Route path="/dispatch/privacy" element={<DispatchPrivacy />} />
          <Route path="/media" element={<MediaComingSoon />} />
          <Route path="*" element={<ZupHome />} />
        </Routes>
      </main>
    </>
  );
}