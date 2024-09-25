import React from "react";
import Title from "./Title";
import { tours } from "../data";

export const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title titulo={"tours"} subTitulo={"!"} />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return (
            <article className="tour-card" key={tour.id}>
              <div className="tour-img-container">
                <img src={tour.imagem} className="tour-img" alt="" />
                <p className="tour-date">{tour.data}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tour.titulo}</h4>
                </div>
                <p>{tour.info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {tour.localizacao}
                  </p>
                  <p>{tour.duracao} days</p>
                  <p>from ${tour.custo}</p>
                </div>
              </div>
            </article>
          );
        })}{" "}
      </div>
    </section>
  );
};
