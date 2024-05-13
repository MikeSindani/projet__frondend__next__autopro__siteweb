import React, { useState } from "react";

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

interface FiltreProps {
  setDataList: (data: any[]) => void;
  setDataListNeuf: (data: any[]) => void;
  data: Car[];
}

const SectionFiltre = ({ setDataList, setDataListNeuf,data }: FiltreProps) => {
  const [yearState, setYearState] = useState<number>(0);
  const [marqueState, setMarqueState] = useState<string>("");
  const [modelState, setModelState] = useState<string>("");
  const [categoryState, setCategoryState] = useState<string>("");
  const [transmissionState, setTransmissionState] = useState<string>("");
  const [moteurState, setMoteurState] = useState<number>(0);
  const [prixState, setPrixState] = useState<number>(0);
  const [kilometrageState, setKilometrageState] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  //const [list, setList] = useState<Car[]>([]);

  const handleFilter = () => {
    let list = data;
    list =  yearState === 0 ? data : data.filter((car) => {
      const yearMatch = car.year === yearState ;
      return yearMatch 
    })
    
    list =  kilometrageState === 0 ? list : list.filter((car) => {
      const kilometrageMatch = car.kilometrage <= kilometrageState ;
      return kilometrageMatch
    })

    list = transmissionState === "" ? list : list.filter((car) => {
      const transmissionMatch = car.transmission.toLocaleLowerCase() === transmissionState.toLocaleLowerCase() ;
      return transmissionMatch
    })
    
    list = marqueState === "" ? list : list.filter((car) => {
      const marqueMatch = car.marque.toLocaleLowerCase() === marqueState.toLocaleLowerCase() ;
      return marqueMatch
    })

    list = modelState === "" ? list : list.filter((car) => {
      const marqueMatch = car.model.toLocaleLowerCase() === modelState.toLocaleLowerCase() ;
      return marqueMatch
    })


    list = categoryState === "" ? list : list.filter((car) => {
      return car.category.toLocaleLowerCase() === categoryState.toLocaleLowerCase();
    })

    list = prixState === 0 ? list : list.filter((car) => {
      return car.priceUSD <= prixState;
    })
    console.log(list)

    setDataList(list.filter((car) => car.etat === "Occasion"));
    setDataListNeuf(list.filter((car) => car.etat === "Neuf"));
  };

  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <div className="flex justify-center items-center">

        <button onClick={() => setOpen(!open)} className="p-3 flex flex-row justify-center items-center gap-3 rounded-lg text-black w-44 md:w-64  hover:opacity-80 transition-all bg-slate-100 ">
          <span className="bg-black rounded-[100%]">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 6H19M21 12H16M21 18H16M7 20V13.5612C7 13.3532 7 13.2492 6.97958 13.1497C6.96147 13.0615 6.93151 12.9761 6.89052 12.8958C6.84431 12.8054 6.77934 12.7242 6.64939 12.5617L3.35061 8.43826C3.22066 8.27583 3.15569 8.19461 3.10948 8.10417C3.06849 8.02393 3.03853 7.93852 3.02042 7.85026C3 7.75078 3 7.64677 3 7.43875V5.6C3 5.03995 3 4.75992 3.10899 4.54601C3.20487 4.35785 3.35785 4.20487 3.54601 4.10899C3.75992 4 4.03995 4 4.6 4H13.4C13.9601 4 14.2401 4 14.454 4.10899C14.6422 4.20487 14.7951 4.35785 14.891 4.54601C15 4.75992 15 5.03995 15 5.6V7.43875C15 7.64677 15 7.75078 14.9796 7.85026C14.9615 7.93852 14.9315 8.02393 14.8905 8.10417C14.8443 8.19461 14.7793 8.27583 14.6494 8.43826L11.3506 12.5617C11.2207 12.7242 11.1557 12.8054 11.1095 12.8958C11.0685 12.9761 11.0385 13.0615 11.0204 13.1497C11 13.2492 11 13.3532 11 13.5612V17L7 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </span>
          <span className="text-black text-md text-center">Filter</span>    
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
            {/* Create input fields for each attribute */}
            <select
            value={yearState}
            onChange={(e) => setYearState(parseInt(e.target.value))}
            className="bg-slate-200 p-3"
          >
            <option value="0">Select a years</option>
            {Array.from({ length: new Date().getFullYear() - 1995 + 1 }, (_, i) => {
              return (
                <option value={1995 + i} key={1995 + i}>
                  {1995 + i}
                </option>
              );
            })}
          </select>
            <select
              value={marqueState}
              onChange={(e) => setMarqueState(e.target.value)}
              className="bg-slate-100 p-3"
            >
              <option value="">Select a marque</option>
              <option value="Toyota">Toyota</option>
              <option value="Ford">Ford</option>
              <option value="Honda">Honda</option>
            </select>
            <select
              value={modelState}
              onChange={(e) => setModelState(e.target.value)}
              className="bg-slate-100 p-3"
            >
              <option value="">Select a model</option>
              <option value="Corolla">Corolla</option>
              <option value="Camry">Camry</option>
              <option value="Civic">Civic</option>
            </select>
            <select
              value={kilometrageState}
              onChange={(e) => setKilometrageState(parseInt(e.target.value))}
              className="bg-slate-100 p-3"
            >
              <option value="0">Select a kilometrage</option>
              <option value="10000">0-10,000</option>
              <option value="30000">10,000-30,000</option>
              <option value="50000">30,000-50,000</option>
              <option value="100000">50,000-100,000</option>
              <option value="1000000">100,000-150,000</option>
            </select>

            <select
              value={categoryState}
              onChange={(e) => setCategoryState(e.target.value)}
              className="bg-slate-100 p-3"
            >
              <option value="">Select a category</option>
              <option value="Sedan">Sedan</option>
              <option value="Hatchback">Hatchback</option>
              <option value="SUV">SUV</option>
            </select>
            <select
              value={transmissionState}
              onChange={(e) => setTransmissionState(e.target.value)}
              className="bg-slate-100 p-3"
            >
              <option value="">Select a transmission type</option>
              <option value="AT">Automatic</option>
              <option value="MT">Manual</option>
            </select>
            <select
              value={moteurState}
              onChange={(e) => setMoteurState(parseInt(e.target.value))}
              className="bg-slate-200 p-3"
            >
              <option value="0">Select a consommation</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
            
            <select
              value={prixState}
              onChange={(e) => setPrixState(parseInt(e.target.value))}
              className="bg-slate-100 p-3"
            >
              <option value="0">Select prix en USD</option>
              <option value="2000">0-2000</option>
              <option value="5000">2000-5000</option>
              <option value="10000">5000-10000</option>
              <option value="15000">10,000-15000</option>
              <option value="30000">15000-30000</option>
              <option value="50000">30000-50000</option>
              <option value="100000">50000-100000</option>
              <option value="250000">100000-250000</option>
            </select>
          </div>
          <div
            className="flex justify-center items-center"
          >
            <button  onClick={() => handleFilter()} className="p-3 rounded-lg text-white w-44 md:w-64 bg-primary-color hover:opacity-80 transition-all text-sm">
                Filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionFiltre;
