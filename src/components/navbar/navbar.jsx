import { Link } from "react-router-dom";
import { setGlobalState, useGlobalState } from "../../states/global-states";

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
