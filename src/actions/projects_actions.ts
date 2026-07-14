"use server";

import { prisma } from "@/lib/prisma";

export async function testConnection() {
  const users = await prisma.user.findMany();

  console.log(users);

  return users;
}