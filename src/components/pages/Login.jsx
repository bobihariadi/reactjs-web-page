import React, { useState } from "react";
import { useRef } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const nama = useRef();

  const onChangeUsername = (e) => {
    const value = e.target.value;
    console.log(e);
    setUsername(value);
  };

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  async function submitForm(event) {
    event.preventDefault();

    try {
      // await Auth.signIn(username, password);
      alert(username);
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4">
              <div className="card-body">
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="form-control"
                    value={username}
                    onChange={onChangeUsername}
                    ref={nama}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    value={password}
                    onChange={onChangePassword}
                  />
                </div>
                <button className="btn btn-primary" onClick={submitForm}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
