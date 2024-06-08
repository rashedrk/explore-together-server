import config from "../../config";
import catchAsync from "../../utils/CatchAsync";
import { verifyToken } from "../../utils/JwtToken";
import sendResponse from "../../utils/sendResponse";
import { travelBuddyServices } from "./travelbuddy.services";

const sendTravelBuddyRequest = catchAsync(async(req, res) => {
    const {tripId} = req.params;
    const {userId} = req.body;

    const result = await travelBuddyServices.sendTravelBuddyRequest(tripId, userId);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Travel buddy request sent successfully',
        data: result
    })
});

const getTravelBuddies = catchAsync(async (req, res) => {
    const {tripId} = req.params;
    const result = await travelBuddyServices.getTravelBuddies(tripId);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Potential travel buddies retrieved successfully',
        data: result
    })
})


const responseBuddyRequest = catchAsync(async (req, res) => {
    const {buddyId} = req.params;
    const result = await travelBuddyServices.responseBuddyRequest(buddyId, req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Travel buddy request responded successfully',
        data: result
    })
})

const getAllRequestedTrip = catchAsync(async (req, res) => {
    const userData = verifyToken(req.headers.authorization as string, config.jwt_secret as string);
    const result = await travelBuddyServices.requestedTrips(userData.id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'All requests trip retrieved successfully',
        data: result
    })
})


export const travelBuddyControllers = {
    sendTravelBuddyRequest,
    getTravelBuddies,
    responseBuddyRequest,
    getAllRequestedTrip
}