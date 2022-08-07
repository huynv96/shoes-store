import React, { useState,useEffect } from "react";
import {Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import "./sidebar.css";
import sidebar_items from "../../assets/JsonData/sidebar_routes.json";

const Sidebar = (props) => {
  const activeItem = sidebar_items.findIndex(
    (item) => item.route === props.location.pathname
  );
  const [inactive, setInactive] = useState(false);
  useEffect(() => {
    props.onCollapse(inactive);
  }, [inactive,props]);
  return (
    <div className={`sidebar ${inactive ? "toggle" : ""}`}>
      <div className="sidebar__logo">
        <h3>ADMIN</h3>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn tooltip">
          {inactive ? (
            <i class="bi bi-arrow-right-circle"></i>
          ) : (
            <i class="bi bi-arrow-left-circle"></i>
          )}
          <span class="tooltiptext">{`${!inactive?'Collapse':'Expand'}`}</span>
        </div>

        
      </div>

      {sidebar_items.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItem
            title={item.display_name}
            icon={item.icon}
            active={index === activeItem}
            sidebarMini={inactive}
            subMenus={item.subMenus || []}
          />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
