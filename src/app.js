import express from "express";
import cors from "cors";
import cookieSession from "cookie-session";
import dotenv from "dotenv";
import router from "./routes/index";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: process.env.COOKIE_KEY,
}));

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Welcome to  Donald Metacare coding test assessment app");
});
app.all("*", (req, res) => res
  .status(404)
  .json({ message: "Requested resource not found", data: null }));
// logout
app.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("/");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Running on: ${port}`);
});

export default app;
