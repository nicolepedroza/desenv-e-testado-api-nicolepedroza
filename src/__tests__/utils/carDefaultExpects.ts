import { ICar, ICarCreate } from "../../schemas/car.schema";

export const carDefaultExpects = (data: ICar, expected: ICarCreate) => {
    expect(data.id).toBeDefined();
    expect(data.name).toBe(expected.name);
    expect(data.description).toBe(expected.description); 
    expect(data.brand).toBe(expected.brand);
    expect(data.year).toBe(expected.year);
    expect(data.km).toBe(expected.km);   
}