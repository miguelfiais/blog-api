import { commentRoutes } from "./comment.routes";
import { postRoutes } from "./post.routes";
import { userRoutes } from "./user.routes";

export const routes = (app) => {
  userRoutes(app);
  postRoutes(app);
  commentRoutes(app);
};
