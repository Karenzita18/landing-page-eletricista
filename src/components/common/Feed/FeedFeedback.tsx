"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa"; // Importando o ícone de estrela

export default function FeedFeedback() {
  return (
    <>
        <section className="pt-16 pb-10 bg-stone-50" id="feedback">
            <div className="container">
                <div className="row">
                    <div className="grid md:grid-cols-2 grid-cols-1">
                        <div>
                            <div className="flex items-center mb-5">
                                <div className="border-2 border-[#FFB100] w-10"></div>
                                <p className="text-brand-300 mx-2">
                                    Confira nossos depoimentos
                                </p>
                            </div>
                            <h1 className="text-brand-100 text-3xl mb-5 font-bold">
                                O Que Nossos Clientes Dizem
                            </h1>
                            <p className="text-brand-300 mb-5">
                                Estamos orgulhosos do serviço que oferecemos e acreditamos que nossos clientes são a melhor prova disso. Leia abaixo o que nossos clientes têm a dizer sobre suas experiências conosco. Seus comentários e avaliações são fundamentais para continuarmos aprimorando nossos serviços.
                            </p>
                        </div>
                        <div>
                            <Swiper
                                navigation={{
                                    nextEl: ".next",
                                    prevEl: ".prev",
                                }}
                                autoplay={{
                                    delay: 3000, 
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                }}
                                spaceBetween={30} 
                                loop
                                modules={[Navigation, Autoplay, Pagination]}
                                className="mySwiper relative"
                            >
                                {depoimentos.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="p-4 bg-white border-brand-100 border-2 rounded-lg flex flex-col items-center">
                                            <p className="text-brand-300 text-base text-center mb-4">
                                                {item.depoiment}
                                            </p>

                                            <div className="flex items-center mb-2">
                                                {Array.from({ length: 5 }, (_, index) => (
                                                    <FaStar
                                                        key={index}
                                                        className={index < item.rating ? "text-yellow-500" : "text-gray-300"}
                                                    />
                                                ))}
                                            </div>

                                            <h1 className="text-xl font-bold mb-2">
                                                {item.cliente}
                                            </h1>
                                            
                                            <img
                                                src={item.image}
                                                alt={item.cliente}
                                                width={100}
                                                height={100}
                                                className="rounded-full mx-auto"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

const depoimentos = [
    {
        depoiment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus.",
        cliente: "Cliente 1",
        rating: 4, // Avaliação em estrelas (0 a 5)
        image: "http://via.placeholder.com/100x100", // Caminho para a imagem do cliente
    },
    {
        depoiment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus.",
        cliente: "Cliente 2",
        rating: 5,
        image: "http://via.placeholder.com/100x100",
    },
    {
        depoiment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus.",
        cliente: "Cliente 3",
        rating: 3,
        image: "http://via.placeholder.com/100x100",
    },
    {
        depoiment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus.",
        cliente: "Cliente 4",
        rating: 4,
        image: "http://via.placeholder.com/100x100",
    },
];
