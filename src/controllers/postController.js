import {
  createPost,
  deletePost,
  findPost,
  getPosts,
  updatePost,
} from "../repositorys/postRepository";
import {
  postValidation,
  updatePostValidation,
} from "../validations/postValidations";

export const store = async (req, res) => {
  try {
    try {
      await postValidation.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }
    const userId = req.userId;
    const { title, content } = req.body;

    let image;
    if (req.file) {
      image = req.file.filename;
    }
    const post = await createPost({ userId, title, content, image });
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

export const update = async (req, res) => {
  try {
    try {
      await updatePostValidation.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }

    const { id } = req.params;
    const userId = req.userId;

    const post = await findPost(id);
    if (userId !== post.userId) {
      return res.status(409).json({ error: "You cannot change this post" });
    }

    let image;
    if (req.file) {
      image = req.file.filename;
    }

    const { title, content } = req.body;
    const newPost = await updatePost({ id, title, content, image });

    return res.status(200).json(newPost);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const post = await findPost(id);
    if (userId !== post.userId) {
      return res.status(409).json({ error: "You cannot delete this post" });
    }

    await deletePost(id);

    return res.status(200).json();
  } catch (error) {
    return res.status(400).json({ error });
  }
};
