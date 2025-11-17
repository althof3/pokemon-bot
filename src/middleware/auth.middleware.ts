import { NextFunction, Request, Response } from "express";


export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const key = req.headers['x-api-key'] as string;
  if (key !== process.env.API_AUTH_KEY) return res.status(401).json({ error: 'Unauthorized' });
  next();
}