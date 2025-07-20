import React from "react";
import framImage from "../assets/frame.png";
import LogInForm from "./LogInform";
import SignUpForm from "./SignUpForm";
const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  return (
    <div className="text-white flex  space-x-5  justify-evenly pt-5   ">
      {/* Ceate form */}
      <div className="w-[350px] h-auto flex flex-col  space-y-2 ">
        <div>
          <h1 className="text-1xl font-bold  ">{title}</h1>
        </div>
        <div>
          <p className="text-gray-400">{desc1}</p>
          <p className="text-blue-400 opacity-70 italic">{desc2}</p>
        </div>
        <div>
          {formType === "signup" ? (
            <SignUpForm setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LogInForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </div>

        <div className="flex items-center justify-center">
          <div className="h-0.5 bg-gray-600 w-full rounded"></div>
          <p className="text-gray-600 font-bold">OR</p>
          <div className="h-0.5 bg-gray-600 w-full rounded"></div>
        </div>

        <div className="flex w-full justify-center">
          <button className="bg-gray-800 px-3 py-1 rounded">
            {" "}
            Sign in with Google
          </button>
        </div>
      </div>
      {/* for Image */}
      <div className="relative">
        <img
          src={framImage}
          alt=""
          className="h-[200px] w-[200px] object-cover "
        />
        <img
          src={image}
          alt=""
          className="h-[200px] w-[200px] object-cover absolute -top-1 right-2 bottom-4  "
        />
      </div>
    </div>
  );
};

export default Template;
