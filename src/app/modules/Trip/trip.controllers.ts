import config from "../../config";
import catchAsync from "../../utils/CatchAsync";
import { verifyToken } from "../../utils/JwtToken";
import { pick } from "../../utils/global";
import sendResponse from "../../utils/sendResponse";
import { tripServices } from "./trip.services";

const createTrip = catchAsync(async (req, res) => {
    const userData = verifyToken(req.headers.authorization as string, config.jwt_secret as string);

    const result = await tripServices.createTripIntoDB(userData.id, req.body);
    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: "Trip created successfully",
        data: result
    })
});

const getAllTrips = catchAsync(async (req, res) => {
    const filters = pick(req.query, ['destination', 'startDate', 'endDate', 'minBudget', 'maxBudget', 'searchTerm']);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder'])
    const result = await tripServices.getAllTripsFromDB(filters, options);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Trips retrieved successfully",
        meta: result.meta,
        data: result.data
    })
});

const getATrip = catchAsync(async(req,res) => {
    const {id} = req.params;
    const result = await tripServices.getATripFromDB(id);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Trip retrieved successfully",
        data: result
    })
})
const updateTrip = catchAsync(async(req,res) => {
    const {id} = req.params;
    const payload = req.body;
    const result = await tripServices.updateTripIntoDB(id, payload);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Trip updated successfully",
        data: result
    })
})

export const tripControllers = {
    createTrip,
    getAllTrips,
    getATrip,
    updateTrip
}