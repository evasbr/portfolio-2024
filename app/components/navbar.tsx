'use client'
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import Button from "./button";
import { useState, useRef, useEffect } from "react";
import ThemeSwitcher from "./themeSwitcher";

export default function Navbar(){
    const [isExpanded, setIsExpanded] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);
    const toggleDiv = () => {
        setIsExpanded(!isExpanded);
    }

    const handleClickOutside = (event: MouseEvent) => {

        if(divRef.current ){
            const target = event.target as Node;
            if(!divRef.current.contains(target)){
                setIsExpanded(false);
            }
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return(
        <nav className="border bg-background rounded-2xl px-5 flex flex-col justify-center fixed left-0 right-0 max-w-7xl m-auto z-50">
            <div className="flex justify-between md:gap-5 items-cente">
                <div className="font-bold">
                    <span className="py-3 block">evasbr</span>
                </div>

                <div className="hidden md:block">
                    <ul className="flex gap-9">
                        <li>
                            <Link className="" href="/">
                                <span className="py-3 px-5 block hover:bg-foreground hover:text-background transition-colors duration-100">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="" href="/portfolio">
                                <span className="py-3 px-5 block hover:bg-foreground hover:text-background transition-colors duration-100">Portfolio</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="" href="/about">
                                <span className="py-3 px-5 block hover:bg-foreground hover:text-background transition-colors duration-100">About Me</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="hidden md:flex items-center gap-1">
                    <ThemeSwitcher/>
                </div>

                <div className="md:hidden flex items-center">
                    <Button
                    onClick={toggleDiv}
                     icon size="small"><HiMenu/></Button>
                </div>
            </div>
            
            {
                isExpanded && (
                    <div ref={divRef} className="md:hidden" style={{display: isExpanded ? 'block' : 'none'}} >
                        <ul className="text-sm">
                            <li>
                                <Link className="" href="/">
                                    <span className="py-3 block hover:bg-foreground hover:text-background transition-colors duration-100">Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="" href="/portfolio">
                                    <span className="py-3 block hover:bg-foreground hover:text-background transition-colors duration-100">Portfolio</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="" href="/about">
                                    <span className="py-3 block hover:bg-foreground hover:text-background transition-colors duration-100">About Me</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )
            }
            
        </nav>
    );
}