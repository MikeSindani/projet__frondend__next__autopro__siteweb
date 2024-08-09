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
    year: 2024, // Année de début de production
    model: "PRADO",
    marque: "TOYOTA PRADO ADVENTURE 2024 / ESSENCE / AUT. / 2.4 TURBO",
    moteur: 2.4, // La taille du moteur n'est pas visible sur l'image.
    unit: "L",
    priceUSD: 15000,
    priceCDF: 700000,
    kilometrage: 50000,
    transmission: "AUT",
    category: "Berline",
    etat: "Occasion",
    images: [
      "/img/rmbg/376caec8-8867-4fe5-ae09-ce1c46d9329Df-removebg-preview.png",
    ],
  },
  {
    id: 2,
    year: 2023,
    model: "PRADO",
    marque: "TOYOTA PRADO TXL 2023/ ESSENCE / AUT. 2.7 4CYLlNDRES",
    priceUSD: 10000,
    priceCDF: 3500000,
    kilometrage: 30000,
    transmission: "MT",
    category: "Berline",
    etat: "Occasion",
    moteur: 2.7,
    unit: "L",
    images: [
      "/img/rmbg/PRADO-removebg-preview.png",
    ],
  },
  {
    id: 3,
    year: 2023,
    model: "FORTUNER",
    marque: "TOYOTA FORTUNER 2023 / ESSENCE 1 AUT. / 2.7 4CYLlNDRES",
    priceUSD: 10000,
    priceCDF: 1800000,
    kilometrage: 80000,
    transmission: "AT",
    category: "Berline",
    etat: "Occasion",
    moteur: 2.7,
    unit: "L",
    images: [
       "/img/rmbg/fortuner-removebg-preview.png",
    ],
  },
  {
    id: 4,
    year: 2023,
    model: "RAV4",
    marque: "TOYOTA RAV4 2023 / ESSENCE / AUT. / 2.0 4CYLlNDRES",
    priceUSD: 25000,
    priceCDF: 4500000,
    kilometrage: 10000,
    transmission: "AUT",
    category: "Berline",
    etat: "Neuf",
    moteur: 2.0,
    unit: "L",
    images: [
       "/img/rmbg/RAVremovebg-preview.png",
    ],
  },
  {
    id: 4,
    year: 2024,
    model: "LandCruiser",
    marque: "TOYOTA LC76 2024 / DIESEL/ MAN. / 4.2 6CYLlNDRES",
    priceUSD: 25000,
    priceCDF: 4500000,
    kilometrage: 10000,
    transmission: "MT",
    category: "Berline",
    etat: "Neuf",
    moteur: 4.2,
    unit: "L",
    images: [
      "/img/rmbg/landcruiser-removebg-preview.png",
   ],
  },
  {
    id: 4,
    year: 2023,
    model: "Hilus",
    marque: "TOYOTA HILUX DC 2023 1 DIESEL/ MAN. 12.5 4CYLlNDRES",
    priceUSD: 25000,
    priceCDF: 4500000,
    kilometrage: 10000,
    transmission: "MT",
    category: "Berline",
    etat: "Neuf",
    moteur: 12.5,
    unit: "L",
    images: [
      "/img/rmbg/hilux-removebg-preview.png",
      
   ],
  },
  {
    id: 5,
    year: 2023,
    model: "L200",
    marque: "MITSUBISHI L200 DC 2023 / DIESEL/ MAN. / 2.5 4CYLlNDRES",
    priceUSD: 25000,
    priceCDF: 4500000,
    kilometrage: 10000,
    transmission: "MT",
    category: "Berline",
    etat: "Neuf",
    moteur: 2,
    unit: "L",
    images: [
      "/img/rmbg/mitsubishi-removebg-preview.png",
   ],
  },
  {
    id: 4,
    year: 2024,
    model: "LandCruiser",
    marque: "TOYOTA LC76 2024 / DIESEL/ MAN. / 4.2 6CYLlNDRES",
    priceUSD: 25000,
    priceCDF: 4500000,
    kilometrage: 10000,
    transmission: "MT",
    category: "Berline",
    etat: "Neuf",
    moteur: 4.2,
    unit: "L",
    images: [
      "/img/rmbg/Screenshot_2024-08-09_132241-removebg-preview.png",
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
