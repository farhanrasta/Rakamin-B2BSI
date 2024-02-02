
const express = require("express");
const MainController = require("../controllers/mainController");

const router = express. Router();
const mainController = new MainController();

router.get("/data", mainController.getAllData.bind(mainController)); 
router.get("/data/:id", mainController.getDataById.bind(mainController));

module.exports = router;