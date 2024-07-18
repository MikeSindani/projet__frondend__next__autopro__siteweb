import HeaderVideo from "@/components/Header/HeaderVideo";
import Slider from "@/components/Header/Slider";
import CarModal from "@/components/Modals/carModal";
import SectionAbout from "@/components/Section/SectionAbout";
import SectionContact from "@/components/Section/SectionContact";
import SectionFAQ from "@/components/Section/SectionFAQ";
import SectionGaleriePhoto from "@/components/Section/SectionGaleriePhoto";
import SectionMaps from "@/components/Section/SectionMaps";
import SectionServices from "@/components/Section/SectionServices";
import SectionVoitures from "@/components/Section/SectionVoitures";
export default function Home() {

  return (
    <div className="relative">
      <HeaderVideo/> 
      <SectionAbout/>
      <SectionServices/>
      <SectionVoitures/>
      <SectionContact/>
      <SectionMaps/>
       <SectionGaleriePhoto/>
      <SectionFAQ/>
      <CarModal/>
    </div>
  );
}



