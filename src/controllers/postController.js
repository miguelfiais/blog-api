import { createPost, getPosts } from "../repositorys/postRepository";
import { postValidation } from "../validations/postValidations";

export const store = async (req, res) => {
  try {
    try {
      await postValidation.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }
    const userId = req.userId;
    const { title, content } = req.body;
    const post = await createPost({ userId, title, content });
    return res.status(201).json(post);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const index = async (req, res) => {
  try {
    const posts = await getPosts();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(400).json({ error });
  }
};
