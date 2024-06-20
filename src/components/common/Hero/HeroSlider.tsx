"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import Image from "next/image";
import { ImGit } from "react-icons/im";
import { Link as Scroll } from "react-scroll";

const HeroSlider = () => {

  return (
    <div className="relative mt-20" id="home">
        <Swiper
            navigation={{
                nextEl: ".next",
                prevEl: ".prev",
            }}
            //autoplay={{
            //    delay: 3000, // Tempo em milissegundos entre os slides
            //    disableOnInteraction: false, // Continua o autoplay mesmo após interação
            //}}
            pagination={{
                clickable: true,
                dynamicBullets: true,
            }}
            //loop
            modules={[Navigation, Autoplay, Pagination]}
            className="mySwiper relative"
        >
            <SwiperSlide>
                {({ isActive }) => (
                    <div className="relative">
                        <div className="hidden md:block">
                            <Image
                                src="/img/banner-confianca.jpg"
                                width={1920}
                                height={700}
                                alt="Banner desktop"
                                className="relative xl:object-cover xl:w-full 2xl:h-[40rem]"
                            />
                        </div>
                        <div className="md:hidden h-96">
                            <Image
                                width={1920}
                                height={700}
                                src="/img/banner-confianca.jpg"
                                alt="Banner mobile"
                                className="relative object-cover h-full w-full"
                            />
                        </div>
                        <section className="absolute w-full h-full flex flex-col justify-center place-content-center inset-0 bg-black/50">
                            <div className="row">
                                <div className="container">
                                    <p className="text-white md:text-base text-sm text-center md:mt-2">
                                        Serviços Rápidos e Eficientes para Sua Casa
                                    </p>
                                    <h1
                                        className={`font-black text-2xl md:text-5xl text-white text-center ${
                                        isActive && "animate-fade-down"
                                    }`}
                                    >
                                        Eletricista Residencial de Confiança
                                    </h1>
                                    <div className="mt-4 flex place-content-center">
                                        <button 
                                            className="py-3 px-5 w-50 block text-white shadow-lg md:text-lg text-sm text-center font-bold border-2 border-brand-200 hover:border-brand-100 rounded-lg"
                                        >
                                            Entrar em Contato
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )}
            </SwiperSlide>
        
            <SwiperSlide>
                {({ isActive }) => (
                    <div className="relative">
                        <div className="hidden md:block">
                            <Image
                                src="/img/banner-servicos.jpg"
                                width={1920}
                                height={700}
                                alt="Banner desktop"
                                className="relative xl:object-cover xl:w-full 2xl:h-[40rem]"
                            />
                        </div>
                        <div className="md:hidden h-96">
                            <Image
                                width={1920}
                                height={700}
                                src="/img/banner-servicos.jpg"
                                alt="Banner mobile"
                                className="relative object-cover h-full w-full"
                            />
                        </div>
                        <section className="absolute w-full h-full flex flex-col justify-center place-content-center inset-0 bg-black/50">
                            <div className="row">
                                <div className="container">
                                    <p className="text-white md:text-base text-sm text-center md:mt-2">
                                        De Instalações a Reparos, Cobrimos Tudo!
                                    </p>
                                    <h1
                                        className={`font-black text-2xl md:text-5xl text-white text-center ${
                                            isActive && "animate-fade-down"
                                        }`}
                                    >
                                        Conheça Nossos Serviços Elétricos
                                    </h1>
                                    <div className="mt-4 flex place-content-center">
                                        <Scroll
                                            to="services"
                                            smooth
                                            offset={-100}
                                            className="py-3 px-5 w-50 block text-white shadow-lg md:text-lg text-sm text-center font-bold border-2 border-brand-200 hover:border-brand-100 rounded-lg"
                                        >
                                            Explore Nossos Serviços
                                        </Scroll>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )}
            </SwiperSlide>

            <SwiperSlide>
                {({ isActive }) => (
                    <div className="relative">
                        <div className="hidden md:block">
                            <Image
                                src="/img/banner-projeto.jpg"
                                width={1920}
                                height={700}
                                alt="Banner desktop"
                                className="relative xl:object-cover xl:w-full 2xl:h-[40rem]"
                            />
                        </div>
                        <div className="md:hidden h-96">
                            <Image
                                width={1920}
                                height={700}
                                src="/img/banner-projeto.jpg"
                                alt="Banner mobile"
                                className="relative object-cover h-full w-full"
                            />
                        </div>
                        <section className="absolute w-full h-full flex flex-col justify-center place-content-center inset-0 bg-black/50">
                            <div className="row">
                                <div className="container">
                                    <p className="text-white md:text-base text-sm text-center md:mt-2">
                                        Galeria de Instalações e Montagens Realizadas
                                    </p>
                                    <h1
                                        className={`font-black text-2xl md:text-5xl text-white text-center ${
                                            isActive && "animate-fade-down"
                                        }`}
                                    >
                                        Veja Nossos Projetos Elétricos
                                    </h1>
                                    <div className="mt-4 flex place-content-center">
                                        <Scroll
                                            to="projects"
                                            smooth
                                            offset={-100}
                                            className="py-3 px-5 w-50 block text-white shadow-lg md:text-lg text-sm text-center font-bold border-2 border-brand-200 hover:border-brand-100 rounded-lg"
                                        >
                                            Conheça Nossos Projetos
                                        </Scroll>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )}
            </SwiperSlide>


        </Swiper>
    </div>
  );
};

export default HeroSlider;