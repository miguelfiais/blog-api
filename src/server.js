import express from "express";
import { routes } from "./routes";
import { resolve } from "path";

const app = express();
app.use(express.json());
app.use("/image", express.static(resolve(__dirname, "../", "uploads")));
routes(app);

app.listen("3001", () => {
  console.log("Server started");
});
