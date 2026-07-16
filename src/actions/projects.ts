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



export async function getProjects() {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const projects = await prisma.project.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
       createdAt: "desc"
    },
  });

  return projects;
}

export async function updateProject(
  projectId: string,
  formData: FormData
) {
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

  const project = await prisma.project.findUnique({
    where: {
      id: projectId,
    },
  });

  if (!project || project.userId !== user.id) {
    throw new Error("Unauthorized");
  }

  await prisma.project.update({
    where: {
      id: projectId,
    },
    data: {
      name,
      description,
    },
  });

  redirect("/projects");
}

export async function getProjectById(projectId: string) {
  return prisma.project.findUnique({
    where: {
      id: projectId,
    },
  });
}