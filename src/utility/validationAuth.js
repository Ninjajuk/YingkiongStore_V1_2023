// import validator from 'validator';


// export function validateUserInput(userData) {
//   const errors = {};

//   if (!userData.fullName || userData.fullName.trim() === '') {
//     errors.fullName = 'Please enter fullname.';
//   }

//   if (!validator.isEmail(userData.email)) {
//     errors.email = 'Please enter a valid email.';
//   }

//   if (!validator.isMobilePhone(userData.mobile, 'any', { strictMode: false })) {
//     errors.mobile = 'Please enter a valid mobile number.';
//   }

//   if (!userData.password || userData.password.trim() === '') {
//     errors.password = 'Please enter a password.';
//   }

//   return errors;
// }
export const validateForm = (formData) => {
    const errors = {};
  
    if (!formData.firstName) errors.firstName = 'First Name is required';
    if (!formData.lastName) errors.lastName = 'Last Name is required';
    // if (!formData.email) errors.email = 'Email is required';
    if (!formData.phone) errors.phone = 'Phone number is required';
    if (!formData.colony) errors.colony = 'colony  is required';
    if (!formData.landmark) errors.landmark = 'landmark  is required';
    // if (!formData.address) errors.address = 'Address is required';
    // if (!formData.city) errors.city = 'City is required';
    // if (!formData.district) errors.district = 'District is required';
    // if (!formData.state) errors.state = 'State is required';
    // if (!formData.pincode) errors.pincode = 'Pincode is required';
    // if (!formData.country) errors.country = 'Country is required';
  
    return errors;
  };

  
  // formValidation.js
export const validateFormData = (formData) => {
    const errors = {};
  
    if (!formData.firstName) {
      errors.firstName = 'First name is required';
    }
  
    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
    }
  
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
  
    if (!formData.phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Phone number is invalid';
    }
  
    if (!formData.address) {
      errors.address = 'Address is required';
    }
  
    if (!formData.city) {
      errors.city = 'City is required';
    }
  
    if (!formData.district) {
      errors.district = 'District is required';
    }
  
    if (!formData.state) {
      errors.state = 'State is required';
    }
  
    if (!formData.pincode) {
      errors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      errors.pincode = 'Pincode is invalid';
    }
  
    if (!formData.country) {
      errors.country = 'Country is required';
    }
  
    return errors;
  };
  
  