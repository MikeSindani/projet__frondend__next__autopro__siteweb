'use client'
import Image from "next/image";
import React from "react";
import Slider from "../Header/Slider";
import ScrollAnimation from "react-animate-on-scroll";


export default function SectionGaleriePhoto() {
  const imagesSlider = [
    "/img/autopro (1).jpg",
    "/img/autopro (3).jpg",
    "/img/autopro (7).jpg",
    "/img/ford (5).jpg",
    "/img/ford (7).jpg",
    "/img/autopro (7).jpg",
    "/img/autopro (6).jpg",
    "/img/gmc (2).jpg",
    "/img/gmc (1).jpg",
    "/img/autopro (10).jpg",
    "/img/landcruiserVan (6).jpg",
    "/img/jagar (1).jpg",
    "/img/jagar (5).jpg",

  ];
  return (
    <section
      id="photos"
      className="px-6 py-10 md:py-16 flex flex-col justify-center items-center bg-secondary-color w-full"
    >
      <h1 className="font-bold text-3xl md:text-4xl text-white text-center m-3">
        Galerie Photo
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3  justify-center items-start w-full gap-4 my-8">
        {imagesSlider.map((image, index) => (
          <ScrollAnimation key={index} animateIn="fadeIn" delay={300}>
            <Image
              className="w-[350px] max-md:w-40 hover:scale-105 transition-all duration-300 rounded-xl hover:rounded-none sepia-[40%] hover:sepia-0"
              alt="autopro photo galery"
              src={image}
              width={600}
              height={400}
            />
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
}
