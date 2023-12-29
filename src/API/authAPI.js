
// export function createUser1(userData) {
//     return new Promise(async (resolve) => {
//       const response = await fetch('/auth/signup', {
//         method: 'POST',
//         body: JSON.stringify(userData),
//         headers: { 'content-type': 'application/json' },
//       });
//       const data = await response.json();
//       resolve({ data });
//     });
//   }
  
  export async function createUser(userData) {
    try {
      const resp = await fetch("http://localhost:8000/auth/signup", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "content-type": "application/json" },
      });
  
      if (!resp.ok) {

        // handle the error
        const errorData = await resp.json();
        console.error("Error creating user:", errorData);
        throw new Error(errorData.error);
      }
  
      const data = await resp.json();
      return { data };
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }
  

  export async function loginUser(userData) {
    try {
      const resp = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "content-type": "application/json" },
      });
  
      if (!resp.ok) {
        const errorData = await resp.json();
        console.error("Login error:", errorData);
        throw new Error("Invalid credentials"); //  an error message based on  API response
      }
  
      const data = await resp.json();
      return { data };
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  }
  



  export function loginUser1(loginInfo) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('/auth/login', {
          method: 'POST',
          body: JSON.stringify(loginInfo),
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
  
  
  export function resetPasswordRequest(email) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('/auth/reset-password-request', {
          method: 'POST',
          body: JSON.stringify({email}),
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