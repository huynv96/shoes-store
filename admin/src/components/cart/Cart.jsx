import React from "react";
import Grid from "../grid/Grid";
import "./cart.css";
import { Link } from "react-router-dom";
const Cart = (props) => {
  return (
    <div className="cart-container pc-3 tablet-12 mobile-12 gutter">
      <div className="cart-content">
      <Grid fuild={false}>
          <div className="cart__image pc-12 tablet-12 mobile-12">
            <img src={props.image} alt={props.name} />
          </div>
          <div className="cart__price pc-12 tablet-12 mobile-12">
            {props.price}
          </div>
          <div className="btn-container pc-12 tablet-12 mobile-12 gutter">
            <Grid fuild={false}>
              <div className="cart__btn cart__btn-edit pc-6 tablet-6 mobile-6 gutter">
                <Link to='/products/edit'>
                  <i className="fa fa-pen"></i>
                </Link>
              </div>
              <div className="cart__btn cart__btn-delete pc-6 tablet-6 mobile-6 gutter">
                <Link to="/product/delete">
                  <i className="fa fa-trash-alt"></i>
                </Link>
              </div>
            </Grid>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Cart;
