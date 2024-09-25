import React from "react";
import Title from "./Title";
import { services } from "../data";

export const Services = () => {
  return (
    <section className="section services" id="services">
      <Title titulo={"our"} subTitulo={"services"} />

      <div className="section-center services-center">
        {services.map((servicos) => {
          return (
            <article className="service" key={servicos.id}>
              <span className="service-icon">
                <i className={servicos.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{servicos.titulo}</h4>
                <p className="service-text">{servicos.texto}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
