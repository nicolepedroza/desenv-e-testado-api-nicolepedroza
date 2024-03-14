import { z } from "zod";

export const carSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    brand: z.string(),
    year: z.number(),
    km: z.number()
})

export const carCreateSchema = carSchema.omit({id: true})

export const carUpdateSchema = carCreateSchema.partial()

export type ICar = z.infer<typeof carSchema>

export type ICarCreate = z.infer<typeof carCreateSchema>

export type ICarUpdate = z.infer<typeof carUpdateSchema>