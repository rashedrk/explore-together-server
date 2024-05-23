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
                    name: true,
                    email: true                    
                }
            },
            
        }
    });

    return result
}

export const travelBuddyServices = {
    sendTravelBuddyRequest,
    getTravelBuddies
}