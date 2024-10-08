import { FaCartPlus } from "react-icons/fa";
import { getTotals } from "../utils/helperFunctions";
const Navbar = () => {
  //const { amount } = ;
  return (
    <nav>
      <div className="nav-center">
        <h4>useReducer</h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">4</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
