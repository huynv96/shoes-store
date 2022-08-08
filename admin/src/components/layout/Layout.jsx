import React, { useEffect, useState } from "react";

import "./layout.css";

import Sidebar from "../sidebar/Sidebar";
import TopNav from "../topnav/TopNav";
import Routes from "../Routes";

import { BrowserRouter, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import ThemeAction from "../../redux/actions/ThemeAction";
import Login from "../../pages/login/Login";

const Layout = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer);
  const [inactive, setInactive] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(ThemeAction.setMode(themeClass));

    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
            {props.location.pathname !== "/login" ? (
              <>
                <Sidebar
                  location={props.location}
                  onCollapse={(inactive) => {
                    setInactive(inactive);
                  }}
                />
                <div
                  className={`layout__content ${inactive ? "inactive" : ""}`}
                >
                  <TopNav />
                  <div className="layout__content-main">
                    <Routes />
                  </div>
                </div>
              </>
            ) : (
                <Login />
            )}
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;