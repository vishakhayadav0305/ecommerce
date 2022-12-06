import React from "react";
import Card from "react-bootstrap/Card";
// import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Card className="bg-light text-white border-0">
        <Card.Img src="/assets/emma.jpg" alt="Card image" width="100vw" />
        <Card.ImgOverlay className="d-flex justify-content-center align-items-center flex-column">
          <Card.Title className="display-3 fw-bolder mb-0">
            NEW SEASON ARRIVALS
          </Card.Title>
          <Card.Text>
            <div className="container lead fs-2">CHECK OUT ALL THE TRENDS</div>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      {/* <Products /> */}
    </div>
  );
};

export default Home;
