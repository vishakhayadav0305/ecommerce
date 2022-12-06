//for adding items in cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

//for removing items from cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
