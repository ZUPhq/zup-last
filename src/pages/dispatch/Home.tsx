import Navbar from "../../components/layout/Navbar/Navbar";
import Newsletter from "../../components/layout/Newsletter/Newsletter";


import Hero from "./Hero";
import Cover from "./Cover";
import Why from "./Why";
import Features from "./Features";
import Tabs from "./Tabs";
import Comparison from "./Comparison";
import Logos from "./Logos";
import FAQ from "./FAQ";

export default function DispatchHome() {
  return (
    <>
      <Navbar />
      <Hero />
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
