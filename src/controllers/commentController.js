import { createComment } from "../repositorys/commentRepository";
import { commentValidation } from "../validations/commentValidation";

export const store = async (req, res) => {
  try {
    try {
      await commentValidation.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }
    const comment = await createComment(req.body);
    return res.status(201).json(comment);
  } catch (error) {
    return res.status(400).json({ error });
  }
};
