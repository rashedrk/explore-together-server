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

export const travelBuddyServices = {
    sendTravelBuddyRequest
}