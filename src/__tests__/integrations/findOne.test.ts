import { prisma } from "../../database/prisma";
import { carListMock, carMock, invalidTodoId } from "../__mocks__/car.mock";
import { carDefaultExpects } from "../utils/carDefaultExpects";
import { request } from "../utils/request";

describe("Integration test: find one car", () => {
    test("should be able to find a car succesfully", async () => {
        await prisma.car.createMany({ data: carMock });
 
        const data = await request
           .get("/cars")
           .expect(200)
           .then((response) => response.body);
  
        expect(data).toHaveLength(1);   
  
        expect(data[0].id).toBeDefined();
        carDefaultExpects(data[0], carListMock[0])
        });
 
    test("should throw error when carId is invalid", async () => {
       await request.patch(`/cars/${invalidTodoId}`).expect(404);
    });
 });