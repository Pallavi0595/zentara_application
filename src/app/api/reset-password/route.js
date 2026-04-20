import bcrypt from "bcryptjs";

// temporary user store (replace with DB later)
if (!global.users) {
  global.users = {};
}

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return Response.json(
        { message: "Email and password required" },
        { status: 400 },
      );
    }

    // ✅ hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ save/update user password
    global.users[email] = {
      password: hashedPassword,
    };

    return Response.json({ message: "Password reset successful" });
  } catch (error) {
    return Response.json(
      { message: "Error resetting password" },
      { status: 500 },
    );
  }
}
