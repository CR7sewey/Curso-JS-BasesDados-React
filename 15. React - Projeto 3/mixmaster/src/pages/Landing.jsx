import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  try {
    const searchTerm = "a";
    const response = await axios(url.concat(searchTerm));
    return { drinks: response.data.drinks, searchTerm };
  } catch (e) {
    console.log(e);
    return e;
  }
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();
  console.log(drinks);
  return (
    <>
      <h2>home page</h2>
      <Link to="/about">About</Link>
    </>
  );
};

export default Landing;
