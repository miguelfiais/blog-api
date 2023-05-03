import { prisma } from "../services/prisma";

export const createPost = async (data) => {
  return await prisma.post.create({ data });
};

export const getPosts = async () => {
  return await prisma.post.findMany();
};
