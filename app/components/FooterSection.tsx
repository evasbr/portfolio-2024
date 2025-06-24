/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import Button from "./button";
import { useThemeMode } from "@/libs/ThemeModeProvider";
import useHasMounted from "@/libs/MountedProvider";
import Decor from "./Decor";

export default function Footer() {
  const hasMounted = useHasMounted();
  const mode = useThemeMode();

  if (!hasMounted || !mode) return null;
  return (
    <footer className="relative p-6 lg:pt-64 ">
      <Decor
        darkSrc={
          "https://res.cloudinary.com/dx85szvao/image/upload/v1750498677/witch_whesgy.webp"
        }
        lightSrc={
          "https://res.cloudinary.com/dx85szvao/image/upload/v1750504287/bird_iy8ieb.webp"
        }
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[30%] lg:top-2 lg:w-[10%]"
        alt="Footer image"
      />
      <div
        className="pt-56 mb-64
          lg:glass-effect-small lg:p-5 lg:rounded-xl
          text-shadow
        "
      >
        <h3 className="font-serif text-3xl">What do you think?</h3>
        <h4 className="font-serif text-6xl">Shall we?</h4>
        <p className="text-xl mt-5">
          Based in Jakarta, I work with English and Indonesian-speaking teams,
          eager to create new experience.
        </p>
        <p className="text-xl mt-3">
          You can contact me below for more discussion
        </p>
        {/* Contact */}
        <div
          className="
            flex flex-col gap-2 mt-10 items-start
            "
        >
          <a target="_blank" href="https://www.linkedin.com/in/eva-sabrina/">
            <Button size="small">
              <AiFillLinkedin size={24} /> Eva Sabrina
            </Button>
          </a>
          <a target="_blank" href="mailto:evasbr19@gmail.com">
            <Button size="small">
              <AiFillMail size={24} /> evasbr19@gmail.com
            </Button>
          </a>
          <a target="_blank" href="https://github.com/evasbr">
            <Button size="small">
              <AiFillGithub size={24} /> evasbr
            </Button>
          </a>
        </div>
      </div>

      <img
        src={
          mode == "dark"
            ? "https://res.cloudinary.com/dx85szvao/image/upload/v1750488735/footer-night_ofvop1.webp"
            : "https://res.cloudinary.com/dx85szvao/image/upload/v1750489053/footer_bu4ny6.webp"
        }
        alt=""
        className="absolute 
          bottom-0 right-0 left-0 -z-50 w-full
          "
      />
      <p className="text-center">©2025 Eva Sabrina. All rights reserved.</p>
    </footer>
  );
}
