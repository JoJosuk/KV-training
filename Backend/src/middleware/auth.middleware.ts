import express from "express";
import { verify } from "jsonwebtoken";
import { jwtPayload } from "../utils/jwtPayload";
import { RequestWithUser } from "../utils/RequestWithUser";

const authMiddleware = (
  req: RequestWithUser,
  res: express.Response,
  next: express.NextFunction
) => {
    try{
        const token = getTokenFromRequestHeader(req);
        console.log("token",token)
        const payload = verify(token,process.env.JWTSECRETKEY);

        req.name = (payload as jwtPayload).name
        req.email = (payload as jwtPayload).email
        req.role = (payload as jwtPayload).role
        
        console.log("authorized")
        return next()

    }
    catch(e){
        return next(e);
    }
};

const getTokenFromRequestHeader=(req:RequestWithUser)=>{
    return req.header("Authorization").replace("Bearer ","")
}
export  {authMiddleware}