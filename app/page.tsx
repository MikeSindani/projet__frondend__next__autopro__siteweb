import Slider from "@/components/Header/Slider";
import CarModal from "@/components/Modals/carModal";
import SectionAbout from "@/components/Section/SectionAbout";
import SectionContact from "@/components/Section/SectionContact";
import SectionFAQ from "@/components/Section/SectionFAQ";
import SectionMaps from "@/components/Section/SectionMaps";
import SectionServices from "@/components/Section/SectionServices";
import SectionVoitures from "@/components/Section/SectionVoitures";

export default function Home() {

  
  const imagesSlider = [
    "https://images.pexels.com/photos/1134857/pexels-photo-1134857.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/104836/speed-car-vehicle-drive-104836.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  
  return (
    <div className="relative">
      <Slider images={imagesSlider}/>
      <SectionAbout/>
      <SectionServices/>
      <SectionVoitures/>
      <SectionContact/>
      <SectionMaps/>
      <SectionFAQ/>
      <CarModal/>
    </div>
  );
}



