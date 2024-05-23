import catchAsync from "../../utils/CatchAsync";
import sendResponse from "../../utils/sendResponse";
import { userServices } from "./user.services";

const createUser = catchAsync(async (req, res) => {
        const result = await userServices.createUserIntoDB(req.body)
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'User created successfully',
            data: result
        })
    });


    export const userControllers = {
        createUser
    }