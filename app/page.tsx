"use client";
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
        {/* Hero section */}
        <HeroSection />

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
