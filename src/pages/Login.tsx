import React, { useEffect, useState } from "react";
import { IonApp } from "@ionic/react";
import { useHistory } from "react-router";
import logo from "/logo.png";
import "../theme/style.css";

const Login: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formObj = new FormData(form);
    const data = Object.fromEntries(formObj.entries());
    console.log("hello", data);
    history.push("/active-offers");
  };

  return (
    <IonApp>
      {showSplash ? (
        // Splash screen
        <div className="splash-screen">
          <img className="animated-logo" src={logo} alt="Logo" />
        </div>
      ) : (
        // Login form
        <form className="login-container" onSubmit={handleLogin}>
          <div className="login-box">
            <img className="logo" src={logo} alt="Logo" />
            <h2>Brand Login</h2>
            <input
              className="input-field"
              placeholder="Username & Email"
              type="email"
              name="email"
            />
            <input
              className="input-field"
              placeholder="Password"
              type="password"
              name="password"
            />
            <button className="login-button" type="submit">
              Login
            </button>
          </div>
        </form>
      )}
    </IonApp>
  );
};

export default Login;
