import Navbar from '../../components/layout/Navbar';
import Newsletter from '../../components/layout/Footer';
import AboutHero from './about/AboutHero';
import Journey from './about/Journey';
import Team from './about/Team';

export default function DispatchAbout() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <Journey />
      <Team />
      <Newsletter />
    </>
  );
}