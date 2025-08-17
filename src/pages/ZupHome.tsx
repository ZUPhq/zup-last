import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation'; // Import the component
import Navbar from "../components/layout/Navbar/Navbar";
import Newsletter from "../components/layout/Newsletter/Newsletter";
import FlippingCard from '../components/FlippingCard';
import '../styles/zup.css';
import mediaLogo from '../assets/logos/logo_zup_media.png';
import dispatchLogo from '../assets/logos/logo_zup_dispatch.png';

export default function ZupHome() {
  return (
    <>
      <Navbar />
      <div className="zup-home">
        <h1 className="hero-title">
          We build{' '}
          <TypeAnimation
            sequence={[
              'platforms',
              1500,
              'brands',
              1500,
              'experiences',
              1500,
              'stories',
              1500,
              'interfaces',
              1500,
              'tools',
              1500,
              'campaigns',
              1500,
              'products',
              1500,
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
      <Newsletter />
    </>
  );
}