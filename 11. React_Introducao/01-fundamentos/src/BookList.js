import React from "react";
import ReactDOM from "react-dom/client";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

export default BookList;

const Book = () => {
  return (
    <article className="book">
      <Imagem />
      <Titulo />
      <Autor />
    </article>
  );
};

const Imagem = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg"
    alt="Factos sobre a mente humana"
  />
);
const Titulo = () => {
  return <h2>Factos sobre a mente humana</h2>;
};
const Autor = () => <h4>Jordan Moore</h4>;
