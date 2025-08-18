import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import Navbar from "../components/layout/Navbar";
import Footer from '../components/layout/Footer';
import FlippingCard from '../components/FlippingCard';
import { Spotlight } from '../components/ui/Spotlight';
import '../styles/zup.css';
import mediaLogo from '../assets/logos/logo_zup_media.png';
import dispatchLogo from '../assets/logos/logo_zup_dispatch.png';

export default function ZupHome() {
  return (
    // The main container now uses a dark background and flexbox for centering
    <div className="zup-home-conatiner">
      <Navbar />
      
      {/* Spotlight container */}
      <div className="zup-home">
        
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white" // White spotlight looks better on a dark background
        />
        
        <div className="z-10">
          <div className="zup-home">
            <h1 className="hero-title text-white"> {/* Added text-white */}
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
    </div>
  );
}