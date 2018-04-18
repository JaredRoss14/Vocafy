const router = require("express").Router();
const campaignController = require("../../controllers/campaignController");

// Matches with "/api/campaign"
router.route("/")
  .post(campaignController.create)
  .get(campaignController.findAll);

// Matches with "/api/campaign/:id"
router.route("/:id")
  .put(campaignController.update)
  .delete(campaignController.remove)
  .get(campaignController.findById)
  
module.exports = router;