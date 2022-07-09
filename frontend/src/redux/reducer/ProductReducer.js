import {
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_RESET,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
} from '../constants/ProductContants';
import { PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS } from '../constants/ProductContants';
//GET ALL PRODUCT
export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] };
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, 
                pages: action.payload.pages,
                page: action.payload.page,
                products: action.payload.products };
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// SINGLE PRODUCT
export const productDetailsReducer = (state = { product: { reviews: [] } }, action) => {
    switch (action.type) {
        case PRODUCT_DETAIL_REQUEST:
            return { loading: true, product: [] };
        case PRODUCT_DETAIL_SUCCESS:
            return { loading: false, product: action.payload };
        case PRODUCT_DETAIL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// CREATE REVIEW
export const productcCreateReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REVIEW_REQUEST:
            return { loading: true };
        case PRODUCT_CREATE_REVIEW_SUCCESS:
            return { loading: false, success: true };
        case PRODUCT_CREATE_REVIEW_FAIL:
            return { loading: false, error: action.payload };
        case PRODUCT_CREATE_REVIEW_RESET:
            return {};
        default:
            return state;
    }
};
