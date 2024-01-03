import React, { useEffect, useState } from "react";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import useLoading from '../../../customhooks/Loading';
import {loginUser} from '../../../API/authAPI'

import { useForm, SubmitHandler } from "react-hook-form"
import {login} from '../../../redux/authSlice'
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [error,setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const loadingspinner = useLoading();
const dispatch=useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await loginUser(data);
      if(!response){
        setError(error.message);
      }else{
        dispatch(login(data))
        navigate('/')
      }
    } catch (error) {
      setError(error.message);
      console.error("Error during login:", error.message);
 
    } finally {
      setLoading(false);
    }
  };
  
  
  
  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <> 
          {loadingspinner ? (
       <div className="flex items-center justify-center h-screen">    <Circles
       height="80"
       width="80"
       color="#7b09e7"
       ariaLabel="circles-loading"
       wrapperStyle={{}}
       wrapperClass=""
       visible={true}
       /></div>

    ):(   
    <div className=" bg-white flex justify-center items-center min-h-screen">
    <div className="w-full md:w-1/2 flex flex-col md:flex-row ">
      <div className=" md:block md:w-1/2 rounded-md overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt="Your Image"
          className="w-full h-full object-cover rounded-md "
        />
      </div>
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 "
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-6 text-purple-700">
          Sign in to your account
        </h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                message: "email not valid",
              },
            })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
            placeholder="Enter your email"
            required
          />
   
        </div>
               {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-gray-600">
            Password
          </label>
          <div className="w-full border border-gray-300 rounded px-6 py-2 focus:outline-none focus:border-blue-400">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              {...register("password", {
                required: "password is required",
              })}
              className="w-full outline-none"
              placeholder="Enter your password"
              required
            />
       
            <button
              type="button"
              className="absolute right-5 top-9 focus:outline-none"
              onClick={toggleShowPassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
        </div>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2"
              checked={rememberMe}
              onChange={toggleRememberMe}
            />
            <label htmlFor="rememberMe" className="text-gray-600">
              Remember Me
            </label>
          </div>
          <button
            type="button"
            className="text-blue-500 hover:underline"
            onClick={() => {
              navigate("/forgot-password");
            }}
          >
            Forgot Password
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-700 text-white rounded-lg py-2 hover:bg-purple-900 transition duration-300"
        >
          {/* Login */}
          {loading ? "Loading..." : "Login"}
        </button>
        <div className="flex justify-between mt-4">
          <p>Don't have an account</p>
          <button
            onClick={() => navigate("/signup")}
            className="text-sky-600 underline"
          >
            Register
          </button>
        </div>
        {error && <p className="text-red-500">{error || error.message}</p>}
      </form>
    </div>
  </div>
    )}
  </>

  );
};

export default LoginForm;
