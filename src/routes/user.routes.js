import multer from "multer";
import { storage } from "../config/multer";
import { store } from "../controllers/userController";

const upload = multer({ storage });

export const userRoutes = (app) => {
  app.post("/user", upload.single("file"), store);
};
