import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <h1 className="text-dark">You have {state.length} items in cart</h1>
    </div>
  );
};

export default Cart;
