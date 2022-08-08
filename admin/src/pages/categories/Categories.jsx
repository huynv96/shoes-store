import React from "react";
import Grid from "../../components/grid/Grid";
import Button from "../../components/button/Button";
import "./categories.css";
import action from "../../assets/JsonData/action.json";
import Dropdown from "../../components/dropdown/Dropdown";

const Categories = () => {
  const renderListAction = (item, index) => (
    <div className="action-item" key={index}>
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  );
  return (
    <div className="categories">
      <div className="page-header">
        <h2>Categories</h2>
      </div>
      <div className="categories__content">
        <Grid fluid={false}>
          <div className="pc-4 tablet-12 mobile-12 gutter">
            <form>
              <div className="mb-4">
                <label for="product_name" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="form-control py-3"
                  id="product_name"
                />
              </div>
              <div className="mb-4">
                <label class="form-label">Images</label>
                <input class="form-control" type="file" />
              </div>
              <div className="mb-4">
                <label class="form-label">Description</label>
                <textarea
                  placeholder="Type here"
                  className="form-control"
                  rows="4"
                ></textarea>
              </div>
              <div className="btn__create ">
                <Button type="success" shape="round-1">
                  Create category
                </Button>
              </div>
            </form>
          </div>
          <div className="categories_tbl pc-8 tablet-12 mobile-12 gutter">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                    </div>
                  </th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th className="text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      />
                    </div>
                  </td>
                  <td>1</td>
                  <td>
                    <b>Men clothes</b>
                  </td>
                  <td>Men clothes</td>
                  <td>
                    <Dropdown
                      icon="fas fa-ellipsis-h"
                      contentData={action}
                      renderItems={(item, index) =>
                        renderListAction(item, index)
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      />
                    </div>
                  </td>
                  <td>1</td>
                  <td>
                    <b>Men clothes</b>
                  </td>
                  <td>Men clothes</td>
                  <td>
                    <Dropdown
                      icon="fas fa-ellipsis-h"
                      contentData={action}
                      renderItems={(item, index) =>
                        renderListAction(item, index)
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      />
                    </div>
                  </td>
                  <td>1</td>
                  <td>
                    <b>Men clothes</b>
                  </td>
                  <td>Men clothes</td>
                  <td>
                    <Dropdown
                      icon="fas fa-ellipsis-h"
                      contentData={action}
                      renderItems={(item, index) =>
                        renderListAction(item, index)
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Categories;
