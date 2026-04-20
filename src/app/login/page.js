// "use client";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import "./login.css";

// export default function Login() {
//   const router = useRouter();

//   const [showForgot, setShowForgot] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [otp, setOtp] = useState("");
//   const [step, setStep] = useState(1);

//   // ✅ NEW STATES
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   // ✅ Login
//   const handleLogin = () => {
//     if (!email || !password) {
//       alert("Enter email & password");
//       return;
//     }

//     alert("Login API not connected yet 🚀");
//   };

//   // ✅ Send OTP
//   const handleSendOtp = async () => {
//     if (!email) {
//       alert("Enter email");
//       return;
//     }

//     try {
//       const res = await fetch("/api/send-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         alert("OTP sent to your email 📧");
//         setStep(2);
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       alert("Error sending OTP");
//     }
//   };

//   // ✅ Verify OTP
//   const handleVerifyOtp = async () => {
//     if (!otp) {
//       alert("Enter OTP");
//       return;
//     }

//     try {
//       const res = await fetch("/api/verify-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, otp }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         alert("OTP Verified ✅");
//         setStep(3); // 👉 Move to Reset Password
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       alert("Error verifying OTP");
//     }
//   };

//   // ✅ Reset Password
//   const handleResetPassword = async () => {
//     if (!newPassword || !confirmPassword) {
//       alert("Enter all fields");
//       return;
//     }

//     if (newPassword !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       const res = await fetch("/api/reset-password", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           password: newPassword,
//         }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         alert("Password reset successful ✅");

//         // Reset everything
//         setShowForgot(false);
//         setStep(1);
//         setEmail("");
//         setOtp("");
//         setNewPassword("");
//         setConfirmPassword("");
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       alert("Error resetting password");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="overlay"></div>

//       <div className="login-box">
//         <h2>{showForgot ? "Forgot Password" : "Login"}</h2>

//         {/* LOGIN UI */}
//         {!showForgot && (
//           <>
//             <div className="input-group">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <span className="icon">👤</span>
//             </div>

//             <div className="input-group">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <span className="icon">🔒</span>
//             </div>

//             <button className="login-btn" onClick={handleLogin}>
//               Continue
//             </button>

//             <p className="bottom-text">
//               <span onClick={() => setShowForgot(true)}>Forgot Password</span>
//             </p>
//           </>
//         )}

//         {/* FORGOT PASSWORD */}
//         {showForgot && (
//           <>
//             {/* STEP 1 */}
//             {step === 1 && (
//               <>
//                 <div className="input-group">
//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>

//                 <button className="login-btn" onClick={handleSendOtp}>
//                   Send OTP
//                 </button>
//               </>
//             )}

//             {/* STEP 2 */}
//             {step === 2 && (
//               <>
//                 <div className="input-group">
//                   <input
//                     type="text"
//                     maxLength="4"
//                     placeholder="Enter 4-digit OTP"
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value)}
//                   />
//                 </div>

//                 <button className="login-btn" onClick={handleVerifyOtp}>
//                   Verify OTP
//                 </button>
//               </>
//             )}

//             {/* STEP 3 */}
//             {step === 3 && (
//               <>
//                 <div className="input-group">
//                   <input
//                     type="password"
//                     placeholder="New Password"
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                   />
//                 </div>

//                 <div className="input-group">
//                   <input
//                     type="password"
//                     placeholder="Confirm Password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                   />
//                 </div>

//                 <button className="login-btn" onClick={handleResetPassword}>
//                   Reset Password
//                 </button>
//               </>
//             )}

//             <p className="bottom-text">
//               <span
//                 onClick={() => {
//                   setShowForgot(false);
//                   setStep(1);
//                 }}
//               >
//                 Back to Login
//               </span>
//             </p>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./login.css";

export default function Login() {
  const router = useRouter();

  const [showForgot, setShowForgot] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // ✅ LOGIN (CONNECTED TO API)
  const handleLogin = async () => {
    if (!email || !password) {
      alert("Enter email & password");
      return;
    }

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login successful ✅");

        // 👉 Redirect after login
        router.push("/dashboard"); // create this page or change path
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong");
    }
  };

  // ✅ Send OTP
  const handleSendOtp = async () => {
    if (!email) {
      alert("Enter email");
      return;
    }

    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("OTP sent to your email 📧");
        setStep(2);
      } else {
        alert(data.message);
      }
    } catch {
      alert("Error sending OTP");
    }
  };

  // ✅ Verify OTP
  const handleVerifyOtp = async () => {
    if (!otp) {
      alert("Enter OTP");
      return;
    }

    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("OTP Verified ✅");
        setStep(3);
      } else {
        alert(data.message);
      }
    } catch {
      alert("Error verifying OTP");
    }
  };

  // ✅ Reset Password
  const handleResetPassword = async () => {
    if (!newPassword || !confirmPassword) {
      alert("Enter all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          newPassword, // ✅ match backend key
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Password reset successful ✅");

        setShowForgot(false);
        setStep(1);
        setEmail("");
        setOtp("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        alert(data.message);
      }
    } catch {
      alert("Error resetting password");
    }
  };

  return (
    <div className="container">
      <div className="overlay"></div>

      <div className="login-box">
        <h2>{showForgot ? "Forgot Password" : "Login"}</h2>

        {/* LOGIN UI */}
        {!showForgot && (
          <>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="icon">👤</span>
            </div>

            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="icon">🔒</span>
            </div>

            <button className="login-btn" onClick={handleLogin}>
              Continue
            </button>

            <p className="bottom-text">
              <span onClick={() => setShowForgot(true)}>Forgot Password</span>
            </p>
          </>
        )}

        {/* FORGOT PASSWORD */}
        {showForgot && (
          <>
            {/* STEP 1 */}
            {step === 1 && (
              <>
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <button className="login-btn" onClick={handleSendOtp}>
                  Send OTP
                </button>
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <>
                <div className="input-group">
                  <input
                    type="text"
                    maxLength="4"
                    placeholder="Enter 4-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>

                <button className="login-btn" onClick={handleVerifyOtp}>
                  Verify OTP
                </button>
              </>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <>
                <div className="input-group">
                  <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>

                <div className="input-group">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <button className="login-btn" onClick={handleResetPassword}>
                  Reset Password
                </button>
              </>
            )}

            <p className="bottom-text">
              <span
                onClick={() => {
                  setShowForgot(false);
                  setStep(1);
                }}
              >
                Back to Login
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
