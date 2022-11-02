import { useEffect, useReducer } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setGlobalState, useGlobalState } from "../../states/global-states";

export const LOGIN_ACTION = "login";
export const LOGOUT_ACTION = "logout";

export const reducer = (state, action) => {
  switch (action) {
    case LOGIN_ACTION:
      return true;
    case LOGOUT_ACTION:
      return false;
    default:
      throw new Error("Invalid action");
  }
};

function NavBar() {
  const [isLoggedIn] = useGlobalState("login");

  const logoutHandler = () => {
    setGlobalState("login", false);
  };

  return (
    <div>
      <nav>
        {isLoggedIn ? (
          <ul>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/login" onClick={logoutHandler}>
                Log out
              </Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/login">Đăng nhập</Link>
            </li>
            <li>
              <Link to="/register">Đăng kí</Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
