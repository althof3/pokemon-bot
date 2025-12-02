import { Router } from "express";
import { deleteUserByPhone, getUserByPhone, registerUser } from "./user.controller";

const router = Router();

router.post("/register", registerUser);
router.get("/by-phone/:phone", getUserByPhone);
router.delete("/by-phone/:phone", deleteUserByPhone);

export default router;