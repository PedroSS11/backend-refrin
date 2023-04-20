import express from "express";
const router = express.Router();

// controller
import {
  createMail,
  getById,
  getAllMails,
} from "../controllers/MailController";

// middlewares
import checkToken from "../middlewares/checkToken";

// create mail
router.post("/", createMail);
// get by id
router.get("/:id", getById);
// get All email
router.get("/", getAllMails);

module.exports = router;
