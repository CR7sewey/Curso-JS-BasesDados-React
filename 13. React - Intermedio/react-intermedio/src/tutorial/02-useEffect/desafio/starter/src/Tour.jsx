import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  //const [readMore, setReadMore]
  return (
    <article className="single-tour">
      {/*img  className="img"*/}
      {/*span  className="tour-price"*/}
      <div className="tour-info">
        <h5>{name}</h5>

        <p>
          {/*logica readMore  para ver texto*/}
          {/*logica readMore  button className="info-btn"*/}
        </p>
        {/*logica removeTour  className="delete-btn btn-block btn"*/}
      </div>
    </article>
  );
};

export default Tour;
