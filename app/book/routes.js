import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.post("/seed", (_, res) => {
  controller
    .seed()
    .then(() => {
      res.json({ message: "Seeded books" });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

// GET /api/books
router.get("/", (req, res) => {
  controller
    .allBooks()
    .then((books) => {
      // res.json() is a method that sends a JSON response
      res.json(books);
    })
    .catch((err) => {
      // 500 is the status code for internal server error
      res.status(500).json({ message: err.message });
    });
});

export default router;
