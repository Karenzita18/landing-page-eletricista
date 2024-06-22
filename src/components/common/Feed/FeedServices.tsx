"use client";

import { useState } from "react";
import Image from "next/image";

export default function FeedServices() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredServices = selectedCategory === "Todos" ? services : services.filter(service => service.category === selectedCategory);

  return (
    <section className="pt-10 pb-10 bg-stone-50" id="services">
      <div className="container">
        <div className="row">
          <div className="text-center mb-5">
            <div className="flex items-center justify-center">
              <div className="border-2 border-[#FFB100] w-10"></div>
              <p className="text-brand-300 mx-2">
                NOSSOS SERVIÇOS
              </p>
            </div>
            <h1 className="text-brand-100 text-3xl mb-5 font-bold max-w-lg mx-auto">
              O que Oferecemos
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
            {filteredServices.map((item, i) => (
              <div 
                key={i} 
                className="border-brand-200 rounded-lg border-2 py-3 px-3 flex flex-col items-center"
              >
                {/*<Image 
                    src={item.icon} 
                    alt={item.title} 
                    width={50} 
                    height={50}
                />*/}
                <h1 className="text-brand-100 hover:text-brand-200 text-xl text-center font-medium mt-3">
                  {item.title}
                </h1>
                <p className="text-brand-300 text-base text-center mt-3">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
    {
        title: "Automação Residencial",
        desc: "Instalação de câmeras (CFTV), alarmes, além de serviços de manutenção e desenvolvimento de projetos elétricos personalizados para sua residência.",
        category: "Automação Residencial",
        icon: "  "
    },
    {
        title: "Projeto Elétrico",
        desc: "Elaboração de diagramas elétricos detalhados e montagem de painéis elétricos de alta qualidade, garantindo segurança e eficiência energética.",
        category: "Automação Residencial",
        icon: ""  
    },
    {
        title: "Automação Industrial",
        desc: "Serviços de manutenção e montagem de painéis industriais, oferecendo soluções automatizadas para melhorar a produtividade e segurança das operações industriais.",
        category: "Automação Industrial",
        icon: "" 
    },
];
