import { Request, Response } from "express";
import { ICar } from "../schemas/car.schema";
import { CarServices } from "../services/car.service";

export class CarControllers{
    async create(req: Request, res: Response): Promise<Response<ICar>>{
        const carServices = new CarServices()

        const response = await carServices.create(req.body);

        return res.status(201).json(response);
    }

    async findMany(req: Request, res: Response): Promise<Response<ICar[]>>{
        const carServices = new CarServices()

        const response = await carServices.findMany();

        return res.status(200).json(response);
    }

    async findOne(req: Request, res: Response): Promise<Response<ICar>>{
        const carServices = new CarServices()
        const id = req.params.id

        const response = await carServices.findOne(id);

        return res.status(200).json(response);
    }

    async update(req: Request, res: Response){
        const carServices = new CarServices()
        const id = req.params.id


        const response = await carServices.update(id, req.body);

        return res.status(200).json(response);
    }

    async delete(req: Request, res: Response){
        const carServices = new CarServices()
        const id = req.params.id


        const response = await carServices.delete(id);

        return res.status(200).json(response);
    }
}