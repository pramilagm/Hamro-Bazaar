import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-lg-3 my-9">
        <div className="card ">
          <div
            className="img-container p-5"
            onClick={() => console.log("You clicked me")}
          >
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                console.log("added to the cart");
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  in inCart
                </p>
              ) : (
                <i className="fas fa-cart-plus" />
              )}
            </button>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="font-italic text-orange mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all ls linear;
  }
  .card-footer {
    font-size: 1.2rem;
    background: transparent;
    border-top: transparent;
    transition: all ls linear;
  }
`;
