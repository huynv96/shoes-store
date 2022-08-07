import React from "react";
import Grid from "../../components/grid/Grid";
import { Link } from "react-router-dom";
import Table from "../../components/table/Table";
import Badge from "../../components/badge/Badge";
import "./orders.css";
const Orders = () => {
  const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

  const renderOrderBody = (item, index) => (
    <tr key={index}>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.total}</td>
      <td>{item.paid}</td>
      <td>{item.date}</td>
      <td>
        <Badge type={orderStatus[item.status]} content={item.status} />
      </td>
      <td>
        <i className={item.action}></i>
      </td>
    </tr>
  );
  const latestOrders = {
    header: [
      "Name",
      "Email",
      "Total",
      "Paid",
      "Date",
      "Status",
      "Action",
    ],
    body: [
      {
        name: "Women Red Heels Sandal",
        email: "user@example.com",
        total: "$45,789",
        paid: "Paid At Today 23:56 AM",
        date: "Dec 12 2021",
        status: "shipping",
        action: "fas fa-eye",
      },
      {
        name: "Women Red Heels Sandal",
        email: "user@example.com",
        total: "$45,789",
        paid: "Paid At Today 23:56 AM",
        date: "Dec 12 2021",
        status: "paid",
        action: "fas fa-eye",
      },
      {
        name: "Women Red Heels Sandal",
        email: "user@example.com",
        total: "$45,789",
        paid: "Paid At Today 23:56 AM",
        date: "Dec 12 2021",
        status: "pending",
        action: "fas fa-eye",
      },
      {
        name: "Women Red Heels Sandal",
        email: "user@example.com",
        total: "$45,789",
        paid: "Paid At Today 23:56 AM",
        date: "Dec 12 2021",
        status: "refund",
        action: "fas fa-eye",
      },
      {
        name: "Women Red Heels Sandal",
        email: "user@example.com",
        total: "$45,789",
        paid: "Paid At Today 23:56 AM",
        date: "Dec 12 2021",
        status: "pending",
        action: "fas fa-eye",
      },
    ],
  };

  const orderStatus = {
    shipping: "primary",
    pending: "warning",
    paid: "success",
    refund: "danger",
  };
  return (
    <div className="orders">
      <div className="page-header">
        <h2>Orders</h2>
      </div>
      <div className="orders__content">
        <div className="product__filer">
          <Grid fuild={false}>
            <div className="product__search pc-4 tablet-12 mobile-12">
              <input type="text" placeholder="Filter product..." />
              <i className="bx bx-search"></i>
            </div>
            <div className="pc-2 tablet-6 mobile-12 gutter">
              <select className="form__select">
                <option value="">All Category</option>
                <option value="">Electronics</option>
                <option value="">Clothing</option>
                <option value="">Something else</option>
              </select>
            </div>
            <div className="pc-2 tablet-6 mobile-12 gutter">
              <select className="form__select">
                <option value="">Last Added</option>
                <option value="">Cheap first</option>
                <option value="">Most viewed</option>
              </select>
            </div>
          </Grid>
        </div>
        <Grid fuild={false}>
          <div className="pc-12 tablet-12 mobile-12">
            <div className="card">
              <div className="card__header">
                <h3>Orders</h3>
              </div>
              <div className="card__body">
                <Table
                  headData={latestOrders.header}
                  renderHead={(item, index) => renderOrderHead(item, index)}
                  bodyData={latestOrders.body}
                  renderBody={(item, index) => renderOrderBody(item, index)}
                />
              </div>
              <div className="card__footer">
                <Link to="/">view all</Link>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Orders;
