import React from "react";

import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-primary min-h-[1400px]">
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2
            className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block"
            style={{ fontFamily: "Ubuntu, sans-serif" }}
          >
            Mis proyectos
          </h2>
          <br></br>
          <br></br>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
