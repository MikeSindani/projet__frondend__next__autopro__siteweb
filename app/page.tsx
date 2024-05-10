
import Image from "next/image";
import Slider from "@/components/Header/Slider"
import SectionAbout from "@/components/Section/SectionAbout";
import SectionServices from "@/components/Section/SectionServices"

import { useState } from "react";
import SectionVoitures from "@/components/Section/SectionVoitures";
import SectionContact from "@/components/Section/SectionContact"

export default function Home() {

  
  const imagesSlider = [
    "https://images.pexels.com/photos/1134857/pexels-photo-1134857.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/104836/speed-car-vehicle-drive-104836.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  
  return (
    <div>
      <Slider images={imagesSlider}/>
      <SectionAbout/>
      <SectionServices/>
      <SectionVoitures/>
      <SectionContact/>

    </div>
  );
}



