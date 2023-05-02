import { prisma } from "../services/prisma";

export const createUser = async (data) => {
  return await prisma.user.create({ data });
};
