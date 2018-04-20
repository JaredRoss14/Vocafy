const router = require("express").Router();
const changeActivatorController = require("../../controllers/changeActivatorController");

// Matches with "/api/changeactivator"
router.route("/")
  .post(changeActivatorController.create)
  .get(changeActivatorController.findByIds);

// Matches with "/api/changeactivator/:id"
router.route("/:id")
  .get(changeActivatorController.findByIds)
  .delete(changeActivatorController.remove)
  .put(changeActivatorController.update);


module.exports = router;