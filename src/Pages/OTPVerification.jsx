import React, { useState, useContext } from "react";
import { OTPGeneration, sendOtpEmail, OtpToFirebase} from "../Utils/OTPGeneration";
import { AuthContext } from "../Context/AuthContext";
import { db } from "../Firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com';

const OTPVerification = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [feedback, setFeedback] = useState("");
  const { userData } = useContext(AuthContext);
  const nav = useNavigate();

  const userEmail = userData?.email;

  const sendBookingMail = async ()=>{
    const MY_SERVICE_ID = "service_2208qzm"
    const MY_TEMPLATE_ID = "template_13vovfg"
    const MY_USER_KEY = "5FNtxKU7vboXsDI1M"
  
    const templateParams = {
      to_email: userEmail,
    };

    return await emailjs.send(MY_SERVICE_ID, MY_TEMPLATE_ID, templateParams, MY_USER_KEY)
    .then( (res)=>{
      console.log(`Booking mail sent: ${res.status} and ${res.text}`);
      alert(`Booking confirmed, please check your email for further detail`)
      return true;
    })
    .catch( (error)=>{
      // console.log(`Failed to send: ${error}`);
      console.error("Failed to send Booking mail. Error details:", error);
      return false;
    })
  }
  
  const handleSendOTP = async () => {
    const generatedOtp = OTPGeneration();
    console.log(`Frommm OTP: ${userEmail}`);
    console.log(`GEEEEENNNNNN OTP: ${generatedOtp}`);
    setFeedback("Sending OTP...")
    const emailSent = await sendOtpEmail(generatedOtp, userEmail);
    if (emailSent) {
      await OtpToFirebase(generatedOtp, userEmail);
      setFeedback("OTP sent to your email.");
    } else {
      setFeedback("Failed to send OTP. Please try again.");
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleVerifyOTP = async () => {
    // This function will fetch and verify OTP, to be implemented
    // For now, just a placeholder
    setFeedback("Verifying OTP...");
    const inputOTP = otp.join("")
    try {
      const otpDocRef = doc(db, "otps", userEmail);
      const otpSnapshot = await getDoc(otpDocRef);

      if (otpSnapshot.exists()) {
        const { otp: savedOtp, expTime } = otpSnapshot.data();
        const currentTime = Date.now();

        if (currentTime > expTime) {
          setFeedback("OTP has expired. Please request a new one.");
        } else if (inputOTP == savedOtp) {
          setFeedback("OTP verified successfully!");

          // Additional actions upon successful verification
          toast.success("Order confirmed! 🚗"); // Show toast notification          
          setTimeout(() => {
            nav("/");
          }, 2000);

          // Send booking mail:- put under try catch as it might not send mail in every cases.
          sendBookingMail()
        } else {
          console.log(`Saved otp is: ${savedOtp} and input is ${inputOTP}`);
          
          setFeedback("Incorrect OTP. Please try again.");
        }
      } else {
        setFeedback("No OTP found. Please request a new one.");
      }
    }
    catch (error) {
      console.error("Error verifying OTP:", error);
      setFeedback("An error occurred. Please try again.");
    }

  };

  return (
    <div className="h-auto p-28 flex flex-col items-center justify-center bg-gray-100">
      <ToastContainer/>
      <div className="w-auto p-16 bg-white shadow-md rounded-lg">
        <h2 className="font-Mont text-3xl font-extrabold mb-4 text-center">
          easyGo.
        </h2>
        <div className="flex justify-center">
          <button
            className="w-1/3 mb-5 font-bold bg-mypurple-0 text-black hover:bg-mypurpledark-0 py-2 rounded"
            onClick={handleSendOTP}
          >
            Request OTP
          </button>
        </div>
        <div className="mt-20">
          <h2 className="text-lg font-semibold mb-4 text-center">Enter OTP</h2>
          <div className="flex justify-between mb-4 gap-5">
            {otp.map((value, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                value={value}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-center font-bold text-2xl border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                maxLength={1}
              />
            ))}
          </div>
        </div>
        <button
          className="w-full bg-mypurple-0 font-bold text-black hover:bg-mypurpledark-0 py-2 rounded"
          onClick={handleVerifyOTP}
        >
          Verify OTP
        </button>
        <p>{feedback}</p>
      </div>
    </div>
  );
};

export default OTPVerification;
