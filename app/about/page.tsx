import { HiArrowNarrowRight } from "react-icons/hi";
import Button from "../components/button";
import Navbar from "../components/navbar";
import Link from "next/link";
import { AiFillInstagram, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function About() {
    return(
        <main className="md:px-5 2xl:p-0 border-box flex flex-col gap-8 max-w-6xl mx-auto ">
            <Navbar></Navbar>
            <section className="h-full flex flex-col items-center justify-start gap-10 md:py-20">
                <h3 className='flex text-3xl font-bold items-center'>About Me</h3>
                <div className='flex flex-col md:flex-row gap-10 justify-start items-center'>
                    <div className='w-1/2 md:flex-1'>
                    <img className='object-cover shadow-card rounded-xl' src="https://i.ibb.co.com/5s8TYhT/foto-bebas.jpg" alt="profile pic" />
                    </div>
                    <div className='p-5 flex-1 flex flex-col gap-10 items-center'>
                    <h3 className='text-4xl font-bold'>Hello I&apos;m Eva</h3>
                    <p className='text-xl'>Currently studying for a Bachelor&apos;s degree in Informatics, computer science.</p>
                    <p className='text-xl'>I wake up in the morning, grab a cup of timmies coffee, open up my laptop and build things that live on the web all day, everyday.</p>
                    <p className='text-xl'>People who know me say I&apos;m obsessed, that&apos;s fair, I am very driven and love learning new things.</p>
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

            <section className="h-full flex flex-col items-center justify-start gap-10 md:py-20">
                <h3 className='flex text-3xl font-bold items-center'>Experience</h3>
                <ul className="list-disc">
                    <li>A Mentor for Backend Basic Course in KSM Android UPNVJ in 2024</li>
                    <li><Link className="flex gap-2 items-center" href='https://www.dicoding.com/users/evasbr/academies'>Finishing multiple course in dicoding <FaExternalLinkAlt /></Link></li>
                    <li>Finishing multiple course in KSM Android UPNVJ</li>
                </ul>
            </section>

            <section className="h-full flex flex-col items-center justify-start gap-10 md:py-20 mb-20">
                <h3 className='flex text-3xl font-bold items-center'>Contact Me</h3>
                <div className="flex gap-2 items-center justify-center">
                    <Link href="https://www.linkedin.com/in/eva-sabrina/"><Button size='big'><AiFillLinkedin /> Linkedin</Button></Link>
                    <Link href="https://www.instagram.com/evasbr/"><Button size='big'><AiFillInstagram/> Instagram</Button></Link>
                    <Link href="https://github.com/evasbr"><Button size='big'><AiOutlineGithub /> Github</Button></Link>
                </div>
            </section>
        </main>
    );
}