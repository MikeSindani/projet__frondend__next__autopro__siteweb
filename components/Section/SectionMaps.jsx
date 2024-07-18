'use client'
import maps from "@/asset/maps.svg";
import Image from "next/image";
import { ReactBingmaps } from 'react-bingmaps';
import Slider from "@/Header/Slider";
import ScrollAnimation from "react-animate-on-scroll";
export default function SectionMaps() {
  const imagesSlider = [
    "/img/autopro (3).jpg",
    "/img/autopro (4).jpg",
    "/img/autopro (5).jpg",
  ];

  return (
    <section id="lieu" className="max-md:p-8 pt-16 flex flex-col justify-center items-center bg-white">
      <div className="flex flex-col justify-center items-center">
        <Image src={maps} alt="" width={32} height={32} />
      </div>
      <h1 className="font-bold text-3xl md:text-4xl text-black text-center m-3">
        Ou nous trouvez?
      </h1> 
      <p  className="text-gray-700">Voici ou vous pouvez nous trouvez sur une carte.</p>
      
      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 w-full mt-8">
          <div id="maps" className="bg-gray-50" style={{ height: '400px', width: '100%' }} >maps</div>
          <ScrollAnimation animateIn="fadeIn" delay={300}>
          <Slider images={imagesSlider}/>
          </ScrollAnimation>
      </div>
    </section>
  );
}
