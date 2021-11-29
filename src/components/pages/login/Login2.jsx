import React, { useState } from "react";

const Login2 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitForm = async () => {
    const arrData = {
      action: "loginapp",
      username: username,
      table: "m_user",
      playerid: password,
    };

    const requestOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " +
          btoa(`${process.env.REACT_APP_UNAME}:${process.env.REACT_APP_UPASS}`),
      },
      body: JSON.stringify(arrData),
    };

    console.log(requestOption);

    const response = await fetch(
      "https://api.wartek.xyz/api/v2/login",
      requestOption
    );
    const data = await response.json();
    console.log(data);
  };

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
                    name="username"
                    placeholder="Username"
                    className="form-control"
                    onChange={onChangeUsername}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="form-control"
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

export default Login2;
