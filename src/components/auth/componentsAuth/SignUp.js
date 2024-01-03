import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import {createUser} from '../../../API/authAPI'
import { useNavigate } from "react-router-dom";
import UserCreatedSuccessfully from "../../modal/UserCreatedAuccessful";
// const initailUserState = {
//   name: "",
//   email: "",
//   phone: "",
//   password: ""
// };
const RegistrationForm = () => {

  const [error,setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await createUser(data);
      if(!response){
        setError(error.message);
      }else{
        // dispatch(register(data))
        navigate('/signup/user')
      }
    } catch (error) {
      setError(error.message);
      console.error("Error during Register:", error.message);
 
    } finally {
      setLoading(false);
    }
  };

  // const [user, setUser] = useState(initailUserState);
  // const [isUser,setIsUSer]=useState(false)


  // const handleChange = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

  // const handleRegister = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // const response = await fetch("http://localhost:3030/register", {
  //     //   method: "POST",
  //     //   headers: {
  //     //     "Content-Type": "application/json"
  //     //   },
  //     //   body: JSON.stringify(user)
  //     // });

  //     // if (response.ok) {
  //     //   const data = await response.json();
  //     //   console.log("User data submitted:", data);
    
  //     // } else {
  //     //   console.error("Error:", response.status);
        
  //     // }
  //     setIsUSer(!isUser)
  //     navigate('/signup/user')
  
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }

  //   console.log(user);
  //   setTimeout(() => {

  //     setUser(initailUserState);
  //   }, 0); 
  // };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row rounded-md shadow-md">
          <div className=" md:block md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
              alt="Your Image"
              className="w-full h-full object-cover"
            />
          </div>
          <form
            className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2"
            noValidate
          onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="text-2xl font-bold mb-6 text-purple-700">Register to YingKing Store</h2>
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
            </div>
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

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
            </div>
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
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
            </div>
            {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white rounded-lg py-2 hover:bg-purple-700 transition duration-300"
            >
              {/* Register */}
              {loading ? "Loading..." : "Register"}
            </button>
            <div className="flex justify-between mt-4">
            <p>Already  have an account</p>
            <button
              onClick={()=>navigate('/login')}
              className="text-sky-700 underline"
            >
              Login
            </button>
          </div>
          {error && <p className="text-red-500">{error || error.message}</p>}
          </form>
        </div>
      </div>
      {/* {isUser && <UserCreatedSuccessfully/>} */}
    </>
  );
};

export default RegistrationForm;
