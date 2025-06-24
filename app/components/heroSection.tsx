/* eslint-disable @next/next/no-img-element */
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import CloudDecor from "./CloudDecor";

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <section
      className={` ${
        resolvedTheme == "dark" ? "bg-[url('/stars.svg')] bg-repeat" : ""
      }
    
    relative p-5 h-screen flex flex-col justify-center items-center`}
    >
      <CloudDecor />
      {resolvedTheme === "dark" ? (
        <img
          src="https://res.cloudinary.com/dx85szvao/image/upload/v1750775989/moon_ycatfn.webp"
          alt="Moon"
          className="w-[30%] lg:w-[20%] absolute top-[50%] translate-y-[-80%] -z-50 right-[35%] lg:right-[30%] "
        />
      ) : (
        <img
          src="https://res.cloudinary.com/dx85szvao/image/upload/v1750775987/kite_ocaox7.webp"
          alt="Kite"
          className="w-[70%] absolute top-[50%] translate-y-[-50%] -z-50 -right-5 "
        />
      )}

      <div className="flex flex-col lg:flex-row justify-center items-center ">
        <div className="flex-1">
          <h1
            className="
            font-medium text-6xl text-center font-serif
            md:text-6xl
            lg:text-7xl lg:text-start lg:font-bold
          "
          >
            Let&apos;s Create Something Amazing Together
          </h1>

          <h2
            className="
            text-2xl font-thin mt-7 text-center
            lg:text-3xl lg:mt-6 lg:text-start
          "
          >
            I&apos;m Eva, a Programmer
          </h2>
        </div>

        <div
          className="
            flex mt-10 gap-2 justify-center 
            flex-1 lg:flex-col lg:items-end lg:gap-8"
        >
          <div
            className="
            flex-1 flex justify-center items-center gap-3 glass-effect
            px-4 py-2 rounded-xl
            lg:px-10 lg:py-6 lg:rounded-3xl lg:min-w-[400px]
            "
          >
            <p
              className="
            text-3xl font-bold
            lg:text-7xl "
            >
              3
            </p>
            <p
              className="
            text-sm
            lg:text-3xl"
            >
              Years of experience
            </p>
          </div>
          <div
            className="

            flex-1 flex justify-center items-center gap-3 glass-effect
            px-4 py-2 rounded-xl
            lg:px-10 lg:py-6 lg:rounded-3xl lg:min-w-[400px]
            "
          >
            <p
              className="
            text-3xl font-bold
            lg:text-7xl"
            >
              +7
            </p>
            <p
              className="
            text-sm
            lg:text-3xl"
            >
              Projects made
            </p>
          </div>
        </div>
      </div>

      {/* <Button className="mt-12" size="big">
        Start Exploring
      </Button> */}
    </section>
  );
}
