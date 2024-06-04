import { z } from "zod";

export const tripValidation = z.object({
    body: z.object({
        destination: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        budget: z.number().min(0, { message: 'budget must be a non-negative number' }),
        activities: z.array(z.string()).min(1, { message: 'activities must be a non-empty array of strings' }),
        photos: z.array(z.string()).min(1, { message: 'photos must be a non-empty array of strings' }),
        description: z.string(),
        type: z.string(),
    })
})