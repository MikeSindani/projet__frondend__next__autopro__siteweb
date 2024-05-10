'use client'
import React, { useEffect, useState } from 'react'
import SectionCategory from "@/components/Section/SectionCategory"
import SectionCar from "@/Section/SectionCar"

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
    images: ["https://images.pexels.com/photos/1073031/pexels-photo-1073031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "golf2.jpg", "golf3.jpg"]
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
    images: ["https://images.pexels.com/photos/1073031/pexels-photo-1073031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "civic2.jpg", "civic3.jpg"]
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
    images: ["https://images.pexels.com/photos/1073031/pexels-photo-1073031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "focus2.jpg", "focus3.jpg"]
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
    images: ["https://images.pexels.com/photos/1073031/pexels-photo-1073031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "corolla2.jpg", "corolla3.jpg"]
  }
];
export default function SectionVoitures() {
  const [cat,setCat] = useState("coupe")
  const [dataList, setDataList] = useState<Car[]>(cars);
  const [dataListNeuf, setDataListNeuf] = useState<Car[]>(cars);
  
  
  const filteredCars = cars.filter((car) => {
    const yearFilter = car.year >= 2018; // filter by year
    const kilometrageFilter = car.kilometrage <= 50000; // filter by kilometrage
    const transmissionFilter = car.transmission === "AT"; // filter by transmission
    const categoryFilter = car.category === "occasion"; // filter by category
  
    return yearFilter && kilometrageFilter && transmissionFilter && categoryFilter;
  });
  
  console.log(filteredCars);

   const handleCard = (category: string) => {
    setDataList(cars.filter((car) => car.category.toLocaleLowerCase() === category.toLocaleLowerCase() && car.etat === "Occasion"));
    setDataListNeuf(cars.filter((car) => car.category.toLocaleLowerCase() === category.toLocaleLowerCase() && car.etat === "Neuf"));
  }

  useEffect(()=>{
    const handleFilterbyEtat = () => {
      setDataList(cars.filter((car) => car.etat === "Occasion"));
      setDataListNeuf(cars.filter((car) => car.etat === "Neuf"));
    }
    handleFilterbyEtat()

  },[])

  return (
    <> 
    <SectionCategory handleCard={handleCard} />
    <SectionCar mot1="Voiture" mot2={"d'occasion"} list={dataList || cars} cat={cat} />
    <SectionCar mot1="Voiture" mot2={"Neuf"} list={dataList || cars} cat={cat} />
    </>
  )
}
