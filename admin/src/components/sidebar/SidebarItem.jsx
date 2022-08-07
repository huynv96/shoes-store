import { NavLink } from "react-router-dom";

const SidebarItem = (props) => {
    const active = props.active ? "active" : "";
    const {subMenus} = props.subMenus;
    return (
      <div className="sidebar__item">
        <div className={`sidebar__item-inner ${active}`}>
          {<i className={props.icon}></i>}
          <span>{!props.sidebarMini && props.title}</span>
        </div>
        {subMenus && subMenus.length > 0 ? (
          <ul className={`sub-menu`}>
            {subMenus.map((menu, index) => (
              <li key={index}>
                {<i className={menu.icon}></i>}
                <NavLink to={menu.route}>{menu.display_name}</NavLink>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  };
export default SidebarItem
