import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { cookies } from "next/headers";


const prisma = new PrismaClient();

// encode secret key
const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET;
const secret = new TextEncoder().encode(SECRET_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!SECRET_KEY) {
      return NextResponse.json(
        { message: "No secret key found" },
        { status: 500 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      return NextResponse.json({ message: "User Not Found" }, { status: 401 });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    if(!user.active) {
      return NextResponse.json(
        { message: "Your account is not active" },
        { status: 401 }
      );
    }

    const token = await new jose.SignJWT({ user: user.id, role: user.role })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("2h")
      .sign(secret);

    cookies().set("token", token, {
      maxAge: 3600,
      httpOnly: true,
    });

    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
