import { prisma } from "../services/prisma";

export const createComment = async (data) => {
  return await prisma.comment.create({ data });
};
