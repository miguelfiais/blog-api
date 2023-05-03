import { index, store } from "../controllers/postController";

export const postRoutes = (app) => {
  app.post("/post", store);
  app.get("/post", index);
};
