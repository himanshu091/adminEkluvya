/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">Dashboard</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/builder", false)}`}
          aria-haspopup="true"
        >
          
        </li>
        {/*end::1 Level*/}

        {/* Components */}
        {/* begin::section */}
      
        {/* end:: section */}

        {/* Material-UI */}
        {/*begin::1 Level*/}
       
        {/*end::1 Level*/}

        {/* Bootstrap */}
        {/*begin::1 Level*/}
       
        {/*end::1 Level*/}

        {/* Applications */}
        {/* begin::section */}
        <li className="menu-section ">
          <h4 className="menu-text">Admin Roles</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>
        {/* end:: section */}

        {/* eCommerce */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/e-commerce",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
        
      
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/user-profile", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/sessions">
          <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
            </span>
            <span className="menu-text">View Created Session</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/bookings", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/user-profile">
          <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
            </span>
            <span className="menu-text">View Bookings</span>
          </NavLink>
        </li>
        <li className={`menu-item ${getMenuItemActive("/user-profile", false)}`}
          aria-haspopup="true">
          
          <NavLink className="menu-link" to="/teachers">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Book.svg")} />
            </span>
            <span className="menu-text">Teachers</span>
          </NavLink>
        </li>
        <li className={`menu-item ${getMenuItemActive("/user-profile", false)}`}
          aria-haspopup="true">
          
          <NavLink className="menu-link" to="/students">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Book.svg")} />
            </span>
            <span className="menu-text">Students</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* Custom */}
        {/* begin::section */}
        <li className="menu-section ">
          <h4 className="menu-text">Setting</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>
        {/* end:: section */}

        {/* Error Pages */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/error",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/ekhompage">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Code/Error-circle.svg")}
              />
            </span>
            <span className="menu-text">Log-Out</span>
           
          </NavLink>
          
        </li>
        {/*end::1 Level*/}
      </ul>

      {/* end::Menu Nav */}
    </>
  );
}
