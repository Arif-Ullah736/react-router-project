import React from "react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const SignUpForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const submiteHandler = (e) => {
    e.preventDefault();

    if (formData.createPassword !== formData.confirmPassword) {
      toast.error("password do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Acount Created ");
    const userData = { ...formData };
    console.log(`Printing user data ${userData}`);
    navigate("/dashboard");
  };
  return (
    <div>
      <div className="text-white space-x-1 mt-5">
        <button className="bg-gray-700 rounded-md  px-2 py-0.5 opacity-70">
          Student
        </button>
        <button className="bg-gray-700 rounded-md  px-2 py-0.5 opacity-70">
          Instructer
        </button>
      </div>
      <form action="" onSubmit={submiteHandler} className="mt-5">
        {/* First Name and Last Name */}
        <div className="flex space-x-2">
          {/* First Name */}
          <label htmlFor="">
            <p>
              First Name <sup>*</sup>
            </p>
            <input
              type="text"
              value={formData.fname}
              name="fname"
              placeholder="Enter Firsr Name"
              required
              onChange={changeHandler}
              className="text-white w-full  rounded bg-gray-800 py-1 pl-2 mt-2"
            />
          </label>

          {/* Last  Name */}
          <label htmlFor="">
            <p>
              Last Name <sup>*</sup>
            </p>
            <input
              type="text"
              value={formData.lname}
              name="lname"
              placeholder="Enter Last Name"
              required
              onChange={changeHandler}
              className="text-white w-full  rounded bg-gray-800 py-1 pl-2 mt-2"
            />
          </label>
        </div>

        <label htmlFor="">
          <p>
            Email Address <sup>*</sup>
          </p>
          <input
            type="email"
            value={formData.email}
            name="email"
            required
            placeholder="Enter Email"
            onChange={changeHandler}
            className="text-white w-full  rounded bg-gray-800 py-1 pl-2 mt-2"
          />
        </label>

        {/* Create and Confirm Password */}
        <div className="flex space-x-2">
          {/* Create password */}
          <label htmlFor="" className="relative">
            <p>
              Create Password <sup>*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              value={formData.createPassword}
              name="createPassword"
              required
              placeholder="Enter Password"
              onChange={changeHandler}
              className="text-white w-full  rounded bg-gray-800 py-1 pl-2 mt-2"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-1 top-10"
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </label>

          {/* Confirm  password */}
          <label htmlFor="" className="relative">
            <p>
              Confirm Password <sup>*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              value={formData.confirmPassword}
              name="confirmPassword"
              required
              placeholder="Confirm Password"
              onChange={changeHandler}
              className="text-white w-full  rounded bg-gray-800 py-1 pl-2 mt-2"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-1 top-10"
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </label>
        </div>
        <button className="w-full bg-yellow-500 text-black font-bold rounded py-0.5 mt-4">
          Create Acount
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
