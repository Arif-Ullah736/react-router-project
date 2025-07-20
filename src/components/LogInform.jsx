import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
const LogInform = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submiteHandler = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged in");
    navigate("/dashboard");
  };
  return (
    <form onSubmit={submiteHandler}>
      <label htmlFor="">
        <p>
          Email Address <sup className="text-red-800 ">*</sup>
        </p>
        <input
          type="email"
          value={formData.email}
          name="email"
          required
          placeholder="Enter First Name"
          onChange={changeHandler}
          className="text-white w-full border border-white rounded bg-gray-800 py-1 pl-2 mt-2"
        />
      </label>

      <label htmlFor="" className="relative top-1">
        <p>
          Password <sup className="text-red-800 ">*</sup>
        </p>
        <input
          type={showPassword ? "text" : "password"}
          value={formData.password}
          name="password"
          required
          placeholder="Enter Password"
          onChange={changeHandler}
          className="text-white w-full border border-white rounded bg-gray-800 py-1 pl-2 mt-2"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-4 bottom-[72px] "
        >
          {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </span>
        <Link to="#" className="relative left-45 text-green-600 opacity-60">
          <p>Forgot Password</p>
        </Link>
      </label>
      <button className="w-full bg-yellow-500 text-black font-bold rounded py-0.5 mt-4">
        Sign in
      </button>
    </form>
  );
};

export default LogInform;
