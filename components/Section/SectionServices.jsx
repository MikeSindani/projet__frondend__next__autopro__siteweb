"use client";
import ImageServices from "@/asset/our_services.svg"
import Image from "next/image"
import ScrollAnimation from "react-animate-on-scroll"
import 'animate.css/animate.compat.css';

const SectionServices = () => {
  return (
    <ScrollAnimation animateIn="fadeIn" delay={300}>
    <section id="services" className='flex flex-col-reverse md:flex-row justify-center items-start space-x-3 px-4 py-10 md:px-16 border-yellow-300 border-b-8 w-full' >
      
        <div className='flex flex-col md:w-1/2 gap-3 p-3'>
          <h1 className='font-bold text-left text-3xl md:text-4xl m-2'> <span className="text-primary-color">Nos</span> services</h1>
          <p className='text-slate-600 font-normal text-justify text-md md:m-4'>
            AutoPro : Votre Partenaire Automobile de Confiance
            Chez AutoPro, nous comprenons que l’achat d’une voiture est une décision importante. 
            C’est pourquoi nous nous engageons à vous offrir une expérience d’achat transparente et sans tracas, 
            que vous cherchiez une voiture neuve ou d’occasion.
          </p>
        </div>
        <div className="md:w-1/2  flex justify-center items-start">
            <Image src={ImageServices} alt="nos services images" width={500} height={500} />
        </div>
        
    </section>
    </ScrollAnimation>
  )
}

export default SectionServices
