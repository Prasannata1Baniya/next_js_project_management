"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { createSession } from "@/lib/session";


//sign up function
export async function signUp(formData: FormData) {
  const name = String(formData.get("name")).trim();
  const email = String(formData.get("email")).trim().toLowerCase();
  const password = String(formData.get("password"));

  if (!name || !email || !password) {
    throw new Error("All fields are required.");
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    throw new Error("Email already exists.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  await createSession(user.id);

  redirect("/dashboard");
}


//Sign in function
export async function signIn(formData: FormData) {
  const email = String(formData.get("email")).trim().toLowerCase();
  const password = String(formData.get("password")); 
      if (!email || !password) {
    throw new Error("All fields are required.");
  }
  const user = await prisma.user.findUnique({
  where: {
    email,
  },
});

if (!user) {
  throw new Error("Invalid email or password.");
}
const isPasswordValid = await bcrypt.compare(
  password,
  user.password
);

if (!isPasswordValid) {
  throw new Error("Invalid email or password.");
}
await createSession(user.id);

redirect("/dashboard");

}