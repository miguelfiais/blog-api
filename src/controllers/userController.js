import { createUser } from "../repositorys/userRepository";
import bcrypt from "bcrypt";
export const store = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await createUser({
      name,
      email,
      password: hashPassword,
    });
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
};
