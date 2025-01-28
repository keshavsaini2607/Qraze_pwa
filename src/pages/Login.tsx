import React, { useState } from "react";
import { IonApp, IonContent } from "@ionic/react";
import "../theme/style.css";
import logo from "/logo.png";
import { useHistory } from "react-router";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = () => {
    console.log("hello");
    history.push("/active-offers");
  };

  return (
    <IonApp>
      {/* <IonContent fullscreen={true}> */}
      <div className="login-container">
        <div className="login-box">
          <img className="logo" src={logo} alt="Logo" />
          <h2>Brand Login</h2>
          <input
            className="input-field"
            placeholder="Username & Email"
            type="email"
          />
          <input
            className="input-field"
            placeholder="Password"
            type="password"
          />
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
      {/* </IonContent> */}
    </IonApp>
  );
};
export default Login;
