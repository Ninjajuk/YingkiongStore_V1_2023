import React, { useState } from "react";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Logging in with email:", email, "and password:", password);
    console.log("Remember Me:", rememberMe);
    navigate("/dashboard");
  };

  const handleRegister = () => {
    // Add your registration logic here
    console.log("Redirecting to the registration page...");
    navigate("/signup");
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className=" bg-white flex justify-center items-center min-h-screen">
      <div className="w-full md:w-1/2 flex flex-col md:flex-row ">
        <div className=" md:block md:w-1/2 rounded-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt="Your Image"
            className="w-full h-full object-cover rounded-md "
            // style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <form
          className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 "
          onSubmit={handleLogin}
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
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <div className="w-full border border-gray-300 rounded px-6 py-2 focus:outline-none focus:border-blue-400">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full outline-none"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                navigate('/forgot-password');
              }}
            >
              Forgot Password
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 text-white rounded-lg py-2 hover:bg-purple-900 transition duration-300"
          >
            Login
          </button>
          <div className="flex justify-between mt-4">
            <p>Don't have an account</p>
            <button
              onClick={handleRegister}
              className="text-sky-600 underline"
            >
              Register
            </button>
          </div>

          {/* <div className="mt-4 flex justify-between items-center">
            <div className="border-t border-gray-400 flex-grow"></div>
            <p className="mx-2 text-gray-500">Or continue with</p>
            <div className="border-t border-gray-400 flex-grow"></div>
          </div> */}
    
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
