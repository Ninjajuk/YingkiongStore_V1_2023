import React, { useState,useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import {createUserAsync,selectError,setLoading,selectsuccessFlag} from '../../../redux/authSlice'
import { useNavigate } from "react-router-dom";
import UserCreatedSuccessfully from "../../modal/UserCreatedAuccessful";
import { useDispatch, useSelector } from "react-redux";
import UserCreatedSuccessfullyPage from "./EmailSuccessUserCreated";
import { toast } from "react-toastify";


const RegistrationForm = () => {
  const loading = useSelector(setLoading);
  const error = useSelector(selectError);
 const successuser = useSelector(selectsuccessFlag);
 const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const notifyAdd = () => toast.success("User Created Successfully!");
  const {
    register,
    handleSubmit,
    reset, // Destructure reset from useForm
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data)
    try {
      await dispatch(createUserAsync(data));
      notifyAdd()
      // Reset the form upon successful user creation
      reset();
    } catch (error) {
            // Handle any Signup errors if needed
            console.error('Signup error:', error);
    }

  };


  useEffect(() => {
    // Check if the user is already authenticated (data available in localStorage)
    if (user) {
      // Redirect to a different page, e.g., the home page
      navigate('/signup/usercreatedsuccessfully');
    }
  }, [user, navigate]);
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row rounded-md shadow-md">
          <div className=" lg:block lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
              alt="Your Image"
              className="w-full h-full object-cover"
            />
          </div>
          <form
            className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/2"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="text-2xl font-bold mb-6 text-purple-700">
              Register to YingKing Store
            </h2>
            <div className="mb-4">
              {/* <label htmlFor="name" className="block text-gray-600">Name</label> */}
              <input
                type="text"
                id="name"
                name="name"
                {...register("name", {
                  required: "Name is required",
                })}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="mb-4">
              {/* <label htmlFor="email" className="block text-gray-600">Email</label> */}
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
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-4">
              {/* <label htmlFor="phone" className="block text-gray-600">Phone</label> */}
              <input
                type="phone"
                id="phone"
                name="phone"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your Phone"
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^[0-9]{10,}$/,
                    message: "Phone number must be at least 10 digits",
                  },
                })}
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div className="mb-4">
              {/* <label htmlFor="password" className="block text-gray-600">Password</label> */}
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your password"
                {...register("password", {
                  required: "password is required",
                })}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white rounded-lg py-2 hover:bg-purple-700 transition duration-300"
            >
              {/* Register */}
              {loading ? "Loading..." : "Register"}
            </button>
            <div className="flex justify-between mt-4">
              <p>Already have an account</p>
              <button
                onClick={() => navigate("/login")}
                className="text-sky-700 underline"
              >
                Login
              </button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </div>
      {user && <UserCreatedSuccessfullyPage/>}
    </>
  );
};

export default RegistrationForm;
