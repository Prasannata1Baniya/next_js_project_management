import { cookies } from "next/headers";
import { randomUUID } from "crypto";
import { prisma } from "@/lib/prisma";

const SESSION_DURATION = 1000 * 60 * 60 * 24 * 7; // 7 days


//creating session
export async function createSession(userId: string) {
  const token = randomUUID();

  const expiresAt = new Date(Date.now() + SESSION_DURATION);

  await (prisma as any).session.create({
    data: {
      token,
      expiresAt,
      userId,
    },
  });

  const cookieStore = await cookies();

  cookieStore.set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: expiresAt,
    path: "/",
  });
}

//get the logged in User
export async function getCurrentUser() {
  const cookieStore = await cookies();

  const token = cookieStore.get("session")?.value;

  if (!token) {
    return null;
  }

  const session = await (prisma as any).session.findUnique({
    where: {
      token,
    },
    include: {
      user: true,
    },
  });

  if (!session) {
    return null;
  }

  if (session.expiresAt < new Date()) {
    return null;
  }

  return session.user;
}

//delete session
export async function deleteSession() {
  const cookieStore = await cookies();

  const token = cookieStore.get("session")?.value;

  if (!token) {
    return;
  }

  await (prisma as any).session.deleteMany({
    where: {
      token,
    },
  });

  cookieStore.delete("session");
}
