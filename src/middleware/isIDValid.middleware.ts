import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";


export class IsIdValid{
    static async execute(req: Request, res: Response, next: NextFunction){
        const id = req.params.id;

        const product = await prisma.car.findFirst({ where: { id }});

        if(!product){
            return res.status(404).json({ message: "Car not found."});
        }

        return next();
    }
}