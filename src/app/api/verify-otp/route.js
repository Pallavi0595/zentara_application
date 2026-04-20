export async function POST(req) {
  try {
    const { email, otp } = await req.json();

    const record = global.otpStore?.[email];

    if (!record) {
      return Response.json({ message: "No OTP found" }, { status: 400 });
    }

    if (record.expiry < Date.now()) {
      return Response.json({ message: "OTP expired" }, { status: 400 });
    }

    if (record.otp == otp) {
      return Response.json({ success: true });
    } else {
      return Response.json({ message: "Invalid OTP" }, { status: 400 });
    }
  } catch (error) {
    return Response.json({ message: "Error verifying OTP" }, { status: 500 });
  }
}
