import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

export async function POST(req) {
  try {
    await connectDB();
    await User.sync();

    const { email, password } = await req.json();

    const existing = await User.findOne({ where: { email } });

    if (existing) {
      return Response.json({ message: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      email,
      password: hashedPassword,
    });

    return Response.json({ message: "Registered successfully" });
  } catch (err) {
    return Response.json({ message: err.message }, { status: 500 });
  }
}
