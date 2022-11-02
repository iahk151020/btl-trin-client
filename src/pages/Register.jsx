import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  return (
    <div>
      <h3>Username</h3>
      <input type="text" />
      <h3>Họ và tên</h3>
      <input type="text" />
      <h3>Mật khẩu</h3>
      <input type="password" />
      <h3>Xác nhận mật khẩu</h3>
      <input type="password" />
      <div>
        <button>Đăng kí</button>
      </div>
    </div>
  );
}
export default Register;
