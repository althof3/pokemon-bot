
import { Request, Response } from "express";
import { UserService } from "./user.service";

const service = new UserService();

export const registerUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const user = await service.register(payload);
    res.status(201).json({ data: user });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const getUserByPhone = async (req: Request, res: Response) => {
  try {
    const { phone } = req.params;
    const user = await service.getUserByPhone(phone);
    res.status(201).json({ data: user });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

