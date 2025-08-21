// Responsible for generating and handling otp mails.

import emailjs from 'emailjs-com';
import { db } from '../Firebase/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
// import { auth } from '../Firebase/firebaseConfig';

// Generating OTP
export const OTPGeneration = ()=>{
  return Math.floor(100000 + Math.random() * 900000)
};

// Send OTP via email using emailjs.
// ask gpt if below async code is written safe or not for async await.
export const sendOtpEmail = async (otp, userEmail)=>{

  const MY_SERVICE_ID = "service_2208qzm"
  const MY_TEMPLATE_ID = "template_09n4oqi"
  const MY_USER_KEY = "5FNtxKU7vboXsDI1M"

  const templateParams = {
    otp: otp,
    to_email: userEmail,
  };

  return await emailjs.send(MY_SERVICE_ID, MY_TEMPLATE_ID, templateParams, MY_USER_KEY)
    .then( (res)=>{
      console.log(`OTP sent: ${res.status} and ${res.text}`);
      return true;
    })
    .catch( (error)=>{
      // console.log(`Failed to send: ${error}`);
      console.error("Failed to send OTP. Error details:", error);
      return false;
    })
}

// Save OTP in firebase
export const OtpToFirebase = async (otp, userEmail)=>{
  const expTime = Date.now() + 5 * 60 * 1000; // Saving otp for 5 mins
  const otpDocRef = doc(db, 'otps', userEmail)

  try {
    await setDoc(otpDocRef, { otp, expTime });
    console.log('OTP saved to Firebase with expiration.');
    return true;
  } catch (error) {
    console.error('Error saving OTP to Firebase:', error);
    return false;
  }
}
