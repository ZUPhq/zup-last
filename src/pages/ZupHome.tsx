import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import Navbar from "../components/layout/Navbar";
import Footer from '../components/layout/Footer';
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card"; // Import the new components
import '../styles/zup.css';
import mediaLogo from '../assets/logos/logo_zup_media.png';
import dispatchLogo from '../assets/logos/logo_zup_dispatch.png';

export default function ZupHome() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col">
      <Navbar />

      <div className="flex-grow w-full flex flex-col items-center justify-center relative">
        <div className="z-10 p-4 text-center">
          <h1 className="hero-title text-white">
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

          {/* New 3D Card Implementation */}
          <div className="card-container">
            <Link to="/media">
              <CardContainer>
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                    ZUP! Media
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Marketing that converts. For brands that matter.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={mediaLogo}
                      className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                      alt="ZUP! Media Logo"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </Link>

            <Link to="/dispatch">
              <CardContainer>
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                    ZUP! Dispatch
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    One app. All taxis. Across Romania.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={dispatchLogo}
                      className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                      alt="ZUP! Dispatch Logo"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}