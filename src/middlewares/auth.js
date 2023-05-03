import jwt from "jsonwebtoken";

export const authorization = (req, res, next) => {
  const authToken = req.headers.authorization;
  if (!authToken) {
    return res.status(401).json({ error: "Token not provieded" });
  }
  const token = authToken.split(" ")[1];
  try {
    jwt.verify(token, "32781ed9b4264f84e6a6c87e7327abc2", (error, decoded) => {
      if (error) {
        throw new Error();
      }
      req.userId = decoded.id;
      return next();
    });
  } catch (error) {
    return res.status(401).json({ error: "Token is invalid" });
  }
};
