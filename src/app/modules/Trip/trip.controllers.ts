import config from "../../config";
import catchAsync from "../../utils/CatchAsync";
import { verifyToken } from "../../utils/JwtToken";
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

export const tripControllers = {
    createTrip
}