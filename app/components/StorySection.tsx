import Link from "next/link";
import Button from "./button";
import { FaArrowRightLong } from "react-icons/fa6";

type SkillData = {
  title: string;
  content: string;
};

const skillsData: SkillData[] = [
  {
    title: "Programming Language",
    content: "Javascript, C, C++, Java, Python, Golang",
  },
  {
    title: "Frontend skills (beginner to intermediate)",
    content: "HTML, CSS, ReactJS (NextJS), Tailwind, Bootstrap",
  },
  {
    title: "Backend skills (intermediate)",
    content: "ExpressJS, Hapi, PostgreSQL, MongoDB, MySQL, Docker, Kubernetes",
  },
];

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
    <section className="p-4 flex flex-col items-center">
      <div className="lg:max-w-5xl lg:mx-auto">
        <h2 className="font-serif text-5xl text-center mb-20">My Story</h2>

        <p className="text-xl mb-4">
          <span className="font-semibold text-amber-300">
            Hi! I’m Eva Sabrina👋{" "}
          </span>{" "}
          — mainly a Backend Developer, overall a all-around tech enthusiast.
        </p>
        <p className="text-xl mb-4">
          I’m at my second year of studying Computer Science in UPN “Veteran”
          Jakarta, Indonesia.
        </p>
        <p className="text-xl mb-4">
          I&apos;ve always enjoyed creating things, but I was never really into
          physics or math, and I didn’t feel particularly talented in
          traditional art. That’s why discovering software development felt like
          finding my sweet spot — it&apos;s now my comfort zone, my hobby, and
          my greatest passion.
        </p>
        <p className="text-xl mb-4">
          While I primarily focus on{" "}
          <span className="text-amber-300">backend development</span>, I also
          love exploring other fields — some of which I’m quite confident in,
          like{" "}
          <span className="text-amber-300">
            frontend web, UI/UX design, and even machine learning
          </span>
          . I’m always excited to learn something new!
        </p>
        <p className="text-xl mb-4">
          This website is one of my proudest creations of design and frontend
          development so far. Hopefully I can impress you 😊
        </p>

        <div className="glass-effect p-5 rounded-3xl mb-10 mt-10 lg:flex">
          {skillsData.map((item: SkillData, index) => {
            return (
              <div className="mb-4 lg:flex-1" key={index}>
                <p className="font-serif text-2xl font-bold">{item.title}</p>
                <p className="mt-0.5 lg:mt-4">{item.content}</p>
              </div>
            );
          })}
        </div>

        <p className="font-serif text-2xl mb-4">Last Experience</p>
        <div className="timeline relative">
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
      <Link href="/about" className="mt-10">
        <Button size="small">
          More about me <FaArrowRightLong size={20} />
        </Button>
      </Link>
    </section>
  );
}
