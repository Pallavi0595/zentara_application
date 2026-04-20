import nodemailer from "nodemailer";

// ✅ Global OTP store (temporary)
if (!global.otpStore) {
  global.otpStore = {};
}

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return Response.json({ message: "Email is required" }, { status: 400 });
    }

    // ✅ Generate 4-digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000);

    // ✅ Store OTP with expiry (5 min)
    global.otpStore[email] = {
      otp,
      expiry: Date.now() + 5 * 60 * 1000,
    };

    // ✅ Validate env variables

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error("Email configuration missing in .env.local");
    }

    // ✅ Create transporter (Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail", // cleaner than host/port
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App Password ONLY
      },
    });

    // ✅ Send email
    await transporter.sendMail({
      from: `"OTP Service" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "OTP Verification",
      text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
    });

    return Response.json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("OTP ERROR:", error);

    return Response.json(
      { message: error.message || "Failed to send OTP" },
      { status: 500 },
    );
  }
}
