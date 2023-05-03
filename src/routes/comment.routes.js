import { store } from "../controllers/commentController";

export const commentRoutes = (app) => {
  app.post("/comment", store);
};
