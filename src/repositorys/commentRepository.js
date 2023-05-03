import { prisma } from "../services/prisma";

export const createComment = async (data) => {
  return await prisma.comment.create({ data });
};

export const updateComment = async (data) => {
  return await prisma.comment.update({
    where: { id: data.id },
    data: { content: data.content },
  });
};

export const findComment = async (id) => {
  return await prisma.comment.findUnique({
    where: { id },
  });
};

export const deleteComment = async (id) => {
  return await prisma.comment.delete({
    where: { id },
  });
};
