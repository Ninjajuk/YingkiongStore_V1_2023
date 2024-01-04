

import { AUTH_URLS, BASE_URL } from "../constants";

const postBody = (body) => {
  return {
    method: "POST",
    body: JSON.stringify(body),
    headers: { 
      "content-type": "application/json",
      "x-auth-token": ""
    },
  }
}

const getBody = () => {
  return {
    method: "GET",
    // body: JSON.stringify(body),
    headers: { 
      "content-type": "application/json",
      "x-auth-token": ""
  },
  }
}

  
  export async function createUser(userData) {
    try {
      const resp = await fetch(`${BASE_URL}/${AUTH_URLS.SIGN_UP}`, postBody(userData));
  
      if (!resp.ok) {
        // handle the error
        const errorData = await resp.json();
        console.error("Error creating user:", errorData);
       throw new Error(errorData.message || "Failed to create user");
      }
  
      const data = await resp.json();
      return { data };
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }
  

  // export async function loginUser(userData) {
  //   try {
  //     const resp = await fetch("http://localhost:8000/auth/login", {
  //       method: "POST",
  //       body: JSON.stringify(userData),
  //       headers: { "content-type": "application/json" },
  //     });
  
  //     if (!resp.ok) {
  //       const errorData = await resp.json();
  //       console.error("Login error:", errorData);
  //       throw new Error("Invalid credentials"); 
  //     }
  
  //     const data = await resp.json();
  //     return { data };
  //   } catch (error) {
  //     console.error("Error during login:", error);
  //     throw error;
  //   }
  // }
  export async function loginUser(userData) {
    try {
      const resp = await fetch("http://localhost:5000/api/authenticate/", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "content-type": "application/json" },
      });
  
      const data = await resp.json();
      console.log(data.data.message)
  
      if (!resp.ok) {
        const errorMessage = data.error || "Invalid credentials";
        throw new Error(errorMessage);
      }
  
      return { data };
    } catch (error) {
      console.error("Error during login:", error.message);
      throw error;
    }
  }
  




  
  export function checkAuth() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('/auth/check');
        if (response.ok) {
          const data = await response.json();
          resolve({ data });
        } else {
          const error = await response.text();
          reject(error);
        }
      } catch (error) {
        reject( error );
      }
  
    });
  }
  
  
  export function signOut(userId) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('/auth/logout');
        if (response.ok) {
          resolve({ data:'success' });
        } else {
          const error = await response.text();
          reject(error);
        }
      } catch (error) {
        console.log(error)
        reject( error );
      }
    });
  }
  
  
  export async function resetPasswordRequest(email) {
      try {
        const response = await fetch('http://localhost:8000/auth/send-otp', {
          method: 'POST',
          body: JSON.stringify(email),
          headers: { 'content-type': 'application/json' },
        });
        const data = await response.json();
        if (!response.ok) {
          const errorMessage = data.error || "Invalid Email.";
          throw new Error(errorMessage);
        } 
        return { data };
      } catch (error) {
        console.error("Error during login:", error.message);
        throw error;
      }
  
  
  }
  
  export function resetPassword(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('/auth/reset-password', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'content-type': 'application/json' },
        });
        if (response.ok) {
          const data = await response.json();
          resolve({ data });
        } else {
          const error = await response.text();
          reject(error);
        }
      } catch (error) {
        reject( error );
      }
  
    });
  }


  // Placeholder function for waiting for verification or token expiration
 export  async function waitForVerificationOrTokenExpiration(token) {
    const maxAttempts = 10; // You can adjust the number of attempts
    const delayBetweenAttempts = 300000; // Delay in milliseconds between attempts
  
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        // Call an API to check verification status or wait for token expiration
        const verificationStatus = await checkVerificationStatus(token);
  
        if (verificationStatus === 'verified') {
          // Verification successful, break out of the loop
          break;
        } else {
          // Verification not yet successful, wait before the next attempt
          await new Promise(resolve => setTimeout(resolve, delayBetweenAttempts));
        }
      } catch (error) {
        // Handle errors from the API call
        console.error('Error checking verification status:', error);
      }
    }
  }
  

//for checking verification status

export async function checkVerificationStatus(token) {

  //API call to check the verification status
  const resp = await fetch(`${BASE_URL}/api/authenticate`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token, 
    },
  });

  if (!resp.ok) {
    const errorData = await resp.json();
    throw new Error(errorData.message || 'Failed to check verification status');
  }

  const data = await resp.json();
  return data.status; 
}

