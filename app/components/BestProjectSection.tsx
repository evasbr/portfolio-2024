/* eslint-disable @next/next/no-img-element */
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "./button";
import Link from "next/link";
import { projectsData, techData } from "../assets/projects";

export default function BestProjectSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center mt-20">
      <h2 className="font-serif text-3xl lg:text-5xl text-center md:mb-20 mb-10">
        My Three Best Projects✨
      </h2>

      <div className="p-5 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-8 max-w-7xl">
        {projectsData.slice(0, 3).map((item, index) => {
          return (
            <a key={index} href={`/projects/${item.slug}`}>
              <div className="glass-effect p-5 rounded-2xl hover:-translate-y-2 transition-all">
                <img
                  className="mb-2 aspect-square w-full object-cover"
                  src={item.cover}
                  alt={item.title}
                />
                <p className="font-bold text-lg">{item.title}</p>
                <p className="mb-3">{item.synopsis}</p>
                <div className="flex gap-1 flex-wrap">
                  {item.technologies.map((id, index) => {
                    return (
                      <p
                        className="bg-white text-blue-400 px-2 py-1 rounded-md"
                        key={index}
                      >
                        {techData[id - 1].name}
                      </p>
                    );
                  })}
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <Link href="/projects">
        <Button size="small">
          More Projects <FaArrowRightLong size={20} />
        </Button>
      </Link>
    </section>
  );
}
