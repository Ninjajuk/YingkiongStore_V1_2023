import React, { useEffect, useState } from 'react';
import VerifyEmail from '../components/auth/componentsAuth/VerifyEmail';
import EmailSuccessUserCreated from '../components/auth/componentsAuth/EmailSuccessUserCreated';
import EmailFailedveri from '../components/auth/componentsAuth/EmailFailedveri';
import { useSelector } from 'react-redux';
import { selectMailSent } from '../redux/authSlice';

const EmailVerificationPage = () => {
  const emailSent = useSelector(selectMailSent);
  const [isVerified, setIsVerified] = useState(false);
  const query = new URLSearchParams(window.location.search);
  const token = query.get('x-auth-token')
  console.log(token)
  console.log(query)
  useEffect(() => {
    const verifyEmail = async (token) => {
      try {
        const response = await fetch('http://localhost:5000/api/authenticate/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': `Bearer ${token}`, 
          },
        });


      } catch (error) {
        // Handle network or other errors
        setIsVerified(false);
      }
    };



    if (emailSent && token) {
      verifyEmail(token);
    }

    // Cleanup function to clear the timer
    const timer = setTimeout(() => {
      setIsVerified(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [emailSent]);



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
