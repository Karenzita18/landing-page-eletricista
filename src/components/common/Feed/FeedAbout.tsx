"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa"; // Importando o ícone de estrela
import { Link as Scroll } from "react-scroll";

export default function FeedAbout() {
  return (
    <>
        <section className="pt-14 pb-10" id="about">
            <div className="container">
                <div className="row">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                        <div className="relative flex md:justify-end justify-center items-center">
                            <img
                                src="/img/about.jpg"
                                alt="About"
                            />
                        </div>
                        <div>
                            <div className="flex items-center mb-5">
                                <div className="border-2 border-[#FFB100] w-10"></div>
                                <p className="text-brand-300 mx-2">
                                    BEM VINDO À [NOME DA PÁGINA].
                                </p>
                            </div>
                            <h1 className="text-brand-100 md:text-3xl text-2xl mb-5 font-bold">
                                Melhores soluções elétricas para seus problemas elétricos
                            </h1>
                            <div className="text-brand-300 text-base ">
                                <p className="mb-3">
                                    Sou [Seu Nome], eletricista especializado em serviços residenciais. Estou aqui para resolver seus problemas elétricos com eficiência e cuidado.
                                </p>
                                <p className="mb-3">
                                    Com anos de experiência, ofereço desde pequenos reparos até instalações completas. Meu compromisso é garantir que sua casa tenha soluções elétricas confiáveis para seu conforto e segurança.
                                </p>
                                <p>
                                    Entre em contato e descubra como posso ajudar você a manter sua residência iluminada e funcionando perfeitamente.
                                </p>
                            </div>
                            <div className="mt-4 ">
                                <Scroll
                                    to="contact"
                                    smooth
                                    offset={-100}
                                    className="py-3 px-5 w-50 block text-brand-100 shadow-lg md:text-lg text-sm max-w-56 font-bold border-2 border-brand-200 hover:border-brand-100 rounded-lg text-center"
                                >
                                    Entre em contato
                                </Scroll>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

