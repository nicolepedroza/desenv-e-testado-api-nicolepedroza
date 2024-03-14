import { CarServices } from "../../services/car.service";
import { carMock } from "../__mocks__/car.mock";

describe("Unit test: delete car", () => {
    test("delete car should work correctly", async () => {
        const carServices = new CarServices();

        await carServices.delete(carMock.id);
    })
});