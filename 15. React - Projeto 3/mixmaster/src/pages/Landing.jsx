import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

export const loader = async () => {
  try {
    const response = await axios(url);
    return { drinks: response.data.drinks };
  } catch (e) {
    console.log(e);
    return e;
  }
};

const Landing = () => {
  const data = useLoaderData();
  console.log(data.drinks);
  return (
    <>
      <h2>home page</h2>
      <Link to="/about">About</Link>
    </>
  );
};

export default Landing;
