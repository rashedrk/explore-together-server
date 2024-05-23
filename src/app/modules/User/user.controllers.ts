import config from "../../config";
import catchAsync from "../../utils/CatchAsync";
import { verifyToken } from "../../utils/JwtToken";
import sendResponse from "../../utils/sendResponse";
import { userServices } from "./user.services";

const createUser = catchAsync(async (req, res) => {
    const result = await userServices.createUserIntoDB(req.body)
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'User registered successfully',
        data: result
    })
});

const getUserProfile = catchAsync(async (req, res) => {
    const userData = verifyToken(req.headers.authorization as string, config.jwt_secret as string);
    
    const result = await userServices.getUserInfoFromDB(userData.id)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'User profile retrieved successfully',
        data: result
    })
});
const updateUser = catchAsync(async (req, res) => {
    const userData = verifyToken(req.headers.authorization as string, config.jwt_secret as string);
    
    const result = await userServices.updateUserIntoDB(userData.id, req.body)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'User profile updated successfully',
        data: result
    })
});


export const userControllers = {
    createUser,
    getUserProfile,
    updateUser
}