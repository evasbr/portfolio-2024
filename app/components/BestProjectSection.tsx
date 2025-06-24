/* eslint-disable @next/next/no-img-element */
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "./button";
import Link from "next/link";
type Project = {
  image: string;
  title: string;
  description: string;
  techs: string[];
  urlToProject: string;
};

const projectData: Project[] = [
  {
    image:
      "https://res.cloudinary.com/dx85szvao/image/upload/v1750766578/tipme_gvdagz.webp",
    title: "Tipme! (2025)",
    description:
      "Built a application for Food and Drink Delivery around campus. Including landing page, user's page to order, admin and courier pages to manage shop and delivery service.",
    techs: ["NextJS", "ExpressJS", "PostgreSQL", "Midtrans", "Netlify"],
    urlToProject: "http://tipme.site",
  },
  {
    image:
      "https://res.cloudinary.com/dx85szvao/image/upload/v1750517241/Tanya_Digi_gayd8y.webp",
    title: "Tanya Digi (2025)",
    description:
      "Built a landing page and Chatbot with Gemini to answer all inquires about Digital Safety. Win as one of the ten best projects in IDCAMP 2024 Indoosat Oredoo - Dicoding Indonesia.",
    techs: ["NextJS", "GeminiAI", "Vercel"],
    urlToProject: "https://tanya-digi-evas-projects-5b1f3060.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/dx85szvao/image/upload/v1750578966/manchingu_nkwkuv.webp",
    title: "ManChingu- backend (2025)",
    description:
      "A mobile app designed for manhwa lovers to manage and track their reading status, including completed, ongoing, planned, or dropped titles, while also enabling community interaction through reviews and ratings.",
    techs: ["Java", "Android", "PostgreSQL", "ExpressJS"],
    urlToProject: "https://github.com/evasbr/ManChingu-backend",
  },
];

export default function BestProjectSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="font-serif text-3xl mb-10">My Three Best Projects✨</h2>
      <div className="p-5 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-8 max-w-7xl">
        {projectData.map((item, index) => {
          return (
            <a target="_blank" key={index} href={item.urlToProject}>
              <div className="glass-effect p-5 rounded-2xl">
                <img
                  className="mb-2 aspect-square w-full object-cover"
                  src={item.image}
                  alt={item.title}
                />
                <p className="font-bold text-lg">{item.title}</p>
                <p className="mb-3">{item.description}</p>
                <div className="flex gap-1 flex-wrap">
                  {item.techs.map((item, index) => {
                    return (
                      <p
                        className="bg-white text-blue-400 px-2 py-1 rounded-md"
                        key={index}
                      >
                        {item}
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
