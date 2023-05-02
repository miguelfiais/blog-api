import { createUser, findUser } from "../repositorys/userRepository";
import bcrypt from "bcrypt";
import { userValidation } from "../validations/userValidations";

export const store = async (req, res) => {
  try {
    try {
      await userValidation.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }

    const { name, email, password } = req.body;

    const userExist = await findUser(email);
    if (userExist) {
      return res.status(409).json({ error: "Email already exists" });
    }

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
