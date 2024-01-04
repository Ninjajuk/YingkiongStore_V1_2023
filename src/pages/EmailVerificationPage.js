import React, { useEffect, useState } from 'react'
import VerifyEmail from '../components/auth/componentsAuth/VerifyEmail';
import EmailSuccessUserCreated from '../components/auth/componentsAuth/EmailSuccessUserCreated';
import EmailFailedveri from '../components/auth/componentsAuth/EmailFailedveri';
import {createUser} from '../API/authAPI'
import { useSelector } from 'react-redux';

const EmailVerificationPage = () => {

    const [emailSent, setEmailSent] = useState(true);
    const [isVerified, setIsVerified] = useState(false);
const user=useSelector(state=>state.auth.user)
    useEffect(() => {
        const timer = setTimeout(async() => {
          setEmailSent(false);
  
      // await  createUser(user)
   
        }, 5000);
    
        return () => clearTimeout(timer);
      }, []);

  return (
    <>
      {emailSent ? (
        <VerifyEmail setIsVerified={setIsVerified} />
      ) : isVerified ? (
        <EmailSuccessUserCreated />
      ) : (
        <EmailFailedveri setEmailSent={setEmailSent} />
      )}
    </>
  )
}

export default EmailVerificationPage