export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const bcrypt = (await import("bcryptjs")).default;
    const { connectDB } = await import("@/lib/db");
    const User = (await import("@/models/User")).default;

    await connectDB();

    const { email, password } = await req.json();

    if (!email || !password) {
      return Response.json(
        { message: "Email and password are required" },
        { status: 400 },
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    const existing = await User.findOne({
      where: { email: normalizedEmail },
    });

    if (existing) {
      return Response.json({ message: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email: normalizedEmail,
      password: hashedPassword,
    });

    return Response.json({
      message: "Registered successfully",
      user: {
        id: newUser.id,
        email: newUser.email,
      },
    });
  } catch (err) {
    console.error("REGISTER ERROR:", err);

    return Response.json({ message: err.message }, { status: 500 });
  }
}
