import express from "express";
const router = express.Router();

// controller
import {
  createBudget,
  getAll,
  getAllBySeller,
} from "../controllers/BudgetController";

// middlewares
import checkToken from "../middlewares/checkToken";

// create
router.post("/users/:userId/create", createBudget);
// get all
router.get("/", getAll);
// get all by seller
router.get("/seller/:id", getAllBySeller);

module.exports = router;
