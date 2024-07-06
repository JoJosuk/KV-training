import express from "express";
import HttpException from "../exceptions/http.exceptions";
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
      let respbody: any = { message };
      if (err.errorObjectList) {
        respbody = { message, validationerror: err.errorObjectList };
      }
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
