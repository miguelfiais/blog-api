import {
  createComment,
  deleteComment,
  findComment,
  updateComment,
} from "../repositorys/commentRepository";
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

export const update = async (req, res) => {
  try {
    try {
      await commentValidation.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }
    const { id } = req.params;
    const userId = req.userId;

    const comment = await findComment(id);
    if (userId !== comment.userId) {
      return res.status(400).json({ error: "You cannot change this comment" });
    }

    const { content } = req.body;
    const newComment = await updateComment({ id, content });

    return res.status(200).json(newComment);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const post = await findComment(id);
    if (userId !== post.userId) {
      return res.status(409).json({ error: "You cannot delete this comment" });
    }

    await deleteComment(id);

    return res.status(200).json();
  } catch (error) {
    return res.status(400).json({ error });
  }
};
