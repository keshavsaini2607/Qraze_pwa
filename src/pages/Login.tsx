import React, { useEffect, useState } from "react";
import { IonApp } from "@ionic/react";
import { useHistory } from "react-router";
import logo from "/logo.png";
import { login } from "../api/requests";
import { toast } from "react-toastify";
import "../theme/style.css";

const Login: React.FC = () => {
  const [showSplash, setShowSplash] = useState(
    localStorage.getItem("splashShown") !== "true"
  );
  const history = useHistory();

  const inputClass =
    "border border-black p-4 rounded-2xl bg-transparent focus:outline-none focus:ring-0";

  useEffect(() => {
    if (showSplash) {
      const timer = setTimeout(() => {
        setShowSplash(false);
        localStorage.setItem("splashShown", "true");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const values = e.target;
    const data = new FormData(values);
    const payload = Object.fromEntries(data);

    const { email, password } = payload;

    if (!email || !password) {
      toast.error("Email and Password is required!");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email as string)) {
      toast.error("Invalid email format!");
      return;
    }

    if ((password as string).length < 6) {
      toast.error("Password must be at least 6 characters!");
      return;
    }

    try {
      const response = await login(payload);
      console.log("Login Successful:", response);

      if (response) {
        const token = response?.backendTokens?.token;
        localStorage.setItem("token", token);
        toast.success("Login Successfully!");
        history.push("/active-offers");
      }
    } catch (error) {
      toast.error("Login Failed!");
      console.error("Error:", error);
    }
  };

  return (
    <IonApp>
      {showSplash ? (
        <div className="w-full md:w-[30%] flex items-center justify-center m-auto h-screen ">
          <img src={logo} className="w-[60px] animate-pulse" alt="Logo" />
        </div>
      ) : (
        <div className="w-full md:w-[30%] m-auto h-screen">
          <div className="flex flex-col items-center justify-start gap-10 p-5">
            <img src={logo} className="w-[50px]" alt="logo" />
            <h1 className="text-xl">Brand Login</h1>

            <form className="flex flex-col gap-4 w-full" onSubmit={handleLogin}>
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
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </IonApp>
  );
};

export default Login;
