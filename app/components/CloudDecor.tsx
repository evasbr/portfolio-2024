/* eslint-disable @next/next/no-img-element */
"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function CloudDecor() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <img
        src={
          resolvedTheme === "dark"
            ? "https://res.cloudinary.com/dx85szvao/image/upload/v1750498678/cloud-1-night_roaajx.webp"
            : "https://res.cloudinary.com/dx85szvao/image/upload/v1750498684/cloud-1-day_fxscue.webp"
        }
        alt=""
        className="absolute top-0 left-0 w-[30%] md:w-[20%] lg:w-[15%] -z-50"
      />

      <img
        src={
          resolvedTheme == "dark"
            ? "https://res.cloudinary.com/dx85szvao/image/upload/v1750498682/cloud-2-night_rtx95a.webp"
            : "https://res.cloudinary.com/dx85szvao/image/upload/v1750498683/cloud-2-day_xigyji.webp"
        }
        alt=""
        className="absolute -top-10 right-0 w-[40%] md:w-[20%] -z-50"
      />
    </>
  );
}
