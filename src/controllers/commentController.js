import { createComment } from "../repositorys/commentRepository";
import { commentValidation } from "../validations/commentValidation";

export const store = async (req, res) => {
  try {
    try {
      await commentValidation.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }
    const userId = req.userId;
    const { content, postId } = req.body;
    const comment = await createComment({ content, postId, userId });
    return res.status(201).json(comment);
  } catch (error) {
    return res.status(400).json({ error });
  }
};
