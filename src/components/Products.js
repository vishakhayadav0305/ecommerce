import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

const Products = () => {
  let componentMounted = true;
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  const Loading = () => {
    //  < div className="text-dark">Loading...</div>
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  };
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewellery Collection
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </div>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <Card className="h-100 text-center p-4" key={product.id}>
                  <Card.Img variant="top" src={product.image} height="250px" />
                  <Card.Body>
                    <Card.Title className="mb-0">
                      {product.title.substring(0, 12)}...
                    </Card.Title>
                    <Card.Text className="fw-bold">${product.price}</Card.Text>
                    {/* <Button variant="light" className="btn-outline-dark"> */}
                    <NavLink
                      to={`/products/${product.id}`}
                      style={{ textDecoration: "none" }}
                      className="btn btn-outline-dark"
                    >
                      Buy Now
                    </NavLink>
                    {/* </Button> */}
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="text-dark display-6 fw-bolder text-center">
              Latest Products
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
