import { z } from "zod";

const request = z.object({
    body: z.object({
        userId: z.string({ required_error: "userId is required" }).uuid({ message: 'userId must be a valid UUID string' }),
    })
})

const response = z.object({
    body: z.object({
        tripId: z.string().uuid({ message: 'tripId must be a valid UUID string' }),
        status: z.enum(['APPROVED', 'PENDING', 'REJECTED'], { message: 'status must be one of APPROVED, PENDING, or REJECTED' }),
    })
});


export const travelBuddyValidation = {
    request,
    response
}