import { createContext, useEffect, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import { getTotals } from "../utils/helperFunctions";
import cartItems from "./data";
const url = "https://www.course-api.com/react-useReducer-cart-project";

const initialValue = {
  loading: false,
  data: [...cartItems],
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cartArray, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //dispatch({ type: "LOADING" });
        // data ...
        //let data;
        //dispatch({ type: "DISPLAY_ITEMS", data });
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const { price, amount } = getTotals(cartArray.data);

  const clearCart = () => {};

  const clearItem = (id) => {};

  const increaseItem = (id) => {};

  const decreaseItem = (id) => {};

  return (
    <AppContext.Provider
      value={{
        clearCart,
        cartArray,
        clearItem,
        decreaseItem,
        increaseItem,
        price,
        amount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
