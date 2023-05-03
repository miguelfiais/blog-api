import { destroy, index, store, update } from "../controllers/postController";
import { authorization } from "../middlewares/auth";

export const postRoutes = (app) => {
  app.post("/post", authorization, store);
  app.get("/post", index);
  app.put("/post/:id", authorization, update);
  app.delete("/post/:id", authorization, destroy);
};
