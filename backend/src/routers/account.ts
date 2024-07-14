import { Router } from "express";
import validate from "../middlewares/input-validation";
import {
  add,
  getAllByAccount,
} from "../controllers/accountoperations/controller";
import { accountValidator } from "../controllers/accountoperations/validator";

const router = Router();

// /api/account
router.get("/:accountNumber", getAllByAccount);
router.post("/", validate(accountValidator), add);

export default router;
