import { prisma } from "../services/prisma";

export const createUser = async (data) => {
  return await prisma.user.create({ data });
};

export const findUser = async (email) => {
  return await prisma.user.findUnique({
    where: { email },
  });
};
