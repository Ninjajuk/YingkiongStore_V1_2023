import { Link,useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';


import { resetPasswordRequest } from '../../../API/authAPI';

export default function ForgotPasswordRequest() {
  const [error,setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [mailsent, setmailsent] = useState(false);

  const navigate = useNavigate()








  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      console.log(data)
      const response=await resetPasswordRequest(data)
      
      if(!response){
        setError(error.message);
      }else{
        setmailsent(true)
      }
    // //  const timeoutId = setTimeout(() => {
    // //   navigate('/reset-password');
    // // }, 2000);

    // // // Cleanup function to clear the timeout when the component unmounts
    // // return () => clearTimeout(timeoutId);
    //   }


    } catch (error) {
      setError(error.message);
   
 
    }
     finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {mailsent ? (
            <>
              <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-purple-700">
                Email Send Successfully
              </h1>
              <p className="mt-10 text-center text-sm text-gray-500">
                Please Check Your Mail for Verification.
              </p>
            </>
          ) : (
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-purple-700">
              Enter email to reset password
            </h2>
          )}
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {mailsent ? null : (
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    {...register("email", {
                      required: "email is required",
                      pattern: {
                        value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                        message: "email not valid",
                      },
                    })}
                    type="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {error && (
                    <p className="text-red-500">{error || error.message}</p>
                  )}
                  {/* {mailsent && <p className="text-green-500">Mail Sent</p>} */}
                </div>
              </div>
            )}

            <div>
              {loading ? (
                <button
                  className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  disabled
                >
                  Loading...
                </button>
              ) : (
                !mailsent && (
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Send Email
                  </button>
                )
              )}
            </div>
          </form>

          {mailsent ? //   Please Check Your Mail for Verification. // <p className="mt-10 text-center text-sm text-gray-500">
          //   <Link
          //     to="/login"
          //     className="font-semibold leading-6 text-purple-600 hover:text-purple-500"
          //   >
          //     Resend
          //   </Link>
          // </p>
          null : (
            <p className="mt-10 text-center text-sm text-gray-500">
              Send me back to{" "}
              <Link
                to="/login"
                className="font-semibold leading-6 text-purple-600 hover:text-purple-500"
              >
                Login
              </Link>
            </p>
          )}
        </div>
      </div>
    </>
  );
}