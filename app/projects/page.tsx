/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/FooterSection";

type Role = "Backend" | "Frontend" | "UI/UX Designer" | "Data Science";

type Project = {
  id: number;
  title: string;
  synopsis: string;
  description: string;
  image: string;
  tools: string[];
  urlToProject: string;
  role: Role[];
  date: string;
};

const projectData: Project[] = [
  {
    id: 1,
    title: "Tanya Digi",
    synopsis: "Web-based Smart Chatbot",
    description:
      "Built a landing page and Chatbot with Gemini to answer all inquires about Digital Safety. Win as one of the ten best projects in IDCAMP 2024 Indoosat Oredoo - Dicoding Indonesia.",
    image:
      "https://res.cloudinary.com/dx85szvao/image/upload/v1750517241/Tanya_Digi_gayd8y.webp",
    tools: ["Next.js", "Tailwind", "GeminiAI"],
    urlToProject: "https://tanya-digi-evas-projects-5b1f3060.vercel.app/",
    role: ["Backend", "Frontend"],
    date: "2025",
  },
  {
    id: 2,
    title: "Tipme!",
    synopsis: "Campus's Food and Drink Delivery Business",
    description:
      "Built a application for Food and Drink Delivery around campus. Including landing page, user's page to order, admin and courier pages to manage shop and delivery service.",
    image:
      "https://res.cloudinary.com/dx85szvao/image/upload/v1750766578/tipme_gvdagz.webp",
    tools: ["ExpressJS", "PostgreSQL", "NextJS", "Cloudinary", "Midtrans"],
    urlToProject: "http://tipme.site",
    role: ["Backend", "Frontend", "UI/UX Designer"],
    date: "2025",
  },
  {
    id: 3,
    title: "ManChingu-backend",
    synopsis: "Backend for Mobile based manhwa (south-korean comic) review",
    description:
      "A mobile app designed for manhwa lovers to manage and track their reading status, including completed, ongoing, planned, or dropped titles, while also enabling community interaction through reviews and ratings.",
    image:
      "https://res.cloudinary.com/dx85szvao/image/upload/v1750578966/manchingu_nkwkuv.webp",
    tools: ["Express", "PostgreSQL", "Typescript", "ORM Prisma"],
    urlToProject: "https://github.com/evasbr/ManChingu-backend",
    role: ["Backend"],
    date: "2025",
  },
  {
    id: 5,
    title: "Cinema ticket vending machine",
    synopsis: "Cinema ticket vending machine simulation",
    description:
      "JavaFX Application to simulate ticket vending machine for cinema. Run as desktop application. A final project for OOP course in university.",
    image:
      "https://res.cloudinary.com/dx85szvao/image/upload/v1750766578/cinema_hudzq3.webp",
    tools: ["Java", "JavaFX", "MySQL"],
    urlToProject: "https://github.com/evasbr/movie-ticket-vending-machine.git",
    role: ["Frontend"],
    date: "2025",
  },
  {
    id: 6,
    title: "MoonA",
    synopsis: "UI/UX Design of baby monitoring app",
    description:
      "A mobile UI/UX design concept for a baby monitoring application, created to support parents by reducing the stress of continuous monitoring and reduce the sudden infant death risk.",
    image:
      "https://res.cloudinary.com/dx85szvao/image/upload/v1750578972/moona_yqq8u6.webp",
    tools: ["Design Thinking", "Figma"],
    urlToProject:
      "https://www.figma.com/proto/OQxQLOkie7GEXHjHFPVA25/Design-UI?page-id=13%3A504&node-id=83-261&viewport=265%2C-321%2C0.13&t=t8iswlyc778CjQJb-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=83%3A531&show-proto-sidebar=1",
    role: ["UI/UX Designer"],
    date: "2024",
  },
  {
    id: 7,
    title: "Motorizz",
    synopsis: "UI/UX Design of motorcycle maintenance app",
    description:
      "A UI/UX design of mobile-based motorcycle maintenance app. Including tracking schedule, ordering spare part, and get nearest workshop.",
    image:
      "https://res.cloudinary.com/dx85szvao/image/upload/v1750578973/motorizz_on0f8n.webp",
    tools: ["Design Thinking", "Figma"],
    urlToProject:
      "https://www.figma.com/proto/DBR9mmEyB34m8xhykObzMv/DESIGN-UI-UX?page-id=1%3A3&node-id=40-236&node-type=frame&viewport=1467%2C-145%2C0.16&t=z7e34WLfHuQLCBw3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=129%3A1824",
    role: ["UI/UX Designer"],
    date: "2024",
  },
  {
    id: 8,
    title: "GPA preediction",
    synopsis: "Mobile based manhwa (south-korean comic) review",
    description:
      "Predict a GPA score based on several factor with Random Forest. Final project to complete Data Science Beginner course in KSM Android UPNVJ.",
    image:
      "https://res.cloudinary.com/dx85szvao/image/upload/v1750578803/gpa_prediction_jirwuc.webp",
    tools: ["Python", "Streamlit"],
    urlToProject: "https://github.com/evasbr/gpa-prediction",
    role: ["Data Science"],
    date: "2025",
  },
];

const allRoles: Role[] = [
  "Backend",
  "Frontend",
  "UI/UX Designer",
  "Data Science",
];

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filterRole, setFilterRole] = useState<Role | "">("");

  useEffect(() => {
    setProjects(projectData);
  }, []);

  const filteredProjects = filterRole
    ? projects.filter((project) => project.role.includes(filterRole))
    : projects;

  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-10 px-5 max-w-7xl mx-auto">
        {/* Filter Section */}
        <section className="flex flex-col justify-center items-center gap-5 mt-10">
          <div className="flex flex-col items-center gap-3 mt-20">
            <h3 className="text-3xl font-bold font-serif text-center">
              Choose My Role
            </h3>
            <div className="flex gap-2 flex-wrap justify-center">
              {allRoles.map((role) => (
                <button
                  key={role}
                  onClick={() => setFilterRole(filterRole === role ? "" : role)}
                  className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                    filterRole === role
                      ? "bg-yellow-300 text-black font-semibold"
                      : "bg-transparent border-white text-gray-300 hover:bg-gray-100 hover:text-blue-500"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
            {filterRole && (
              <p className="text-sm text-white mt-1">
                Currently showing{" "}
                <span className="text-yellow-400">{filterRole}</span> projects
              </p>
            )}
          </div>
        </section>

        {/* Projects Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
          {filteredProjects.length === 0 ? (
            <p className="text-center col-span-full text-gray-400">
              No projects match your filter 😢
            </p>
          ) : (
            filteredProjects.map((item, index) => (
              <a
                href={item.urlToProject}
                target="_blank"
                key={index}
                className="group glass-effect p-5 rounded-2xl shadow-lg transition-all hover:scale-[1.02] hover:shadow-2xl duration-300 ease-in-out flex flex-col gap-3"
              >
                <div className="overflow-hidden aspect-square rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover aspect-square w-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-amber-200">{item.synopsis}</p>
                  <p className="text-sm mt-1">{item.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </a>
            ))
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
