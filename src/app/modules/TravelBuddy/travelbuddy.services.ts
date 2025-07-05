import { Status } from "@prisma/client";
import { prisma } from "../../utils/global"

const sendTravelBuddyRequest = async (tripId: string, userId: string) => {
    const result = await prisma.travelBuddyRequest.create({
        data: {
            tripId,
            userId
        }
    })

    return result;
}

const getTravelBuddies = async (tripId: string) => {
    const result = await prisma.travelBuddyRequest.findMany({
        where: {
            tripId
        },
        include: {
            user: {
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    phone: true,
                    address: true,
                    gender: true,
                    profileImage: true,
                    email: true
                }
            },

        }
    });

    return result
}

const responseBuddyRequest = async (userId: string, payload: { tripId: string, status: Status }) => {
    const { tripId, status } = payload;

    const isRequestExists = await prisma.travelBuddyRequest.findFirst({
        where: {
            AND: [
                {
                    tripId
                },
                {
                    userId
                }
            ]
        }
    });

    if (!isRequestExists) {
        throw new Error('Request not found');
    }

    const result = await prisma.travelBuddyRequest.update({
        where: {
            id: isRequestExists.id
        },
        data: {
            status
        },
    });

    return result;
}

const requestedTrips = async (userId: string) => {
    const result = await prisma.travelBuddyRequest.findMany({
        where: {
            userId: userId
        },
        include: {
            trip: true
        }
    });

    return result;
}

export const travelBuddyServices = {
    sendTravelBuddyRequest,
    getTravelBuddies,
    responseBuddyRequest,
    requestedTrips
}