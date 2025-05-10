"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Button from "../components/button";
import Link from "next/link";
import { AiFillLinkedin, AiFillMail } from "react-icons/ai";

interface Project {
  _id: string;
  title: string;
  synopsis: string;
  description: string;
  image: [string];
  tools: [string];
  lang: [string];
  urlToProject: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}

const getProjects = async () => {
  try {
    const res = await fetch("/api/projects", { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics : " + error);
  }
};

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [filterType, setFilterType] = useState<string>("");
  const [filterLanguage, setFilterLanguage] = useState<string>("");
  const [filterTools, setFilterTools] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [hasFetched, setHasFetched] = useState<boolean>(false);

  // Fetch projects once
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const projectData = await getProjects();
      if (projectData) {
        setProjects(projectData.projects);
        setHasFetched(true);
      }
      setLoading(false);
    };
    fetchProjects();
  }, []);

  // Filter projects when data or filters change
  useEffect(() => {
    if (!hasFetched) return;
    setLoading(true);
    let updatedProjects = projects;

    if (filterType) {
      updatedProjects = updatedProjects.filter(
        (project) => project.type === filterType
      );
    }

    if (filterLanguage) {
      updatedProjects = updatedProjects.filter((project) =>
        project.lang.includes(filterLanguage)
      );
    }

    if (filterTools) {
      updatedProjects = updatedProjects.filter((project) =>
        project.tools.includes(filterTools)
      );
    }

    setFilteredProjects(updatedProjects);
    setLoading(false);
  }, [filterType, filterLanguage, filterTools, projects, hasFetched]);

  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-10 px-5 max-w-7xl">
        {/* Filters Section */}
        <section className="flex flex-col justify-center items-center gap-5">
          {/* Type filter */}
          <div className="flex flex-col items-center gap-3 mt-20">
            <h3>Choose one of my alter</h3>
            <div className="flex gap-5">
              <Button
                onClick={() =>
                  setFilterType((prev) => (prev === "appDev" ? "" : "appDev"))
                }
                size="small"
                style={filterType === "appDev" ? "bg-white text-black" : ""}
              >
                Programmer
              </Button>

              <Button
                onClick={() =>
                  setFilterType((prev) =>
                    prev === "uiuxDesigner" ? "" : "uiuxDesigner"
                  )
                }
                size="small"
                style={
                  filterType === "uiuxDesigner" ? "bg-white text-black" : ""
                }
              >
                UI/UX Designer
              </Button>
            </div>
          </div>

          {/* Language filter */}
          <div className="flex flex-col items-center gap-3">
            <h3>What language do you want to see?</h3>
            <div className="flex gap-5">
              <Button
                onClick={() =>
                  setFilterLanguage((prev) => (prev === "Java" ? "" : "Java"))
                }
                size="small"
                style={filterLanguage === "Java" ? "bg-white text-black" : ""}
              >
                Java
              </Button>

              <Button
                onClick={() =>
                  setFilterLanguage((prev) =>
                    prev === "Javascript" ? "" : "Javascript"
                  )
                }
                size="small"
                style={
                  filterLanguage === "Javascript" ? "bg-white text-black" : ""
                }
              >
                Javascript
              </Button>
            </div>
          </div>

          {/* Tools filter */}
          <div className="flex flex-col items-center gap-3">
            <h3>What tools do you want to see?</h3>
            <div className="flex gap-5 flex-wrap justify-center">
              <Button
                onClick={() =>
                  setFilterTools((prev) => (prev === "NextJS" ? "" : "NextJS"))
                }
                size="small"
                style={filterTools === "NextJS" ? "bg-white text-black" : ""}
              >
                NextJS
              </Button>

              <Button
                onClick={() =>
                  setFilterTools((prev) =>
                    prev === "ExpressJS" ? "" : "ExpressJS"
                  )
                }
                size="small"
                style={filterTools === "ExpressJS" ? "bg-white text-black" : ""}
              >
                ExpressJS
              </Button>

              <Button
                onClick={() =>
                  setFilterTools((prev) => (prev === "Figma" ? "" : "Figma"))
                }
                size="small"
                style={filterTools === "Figma" ? "bg-white text-black" : ""}
              >
                Figma
              </Button>

              <Button
                onClick={() =>
                  setFilterTools((prev) => (prev === "JavaFX" ? "" : "JavaFX"))
                }
                size="small"
                style={filterTools === "JavaFX" ? "bg-white text-black" : ""}
              >
                JavaFX
              </Button>
            </div>
          </div>
        </section>

        {/* Project Grid */}
        <section className="mt-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {loading ? (
            <p className="text-center col-span-full">Tunggu sebentar ya...</p>
          ) : hasFetched && filteredProjects.length === 0 ? (
            <p className="text-center col-span-full">
              Tidak ada proyek yang kamu cari
            </p>
          ) : (
            filteredProjects.map((item) => (
              <div
                key={item._id}
                className="group flex flex-col hover:bg-foreground/20 border transition-colors duration-100"
              >
                <Link href={item.urlToProject}>
                  <div
                    className="relative w-full"
                    style={{ paddingTop: "100%" }}
                  >
                    <img
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      src={
                        item.image[0]
                          ? item.image[0]
                          : "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg"
                      }
                      alt={item.title}
                    />
                  </div>
                  <div className="flex flex-col gap-2 p-2">
                    <p className="font-bold">{item.title}</p>
                    <div className="text-black flex flex-wrap gap-1">
                      <button className="text-sm py-1 px-4 border border-blue-600 rounded-lg bg-blue-200">
                        {item.type}
                      </button>

                      {item.lang.map((langProg, index) => (
                        <button
                          key={index}
                          className="text-sm py-1 px-4 border border-red-600 rounded-lg bg-red-200"
                        >
                          {langProg}
                        </button>
                      ))}

                      {item.tools.map((tool, index) => (
                        <button
                          key={index}
                          className="text-sm py-1 px-4 border border-green-600 rounded-lg bg-green-200"
                        >
                          {tool}
                        </button>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </section>
      </main>

      <footer className="mt-28 flex flex-col px-10 py-24 gap-5 items-start bg-foreground text-background">
        <h1 className="text-6xl font-bold">Shall we?</h1>
        <p className="text-2xl">
          Based in Jakarta, I work with English and Indonesian-speaking teams,
          eager to create new experience. <br /> <br />
          You can contact me below for more discussion
        </p>

        <div className="flex gap-5">
          <Link href="https://www.linkedin.com/in/eva-sabrina/">
            <Button inverted size="big">
              <AiFillLinkedin /> Linkedin
            </Button>
          </Link>
          <Button inverted size="big">
            <AiFillMail /> Email
          </Button>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
