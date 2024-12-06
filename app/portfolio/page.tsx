'use client'
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Button from "../components/button";
import Link from "next/link";

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

const getProjects = async() => {
    try {
      const res = await fetch('/api/projects',
        {cache: 'no-store'}
      );
  
      if(!res.ok){
        throw new Error('Failed to fetch topics');
      }
      return res.json();
      
    } catch (error) {
      console.log("Error loading topics : " + error);
    }
  }

const Portfolio = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [filterType, setFilterType] = useState<string>("");
    const [filterLanguage, setFilterLanguage] = useState<string>("");
    const [filterTools, setFilterTools] = useState<string>("");

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
        let updatedProjects = projects;
        console.log(updatedProjects);

        if (filterType) {
            updatedProjects = updatedProjects.filter(project => project.type === filterType);  
            console.log(filterType);     
            console.log(updatedProjects); 
        }

        if (filterLanguage) {
            updatedProjects = updatedProjects.filter(project => project.lang.includes(filterLanguage));
            console.log(filterLanguage);  
            console.log(updatedProjects); 
        }

        if (filterTools) {
            updatedProjects = updatedProjects.filter(project => project.tools.includes(filterTools));
            console.log(filterTools);  
            console.log(updatedProjects); 
        }

        setFilteredProjects(updatedProjects);
        
    }, [filterType, filterLanguage, filterTools, projects]);

    return(
    <>
        <Navbar/>
        <main className="flex flex-col gap-10 px-5">
            <section className="flex flex-col justify-center items-center gap-5">
                <div className="flex flex-col items-center gap-3 mt-20">
                    <h3>Choose one of my alter</h3>
                    <div className="flex gap-5">
                        <Button onClick={() => setFilterType("appDev")} size="small">Programmer</Button>
                        <Button onClick={() => setFilterType("uiuxDesigner")} size="small">UI/UX Designer</Button>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-3">
                    <h3>What language do you want to see?</h3>
                    <div className="flex gap-5">
                        <Button onClick={() => setFilterLanguage("Java")} size="small">Java</Button>
                        <Button onClick={() => setFilterLanguage("Javascript")} size="small">Javascript</Button>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-3">
                    <h3>What tools do you want to see?</h3>
                    <div className="flex gap-5">
                        <Button onClick={() => setFilterTools("NextJS")} size="small">NextJS</Button>
                        <Button onClick={() => setFilterTools("ExpressJS")} size="small">ExpressJS</Button>
                        <Button onClick={() => setFilterTools("Figma")} size="small">Figma</Button>
                        <Button onClick={() => setFilterTools("JavaFX")} size="small">JavaFX</Button>
                    </div>
                </div>

                <p className="mt-5">Filter : {filterType} {filterLanguage} {filterTools}</p>
            </section>

            <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {   
                    filteredProjects.length == 0 ? 
                    <p className="text-center col-span-full row-span-full">Tidak ada proyek yang kamu cari</p>
                    :
                    filteredProjects.map((item) => (
                        <div key={item._id} className="group flex flex-col hover:bg-foreground/20 border transition-colors duration-100">
                            <Link href={item.urlToProject}>
                                <div className="relative w-full" style={{ paddingTop: "100%" }}> {/* Maintains aspect ratio */}
                                    <img
                                        className="absolute top-0 left-0 w-full h-full object-cover"
                                        src={item.image[0] ? item.image[0] : 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg'}
                                        alt={item.title}
                                    />
                                </div>
                                <div className="flex flex-col gap-2 p-2">
                                    <p className="font-bold">{item.title}</p>
                                    <div className="text-black flex flex-wrap gap-1">
                                        <button className="text-sm py-1 px-4 border border-blue-600 rounded-lg bg-blue-200">{item.type}</button>
                                        
                                        {item.lang.map((langProg, index) => (
                                            <button key={index} className="text-sm py-1 px-4 border border-red-600 rounded-lg bg-red-200">{langProg}</button>
                                        ))}

                                        {item.tools.map((tool, index) => (
                                            <button key={index} className="text-sm py-1 px-4 border border-green-600 rounded-lg bg-green-200">{tool}</button>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </section>
        </main>
        
    </>
    )
}

export default Portfolio;