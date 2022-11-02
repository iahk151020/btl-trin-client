import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setGlobalState } from "../states/global-states";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const loginHandler = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:8000/v1/auth/login`, { username, password })
      .then((res) => {
        console.log("đăng nhập thành công");
        setGlobalState("login", true);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Username</h3>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <h3>Password</h3>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <div>
        <button onClick={loginHandler}>Đăng nhập</button>
      </div>
    </div>
  );
}
export default Login;
