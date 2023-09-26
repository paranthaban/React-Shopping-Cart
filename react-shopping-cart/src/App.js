/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  let [value, setvalue] = useState(0);

  const oper = (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText === "Add To cart") {
      setvalue(value + 1);
      e.target.innerText = "Remove from cart";
    } else {
      if (value > 0) setvalue(value - 1);
      e.target.innerText = "Add To cart";
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" id="cart" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill cart">
                  {value}
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>

      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP706/SP706-iphone_6_plus-mul_2x.png"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">iPhone 6</h5>

                    <b>₹ 35000.00</b>
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto"
                      href="#"
                      onClick={(e) => {
                        oper(e);
                      }}
                    >
                      {" "}
                      Add To cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute"
                style={{ top: " 0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>

                <img
                  className="card-img-top"
                  src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-3.jpg"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">iPhone 7</h5>

                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    <span className="text-muted text-decoration-line-through">
                      ₹50000.00
                    </span>
                    <b> ₹ 40000.00</b>
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div
                    className="text-center addcart"
                    onClick={(e) => {
                      oper(e);
                    }}
                  >
                    <a className="btn btn-outline-dark mt-auto" href="#">
                      Add To cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: " 0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>

                <img
                  className="card-img-top"
                  src="https://st3.depositphotos.com/1098692/18419/i/450/depositphotos_184191388-stock-photo-apple-iphone-8-plus-silver.jpg"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">iPhone 8</h5>

                    <span className="text-muted text-decoration-line-through">
                      $50.00
                    </span>
                    <b>₹ 45000.00</b>
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto"
                      href="#"
                      onClick={(e) => {
                        oper(e);
                      }}
                    >
                      Add To cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://st3.depositphotos.com/2234329/18471/i/450/depositphotos_184714904-stock-photo-black-apple-iphone-x-front.jpg"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">iPhone X</h5>

                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>

                    <b> ₹ 49999.00</b>
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto"
                      href="#"
                      onClick={(e) => {
                        oper(e);
                      }}
                    >
                      Add To cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>

                <img
                  className="card-img-top"
                  src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-3.jpg"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">iPhone 11 Pro</h5>

                    <span className="text-muted text-decoration-line-through">
                      $60.00
                    </span>
                    <b> ₹ 54999.00</b>
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto"
                      href="#"
                      onClick={(e) => {
                        oper(e);
                      }}
                    >
                      Add To cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-se-1.jpg"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">iPhone 12</h5>

                    <b>₹60000.00</b>
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto"
                      href="#"
                      onClick={(e) => {
                        oper(e);
                      }}
                    >
                      Add To cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute"
                style={{ top: " 0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>

                <img
                  className="card-img-top"
                  src="https://st2.depositphotos.com/1098692/44454/i/450/depositphotos_444548620-stock-photo-kiev-ukraine-january-2021-front.jpg"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">iPhone 13</h5>

                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>

                    <span className="text-muted text-decoration-line-through">
                      ₹80000.00
                    </span>
                    <b>₹70000.00</b>
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto"
                      href="#"
                      onClick={(e) => {
                        oper(e);
                      }}
                    >
                      Add To cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://images.news18.com/ibnlive/uploads/2023/06/untitled-design-2023-05-15t090606.627.jpg"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">iPhone 15</h5>

                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>

                    <b>₹99999.00</b>
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto"
                      href="#"
                      onClick={(e) => {
                        oper(e);
                      }}
                    >
                      Add To cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2023
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
