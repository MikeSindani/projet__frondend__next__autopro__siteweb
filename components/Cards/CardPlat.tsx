"use client";
import useStoreModal, { convertUSDToCDF, formatedNumber } from "@/utils/store";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import './style.css'

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
  // <div className="flex justify-start items-center overflow-x-scroll overflow-y-hidden ">
  return (
    <section className="w-full">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
      {data.map((dish, index) => (
        <ScrollAnimation key={index} animateIn="fadeIn" delay={300}>
        <div
          className="element flex-shrink-0 w-40 md:w-64  rounded-xl  bg-white h-full hover:scale-105 transition-all duration-200"
        >
          <div className="flex justify-center items-center bg-orange-100">
            <Image
              className={"h-64 md:h-52 w-full object-cover mb-4 rounded-xl"}
              src={dish.images[0]}
              alt={`${dish.marque} ${dish.model}`}
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col p-1 text-center">
            <h1 className="text-2xl font-bold m-1 text-gray-900">{`${dish.marque}`}</h1>
            <h4 className="text-md flex gap-1  justify-center items-center flex-col">
              <p className="text-primary-color font-bold text-center hidden">
                {formatedNumber(dish.priceUSD)}$
              </p>
              <p className="text-primary-color max-md:text-base font-bold text-center ">
                Prix sur demande
              </p>
              <p className="text-slate-600 font-light text-center text-sm hidden">
                {convertUSDToCDF(dish.priceUSD) || dish.priceCDF} francs congolais
              </p>
            </h4>
            <div className="divide-x-2 flex space-x-2 my-3 mx-1 justify-center items-center hidden">
              <InCardDetails title="Moteur" desc={dish.moteur}></InCardDetails>
              <InCardDetails title="Trans." desc={dish.transmission}></InCardDetails>
              <InCardDetails title="Annee F." desc={dish.year}></InCardDetails>
            </div>
            <div className="flex justify-center items-center gap-3 hidden">
              <p className="text-primary-color font-light text-xs">
                {dish.category} 
              </p>
              <p className="text-gray-900 text-xs hidden">{dish.etat}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center m-2 info transition-opacity opacity-0 hidden">
            <a
              href="https://wa.me/243992099990?text=Bonjour%2C+je+suis+int%C3%A9ress%C3%A9+par+vos+voitures.+Pouvez-vous+m%27expliquer+comment+l%27obtenir+et+les+d%C3%A9tails+de+l%27achat%3F+svp"
              className=" hover:bg-gray-900 hover:text-white w-full text-center py-2 rounded-full text-sm font-medium bg-primary-color text-white"
            >
              contactez-nous
            </a>
          </div>
        </div>
        </ScrollAnimation>
      ))}
    </div>
    </section>
  );
};

export default CardPlat;





