import { TripStatus } from "@prisma/client"

export type TTrip = {
    destination: string
    startDate: string
    endDate: string
    budget: number
    activities: string[]
    photos: string[],
    description: string,
    type: string,
    status?: TripStatus
}