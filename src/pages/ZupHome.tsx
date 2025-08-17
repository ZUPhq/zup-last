import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from '../components/layout/Footer'; // Use the new Footer
import FlippingCard from '../components/FlippingCard';
import { Spotlight } from '../components/ui/Spotlight'; // Import the new Spotlight
import '../styles/zup.css';
import mediaLogo from '../assets/logos/logo_zup_media.png';
import dispatchLogo from '../assets/logos/logo_zup_dispatch.png';
import { cn } from '../lib/utils'; // Import the cn utility

export default function ZupHome() {
  return (
    <>
      <Navbar />
      {/* Main container for the spotlight effect */}
      <div className="relative h-screen w-full overflow-hidden bg-white flex flex-col items-center justify-center">
        
        {/* Spotlight Component */}
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="yellow" // Using a yellow spotlight to match your brand
        />
        
        {/* Your Existing Content */}
        <div className="z-10">
          <div className="zup-home">
            <h1 className="hero-title">
              We build{' '}
              <TypeAnimation
                sequence={[
                  'platforms', 1500, 'brands', 1500, 'experiences', 1500,
                  'stories', 1500, 'interfaces', 1500, 'tools', 1500,
                  'campaigns', 1500, 'products', 1500,
                ]}
                wrapper="span"
                speed={50}
                className="changing-word"
                repeat={Infinity}
              />{' '}
              that matter.
            </h1>
            <div className="card-container">
              <Link to="/media" className="card-link">
                <FlippingCard
                  front={<img src={mediaLogo} alt="ZUP! MEDIA" />}
                  back={<span>Marketing that converts. For brands that matter.</span>}
                  direction="left"
                />
              </Link>
              <Link to="/dispatch" className="card-link">
                <FlippingCard
                  front={<img src={dispatchLogo} alt="ZUP! DISPATCH" />}
                  back={<span>One app. All taxis. Across Romania.</span>}
                  direction="right"
                />
              </Link>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}