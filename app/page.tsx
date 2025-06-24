"use client";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import Footer from "./components/FooterSection";
import QuoteSection from "./components/QuoteSection";
import StorySection from "./components/StorySection";
import BestProjectSection from "./components/BestProjectSection";

// interface Project {
//   _id: string;
//   title: string;
//   synopsis: string;
//   description: string;
//   image: [string];
//   tools: [string];
//   lang: [string];
//   urlToProject: string;
//   type: string;
//   createdAt: Date;
//   updatedAt: Date;
// }

export default function Home() {
  return (
    <>
      <main className="2xl:p-0 border-box flex flex-col gap-8 mx-auto ">
        <Navbar></Navbar>

        {/* Hero section */}
        <HeroSection />
        {/* <section className="h-screen relative">
          <img
            src="/stars.svg"
            alt=""
            className="absolute w-[50%] top-0 left-0"
          />
          <img
            src="/stars.svg"
            alt=""
            className="absolute w-[50%] top-0 right-0"
          />
        </section> */}

        {/* Quote section */}
        <QuoteSection />

        {/* Story Section */}
        <StorySection />

        {/* Projects Display */}
        <BestProjectSection />
      </main>
      <Footer />
    </>
  );
}
