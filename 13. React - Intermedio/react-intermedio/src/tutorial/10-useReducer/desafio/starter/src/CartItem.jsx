import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { DECREASE, INCREASE, REMOVE } from "./actions";
const CartItem = ({ id, img, title, price, amount }) => {
  //const { clearItem, increaseItem, decreaseItem }

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className="item-price">${price}</span>
        {/* remove button */}
        <button className="remove-btn" onClick={() => console.log("Remove")}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => console.log("Increase")}>
          <FaChevronUp className="amount-icon" />
        </button>
        {/* amount */}
        <span className="amount">{amount}</span>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => console.log("Decrease")}>
          <FaChevronDown className="amount-icon" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
