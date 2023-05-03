import { store } from "../controllers/commentController";
import { authorization } from "../middlewares/auth";

export const commentRoutes = (app) => {
  app.post("/comment", authorization, store);
};
