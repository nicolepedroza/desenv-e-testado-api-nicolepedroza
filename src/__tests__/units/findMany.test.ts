import { CarServices } from "../../services/car.service";
import { carListMock } from "../__mocks__/car.mock";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit test: get many cars", () => {
    test("get many cars should work correctly", async () => {
       const carServices = new CarServices();
 
       prismaMock.car.findMany.mockResolvedValue(carListMock);
 
       const data = await carServices.findMany();
 
       expect(data).toHaveLength(2);
       expect(data[0]).toStrictEqual(carListMock[0]);
       expect(data[1]).toStrictEqual(carListMock[1]);
    });
 });