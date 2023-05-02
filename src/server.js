import express from "express";
import { routes } from "./routes";

const app = express();
app.use(express.json());
routes(app);

app.listen("3001", () => {
  console.log("Server started");
});
