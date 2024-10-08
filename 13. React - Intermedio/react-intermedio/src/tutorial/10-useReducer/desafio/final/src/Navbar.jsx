import { FaCartPlus } from "react-icons/fa";
import { getTotals } from "../utils/helperFunctions";
import { useGlobalContext } from "./Context";
const Navbar = () => {
  const { amount } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h4>useReducer</h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
