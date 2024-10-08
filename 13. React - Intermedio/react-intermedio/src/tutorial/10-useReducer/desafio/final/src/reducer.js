export const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "DISPLAY_ITEMS") {
    const new_items = {
      ...state,
      loading: false,
      data: action.data,
    };
    return new_items;
  }
  if (action.type === "CLEAR_CART") {
    return { ...state, data: [] };
  }
  if (action.type === "INCREASE") {
    const new_data = state.data.map((values) => {
      if (values.id === action.id) {
        return { ...values, amount: values.amount + 1 };
      }
      return { ...values };
    });
    return { ...state, data: new_data };
  }
  if (action.type === "DECREASE") {
    const new_data = state.data.map((values) => {
      if (values.id === action.id) {
        return {
          ...values,
          amount: values.amount === 0 ? values.amount : values.amount - 1,
        };
      }
      return { ...values };
    });
    return { ...state, data: new_data };
  }

  if (action.type === "REMOVE") {
    const new_data = state.data.filter((values) => values.id !== action.id);
    return { ...state, data: new_data };
  }

  throw Error("Not valid.");
};
