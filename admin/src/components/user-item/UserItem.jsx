import React from "react";

const UserItem = () => {
  return (
    <div className="user-item">
      <div className="card card-user shadow-sm">
        <div className="card-header">
          <img src="../../assets/images/user.png" alt="User avatar" />
        </div>
        <div className="card-body">
          <h5 className="card-title mt-5">Admin</h5>
          <div className="card-text text-muted">
            <p className="m-0">Admin</p>
            <p>
              <a href="mailto:admin@example.com">admin@example.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
