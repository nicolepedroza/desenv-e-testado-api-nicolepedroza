import { prisma } from "../../database/prisma";
import { carCreateBodyMock, invalidTodoId } from "../__mocks__/car.mock";
import { request } from "../utils/request";

describe("Integration test: update car", () => {
    test("should be able to update a car succesfully", async () => {
       const car = await prisma.car.create({ data: carCreateBodyMock });
 
       const data = await request
          .patch(`/cars/${car.id}`)
          .send(carCreateBodyMock)
          .expect(200)
          .then((response) => response.body);
 
       const updateCar = { ...car, ...carCreateBodyMock };
 
       expect(data).toStrictEqual(updateCar);
    });
 
    test("should throw error when carId is invalid", async () => {
       await request.patch(`/cars/${invalidTodoId}`).expect(404);
    });
 });