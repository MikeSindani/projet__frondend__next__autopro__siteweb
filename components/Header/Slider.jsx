"use client"
import React, { useEffect, useState } from "react";

const Slider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // change the interval time as needed
    return () => clearInterval(intervalId);
  });

  return (
    <div className="relative w-full h-[90vh] overflow-hidden bg-slate-100">
      <button
        className="absolute  left-0 top-1/2 transform -translate-y-1/2 z-10 p-4 text-lg text-white bg-primary-color bg-opacity-50 hover:bg-opacity-75"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute  right-0 top-1/2 transform -translate-y-1/2 z-10 p-4 text-lg text-white bg-primary-color bg-opacity-50 hover:bg-opacity-75"
        onClick={nextSlide}
      >
        &#10095;
      </button>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity  duration-500 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt="slider"
            className="w-full h-full object-cover"
          />
          {/* Ajout de l'overlay et du texte de bienvenue */}
          <div className="absolute hidden inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center">
            {index === 0 && (
              <div className=" inset-0 flex flex-col gap-y-2 items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-4 ">
                  <div className="flex flex-col gap-2 items-center justify-center">
                    <h1 className="text-3xl md:text-5xl text-white font-bold m-2">
                      Bienvenue sur{" "}
                      <span className="text-green-600">SAIDIYA</span>
                    </h1>
                    <p className="text-white">
                      {" "}
                      Nous sommes la pour faire progresse votre vie!
                    </p>
                  </div>

                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
