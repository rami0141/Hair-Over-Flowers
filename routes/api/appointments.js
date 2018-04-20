const router = require("express").Router();
const appointmentsController = require("../../controllers/appointmentsController.js");

// Matches with "/api/appointments"
router.route("/")
  .get(appointmentsController.findAll)
  .post(appointmentsController.create);

// Matches with "/api/appointment/:id"
router.route("/:id")
  .delete(appointmentsController.remove);

module.exports = router;