
import { Request, Response } from "express";
import { UserService } from "./user.service";

const service = new UserService();

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const user = await service.register(name);
    res.status(201).json({ data: user });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

