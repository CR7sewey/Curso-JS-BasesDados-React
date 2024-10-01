import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const handleSubmit = (e) => {};

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form">
        {" "}
        {/** falta onSubmit */}
        <label htmlFor="amount">paragraphs:</label>
        {/** input */}
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">{/** iterar sobre text */}</article>
    </section>
  );
};
export default App;
