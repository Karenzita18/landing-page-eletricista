"use client";

import Image from "next/image";
import { useState } from "react";

export default function FeedProjects() {
    const [selectedCategory, setSelectedCategory] = useState("Todos");

    const filteredProjects = selectedCategory === "Todos" ? projects : projects.filter(projects => projects.category === selectedCategory);
  return (
    <>
        <section className="pt-10 pb-10 " id="projects">
            <div className="container">
                <div className="row">
                    <div className="text-center mb-5">
                        <div className="flex items-center justify-center mb-5">
                            <div className="border-2 border-[#FFB100] w-10"></div>
                            <p className="text-brand-300 mx-2">
                                 Nossos projetos
                            </p>
                        </div>
                        <h1 className="text-brand-100 text-3xl mb-5 font-bold max-w-lg mx-auto">
                            Projeto que realizamos                        
                        </h1>
                    </div>

                    <div className="text-center mb-5">
                        <button 
                            onClick={() => setSelectedCategory("Todos")} 
                            className={`mx-2 px-4 py-2 mb-2 md:mb-0  ${selectedCategory === "Todos" ? 'bg-brand-200 text-white' : 'bg-gray-200 text-brand-100'} rounded`}
                        >
                        Todos
                        </button>
                        <button 
                            onClick={() => setSelectedCategory("Automação Residencial")} 
                            className={`mx-2 px-4 py-2 mb-2 md:mb-0 ${selectedCategory === "Automação Residencial" ? 'bg-brand-200 text-white' : 'bg-gray-200 text-brand-100'} rounded`}
                        >
                        Automação Residencial
                        </button>
                        <button 
                            onClick={() => setSelectedCategory("Automação Industrial")} 
                            className={`mx-2 px-4 py-2 ${selectedCategory === "Automação Industrial" ? 'bg-brand-200 text-white' : 'bg-gray-200 text-brand-100'} rounded`}
                        >
                        Automação Industrial
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 grid-cols-1 gap-10 ">
                        {filteredProjects.map((item, i) => (
                            <div 
                                key={i} 
                                className="relative group"
                            >
                                <div className="relative">
                                    <img
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 bg-brand-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-white text-center p-4 ">
                                        {item.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                
                </div>
            </div>
        </section>
    </>
  );
}

const projects = [
    {
        title: "Automação Residencial",
        image: "https://via.placeholder.com/900x900",
        category: "Automação Residencial",
        icon: "  "
    },
    {
        title: "Projeto Elétrico",
        image: "https://via.placeholder.com/900x900",
        category: "Automação Residencial",
        icon: ""  
    },
    {
        title: "Automação Industrial",
        image: "https://via.placeholder.com/900x900",
        category: "Automação Industrial",
        icon: "" 
    },

];
