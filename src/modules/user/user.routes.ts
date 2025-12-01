import { Router } from "express";
import { getUserByPhone, registerUser } from "./user.controller";

const router = Router();

router.post("/register", registerUser);
router.get("/by-phone/:phone", getUserByPhone);

export default router;