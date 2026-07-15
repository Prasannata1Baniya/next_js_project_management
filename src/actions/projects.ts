"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";

export async function createProject(formData: FormData) {
  const name = String(formData.get("name")).trim();

  const description = String(
    formData.get("description") || ""
  ).trim();

  if (!name) {
    throw new Error("Project name is required.");
  }

  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  await prisma.project.create({
    data: {
      name,
      description,
      userId: user.id,
    },
  });

  redirect("/projects");
}