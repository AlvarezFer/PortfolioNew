import React from "react";

import Image from "../assets/img/IMG_9964.jpg";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[400px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col" style={{ marginTop: "80px" }}>
              <h2
                className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block"
                style={{ fontFamily: "Ubuntu, sans-serif" }}
              >
                Fernando Álvarez
              </h2>
              <p
                className="mb-4 text-accent"
                style={{ fontFamily: "Ubuntu, sans-serif" }}
              >
                Developer Full Stack
              </p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8" style={{ fontFamily: "Ubuntu, sans-serif" }}>
                Mi objetivo es compartir mis conocimientos y experiencias con el
                mundo. Acá encontrarás una selección de mis proyectos más
                relevantes, así como una breve descripción de cada uno de ellos.
                Me enorgullece ser parte de la comunidad de programadores, y
                estoy muy emocionado de continuar aprendiendo y creciendo en
                esta industria. Si tenes alguna pregunta o deseas saber más
                sobre mi trabajo, no dudes en ponerte en contacto conmigo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
