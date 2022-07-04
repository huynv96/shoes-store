import axios from "axios";
import { CART_ADD_ITEM,CART_REMOVE_ITEM, CART_SAVE_PAYMETN_METHOD, CART_SAVE_SHIPPING_ADDRESS } from "../constants/CartContants";

export const addToCart =(id,qty) => async(dispatch,getState) =>{
    
    const {data} = await axios.get(`/api/products/${id}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            product:data._id,
            name: data.name,
            image: data.image,
            price:data.price,
            countInStock: data.countInStock,
            qty,        
        },
    });
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
}

// REMOVE FROM CART
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id,
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };

  // SAVE SHIPPING ADDRESS
export const saveShippingAddress = (data) => async (dispatch) => {
  console.log(data)
    dispatch({
      type: CART_SAVE_SHIPPING_ADDRESS,
      payload: data,
    });
  
    localStorage.setItem("shippingAddress", JSON.stringify(data));
  };

  // SAVE PAYMENT METHOD
export const savePaymentMethod = (data) => async (dispatch) => {
  console.log(data)
    dispatch({
      type: CART_SAVE_PAYMETN_METHOD,
      payload: data,
    });
  
    localStorage.setItem("paymentMethod", JSON.stringify(data));
  };