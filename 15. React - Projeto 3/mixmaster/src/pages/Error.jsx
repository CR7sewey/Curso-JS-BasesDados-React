import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <div className="error">
        <div>
          <img src={img} alt="not found" />
          <h3>Oh! </h3>
          <p>Não conseguimos encontrar a página que procuras</p>
          <Link to="/">back home</Link>
        </div>
      </div>
    );
  }
  return (
    <div className="error">
      <div>
        <h3>Algo Errado :(</h3>
      </div>
    </div>
  );
};

export default Error;
