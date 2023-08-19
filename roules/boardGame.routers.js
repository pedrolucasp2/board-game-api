module.exports = (app) => {
  const boardGameController = require("../controllers/boardGame.controller.js");

  var router = require("express").Router();

  router.post("/", boardGameController.create);

  router.get("/", boardGameController.findAll);

  router.get("/:id", boardGameController.findOne);

  router.put("/:id", boardGameController.update);

  router.delete("/:id", boardGameController.delete);

  router.delete("/", boardGameController.deleteAll);

  app.use("/api/games", router);
};
