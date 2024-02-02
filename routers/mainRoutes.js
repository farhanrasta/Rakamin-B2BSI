const express = require("express");
const MainController = require("../controller");

const router = express.Router();
const mainController = new MeinController();

router.get("/data", mainController.getAllData.bind(mainController));
router.get("/data/:id", mainController.getDataById.bind(mainController));

module.exports = router;
git;
