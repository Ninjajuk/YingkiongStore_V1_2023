import React, { useState } from "react";
// import { SnackbarProvider, useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
const initailUserState = {
  name: "",
  email: "",
  phone: "",
  password: ""
};
const RegistrationForm = () => {
  const [user, setUser] = useState(initailUserState);
//   const { enqueueSnackbar, closeSnackbar } = useSnackbar();
const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3030/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User data submitted:", data);
        // You can perform further actions on success, such as redirecting the user.
      } else {
        console.error("Error:", response.status);
        // Handle errors (e.g., display an error message)
      }
    } catch (error) {
      console.error("Error:", error);
    }

    console.log(user);
    setTimeout(() => {

      setUser(initailUserState);
    }, 0); // You can adjust the delay as needed
  };
  const handleLogin = () => {
    // Add your login redirection logic here
    console.log("Redirecting to login page...");
  };
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
            onSubmit={handleRegister}
          >
            <h2 className="text-2xl font-bold mb-6 text-purple-700">Register to YingKing Store</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your name"
                value={user.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your email"
                value={user.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-600">
                Phone
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your Phone"
                value={user.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your password"
                value={user.password}
                onChange={handleChange}
                required
              />
            </div>
            <button
     
              type="submit"
              className="w-full bg-purple-600 text-white rounded-lg py-2 hover:bg-purple-700 transition duration-300"
            >
              Register
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
            {/* <div className="mt-4 flex justify-between items-center">
              <div className="border-t border-gray-400 flex-grow"></div>
              <p className="mx-2 text-gray-500">Or continue with</p>
              <div className="border-t border-gray-400 flex-grow"></div>
            </div>
            <div className="flex mt-4 text-center gap-4">
              <button
                onClick={handleLogin}
                className="w-full bg-red-600 text-white rounded-lg py-2 hover:bg-green-600 transition duration-300"
              >
                Gmail
              </button>
              <button
                onClick={handleLogin}
                style={{ backgroundColor: "black" }}
                className="w-full bg-green-500 text-white rounded-lg py-2 hover:bg-green-600 transition duration-300"
              >
                Github
              </button>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
