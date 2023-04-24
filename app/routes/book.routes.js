const express = require("express");

const bookController = require("./../controllers/book.controller");
const router = express.Router();

router.post("/", bookController.createBook);
router.get("/", bookController.findAllBooks);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);
router.get("/:id", bookController.findBook);

module.exports = router;
