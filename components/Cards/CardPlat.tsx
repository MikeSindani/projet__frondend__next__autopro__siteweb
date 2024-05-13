"use client";
import useStoreModal from "@/utils/store";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

// Définition du type pour un plat
interface Car {
  id: number;
  year: number;
  model:string;
  marque:string;
  priceUSD:number;
  priceCDF:number;
  kilometrage: number;
  transmission: string;
  category: string;
  etat:string;
  images: string[];
  moteur: number;
  unit: string;
  description?:string;
  largeur?:string;
  longeur?:string;
  hauteur?:string;
  nombre_de_porte?:number;
  charge_transporter?:number;
}


// Définition du type pour les props du composant
type DishCarouselProps = {
  data: Car[];
  href?: string;
};
type InCardDetailsProps = {
  title: string;
  desc: string | number;
}
function InCardDetails(props : InCardDetailsProps ) {
  return (
    <div className="flex flex-col gap-2 m-1">
      <h3 className="text-gray-500 text-xs text-center">{props.title}</h3>
      <p className="text-gray-700 text-md text-center">{props.desc}</p>
    </div>
  );
}

const CardPlat: React.FC<DishCarouselProps> = ({ data, href }) => {
  const setdata = useStoreModal((state : any) => state.setData);
  const setId = useStoreModal((state : any) => state.setId)
  const showModal = useStoreModal((state : any) => state.showModal);
  const setShowModal = useStoreModal((state : any) => state.setShowModal);
  const handleModal = (id:number) =>{
    setdata(data)
    setShowModal()
    setId(id)
  }
  return (
    <section className="w-full">
    <div className="flex justify-start items-center overflow-x-scroll overflow-y-hidden ">
      
      {data.map((dish, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-64 m-2 rounded-xl shadow-lg bg-white h-full hover:scale-95 transition-all duration-200"
        >
          <div className="flex justify-center items-center">
            <Image
              className={"h-36 w-full object-cover mb-4 rounded-xl"}
              src={dish.images[0]}
              alt={`${dish.marque} ${dish.model}`}
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col p-1 text-center">
            <h1 className="text-xl font-bold m-2 text-gray-900">{`${dish.marque} - ${dish.model}`}</h1>
            <h2 className="text-2xl flex gap-1  justify-center items-center flex-col">
              <p className="text-primary-color font-bold text-center">
                {dish.priceUSD}$
              </p>
              <p className="text-slate-600 font-light text-center text-sm">
                {dish.priceCDF} francs congolais
              </p>
            </h2>
            <div className="divide-x-2 flex space-x-2 my-3 mx-1 justify-center items-center">
              <InCardDetails title="Km." desc={dish.kilometrage}></InCardDetails>
              <InCardDetails title="Moteur" desc={dish.moteur}></InCardDetails>
              <InCardDetails title="Trans." desc={dish.transmission}></InCardDetails>
              <InCardDetails title="Annee F." desc={dish.year}></InCardDetails>
            </div>
            <div className="flex justify-center items-center gap-3">
              <p className="text-primary-color font-light text-xs">
                {dish.category} -
              </p>
              <p className="text-gray-900 text-xs">{dish.etat}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-center m-2">
            <button 
              onClick={()=>handleModal(dish.id)}
              className=" hover:bg-gray-900 hover:text-white w-full text-center py-2 rounded-full text-sm font-medium bg-primary-color text-white"
            >
              Voir plus
            </button>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default CardPlat;





