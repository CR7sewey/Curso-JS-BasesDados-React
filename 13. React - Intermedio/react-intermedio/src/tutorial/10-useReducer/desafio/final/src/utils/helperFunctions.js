export const getTotals = (cartItems) => {
  // Amount
  let amt = 0;
  let tot_price = 0;

  for (let { price, amount } of cartItems.values()) {
    amt += parseFloat(amount);
    tot_price += parseFloat(price) * Number(amount);
  }
  return { price: Number(tot_price.toFixed(2)), amount: amt };
};
