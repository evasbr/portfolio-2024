import Link from "next/link";
import Button from "./button";
import { FaArrowRightLong } from "react-icons/fa6";
import "../scroll-animation.css";

type LastExperience = {
  title: string;
  place: string;
  description: string;
};

const lastExperienceData: LastExperience[] = [
  {
    title: "Backend Lead in PIM",
    place: "KSM Android UPNVJ (March 2025 - now)",
    description:
      "Led the backend development of a web-based activity points management system for a 150-member student organization.",
  },
  {
    title: "Lead developer and CEO of Tipme! ",
    place: "Tipme! - UPNVJ (Jan 2025 -now)",
    description:
      "Led fullstack development of food and drink delivery business around campus. Successfully build web for consumer, admin, and courier.",
  },
  {
    title: "Product Academic Manager",
    place: "KSM Android - UPNVJ (Jan 2025 -now)",
    description:
      "Responsible of maintaining sylabus in KSM Android UPNVJ, including Study Club, competition preparation, and application development.",
  },
];

export default function StorySection() {
  return (
    <section className="p-5 flex flex-col items-center">
      <div className="lg:max-w-4xl lg:mx-auto">
        <h2 className="font-serif autoShow  text-3xl lg:text-5xl text-center mb-10 md:mb-20">
          My Story
        </h2>
        <p className="text-xl autoShow mb-4">
          <span className="font-semibold text-amber-300">
            Hi! I’m Eva Sabrina👋{" "}
          </span>{" "}
          — mainly a Backend Developer, overall a all-around tech enthusiast.
          I’m at my third year of studying Computer Science in UPN “Veteran”
          Jakarta, Indonesia.
        </p>
        <p className="text-xl autoShow">
          While I primarily focus on{" "}
          <span className="text-amber-300">backend development</span>, I also
          love exploring other fields — some of which I’m quite confident in,
          like{" "}
          <span className="text-amber-300">
            frontend web, UI/UX design, and even machine learning
          </span>
          . It&apos;s always exciting to learn something new!
        </p>

        <p className="autoShow text-2xl font-semibold mb-4 mt-8">
          Last Experience
        </p>
        <div className="timeline autoShow relative">
          {lastExperienceData.map((item: LastExperience, index) => {
            return (
              <div className="container mb-5" key={index}>
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="text-amber-300 mb-1">{item.place}</p>
                <p className="text-sm ">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Link href="/about" className="autoShow mt-10">
        <Button size="small">
          More about me <FaArrowRightLong size={20} />
        </Button>
      </Link>
    </section>
  );
}
