
import Image from "next/image"
import ImageServices from "@/asset/our_services.svg"

const SectionServices = () => {
  return (
    <section className='flex flex-col md:flex-row justify-center items-start space-x-3 p-6 md:p-10 border-yellow-300 border-b-8' >
        <div className='flex flex-col md:w-1/2 gap-3 p-6'>
          <h1 className='font-bold text-left text-2xl md:text-4xl m-2'> <span className="text-primary-color">Nos</span> services</h1>
          <p className='text-slate-600 font-normal text-justify text-md m-4'>
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
  )
}

export default SectionServices
