import React, { useEffect, useState } from 'react';
import VerifyEmail from '../components/auth/componentsAuth/VerifyEmail';
import EmailSuccessUserCreated from '../components/auth/componentsAuth/EmailSuccessUserCreated';
import EmailFailedveri from '../components/auth/componentsAuth/EmailFailedveri';
import { useSelector } from 'react-redux';
import { selectMailSent } from '../redux/authSlice';

const EmailVerificationPage = () => {
  // const emailSent = useSelector(selectMailSent);
  const [isVerified, setIsVerified] = useState(true);
  const emailSent=false
  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await fetch('http://localhost:5000/api/authenticate');
        if (response.ok) {
          console.log('API call successful');
   // Extract token from the headers
   const token = response.headers.get('Authorization');
   console.log('Token:', token);
          // Set a timer to reset emailSent after 5 seconds
          const timer = setTimeout(() => {
            emailSent = false;
          }, 5000);

          // Do additional verification logic here

          // Set isVerified to true when verification is successful
          setIsVerified(true);

          // Clear the timer when verification is successful
          clearTimeout(timer);
        } else {
          emailSent = false;
          console.error('API call failed');
        }
      } catch (error) {
        console.error('Error during API call:', error.message);
      }
    };

    fetchData(); // Call the async function within useEffect

  }, []);

  return (
    <>
      {emailSent ? (
        <VerifyEmail setIsVerified={setIsVerified} />
      ) : isVerified ? (
        <EmailSuccessUserCreated />
      ) : (
        <EmailFailedveri emailSent={emailSent} />
      )}
    </>
  );
};

export default EmailVerificationPage;
