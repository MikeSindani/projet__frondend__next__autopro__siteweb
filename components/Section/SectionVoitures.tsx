'use client'
import SectionCar from "@/Section/SectionCar"
import SectionFiltre from "@/Section/SectionFiltre"
import SectionCategory from "@/components/Section/SectionCategory"
import { useEffect, useState } from 'react'

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



const cars: Car[] = [
  {
    id: 1,
    year: 2015,
    model: "Golf",
    marque: "Volkswagen",
    priceUSD: 15000,
    priceCDF: 2500000,
    kilometrage: 50000,
    transmission: "AT",
    category: "Berline",
    etat: "Occasion",
    moteur: 2,
    unit:"L",
    images: ["https://images.pexels.com/photos/1073031/pexels-photo-1073031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/1073031/pexels-photo-1073031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/1073031/pexels-photo-1073031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]
  },
  {
    id: 2,
    year: 2018,
    model: "Civic",
    marque: "Honda",
    priceUSD: 20000,
    priceCDF: 3500000,
    kilometrage: 30000,
    transmission: "MT",
    category: "Berline",
    etat: "Neuf",
    moteur: 2,
    unit:"L",
    images: ["https://images.pexels.com/photos/1073031/pexels-photo-1073031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/1073031/pexels-photo-1073031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/1073031/pexels-photo-1073031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]
  },
  {
    id: 3,
    year: 2012,
    model: "Focus",
    marque: "Ford",
    priceUSD: 10000,
    priceCDF: 1800000,
    kilometrage: 80000,
    transmission: "AT",
    category: "Berline",
    etat: "Occasion",
    moteur: 2,
    unit:"L",
    images: ["https://images.pexels.com/photos/1073031/pexels-photo-1073031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/1073031/pexels-photo-1073031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/1073031/pexels-photo-1073031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]
  },
  {
    id: 4,
    year: 2020,
    model: "Corolla",
    marque: "Toyota",
    priceUSD: 25000,
    priceCDF: 4500000,
    kilometrage: 10000,
    transmission: "MT",
    category: "Berline",
    etat: "Neuf",
    moteur: 2,
    unit:"L",
    images: ["https://images.pexels.com/photos/1073031/pexels-photo-1073031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/1073031/pexels-photo-1073031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/1073031/pexels-photo-1073031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]
  },
];
export default function SectionVoitures() {
  const [cat,setCat] = useState("coupe")
  const [dataList, setDataList] = useState<Car[]>(cars.filter((car) => car.etat === "Occasion"));
  const [dataListNeuf, setDataListNeuf] = useState<Car[]>(cars.filter((car) => car.etat === "Neuf"));
  

   const handleCard = (category: string) => {
    setDataList(cars.filter((car) => car.category.toLocaleLowerCase() === category.toLocaleLowerCase() && car.etat === "Occasion"));
    setDataListNeuf(cars.filter((car) => car.category.toLocaleLowerCase() === category.toLocaleLowerCase() && car.etat === "Neuf"));
  }

  return (
    <> 
    <SectionCategory handleCard={handleCard} />
    <SectionFiltre setDataList={setDataList} setDataListNeuf={setDataListNeuf}  data={cars}  />
    <div id='occasion'>
    <SectionCar mot1="Voiture" mot2={"d'occasion"} list={dataList || cars} cat={cat} />
    </div>
    <div id='neuf'>
    <SectionCar mot1="Voiture" mot2={"Neuf"} list={dataListNeuf || cars} cat={cat} />
    </div>
    </>
  )
}
