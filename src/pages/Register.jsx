import axios from "axios";
import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [fullName, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (password !== rePassword) {
      console.log("Mật khẩu nhập sai");
    } else {
      axios
        .post(`http://localhost:8000/v1/auth/register`, {
          fullName,
          username,
          password,
        })
        .then((res) => console.log(`Register successfully`))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <h3>Username</h3>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <h3>Họ và tên</h3>
      <input type="text" onChange={(e) => setFullname(e.target.value)} />
      <h3>Mật khẩu</h3>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <h3>Xác nhận mật khẩu</h3>
      <input type="password" onChange={(e) => setRePassword(e.target.value)} />
      <div>
        <button onClick={submitHandler}>Đăng kí</button>
      </div>
    </div>
  );
}
export default Register;
