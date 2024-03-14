import { CarServices } from "../../services/car.service";
import { carCreateBodyMock, carMock } from "../__mocks__/car.mock";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit test: update car", () => {
    test("update car should work correctly", async () => {
        const carServices = new CarServices();

        const updateTodo = { ...carMock, ...carCreateBodyMock};

        prismaMock.car.update.mockResolvedValue(updateTodo);
        const data = await carServices.update(carMock.id, carCreateBodyMock);

        expect(data).toStrictEqual(updateTodo);
    })
})