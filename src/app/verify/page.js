"use client";
import { useState } from "react";

export default function Verify() {
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    if (otp === "1234") {
      alert("Login Successful ✅");
    } else {
      alert("Wrong Code ❌");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Enter 4-digit Code</h2>

      <input
        type="text"
        maxLength="4"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleVerify}>Verify</button>
    </div>
  );
}
