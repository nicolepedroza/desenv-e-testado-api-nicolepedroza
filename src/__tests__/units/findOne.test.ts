import { CarServices } from "../../services/car.service";
import { carCreateBodyMock, carMock } from "../__mocks__/car.mock";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit test: find one car", () => {

   test("findOne should work correctly", async () => {
      const carServices = new CarServices();
      
      prismaMock.car.findFirst.mockResolvedValue(carMock)
      const data = await carServices.findOne(carMock.id);

      expect(data).toStrictEqual(carMock);

   });
});