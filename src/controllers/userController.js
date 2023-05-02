import { createUser } from "../repositorys/userRepository";

export const store = async (req, res) => {
  try {
    const user = await createUser(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
};
