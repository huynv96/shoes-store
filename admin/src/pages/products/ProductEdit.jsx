import React from "react";
import Button from "../../components/button/Button";
import "./product-edit.css";
import Grid from "../../components/grid/Grid";
import { Link } from "react-router-dom";

const ProductEdit = () => {
  return (
    <div className="product-edit">
      <div className="product-header">
        <div className="page-header">
          <Link to='/products'>
            <Button type="main" shape="round-1">
              Go to products
            </Button>
          </Link>
          <h2>Update Product</h2>
          <Button type="success" shape="round-1">
            Publish now
          </Button>
        </div>
        <Grid fuild={false}>
          <div className="product-edit-content pc-8 tablet-12 mobile-12">
            <div className="mb-4">
              <label htmlFor="product-title" className="form-label">
                Product title
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="form-control"
                id="product_title"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="product-title" className="form-label">
                Price
              </label>
              <input
                type="number"
                placeholder="Type here"
                class="form-control"
                id="product_price"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="product-title" className="form-label">
                Count In Stock
              </label>
              <input
                type="number"
                placeholder="Type here"
                class="form-control"
                id="product_price"
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Description</label>
              <textarea
                placeholder="Type here"
                className="form-control"
                rows="7"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="form-label">Images</label>
              <input
                className="form-control"
                type="text"
                placeholder="Inter Image URL"
              />
              <input className="form-control mt-3" type="file" />
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default ProductEdit;
