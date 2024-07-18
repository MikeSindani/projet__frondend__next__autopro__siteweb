"use client";
import SectionCar from "@/Section/SectionCar";
import SectionFiltre from "@/Section/SectionFiltre";
import SectionCategory from "@/components/Section/SectionCategory";
import { convertUSDToCDF } from "@/utils/store";
import { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
interface Car {
  id: number;
  year: number;
  model: string;
  marque: string;
  priceUSD: number;
  priceCDF: number;
  kilometrage: number;
  transmission: string;
  category: string;
  etat: string;
  images: string[];
  moteur: number;
  unit: string;
  description?: string;
  largeur?: string;
  longeur?: string;
  hauteur?: string;
  nombre_de_porte?: number;
  charge_transporter?: number;
}

const cars: Car[] = [
  {
    id: 1,
    year: 2013, // Année de début de production
    model: "F-TYPE",
    marque: "Jaguar",
    moteur: 2.0, // La taille du moteur n'est pas visible sur l'image.
    unit: "L",
    priceUSD: 15000,
    priceCDF: 700000,
    kilometrage: 50000,
    transmission: "AT",
    category: "Berline",
    etat: "Occasion",
    images: [
      "/img/jagar (1).jpg",
      "/img/jagar (2).jpg",
      "/img/jagar (3).jpg",
      "/img/jagar (4).jpg",
      "/img/jagar (6).jpg",
      "/img/jagar (7).jpg",
      "/img/jagar (8).jpg",
      "/img/jagar (9).jpg",
      "/img/jagar (10).jpg",
    ],
  },
  {
    id: 2,
    year: 2007,
    model: "Hilux",
    marque: "Toyota",
    priceUSD: 10000,
    priceCDF: 3500000,
    kilometrage: 30000,
    transmission: "MT",
    category: "Berline",
    etat: "Occasion",
    moteur: 2,
    unit: "L",
    images: [
      "/img/hilux (1).jpg",
      "/img/hilux (8).jpg",
      "/img/hilux (9).jpg",
      "/img/hilux (4).jpg",
      "/img/hilux (5).jpg",
      "/img/hilux (6).jpg",
    ],
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
    unit: "L",
    images: [
       "/img/ford (5).jpg",
       "/img/ford (7).jpg",
       "/img/ford (8).jpg",
       "/img/ford (9).jpg",
    ],
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
    unit: "L",
    images: [
       "/img/landcruiser (1).jpg",
       "/img/landcruiser (2).jpg",
       "/img/landcruiser (3).jpg",
       "/img/landcruiser (4).jpg",
       "/img/landcruiser (5).jpg",
    ],
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
    unit: "L",
    images: [
      "/img/landcruiserblache (1).jpg",
      "/img/landcruiserblache (2).jpg",
      "/img/landcruiserblache (3).jpg",
      "/img/landcruiserblache (4).jpg",
      "/img/landcruiserblache (5).jpg",
      "/img/landcruiserblache (6).jpg",
   ],
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
    unit: "L",
    images: [
      "/img/landcruiserVan (1).jpg",
      "/img/landcruiserVan (2).jpg",
      "/img/landcruiserVan (3).jpg",
      "/img/landcruiserVan (4).jpg",
      "/img/landcruiserVan (5).jpg",
      
   ],
  },
  {
    id: 5,
    year: 2020,
    model: "Corolla",
    marque: "Lexus",
    priceUSD: 25000,
    priceCDF: 4500000,
    kilometrage: 10000,
    transmission: "MT",
    category: "Berline",
    etat: "Neuf",
    moteur: 2,
    unit: "L",
    images: [
      "/img/lexus (1).jpg",
      "/img/lexus (2).jpg",
      "/img/lexus (3).jpg",
      "/img/lexus (5).jpg",
      "/img/lexus (6).jpg",
   ],
  },
  {
    id: 5,
    year: 2020,
    model: "Corolla",
    marque: "Lexus",
    priceUSD: 25000,
    priceCDF: 4500000,
    kilometrage: 10000,
    transmission: "MT",
    category: "Berline",
    etat: "Neuf",
    moteur: 2,
    unit: "L",
    images: [
      "/img/lexusGris (1).jpg",
      "/img/lexusGris (2).jpg",
      "/img/lexusGris (4).jpg",
      "/img/lexusGris (5).jpg",
   ],
  },
];
export default function SectionVoitures() {
  const [cat, setCat] = useState("coupe");
  //const [dataList, setDataList] = useState<Car[]>(cars.filter((car) => car.etat === "Occasion"));
  const [dataList, setDataList] = useState<Car[]>(cars);
  const [dataListNeuf, setDataListNeuf] = useState<Car[]>(
    cars.filter((car) => car.etat === "Neuf")
  );

  const handleCard = (category: string) => {
    setDataList(
      cars.filter(
        (car) =>
          car.category.toLocaleLowerCase() === category.toLocaleLowerCase() //&&car.etat === "Occasion"
      )
    );
    setDataListNeuf(
      cars.filter(
        (car) =>
          car.category.toLocaleLowerCase() === category.toLocaleLowerCase() //&& car.etat === "Neuf"
      )
    );
  };

  return (
    <>
      <ScrollAnimation animateIn="fadeIn" delay={300}>
        <SectionCategory handleCard={handleCard} />
      </ScrollAnimation>

      <SectionFiltre
        setDataList={setDataList}
        setDataListNeuf={setDataListNeuf}
        data={cars}
      />
      <div id="voitures">
          <SectionCar
            mot1="Notre catalogue"
            mot2={"des voitures"}
            list={dataList || cars}
            cat={cat}
          />
      </div>
      <div className="hidden" id="neuf">
          <SectionCar
            mot1="Voiture"
            mot2={"Neuf"}
            list={dataListNeuf || cars}
            cat={cat}
          />
      </div>
    </>
  );
}
