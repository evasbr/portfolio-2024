/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import CloudDecor from "./CloudDecor";
import { FaArrowDownLong, FaLocationDot } from "react-icons/fa6";
import { Tech, techData } from "../assets/projects";
import Button from "./button";
import Link from "next/link";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <section
      className={`   
    relative p-5 h-screen flex flex-col justify-center items-center`}
    >
      <CloudDecor />

      <div className="flex flex-col lg:gap-32 lg:flex-row-reverse justify-center items-center">
        <div
          className="
            flex gap-2 justify-center 
            flex-auto lg:flex-col lg:items-end lg:gap-8"
        >
          <img
            className="aspect-square rounded-full max-w-32 lg:max-w-52 object-cover"
            src="https://res.cloudinary.com/dx85szvao/image/upload/v1750563350/self_p0cfh6.webp"
            alt="profile pic"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2
              className="
            text-center
            text-2xl
            lg:text-3xl/8 lg:text-start
          "
            >
              I&apos;m Eva, a{" "}
              <span className="font-semibold ">
                Software Engineer/Backend Developer.
              </span>{" "}
            </h2>

            <h2
              className="
            text-md font-thin text-center
            lg:text-xl/5 lg:text-start 
          "
            >
              Specializing in{" "}
              <span className="font-semibold ">monolithic.</span> <br />
              Learning progress in{" "}
              <span className="font-semibold">microservices.</span>
            </h2>
          </div>

          {/* Location */}
          <p className="flex items-center justify-center text-xs gap-2 lg:justify-start lg:text-sm">
            <FaLocationDot />
            Jakarta, Indonesia (GMT+7)
          </p>

          {/* Tech list */}
          <div className="flex gap-2 max-w-sm flex-wrap justify-center lg:justify-start">
            {techData.map((item: Tech, index) => {
              if (item.type === "tools") return null;
              return (
                <div key={index} className="p-2 glass-effect shine rounded-md">
                  {" "}
                  <item.icon size={20} />{" "}
                </div>
              );
            })}
          </div>

          {/* Button */}
          <div className="mt-5 lg:mt-0 flex gap-4 justify-center lg:justify-start">
            <Link href="/projects">
              <Button size={"small"}>View Projects</Button>
            </Link>
            <a href="#story">
              <Button size={"small"}>
                Learn more <FaArrowDownLong size={14} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
