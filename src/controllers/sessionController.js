import { findUser } from "../repositorys/userRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sessionValidation } from "../validations/sessionValidation";

export const store = async (req, res) => {
  try {
    if (!(await sessionValidation.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: "Make sure your password or emails is correct" });
    }
    const { email, password } = req.body;

    const user = await findUser(email);
    if (!user) {
      return res
        .status(400)
        .json({ error: "Make sure your password or emails is correct" });
    }

    const equals = await bcrypt.compare(password, user.password);
    if (!equals) {
      return res
        .status(400)
        .json({ error: "Make sure your password or emails is correct" });
    }
    return res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      token: jwt.sign({ id: user.id }, "32781ed9b4264f84e6a6c87e7327abc2", {
        expiresIn: "5d",
      }),
    });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
