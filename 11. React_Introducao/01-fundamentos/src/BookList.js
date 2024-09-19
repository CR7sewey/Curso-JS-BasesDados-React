import React from "react";
import book1 from "./images/book-1.jpg";

const primeiroBook = {
  autor: "Jordan Moore",
  titulo: "Factos sobre a mente humana",
  img: book1,
};
const segundoBook = {
  autor: "James Clear",
  titulo: "Atomic Habits",
  img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        titulo={primeiroBook.titulo}
        autor={primeiroBook.autor}
        imagem={primeiroBook.img}
      />
      <Book
        titulo={segundoBook.titulo}
        autor={segundoBook.autor}
        imagem={segundoBook.img}
      />
    </section>
  );
}

export default BookList;

const Book = ({ titulo, autor, imagem }) => {
  return (
    <article className="book">
      <img src={imagem} alt="Factos sobre a mente humana" />
      <h2>{titulo}</h2>
      <h4>{autor} </h4>
    </article>
  );
};

/*
const Imagem = () => <img src={book1} alt="Factos sobre a mente humana" />;
const Titulo = () => {
  return <h2>Factos sobre a mente humana</h2>;
};
const Autor = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}>
    Jordan Moore
  </h4>
);*/
