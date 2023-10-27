import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";

export function validateToken(req: Request, res: Response, next: NextFunction) {
    let token = req.headers.authorization;
    if(!token){
        throw{
            type: "unauthorized",
            message: "no token provide"
        }
    }


token = token.replace("Bearer ", "");

const decoded = Jwt.verify(token, process.env.JWT_SECRET);
if(!decoded){
    throw {
        type: "unauthorized",
        message: "invalid token"
    }
}
res.locals.user = decoded;

next();
}