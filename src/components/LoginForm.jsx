import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Home, Fingerprint, UserPlus, KeyRound } from "lucide-react";
import { Link } from "react-router-dom";

const Auth = () => {
  const [activeForm, setActiveForm] = useState("login");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(`${activeForm.toUpperCase()} Data:`, data);
    // Handle login/signup/forgot logic here
    reset();
  };

  const renderTitle = () => {
    if (activeForm === "login") return "LOGIN";
    if (activeForm === "signup") return "SIGN UP";
    return "FORGOT PASSWORD";
  };

  return (
    <div className="min-h-screen bg-[#FFF5EC] font-[Poppins] flex flex-col items-center">
      {/* Navbar */}
      <div className="w-full flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <img src="./src/assets/images/logo.png" alt="Logo" className="h-14 rounded-full" />
          
        </div>
        <div className="flex gap-6 items-center text-sm font-semibold text-black">
          <Link to="/" className="flex items-center gap-1 hover:text-[#D57A66]">
            <Home size={18} /> HOME
          </Link>
          <button onClick={() => setActiveForm("login")} className="flex items-center gap-1 hover:text-[#D57A66]">
            <Fingerprint size={18} /> LOGIN
          </button>
          <button onClick={() => setActiveForm("signup")} className="flex items-center gap-1 hover:text-[#D57A66]">
            <UserPlus size={18} /> SIGN UP
          </button>
          <button onClick={() => setActiveForm("forgot")} className="flex items-center gap-1 hover:text-[#D57A66]">
            <KeyRound size={18} /> FORGOT
          </button>
        </div>
      </div>

      {/* Auth Form */}
<form
  onSubmit={handleSubmit(onSubmit)}
  className="bg-[#FFF0DA] shadow-md rounded-3xl px-8 pt-10 pb-8 w-[90%] max-w-md mt-10"
>
  <h2 className="text-center text-xl font-bold text-black bg-[#A7C957] py-2 rounded-full mb-6">
    {renderTitle()}
  </h2>

  {/* SIGNUP FIELDS */}
  {activeForm === "signup" && (
    <>
      {/* Name */}
      <div className="mb-4">
        <label className="block text-black text-sm font-semibold mb-1">NAME</label>
        <input
          type="text"
          className={`w-full px-4 py-2 border-2 rounded-full focus:outline-none ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>
    </>
  )}

  {/* Email */}
  <div className="mb-4">
    <label className="block text-black text-sm font-semibold mb-1">EMAIL</label>
    <input
      type="email"
      className={`w-full px-4 py-2 border-2 rounded-full focus:outline-none ${
        errors.email ? "border-red-500" : "border-gray-300"
      }`}
      {...register("email", {
        required: "Email is required",
        pattern: {
          value: /^\S+@\S+$/i,
          message: "Enter a valid email",
        },
      })}
    />
    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
  </div>

  {/* Password */}
  {(activeForm === "login" || activeForm === "signup") && (
    <div className="mb-4">
      <label className="block text-black text-sm font-semibold mb-1">PASSWORD</label>
      <input
        type="password"
        className={`w-full px-4 py-2 border-2 rounded-full focus:outline-none ${
          errors.password ? "border-red-500" : "border-gray-300"
        }`}
        {...register("password", {
          required: "Password is required",
          minLength: { value: 6, message: "Minimum 6 characters" },
        })}
      />
      {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
    </div>
  )}

  {/* Confirm Password */}
  {activeForm === "signup" && (
    <div className="mb-4">
      <label className="block text-black text-sm font-semibold mb-1">CONFIRM PASSWORD</label>
      <input
        type="password"
        className="w-full px-4 py-2 border-2 rounded-full focus:outline-none border-gray-300"
        {...register("confirmPassword", {
          required: "Confirm password is required",
        })}
      />
    </div>
  )}

  {/* Mobile Number */}
  {activeForm === "signup" && (
    <div className="mb-4">
      <label className="block text-black text-sm font-semibold mb-1">MOBILE NUMBER</label>
      <input
        type="tel"
        className={`w-full px-4 py-2 border-2 rounded-full focus:outline-none ${
          errors.mobile ? "border-red-500" : "border-gray-300"
        }`}
        {...register("mobile", {
          required: "Mobile number is required",
          pattern: {
            value: /^[6-9]\d{9}$/,
            message: "Enter a valid 10-digit mobile number",
          },
        })}
      />
      {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>}
    </div>
  )}

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full bg-[#D57A66] hover:bg-[#c46450] text-white font-semibold py-2 rounded-full transition"
    disabled={!isValid}
  >
    {activeForm === "login"
      ? "LOGIN"
      : activeForm === "signup"
      ? "CREATE ACCOUNT"
      : "RESET PASSWORD"}
  </button>

  {/* Bottom Links */}
  <div className="text-center mt-4 text-sm text-[#5C4033]">
    {activeForm === "login" && (
      <>
        <span
          className="font-bold underline cursor-pointer"
          onClick={() => setActiveForm("forgot")}
        >
          FORGOT PASSWORD
        </span>{" "}
        |{" "}
        <span
          className="font-bold cursor-pointer"
          onClick={() => setActiveForm("signup")}
        >
          SIGN UP
        </span>
      </>
    )}
    {activeForm === "signup" && (
      <span
        className="font-bold cursor-pointer"
        onClick={() => setActiveForm("login")}
      >
        Already have an account? LOGIN
      </span>
    )}
  </div>

  <p className="text-xs text-center text-gray-500 mt-4">
    By joining and using Flavour Theory, you agree to our{" "}
    <span className="underline font-medium">Terms & Policies</span>
  </p>
</form>

    </div>
  );
};

export default Auth;
