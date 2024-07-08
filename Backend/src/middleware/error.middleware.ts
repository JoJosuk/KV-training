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
      let respbody: any = { message,status };
      if (err.errorObjectList) {
        respbody = { message, validationerror: err.errorObjectList,status };
      }
      res.status(status).json({respbody});
    } else {
      console.error(err.stack);
      res.status(500).send({ err: err.message,status:500 });
    }
  } catch (error) {
    next(error);
  }
};
export default errorMiddleware;
