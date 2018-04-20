const router = require("express").Router();
const appointmentRoutes = require("./appointments");
const userRoutes = require("./user");

// // Appointment routes
router.use("/appointments", appointmentRoutes)

router.use("/user", userRoutes)

module.exports = router;
