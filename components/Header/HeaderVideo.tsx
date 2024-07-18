"use client";
import Image from "next/image";
import React, { Suspense } from "react";
import logo from "@/asset/logo.png";
import ImageLoading from "./ImageLoading";

const HeaderVideo = () => {
  return (
    <div className="h-[90dvh] w-full overflow-hidden relative">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-20">
        <div className="absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center">
          <div className="text-center">
            <div className=" place-content-center  hidden md:grid">
              <Image src={logo} alt="logo" width={300} height={300} />
            </div>
            <div className=" place-content-center  grid md:hidden">
              <Image src={logo} alt="logo" width={200} height={200} />
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-white  m-2 z-3">
              Bienvenue sur <span className="text-primary-color">Autopro</span> 
            </h1>
            <div className="text-white text-lg">
              Votre site de vente des voitures neuf ou d{"'"}occasion.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-full -z-10">
          <div className="video-container absolute top-0 left-0 w-full h-full ">
            <Suspense  fallback={<ImageLoading />} >
              <video
                src={require("/public/video/play.mp4")}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              />
            </Suspense>

            <div className="background-overlay absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderVideo;
