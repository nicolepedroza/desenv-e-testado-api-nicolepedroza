import { prisma } from "../database/prisma";
import { AppError } from "../errors/App.Error";
import { ICar, ICarCreate, ICarUpdate } from "../schemas/car.schema";

export class CarServices{
    async create(body: ICarCreate): Promise<ICar>{
        return await prisma.car.create({data: body})
    }

    async findMany(): Promise<Array<ICar>>{
        const carList = await prisma.car.findMany()

        return carList
    }

    async findOne(id: string): Promise<ICar | null>{
        const car = await prisma.car.findFirst({where: {id}})
        return car
    }

    async update(id: string, body: ICarUpdate): Promise<ICar>{
        const updateCar = await prisma.car.update({
            where: {id}, data: body
        })
        return updateCar
    }

    async delete(id: string): Promise<void>{
        await prisma.car.delete({where: {id}})
    }
}

