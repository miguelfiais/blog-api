import { store } from "../controllers/sessionController";

export const sessionRoutes = (app) => {
  app.post("/login", store);
};
