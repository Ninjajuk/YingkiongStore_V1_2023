import React, { useEffect, useState } from 'react'
import VerifyEmail from '../components/auth/componentsAuth/VerifyEmail';
import EmailSuccessUserCreated from '../components/auth/componentsAuth/EmailSuccessUserCreated';
import EmailFailedveri from './EmailFailedveri';

const EmailVerificationPage = () => {

    const [emailSent, setEmailSent] = useState(true);
    const [isVerified, setIsVerified] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setEmailSent(false);
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