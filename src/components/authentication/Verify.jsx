"use client";
import React, { useState } from "react";
import { Button, message } from "antd";
import OTPInput from "react-otp-input";


const Verify = () => {
//   const locale = useLocale();
  const [otp, setOtp] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [resendLoading, setResendLoading] = useState(false);
//   const [email] = useState(localStorage.getItem("userEmail") || "");

//   const handleVerify = async () => {
   

//     if (!email) {
//       message.error("Email not found. Please restart the reset process.");
//       return;
//     }

//     if (otp.length !== 5) {
//       message.error("Please enter the 5-digit OTP code.");
//       return;
//     }

//     const payload = { email, resetCode: Number(otp) };
    

//     setLoading(true); // Start loading spinner

//     try {
//       const response = await fetch(`${BaseUrl}/auth/verify-reset-otp`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const responseData = await response.json();
    

//       if (response.ok && responseData.success) {
//         message.success(responseData.message || "OTP verified successfully!");
//         window.location.href = `/${locale}/signIn/forgetpass/otp/resetpassword`;
//       } else {
//         message.error(responseData.message || "Failed to verify OTP.");
//       }
//     } catch (error) {
//       message.error("An unexpected error occurred. Please try again later.");
//       console.error("Unexpected Error:", error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const handleResend = async () => {
//     if (!email) {
//       message.error("Email not found. Please restart the reset process.");
//       return;
//     }

//     const payload = { email };

//     setResendLoading(true); // Start loading spinner

//     try {
//       const response = await fetch(`${BaseUrl}/auth/resend-reset-code`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const responseData = await response.json();

//       if (response.ok && responseData.success) {
//         toast.success("Reset code sent successfully!");
       
//       } else {
//         toast.error(responseData.message );
//       }
//     } catch (error) {
//       message.error("An unexpected error occurred while resending the code.");
//       console.error("Unexpected Resend Error:", error);
//     } finally {
//       setResendLoading(false); // Stop loading
//     }
//   };

  return (
    <div className="items-center justify-center px-4 flex min-h-screen bg-white">
      <div className="flex justify-center">
        <div className="bg-white lg:w-[500px] md:px-16 px-5 py-16 border">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Check your email
          </h2>
          <h3 className="text-[#333333] text-center mb-5">
            We sent a reset link to { "your email"}. Enter the 5-digit
            code mentioned in the email.
          </h3>
          <div className="flex justify-center mb-5">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={5}
              renderSeparator={<span className="mx-1"></span>}
              renderInput={(props) => (
                <input
                  {...props}
                  className="w-16 h-16 text-center bg-white text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  style={{ width: "40px", height: "50px" }}
                />
              )}
            />
          </div>

          {/* Verify OTP Button */}
          <button
            type="primary"
            block
            size="large"
            className="w-full py-2 bg-black text-white"
            // loading={loading} // Show loading spinner when verifying
            // onClick={handleVerify}
          >
            Verify Code
          </button>

          <span className="flex justify-center gap-1 mt-4">
            You have not received the email?{" "}
            <button
              type="link"
              className="font-semibold cursor-pointer"
            //   loading={resendLoading} // Show loading spinner when resending
            //   onClick={handleResend}
            >
              Resend
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Verify;
