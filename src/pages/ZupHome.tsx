import Navbar from "../components/layout/Navbar/Navbar";
import Newsletter from "../components/layout/Newsletter/Newsletter";
import Hero from "./dispatch/Hero";
import Cover from "./dispatch/Cover";
import Why from "./dispatch/Why";
import Features from "./dispatch/Features";
import Tabs from "./dispatch/Tabs";
import Comparison from "./dispatch/Comparison";
import Logos from "./dispatch/Logos";
import FAQ from "./dispatch/FAQ";
import FlippingCard from '../components/FlippingCard'
import '../styles/zup.css'
import mediaLogo from '../assets/logos/logo_zup_media.png'
import dispatchLogo from '../assets/logos/logo_zup_dispatch.png'
import { Link } from 'react-router-dom'

export default function ZupHome() {
  return (
    <>
      <Navbar />
      <Hero />
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
      <Cover />
      <Why />
      <Features />
      <Tabs />
      <Comparison />
      <Logos />
      <FAQ />
      <Newsletter />
    </>
  );
}