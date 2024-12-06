'use client'

import Button from './components/button';
import Navbar from './components/navbar';
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiOutlineCode, HiOutlineTemplate, HiSparkles } from "react-icons/hi";
import { AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { useEffect, useState } from 'react';
import Link from 'next/link';

const getProjects = async() => {
  try {
    const res = await fetch('http://localhost:3000/api/projects',
      {cache: 'no-store'}
    );

    if(!res.ok){
      throw new Error('Failed to fetch topics');
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics");
  }
}

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

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState<string>("appDev");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectData = await getProjects();
      if(projectData){
        setProjects(projectData.projects);
      }
    }

    fetchProjects();
  }, []);

  useEffect(() => {
    if (filter) {
      setFilteredProjects(projects.filter(project => project.type === filter));
    } else {
      setFilteredProjects(projects); // If no filter is applied, show all projects
    }
  }, [filter, projects]);

  const handleFilterChange = (filterType:string) => {
    setFilter(filterType);
  }

  useEffect(() => {
    const textElement = document.querySelector(".sec-text");
    const textLoad = () => {
      if (textElement) {
        setTimeout(() => {
          textElement.textContent = "Programmer";
        }, 0);
        setTimeout(() => {
          textElement.textContent = "UI/UX Designer";
        }, 3500);
        setTimeout(() => {
          textElement.textContent = "Challenger";
        }, 7500);
      }
    };

    textLoad();
    const interval = setInterval(textLoad, 12000);

    // Clean up interval when component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className='md:px-5 2xl:p-0 border-box flex flex-col gap-8 max-w-6xl mx-auto '>
        <Navbar></Navbar>

        {/* Hero section */}
        <section className="h-screen flex flex-col justify-center items-stretch overflow-hidden gap-20">
          
          <h1 className='warning-text text-wrapper font-bold text-6xl text-center'>Let’s Create Something Amazing Together</h1>
          <div className="container text-center text-3xl flex flex-col items-center">
            <span className="text first-text">I'm a</span> <br />
            <span className="text sec-text"></span>
          </div>
        </section>
        
        {/* About me Section */}
        <section className="h-full flex flex-col items-center justify-start gap-10 md:py-20">
          <h3 className='flex text-3xl font-bold items-center'>About Me</h3>
          <div className='flex flex-col md:flex-row gap-10 justify-start items-center'>
            <div className='w-1/2 md:flex-1'>
              <img className='object-cover shadow-card rounded-xl' src="https://i.ibb.co.com/5s8TYhT/foto-bebas.jpg" alt="profile pic" />
            </div>
            <div className='p-5 flex-1 flex flex-col gap-10 items-center'>
              <h3 className='text-4xl font-bold'>Hello I'm Eva</h3>
              <p className='text-xl'>Currently studying for a Bachelor's degree in Informatics, computer science.</p>
              <p className='text-xl'>I wake up in the morning, grab a cup of timmies coffee, open up my laptop and build things that live on the web all day, everyday.</p>
              <p className='text-xl'>People who know me say I'm obsessed, that's fair, I am very driven and love learning new things.</p>
              <Link href='/about'><Button size='big'>More About Me<HiArrowNarrowRight/> </Button></Link>
            </div>
          </div>

          {/* Tech Stack */}
          <div className='tech_stack w-full flex flex-wrap sm:flex-row'>
            <div className='p-4 flex-1'>
              <p className='text-xl font-bold text-center mb-4'>Programming Language</p>
              <ul className='list-disc translate-x-5'>
                <li>Javascript</li>
                <li>Java</li>
                <li>C, C++</li>
              </ul>
            </div>
            <div className='p-4 flex-1'>
              <p className='text-xl font-bold text-center mb-4'>Framework</p>
              <ul className='list-disc translate-x-5'>
                <li>Express JS</li>
                <li>Next JS</li>
                <li>JavaFX</li>
              </ul>
            </div>
            <div className='p-4 flex-1'>
              <p className='text-xl font-bold text-center mb-4'>Design Tools</p>
              <ul className='list-disc translate-x-5'>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Display */}
        <section className="h-full flex flex-col items-center justify-start relative">
          <div>
            <p className='text-center'>Choose one of my alter</p>
            <div className='mt-5 flex gap-4 flex-wrap justify-center'>
              <Button
                onClick={() => {handleFilterChange("appDev")}}
                size='small'
              >
                <HiOutlineCode /> Programmer
              </Button>
              <Button
                onClick={() => {
                  handleFilterChange("uiuxDesigner")}}
                size='small'
              >
                <HiOutlineTemplate /> UI/UX Designer
              </Button>
            </div>
          </div>

          <h3 className='mt-12 mb-6 flex text-3xl font-bold items-center gap-1'><HiSparkles />My Top Three {filter === "appDev" ? "Programming" : "UI/UX Design"} Pieces<HiSparkles /></h3>

          <div className='flex flex-col md:flex-row gap-5 mb-20'>
            {filteredProjects.map((item) => (
              <div key={item._id} className='flex flex-col items-center'>
                <div className='card_container group relative mt-5'>
                  <img
                    className='img_card object-contain'
                    src={item.image[0] ? item.image[0] : 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg'}
                    alt={item.title}
                  />
                  <div className='opacity-0 group-hover:opacity-100 transition-opacity text-white flex flex-col justify-center p-5 text-background absolute bottom-0 left-0 right-0 top-0 bg-black/70 gap-5'>
                    <h4 className='font-bold text-xl'>{item.title}</h4>
                    <p>{item.synopsis}</p>
                    <Button inverted size='small'>More<HiArrowNarrowRight /></Button>
                  </div>
                </div>
                <p className='mt-3 text-xl font-bold'>{item.title}</p>
              </div>
            ))}
          </div>
          <Button size='big'><Link href="/portfolio">More of My Projects</Link><HiArrowNarrowRight /> </Button>
        </section>
      </main>

      <footer className='mt-28 flex flex-col px-10 py-24 gap-5 items-start bg-foreground text-background'>
        <h1 className='text-6xl font-bold'>Shall we?</h1>
        <p className='text-2xl'>Based in Jakarta, I work with English and Indonesian-speaking teams, eager to create new experience. <br /> <br />
        You can contact me below for more discussion</p>

        <div className='flex gap-5'>
          <Link href="https://www.linkedin.com/in/eva-sabrina/"><Button inverted size='big'><AiFillLinkedin /> Linkedin</Button></Link>
          <Button inverted size='big'><AiFillMail /> Email</Button>
        </div>
      </footer>
    </>
  );
}