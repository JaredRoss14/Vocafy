const router = require("express").Router();
const changeActivatorController = require("../../controllers/changeActivatorController");

// Matches with "/api/changeactivator"
router.route("/")
  .post(changeActivatorController.create);

// Matches with "/api/changeactivator/:id"
router
  .route("/:id")
  // .get(booksController.findById)
  // .put(booksController.update)
  // .delete(booksController.remove);

module.exports = router;