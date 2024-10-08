export const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return;
  }
  if (action.type === "DISPLAY_ITEMS") {
    return;
  }
  if (action.type === "CLEAR_CART") {
    return;
  }
  if (action.type === "INCREASE") {
    return;
  }
  if (action.type === "DECREASE") {
    return;
  }

  if (action.type === "REMOVE") {
    return;
  }

  throw Error("Not valid.");
};
