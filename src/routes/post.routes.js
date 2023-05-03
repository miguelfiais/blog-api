import { index, store } from "../controllers/postController";
import { authorization } from "../middlewares/auth";

export const postRoutes = (app) => {
  app.post("/post", authorization, store);
  app.get("/post", index);
};
