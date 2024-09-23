import React from "react";
import book1 from "./images/book-1.jpg";
import books from "./books";

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
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <>
      <h1>amazon melhores vendas</h1>
      <section className="booklist">
        {books.map((values, index) => {
          return (
            <Book
              {...values}
              getBook={getBook}
              key={values.id}
              number={index}
            />
          );
        })}
      </section>
    </>
  );
}

export default BookList;

const Book = (props) => {
  const { imagem, titulo, autor, getBook, id, number } = props;
  // console.log(props);
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <img src={imagem} alt={titulo} />
      <h2>{titulo}</h2>
      {/*<button onClick={getSingleBook}>{titulo}</button>*/}
      <h4>{autor}</h4>
      <span className="number">{`#${number + 1} Book`}</span>
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
