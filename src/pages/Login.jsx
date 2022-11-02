import { useReducer } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { reducer, LOGIN_ACTION } from "../components/navbar/navbar";
import { setGlobalState } from "../states/global-states";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, dispatch] = useReducer(reducer, false);
  let navigate = useNavigate();

  const loginHandler = () => {
    // dispatch(LOGIN_ACTION);
    // localStorage.setItem("login", JSON.stringify(true));
    setGlobalState("login", true);
    navigate("/");
  };

  return (
    <div>
      <h3>Username</h3>
      <input type="text" />
      <h3>Password</h3>
      <input type="password" />
      <div>
        <button onClick={loginHandler}>Đăng nhập</button>
      </div>
    </div>
  );
}
export default Login;
