/* eslint-disable @next/next/no-img-element */
"use client";

import Button from "../components/button";
import Navbar from "../components/navbar";
import Footer from "../components/FooterSection";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Tech, techData } from "../assets/projects";
import "../scroll-animation.css";

type Role =
  | "All round"
  | "Backend"
  | "Frontend"
  | "Data Science"
  | "UI/UX Design";

type SkillData = {
  title: string;
  content: string[];
  longContent: string[];
};

const skillsData: SkillData[] = [
  {
    title: "Frontend skills",
    content: [
      "HTML",
      "CSS",
      "ReactJS (NextJS)",
      "Tailwind",
      "Android (java)",
      "JavaFX",
    ],
    longContent: [
      "Developing static landing page that personalize by user's need",
      "Developing a commercial website with payment gateway",
    ],
  },
  {
    title: "Backend skills",
    content: [
      "REST API",
      "ExpressJS",
      "Database(PostgreSQL, MongoDB, MySQL)",
      "Docker",
      "Kubernetes",
      "Cloudinary",
    ],
    longContent: [
      "Developing REST API Backend from beginning to deployment",
      "Using Docker and Kubernetes to simulate a Micro services",
      "Integrating payment gateway",
      "Authentication and Authorization",
      "File handling and cloud uploading",
    ],
  },
  {
    title: "UI/UX Design",
    content: ["Design Thinking", "Design System", "Figma", "Canva"],
    longContent: [
      "Build more than 3 UI/UX Projects from scratch",
      "Design a user interface in various screen size",
    ],
  },
  {
    title: "Data Science",
    content: ["Python", "Classification", "Random Forest", "Steramlit"],
    longContent: [
      "Make a GPA prediction based on student habit with random forest",
    ],
  },
];

type LastExperience = {
  title: string;
  place: string;
  description: string[];
  role: Role[];
};

const lastExperienceData: LastExperience[] = [
  {
    title: "Backend Lead in Android Portal",
    place: "KSM Android UPNVJ (March 2025 - now)",
    description: [
      "Led backend development for a web-based activity points management system.",
      "Supported a student organization with 150 members by ensuring reliable and scalable backend services.",
      "Coordinated with frontend developers and stakeholders to meet feature requirements.",
    ],
    role: ["Backend"],
  },
  {
    title: "Lead developer and CEO of Tipme!",
    place: "Tipme! - UPNVJ (Jan 2025 - now)",
    description: [
      "Led fullstack development of a food and drink delivery platform around campus.",
      "Built web apps for consumers, admins, and couriers with seamless user experience.",
    ],
    role: ["Backend", "Frontend", "UI/UX Design"],
  },
  {
    title: "Product Academic Manager",
    place: "KSM Android - UPNVJ (Jan 2025 - now)",
    description: [
      "Maintained and updated syllabus for KSM Android study clubs, including study club from various learning path, competition preparation, and internal application development project.",
      "Collaborated with instructors and students to align academic goals.",
    ],
    role: ["All round", "Backend", "Data Science", "Frontend", "UI/UX Design"],
  },
  {
    title: "Mentor of Backend Class",
    place: "KSM Android - UPNVJ (June 2024 - now)",
    description: [
      "Mentored over 40 mentees across Basic and Beginner backend classes.",
      "Taught JavaScript, ExpressJS, Backend technology and best practice.",
      "Guided students on capstone projects with Frontend Class",
      "Provided personalized feedback to improve student progress and skills.",
    ],
    role: ["All round", "Backend"],
  },
  {
    title: "Lab Assistant of Advanced Algorithm and Programming",
    place: "Faculty of Computer Science UPNVJ (Jan 2025 - now)",
    description: [
      "Assisted in teaching lab sessions for Informatics and Data Science major.",
      "Maintained course materials and supported student queries.",
      "Helped coordinate grading and lab management activities.",
    ],
    role: ["All round"],
  },
  {
    title: "Backend Developer in Dignition",
    place: "KSM Android UPNVJ (Jan 2025 - March 2025)",
    description: [
      "Developed an automated absence extraction system for multiple classes within the Dignition platform.",
      "Handled complex database relationships involving numerous tables to ensure accurate data aggregation.",
    ],
    role: ["Backend"],
  },
];

const roles: Role[] = [
  "All round",
  "Backend",
  "Frontend",
  "Data Science",
  "UI/UX Design",
];

