import { Request, Response, NextFunction } from "express";

function checkId(
  req: Request,
  res: Response,
  next: NextFunction
): void | Response {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "No ID provided." });
  }

  return next();
}

export default checkId;
