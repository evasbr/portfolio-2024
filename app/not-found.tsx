import Link from "next/link";
import Decor from "./components/Decor";
import Button from "./components/button";

// app/not-found.js
export default function NotFound() {
  return (
    <div className="overflow-hidden relative bg-blue-400 z-0 w-full h-screen flex justify-center items-start py-10">
      <Decor
        darkSrc={
          "https://res.cloudinary.com/dx85szvao/image/upload/v1750773274/flower_jikgbu.webp"
        }
        lightSrc={
          "https://res.cloudinary.com/dx85szvao/image/upload/v1750773274/flower_jikgbu.webp"
        }
        className="absolute -bottom-10 right-[50%] object-cover translate-x-[50%] h-[70%] -z-20"
      />
      <Decor
        darkSrc={
          "https://res.cloudinary.com/dx85szvao/image/upload/v1750773274/butterfly_nllfb3.webp"
        }
        lightSrc={
          "https://res.cloudinary.com/dx85szvao/image/upload/v1750773274/butterfly_nllfb3.webp"
        }
        className="absolute top-[50%] right-[60%] w-[30%] lg:w-[10%] -z-20"
      />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold text-center mb-2">404</h1>
        <p className="text-2xl text-center mb-5">
          Oops! I think you lost along the way.
        </p>
        <Link href="/">
          <Button size="big">Go Back Home</Button>
        </Link>
      </div>
    </div>
  );
}
