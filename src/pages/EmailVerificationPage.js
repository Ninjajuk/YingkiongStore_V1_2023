import React, { useEffect, useState } from 'react'
import VerifyEmail from '../components/auth/componentsAuth/VerifyEmail';
import EmailSuccessUserCreated from '../components/auth/componentsAuth/EmailSuccessUserCreated';
import EmailFailedveri from '../components/auth/componentsAuth/EmailFailedveri';
import { useSelector } from 'react-redux';
import {selectMailSent} from '../redux/authSlice'

const EmailVerificationPage = () => {

    let emailSent=useSelector(selectMailSent)
    const [isVerified, setIsVerified] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          emailSent=false;
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
        <EmailFailedveri emailSent={emailSent} />
      )}
    </>
  )
}

export default EmailVerificationPage