const router = require("express").Router();
const changeActivatorRoutes = require("./changeactivator");
const campaignRoutes = require("./campaign");


// API routes
router.use("/changeactivator", changeActivatorRoutes);
router.use("/campaign", campaignRoutes);

module.exports = router;