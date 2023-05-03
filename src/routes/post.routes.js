import multer from "multer";
import { destroy, index, store, update } from "../controllers/postController";
import { authorization } from "../middlewares/auth";
import { storage } from "../config/multer";

const upload = multer({ storage });

export const postRoutes = (app) => {
  app.post("/post", upload.single("file"), authorization, store);
  app.get("/post", index);
  app.put("/post/:id", upload.single("file"), authorization, update);
  app.delete("/post/:id", authorization, destroy);
};
