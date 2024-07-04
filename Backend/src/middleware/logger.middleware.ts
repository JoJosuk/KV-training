import { Request,Response,NextFunction } from "express";
const loggerMiddleware = (req:Request, res, next:NextFunction) => {
  console.log(`[ ${new Date().toISOString()} ] ${req.method}`);
  next();
};

    export default loggerMiddleware;
