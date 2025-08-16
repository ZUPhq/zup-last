// src/pages/dispatch/Home.tsx
import Navbar from "../../components/layout/Navbar/Navbar";
import Hero from "./home/Hero";
import Cover from "./home/Cover";
import Features from "./home/Features";
import Tabs from "./home/Tabs"; // This is the 'Who is ZUP! for?' section now
import Comparison from "./home/Comparison"; // This is the 'Awards' section now
import Logos from "./home/Logos";
import FAQ from "./home/FAQ";
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