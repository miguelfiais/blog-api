import { prisma } from "../services/prisma";

export const createPost = async (data) => {
  return await prisma.post.create({ data });
};

export const getPosts = async () => {
  return await prisma.post.findMany();
};

export const updatePost = async (data) => {
  return await prisma.post.update({
    where: { id: data.id },
    data: {
      title: data.title,
      content: data.content,
      image: data.image,
    },
  });
};

export const findPost = async (id) => {
  return await prisma.post.findUnique({
    where: { id },
  });
};

export const deletePost = async (id) => {
  return await prisma.post.delete({
    where: { id },
  });
};
