const express = require("express");
const router = express.Router();
const booksCtrl = require("../../controllers/api/books");

router.post("/add", booksCtrl.create);
router.get("/:userId", booksCtrl.getBookShelf)
router.delete("/:bookId/:userId", booksCtrl.deleteBook);

module.exports = router;