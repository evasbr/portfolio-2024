/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/FooterSection";
import { Project, projectsData, Role, techData } from "../assets/projects";
import { FaRegFileCode } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

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
    setProjects(projectsData);
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
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 gap-5 mb-20">
          {filteredProjects.length === 0 ? (
            <p className="text-center col-span-full text-gray-400">
              No projects match your filter 😢
            </p>
          ) : (
            filteredProjects.map((item, index) => (
              <div
                key={index}
                className="group glass-effect p-5 rounded-2xl shadow-lg transition-all hover:scale-[1.02] hover:shadow-2xl duration-300 ease-in-out flex flex-col justify-between gap-4"
              >
                <Link href={`/projects/${item.slug}`} passHref>
                  <div className="overflow-hidden aspect-square rounded-xl cursor-pointer">
                    <img
                      src={item.cover}
                      alt={item.title}
                      className="object-cover aspect-square w-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-sm">{item.synopsis}</p>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {item.technologies.map((id, i) => {
                      const tech = techData.find((t) => t.id === id);
                      if (!tech) return null;
                      const Icon = tech.icon;

                      return (
                        <span
                          key={i}
                          className="p-2 glass-effect shine rounded-md"
                        >
                          <Icon size={14} />
                        </span>
                      );
                    })}
                  </div>
                </Link>
                <div className="flex gap-2 text-sm">
                  {item.urlToCode !== "" && (
                    <a
                      href={item.urlToCode}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="flex gap-1 justify-center items-center px-2 py-1 rounded-md bg-white text-blue-500 hover:-translate-y-1 transition-all ease-in-out"
                    >
                      Project <FaRegFileCode size={14} />
                    </a>
                  )}

                  {item.urlToProject !== "" && (
                    <a
                      href={item.urlToProject}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="flex gap-1 justify-center items-center px-2 py-1 rounded-md bg-blue-500 text-white hover:-translate-y-1 transition-all ease-in-out"
                    >
                      Project <FiExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