export default function About() {
  const [selectedRole, setSelectedRole] = useState<Role>("All round");
  const [filteredSkills, setFilteredSkills] = useState<SkillData[]>(skillsData);
  const [filteredExperience, setFilteredExperience] =
    useState<LastExperience[]>(lastExperienceData);

  const handleFilterChange = (role: Role) => {
    setSelectedRole(role);
  };

  useEffect(() => {
    if (!selectedRole || selectedRole === "All round") {
      setFilteredSkills(skillsData);
      setFilteredExperience(lastExperienceData);
      return;
    }

    const skillMatch = skillsData.filter((skill) => {
      return skill.title.toLowerCase().includes(selectedRole.toLowerCase());
    });

    const expMatch = lastExperienceData.filter((exp) =>
      exp.role.includes(selectedRole)
    );

    setFilteredSkills(skillMatch);
    setFilteredExperience(expMatch);
  }, [selectedRole]);

  return (
    <>
      <main className="px-5 2xl:p-0 border-box flex flex-col gap-8 max-w-6xl mx-auto ">
        <Navbar />

        {/* INTRODUCTION SECTION */}
        <section className="h-full flex flex-col items-center justify-start gap-10 pt-32 mb-12 md:mb-4 md:py-24">
          <img
            className="fade-in aspect-square rounded-full max-w-36 object-cover"
            src="https://res.cloudinary.com/dx85szvao/image/upload/v1750563350/self_p0cfh6.webp"
            alt="profile pic"
          />
          <h3 className="flex fade-in text-3xl font-bold items-center">
            Hi! I&apos;m Eva Sabrina
          </h3>

          <div className="p-5 fade-in flex-1 flex flex-col gap-5 max-w-5xl">
            <p className="text-xl mb-4">
              <span className="font-semibold text-amber-300">
                Hi! I’m Eva Sabrina👋{" "}
              </span>{" "}
              — mainly a Backend Developer, overall an all-around tech
              enthusiast.
            </p>
            <p className="text-xl mb-4">
              I’m at my third year of studying Computer Science in UPN “Veteran”
              Jakarta, Indonesia.
            </p>
            <p className="text-xl mb-4">
              I’ve always enjoyed creating things, but I’m not really into
              physics (or math) and never felt talented in traditional art.
              That’s why discovering software development felt like finding my
              sweet spot — it’s now my comfort zone, my hobby, and my biggest
              passion.
            </p>
            <p className="text-xl mb-4">
              While I focus mainly on{" "}
              <span className="text-amber-300"> backend development </span>, I
              also love exploring another field. Some even I&apos;m confident
              about. Like{" "}
              <span className=" text-amber-300">
                Frontend web, UI/UX design, even machine learning.
              </span>{" "}
              I’m always up for learning something new!
            </p>
            <p className="text-xl mb-2">
              This website is one of my proudest creations of design and
              frontend development so far 😊.
            </p>
          </div>
        </section>

        {/* PROGRAMMING LANGUAGE */}
        <div className=" flex-1 mb-8 flex flex-col items-center">
          <p className="text-3xl font-bold mb-4 font-serif">
            Programming Language
          </p>
          <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
            {techData.map((item: Tech, index) => {
              if (item.type === "tools") return null;
              return (
                <div
                  key={index}
                  className="p-2 text-xl glass-effect shine rounded-md flex gap-2 justify-center items-center"
                >
                  {" "}
                  <item.icon />
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>

        {/* FILTER */}
        <p className="text-center">Choose a filter</p>
        <div className="flex gap-4 flex-wrap justify-center">
          {roles.map((role) => (
            <Button
              key={role}
              size="small"
              inverted={selectedRole !== role}
              onClick={() => handleFilterChange(role)}
            >
              {role}
            </Button>
          ))}
        </div>

        <section className="flex flex-col items-center">
          {/* SKILLS */}
          <div className="w-full">
            <p className="text-3xl font-bold font-serif mt-10 mb-4">Skills</p>
            <div className="glass-effect p-5 rounded-3xl mb-10 lg:flex w-full gap-8">
              {filteredSkills.map((item: SkillData, index) => (
                <div className="mb-4 lg:flex-1" key={index}>
                  <p className="font-serif text-2xl font-bold">{item.title}</p>
                  <ul className="list-disc list-inside mb-2 text-sm">
                    {item.content.map((data, i) => (
                      <li key={i}>{data}</li>
                    ))}
                  </ul>
                  {selectedRole && selectedRole !== "All round" && (
                    <>
                      <p className="font-semibold text-lg mt-5">Experience</p>
                      <ul className="list-disc mb-2 ms-4">
                        {item.longContent.map((data, i) => (
                          <li key={i}>{data}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE */}
          <div>
            <p className="text-3xl font-bold font-serif mb-4">
              Last Experience
            </p>
            <div className="timeline relative">
              {filteredExperience.map((item: LastExperience, index) => (
                <div className="container mb-5" key={index}>
                  <p className="text-lg lg:text-2xl font-semibold">
                    {item.title}
                  </p>
                  <p className="text-amber-300 mb-1">{item.place}</p>
                  <ul className="list-disc mb-2 ms-4 lg:text-lg text-blue-50">
                    {item.description.map((data, i) => (
                      <li key={i}>{data}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <Link href="/projects" className="mt-10">
            <Button size="small">
              See my projects <FaArrowRightLong size={20} />
            </Button>
          </Link>
        </section>

        {/* ACHIEVEMENT */}
        <p className="text-3xl font-bold font-serif mt-5">Achievement</p>
        <div className="">
          <div className="glass-effect p-5 rounded-3xl">
            <p className="font-bold text-xl">One of the 10 Best Projects</p>
            <p className="text-sm mb-2 text-blue-100">
              IDCAMP 2024 Indoosat Oredoo - Dicoding Indonesia.
            </p>
            <p>
              Web based chatbot personalized to answer inquiring about digital
              safety
            </p>
            <a
              target="_blank"
              href="https://tanya-digi-evas-projects-5b1f3060.vercel.app/"
            >
              <Button size="small" className="mt-2">
                Demo <FaExternalLinkAlt size={14} />
              </Button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
