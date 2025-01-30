import React, { useEffect, useState } from "react";
import { IonApp } from "@ionic/react";
import { useHistory } from "react-router";
import logo from "/logo.png";
import "../theme/style.css";

const Login: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const history = useHistory();

  const inputClass = "border border-black p-4 rounded-2xl ";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (e: any) => {
    e.preventDefault();

    history.push("/active-offers");
  };

  return (
    <IonApp>
      <div className="w-full md:w-[30%] m-auto h-screen">
        <div className="flex flex-col items-center justify-start gap-10 p-5">
          <img src={logo} className="w-[50px]" />
          <h1 className="text-xl">Brand Login</h1>

          <form className="flex flex-col gap-4 w-full">
            <input
              placeholder="UserName or email"
              name="email"
              className={inputClass}
            />
            <input
              placeholder="password"
              name="password"
              className={inputClass}
            />

            <button
              className="px-4 py-2 bg-black text-white rounded-2xl cursor-pointer w-full"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </IonApp>
  );
};

export default Login;
