import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action/index";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartBtn, setCartBtn] = useState("Add to Cart");

  const dispatch = useDispatch();
  const addProduct = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addCart(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delCart(product));
      setCartBtn("Add to Cart");
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);
  const Loading = () => {
    return (
      <>
        <h1>Loading....</h1>
      </>
    );
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 mt-5">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50 mt-5">
            {product.category}
          </h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa-sharp fa-solid fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark"
            onClick={() => addProduct(product)}
          >
            {cartBtn}
          </button>
          <NavLink to="/cart" className="btn btn-dark ms-2">
            Go to Cart
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container py-4">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
