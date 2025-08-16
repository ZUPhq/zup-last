// src/pages/dispatch/Home.tsx
import Navbar from "../../components/layout/Navbar/Navbar";
import Hero from "./Hero";
import Cover from "./Cover";
import Features from "./Features";
import Tabs from "./Tabs"; // This is the 'Who is ZUP! for?' section now
import Comparison from "./Comparison"; // This is the 'Awards' section now
import Logos from "./Logos";
import FAQ from "./FAQ";
// Note: The newsletter is part of the 'Tabs' (WhoIsZupFor) section in the screenshot,
// so the separate Newsletter component might not be needed on this page.

export default function DispatchHome() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cover />
      <Features />
      <Tabs />
      <Comparison />
      <Logos />
      <FAQ />
    </>
  );
}