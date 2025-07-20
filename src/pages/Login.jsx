import React from "react";
import Template from "../components/Template";
import loginImage from "../assets/login.png";
const Login = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Welocome Back"
      desc1="Build skill for today,tomorrow and beyond"
      desc2="Education to future-proof uour career"
      image={loginImage}
      setIsLoggedIn={setIsLoggedIn}
    ></Template>
  );
};

export default Login;
