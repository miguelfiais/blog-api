import multer from "multer";
import { resolve, extname } from "path";
import { v4 } from "uuid";

export const storage = multer.diskStorage({
  destination: resolve(__dirname, "..", "..", "uploads"),
  filename: function (req, file, cb) {
    cb(null, v4() + extname(file.originalname));
  },
});
