const { Router } = require("express");
const ListController = require("./ListController");

const router = new Router();

router.get("/list", ListController.getList);
router.post("/addItem", ListController.createItem);

module.exports = router;
