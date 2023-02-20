import React from "react";

import imgProg from "../assets/img/imgProg.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full ">
        <div className="flex items-center h-full pt-8 ">
          <div className="flex-1 flex flex-col items-center lg:items-start ">
            <p className="text-lg text-accent text-md mb-[22px]">
              ¡Hola! Soy Fer 👋
            </p>
            <h1
              className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]"
              style={{ fontFamily: "Ubuntu, sans-serif" }}
            >
              Bienvenidos
              <br />
            </h1>
            <p
              className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left"
              style={{ fontFamily: "Ubuntu, sans-serif" }}
            >
              Soy un apasionado por la tecnología y el desarrollo de software, y
              en esta plataforma te muestro mis habilidades, proyectos y logros
              en el campo de la programación.
            </p>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end ">
            <img
              src={imgProg}
              alt=""
              className="rounded-2xl "
              style={{ height: "400px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
