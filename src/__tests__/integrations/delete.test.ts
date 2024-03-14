import { prisma } from "../../database/prisma";
import { carCreateBodyMock, invalidTodoId } from "../__mocks__/car.mock";
import { request } from "../utils/request";

describe("Integration test: delete car", () => {
    test("should be able to delete a car successfully", async () => {
       const todo = await prisma.car.create({ data: carCreateBodyMock });
 
       await request.delete(`/cars/${todo.id}`).expect(200);
    });
 
    test("should throw error when carId is invalid", async () => {
       await request.delete(`/todos/${invalidTodoId}`).expect(404);
    });
 });