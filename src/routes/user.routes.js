import { store } from "../controllers/userController";

export const userRoutes = (app) => {
  app.post("/user", store);
};
