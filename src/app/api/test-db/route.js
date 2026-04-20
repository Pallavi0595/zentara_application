export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { connectDB } = await import("@/lib/db");

    await connectDB();

    return Response.json({
      message: "Database connected successfully",
    });
  } catch (error) {
    console.error("DB TEST ERROR:", error);

    return Response.json(
      { message: "Database connection failed" },
      { status: 500 },
    );
  }
}
