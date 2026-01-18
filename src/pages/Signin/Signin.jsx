import React from "react";
import googleIcon from "../../assets/google-icon.svg";
import appleIcon from "../../assets/apple-icon.svg";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()

  const handleSignin = async (data) => {
    toast.loading("signing in", { theme: "dark" });
    const userData = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post(`http://localhost:3000/api/user/login`, userData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        toast.dismiss();
        toast.success("successfully signned in", { theme: "dark" });
        setTimeout(() => {
          navigate('/')
        }, 1500);
      })
      .catch((error) => {
        toast.dismiss();
        toast.error(error.message, { theme: "dark" });
      });
  };

  return (
    <main className="flex justify-center items-center flex-1">
      <section className="w-84 min-w-80">
        <h2 className="text-2xl font-[regular2] leading-tight">
          What's your phone number or <br /> email?
        </h2>
        <form onSubmit={handleSubmit(handleSignin)} className="mt-2">
          <input
            {...register("email", {
              required: {
                value: true,
                message: "please enter your email",
              },
            })}
            className="w-full bg-[#F3F3F3] py-3 px-4 rounded-md placeholder:text-gray-600"
            type="email"
            placeholder="Enter your email"
          />
          {errors.email && <span className="text-red-600" >{errors.email.message}</span>}
          <input
            {...register("password", {
              required: {
                value: true,
                message: "please enter your password",
              },
            })}
            className="mt-4 w-full bg-[#F3F3F3] py-3 px-4 rounded-md placeholder:text-gray-600"
            type="password"
            placeholder="Enter your password"
          />
          {errors.password && <span className="text-red-600" >{errors.password.message}</span>}

          <button className="bg-black text-white w-full py-3 rounded-md mt-4 cursor-pointer hover:bg-zinc-800">
            Continue
          </button>
        </form>

        {/* or line  */}

        <div className="flex items-center gap-3 my-3">
          <div className="w-full bg-gray-400 h-0.5"></div>
          <div>or</div>
          <div className="w-full bg-gray-400 h-0.5"></div>
        </div>

        {/* social media login */}

        <div className="font-[medium]">
          <div className="w-full py-3 bg-[#e8e8e8] rounded-md flex justify-center items-center gap-2 cursor-pointer hover:bg-[#d1d1d1]">
            <img className="w-7" src={googleIcon} alt="" />
            <p>Continue With Google</p>
          </div>
          <div className=" mt-2 w-full py-3 bg-[#E8E8E8] rounded-md flex justify-center items-center gap-2 cursor-pointer hover:bg-[#d1d1d1]">
            <img className="w-7" src={appleIcon} alt="" />
            <p>Continue With Apple</p>
          </div>
        </div>
        <p className="text-xs font-[regular2] mt-12 leading-5">
          By continuing, you agree to calls, including by autodialer, <br />{" "}
          WhatsApp, or texts from Uber and its affiliates.
        </p>
      </section>
      <ToastContainer/>
    </main>
  );
};

export default Signin;
