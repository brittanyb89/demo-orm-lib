import express from "express";
import bookRouter from "../book/routes.js";
const app = express();
const port = 3001;

// Middleware to set "json" parsing; to process incoming request bodies (e.g. POST requests - CREATE)
app.use(express.json());

app.use("/api/books", bookRouter);

app.listen("3000", () => {
  console.log(`Server started on port ${port}`);
});
