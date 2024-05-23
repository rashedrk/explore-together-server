import { prisma } from "../../utils/global"

const createTripIntoDB = async (id: string, payload: TTrip) => {
    const trip = {
        ...payload,
        userId: id
    }
    const result = await prisma.trip.create({
        data: trip
    });

    return result;
}


export const tripServices = {
    createTripIntoDB
}