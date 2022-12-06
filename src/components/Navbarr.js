import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Navbarr.css";
import { useSelector } from "react-redux";

function Navbarr() {
  const state = useSelector((state) => state.handleCart);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#" className="fw-bold fs-4">
          <NavLink
            to="/"
            style={{ textDecoration: "none" }}
            className="text-dark"
          >
            GOAT Collection
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className="nav-opt d-flex justify-content-center align-items-center">
              <NavLink
                to="/"
                style={{ textDecoration: "none" }}
                className="nav-link navbar-option text-dark mt-1 me-2 fw-bold ms-4"
              >
                Home
              </NavLink>
            </div>

            <div className="nav-opt">
              <NavLink
                to="/products"
                style={{ textDecoration: "none" }}
                className="nav-link text-dark mt-1 me-2 fw-bold ms-4"
              >
                Products
              </NavLink>
            </div>

            <div className="nav-opt">
              {/* <NavLink
                to="/about"
                style={{ textDecoration: "none" }}
                className="nav-link text-dark mt-1 me-2"
              >
                About
              </NavLink>
            </div>

            <div className="nav-opt">
              <NavLink
                to="/contact"
                style={{ textDecoration: "none" }}
                className="nav-link text-dark mt-1 me-2"
              >
                Contact
              </NavLink> */}
            </div>
          </Nav>
          <div className="buttons">
            <a href="#" className="btn btn-outline-dark">
              <i className="fa-sharp fa-solid fa-right-to-bracket me-1"></i>
              Login
            </a>
            <a href="#" className="btn btn-outline-dark ms-2">
              <i className="fa-solid fa-user me-1"></i>Register
            </a>
            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
              <i className="fa-solid fa-cart-shopping me-1"></i>Cart (
              {state.length})
            </NavLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
