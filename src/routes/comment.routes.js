import { destroy, store, update } from "../controllers/commentController";
import { authorization } from "../middlewares/auth";

export const commentRoutes = (app) => {
  app.post("/comment", authorization, store);
  app.put("/comment/:id", authorization, update);
  app.delete("/comment/:id", authorization, destroy);
};
