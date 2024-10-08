import { createContext, useEffect, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import { getTotals } from "../utils/helperFunctions";
const url = "https://www.course-api.com/react-useReducer-cart-project";

const initialValue = {
  loading: false,
  data: [],
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cartArray, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "LOADING" });
        const data = await fetch(url);
        const data_json = await data.json();
        dispatch({ type: "DISPLAY_ITEMS", data: data_json });
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const { price, amount } = getTotals(cartArray.data);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const clearItem = (id) => {
    dispatch({ type: "REMOVE", id });
  };

  const increaseItem = (id) => {
    dispatch({ type: "INCREASE", id });
  };

  const decreaseItem = (id) => {
    dispatch({ type: "DECREASE", id });
  };

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
