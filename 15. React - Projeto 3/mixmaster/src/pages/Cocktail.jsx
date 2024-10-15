import { useLoaderData, Link, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  try {
    const searchTerm = params.id;
    const response = await axios(singleCocktailUrl.concat(searchTerm));
    return { drinks: response.data.drinks, searchTerm };
  } catch (e) {
    console.log(e);
    return e;
  }
};

const Cocktail = () => {
  const { drinks, searchTerm } = useLoaderData();
  const navigate = useNavigate();

  if (!drinks) {
    return <Navigate to="/" />;
  }
  console.log(drinks);
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = drinks[0];

  // ver array na consola os varios strIngredient
  const validIngredients = Object.keys(drinks[0]) // get keys
    .filter((vals) => {
      return vals.includes("strIngredient") && drinks[0][vals] !== null;
    })
    .map((strIngred) => drinks[0][strIngred]);
  console.log(Array.from(drinks[0]), Object.entries(drinks[0]));

  return (
    <div className="single-cocktail">
      <header>
        <button onClick={() => navigate(-1)} className="btn">
          back home
        </button>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img"></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {name}
          </p>
          <p>
            <span className="drink-data">category :</span> {category}
          </p>
          <p>
            <span className="drink-data">info :</span> {info}
          </p>
          <p>
            <span className="drink-data">glass :</span> {glass}
          </p>

          <p>
            <span className="drink-data">ingredients :</span>
            {validIngredients.map((item, index) => {
              return (
                <span className="ing" key={item}>
                  {item}
                  {index < validIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">instructions :</span> {instructions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cocktail;
