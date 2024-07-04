import express from "express";
import HttpException from "../expceptions/http.exceptions";
const errorMiddleware = (
  err: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    if (err instanceof HttpException) {
      const status: number = err.status || 500;
      const message: string = err.message || "error case not known";
      let respbody = { message };
      res.status(status).json(respbody);
    } else {
      console.error(err.stack);
      res.status(500).send({ err: err.message });
    }
  } catch (error) {
    next(error);
  }
};
export default errorMiddleware;
