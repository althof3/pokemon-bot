import { Router } from "express";
import { deleteUserByPhone, getUserByPhone, registerUser } from "./user.controller";

const router = Router();

router.post("/register", registerUser);
router.get("/by-phone/:phone", getUserByPhone);
router.post("/by-phone/:phone/delete", deleteUserByPhone);

export default router;