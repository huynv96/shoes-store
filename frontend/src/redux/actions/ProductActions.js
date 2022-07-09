import axios from "axios";
import { PRODUCT_CREATE_REVIEW_FAIL, PRODUCT_CREATE_REVIEW_REQUEST, PRODUCT_CREATE_REVIEW_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/ProductContants"
import { PRODUCT_DETAIL_FAIL,PRODUCT_DETAIL_REQUEST,PRODUCT_DETAIL_SUCCESS } from "../constants/ProductContants";
import { logout } from './UserAction';
export const listProduct =(keyword ='', pageNumber) => async(dispatch) =>{
    try{
        dispatch({type: PRODUCT_LIST_REQUEST});
        const {data} = await axios.get(`/api/products?keyword=${keyword}&pageNumber=${pageNumber}`);
        dispatch({type:PRODUCT_LIST_SUCCESS,payload: data})
    }
    catch(error){
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload:
            error.response  && error.response.data.message
            ?error.response.data.message
            :error.message
        })
    }
}

//SINGLE PRODUCT
export const listProductDetails =(id) => async(dispatch) =>{
    try{
        dispatch({type: PRODUCT_DETAIL_REQUEST});
        const {data} = await axios.get(`/api/products/${id}`);
        dispatch({type:PRODUCT_DETAIL_SUCCESS,payload: data})
    }
    catch(error){
        dispatch({
            type: PRODUCT_DETAIL_FAIL,
            payload:
            error.response  && error.response.data.message
            ?error.response.data.message
            :error.message
        })
    }
}

//PRODUCT REVIEW CREATE
export const createProductReview = (review) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_CREATE_REVIEW_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        console.log(review);
        const { data } = await axios.post(`/api/products/${review.productId}/review`, review, config);
        dispatch({ type: PRODUCT_CREATE_REVIEW_SUCCESS, payload: data });
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if (message === 'Not authorized, token failed') {
            dispatch(logout());
        }
        dispatch({
            type: PRODUCT_CREATE_REVIEW_FAIL,
            payload: message,
        });
    }
};