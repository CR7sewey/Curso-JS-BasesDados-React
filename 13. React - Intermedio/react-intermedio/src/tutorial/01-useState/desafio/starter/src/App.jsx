import { useState } from "react";
import data from "./data";

const App = () => {
  //const [pessoa, setPessoa]

  return (
    <main>
      <section className="container">
        <h3>5 Birthdays Today</h3>
        <div>
          {/* loop com data */}
          {/*<article className="person"></article> */}
        </div>
        <button type="button" className="btn btn-block">
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
