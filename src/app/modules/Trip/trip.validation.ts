import { z } from "zod";

const createTrip = z.object({
    body: z.object({
        destination: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        budget: z.number().min(0, { message: 'budget must be a non-negative number' }),
        activities: z.array(z.string()).min(1, { message: 'activities must be a non-empty array of strings' }),
        photos: z.array(z.string()).min(1, { message: 'photos must be a non-empty array of strings' }),
        description: z.string(),
        type: z.string(),
        status: z.enum(["active", "deactivated"]).optional()
    })
})

const updateTrip = z.object({
    body: z.object({
        destination: z.string().optional(),
        startDate: z.string().optional(),
        endDate: z.string().optional(),
        budget: z.number().min(0, { message: 'budget must be a non-negative number' }).optional(),
        activities: z.array(z.string()).min(1, { message: 'activities must be a non-empty array of strings' }).optional(),
        description: z.string().optional(),
        type: z.string().optional(),
        status: z.enum(["active", "deactivated"]).optional()
    })
})


export const tripValidation = {
    createTrip,
    updateTrip
}