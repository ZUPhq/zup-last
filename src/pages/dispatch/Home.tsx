import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
// FIX: Corrected paths to point to the "./home/" subdirectory
import Hero from "./home/Hero";
import Cover from "./home/Cover";
import Features from "./home/Features";
import Tabs from "./home/Tabs";
import Comparison from "./home/Comparison";
import Logos from "./home/Logos";
import FAQ from "./home/FAQ";
import Why from "./home/Why";


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
      <Footer />
    </>
  );
}