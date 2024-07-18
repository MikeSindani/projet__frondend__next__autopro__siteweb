"use client";
import React, { useState, useEffect } from 'react';

import Image from "next/image";
import ScrollAnimation from 'react-animate-on-scroll';
import { FaMailchimp, FaMap, FaPhone, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const SectionContact = () => {
  
  return (
    <section id="contact" className="flex flex-col">
      <div className="relative">
        <div
          className="bg-cover bg-center h-[140dvh] md:h-[120dvh]  w-[100%] bg-fixed"
          style={{
            backgroundImage:
              "url('https://www.notebookcheck-cn.com/fileadmin/Notebooks/News/_nc3/Google_Pixel_7_3434057.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center gap-3 backdrop-blur-sm px-4 py-10 md:px-16">
            <h1
              
              className="text-3xl md:text-4xl font-bold  text-primary-color text-center"
            >
              Contactez-nous
            </h1>
            <ScrollAnimation animateIn="fadeIn">
            <div className="flex flex-col md:flex-row  md:justify-around items-start gap-3 md:divide-x max-md:divide-y ">
              <div className="flex flex-col md:w-1/2  md:p-6 justify-start items-start p-1 gap-3">
                <h2
                  id="contact"
                  className="text-white font-semibold text-lg text-left my-3"
                >
                  Nos Contactes et adresses
                </h2>
                <div className='pl-3'>
                  <ul className="list-none text-left space-y-3">
                    <li>
                      <a
                        className="text-white flex gap-3 items-center"
                        href="mailto:contact@autopro.lu"
                        target='_blank'
                      >
                        <IoMdMail /> contact@autopro.lu
                      </a>
                    </li>
                    <li>
                      <a className="text-white flex gap-3 items-center" href="tel:243992099990" target='_blank'>
                        <FaPhone /> +243 992 099 990
                      </a>
                    </li>
                    <li>
                      <a className="text-white flex gap-3 items-center" href="https://wa.me/243992099990" target='_blank'>
                         <FaWhatsapp /> +243 992 099 990
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white flex gap-3 items-center"
                        href="https://www.google.com/maps/@-11.6522620,27.4438210,15z"
                      >
                        <FaMap /> 1640 Boulevard Msiri, Lubumbashi 0000
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:w-1/2  md:p-6 justify-start items-start p-1 gap-3">
                <h2 className="text-white font-semibold text-lg text-left my-3">
                  Ecrivez-nous sans plus tarder
                </h2>
                <div className="pl-3">
                  <form
                    className="flex gap-3 flex-col justify-center"
                    action="https://formsubmit.co/contact@autopro.lu"
                    method="POST"
                    id="contact@Autopro.lu"
                  >
                    <div className="text-left text-xs">
                      <label Htmlfor="name">
                        <span className="label text-primary-color">Nom</span>
                      </label>
                      <input
                        className="p-4 border-x-0 border-t-0 border-b-2  w-full border-b-primary-color text-white text-sm bg-transparent"
                        type="text"
                        name="name"
                        placeholder="Nom "
                      />
                    </div>
                    <div className="flex flex-col justify-start text-left text-xs">
                      <label Htmlfor="email">
                        <span className="text-primary-color ">Email</span>
                      </label>
                      <input
                        className="p-4 border-x-0 border-t-0 border-b-2  w-full border-b-primary-color text-white text-sm bg-transparent "
                        type="email"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="text-left text-xs">
                      <label Htmlfor="phone">
                        <span className="label text-primary-color">Téléphone</span>
                      </label>
                      <input
                        className="p-4 border-x-0 border-t-0 border-b-2  w-full border-b-primary-color text-white text-sm bg-transparent "
                        type="tel"
                        name="phone"
                        placeholder="Numero de Téléphone"
                      />
                    </div>
                    <input
                      type="hidden"
                      name="_autoresponse"
                      value="Bonjour, Merci Pour Votre message! AutoPro"
                    />
                    <input type="hidden" name="_template" value="basic" />
                    <input type="hidden" name="_captcha" value="false" />
                    <div className="text-left text-xs">
                      <label Htmlfor="name">
                        <span className="label text-primary-color">Message</span>
                      </label>
                      <textarea
                        className="p-4 border-x-0 border-t-0 border-b-2  w-full border-b-primary-color text-white text-sm bg-transparent "
                        placeholder="Nous souhaitons vous rencontre pour faire au mieux notre choix!"
                        name="message"
                      ></textarea>
                    </div>
                    <div className="flex justify-center items-center">
                      <button className="p-3 rounded-lg text-white w-44 md:w-64 bg-primary-color hover:opacity-80 transition-all text-sm">
                        Envoyer le message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
