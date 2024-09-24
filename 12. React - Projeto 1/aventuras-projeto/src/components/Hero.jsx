import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>Bem vindo!</h1>
        <p>Isto é uma pagina que estamos a criar num curso de React!</p>
        <a href="#tours" className="btn hero-btn">
          explore tours
        </a>
      </div>
    </section>
  );
}

export default Hero;
