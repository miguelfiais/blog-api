import { commentRoutes } from "./comment.routes";
import { postRoutes } from "./post.routes";
import { sessionRoutes } from "./sessions.routes";
import { userRoutes } from "./user.routes";

export const routes = (app) => {
  userRoutes(app);
  postRoutes(app);
  commentRoutes(app);
  sessionRoutes(app);
};
