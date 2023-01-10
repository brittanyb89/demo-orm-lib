import { Router } from "express";
const router = Router();

// GET /api/books
router.get("/", (req, res) => {
  res.send("GET /api/books");
});

export default router;
