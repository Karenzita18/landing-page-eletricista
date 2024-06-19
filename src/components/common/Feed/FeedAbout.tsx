"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa"; // Importando o ícone de estrela

export default function FeedAbout() {
  return (
    <>
        <section className="pt-32 pb-10" id="about">
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
                                    WELCOME TO ELETOSER.
                                </p>
                            </div>
                            <h1 className="text-brand-100 md:text-3xl text-2xl mb-5 font-bold">
                                Best Electrical Solutions For Your Electrical Problems
                            </h1>
                            <p className="text-brand-300 text-base mb-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero malesuada feugiat.
                            </p>

                            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                                {dados.map((item, i) => (
                                    <div key={i} className="">
                                        <h1 className="text-brand-100 text-lg font-medium">
                                            {item.title}
                                        </h1>
                                        <p className="text-brand-300 text-base">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

const dados = [
    {
        title: 'Professional Team',
        desc: 'We bring the right people together to challenge established',
        icon: '',
    },
    {
        title: '24/7 Availability',
        desc: 'We bring the right people together to challenge established',
        icon: '',
    },
];
