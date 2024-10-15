import React from "react";
import CocktailItem from "./CocktailItem";

const CocktailList = function ({ drinks }) {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktails found...</h4>
    );
  }
  return (
    <div className="cocktail-list">
      <div>
        {drinks.map((drink) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            drink;
          const drinkFormated = {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
          return <CocktailItem key={drink.idDrink} {...drinkFormated} />;
        })}
      </div>
    </div>
  );
};

export default CocktailList;
