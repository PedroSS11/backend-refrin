import express from "express";
const router = express.Router();

router.use("/api/users", require("./UserRoutes"));
router.use("/api/mail", require("./MailRoutes"));
router.use("/api/budget", require("./BudgetRoutes"));

module.exports = router;
