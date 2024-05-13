"use client";
import useStoreModal from "@/utils/store";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
interface CarProps {
  car: {
    id: number;
    marque: string;
    model: string;
    images: string[];
    year: number;
    kilometrage: number;
    transmission: string;
    category: string;
  };
}

const CarModal: React.FC = () => {
  const data = useStoreModal((state: any) => state.data);
  const id = useStoreModal((state: any) => state.id);
  const showModal = useStoreModal((state: any) => state.showModal);
  const setShowModal = useStoreModal((state: any) => state.setShowModal);

  const onClose = () => {
    setShowModal();
  };
  const list = data.filter((car: any) => car.id === id);
  console.log(list);

  return (
    <div className="" style={{ display: showModal ? "block" : "none" }}>
      <div className="fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-sm">
        {list.map((car: any, index: number) => (
          <div
            key={index}
            className="z-50 absolute flex flex-col  top-[55%] h-[80dvh] divide-y-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 bg-white rounded-lg shadow-lg"
          >
            <div className="modal-header flex justify-between items-center p-4">
              <h5 className="modal-title text-lg text-center font-bold">
                {car.marque} {car.model}
              </h5>
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={onClose}
              >
                <span className="text-xl" aria-hidden="true">
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body  md:divide-x flex flex-col gap-3 md:flex-row justify-center items-start p-6 overflow-y-scroll">
              <div className="md:w-1/2 max-h-1/2 md:h-full">
                <Carousel
                  axis="horizontal"
                  showArrows={true}
                  showIndicators
                  centerMode={true}
                  autoFocus={true}
                  emulateTouch={true}
                >
                  {car.images.map((photo: any, index: number) => (
                    <div key={index}>
                      <img
                        className="w-full h-full object-cover"
                        src={photo}
                        alt={`Photo ${index + 1}`}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="md:w-1/2 h-1/2 md:h-full md:p-5">
                <div className="car-details flex flex-col gap-3">
                  <h2 className="flex gap-1 flex-col py-2">
                    <p className="text-primary-color font-bold text-3xl">
                      {car.priceUSD}$
                    </p>
                    <p className="text-slate-600 font-light  text-sm">
                      {car.priceCDF} francs congolais
                    </p>
                  </h2>
                  <h3 className="text-sm py-2">
                    <span className="text-sm">Desciption :</span>
                    <span className="text-md">{car.description}</span>
                  </h3>
                  <h6 className="text-sm">Year: {car.year}</h6>
                  <h6 className="text-sm">Kilometrage: {car.kilometrage} km</h6>
                  <h6 className="text-sm">Transmission: {car.transmission}</h6>
                  <h6 className="text-sm">Category: {car.category}</h6>
                  <h6 className="text-sm">Moteur : {car.moteur}</h6>
                  <h6 className="text-sm">
                    Nombre des portes : {car.nombre_de_porte}
                  </h6>
                  <h6 className="text-sm">Etat: {car.etat}</h6>
                  <h6 className="flex gap-2 ">
                    <span className="text-sm">Largeur: {car.largeur}</span>
                    <span className="text-sm">Longeur: {car.longeur}</span>
                    <span className="text-sm">Hauteur: {car.hauteur}</span>
                  </h6>
                  <div className="p-3"></div>
                </div>
              </div>
            </div>
            <div>
            <div className="modal-footer flex justify-center items-center p-3">
              
              <a
                href="#contact"
                className="text-white  hover:opacity-90  hover:text-black px-6 py-2 rounded-lg text-sm  bg-primary-color font-bold max-md:text-center max-md:w-2/3"
              >
                Contactez-nous
              </a>
              <button
                type="button"
                className="close text-red-500  hover:text-black px-6 py-3 rounded-lg text-sm  max-md:text-center max-md:w-2/3"
                aria-label="Close"
                onClick={onClose}
              >
                <span className="text-sm" aria-hidden="true">
                  &times; fermer
                </span>
              </button>
            </div>
            <p className="text-slate-400 text-xs p-2 text-center">Cliquer sur contacter pour envoyer un message sur whatsapp.</p>
            </div> 
            
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarModal;
