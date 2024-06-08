import httpStatus from "http-status";
import catchAsync from "../../utils/CatchAsync";
import sendResponse from "../../utils/sendResponse";
import { authServices } from "./auth.services";
import { verifyToken } from "../../utils/JwtToken";
import config from "../../config";

const login = catchAsync(async(req, res) => {
    const result = await authServices.loginUser(req.body);
    sendResponse(res , {
        statusCode: 200,
        success: true,
        message: "User logged in successfully",
        data: result
    })
});

const changePassword = catchAsync(async (req, res) => {
    const { ...passwordData } = req.body;
    const userData = verifyToken(req.headers.authorization as string, config.jwt_secret as string);

    const result = await authServices.changePassword(userData, passwordData);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Password is updated successfully!',
      data: result,
    });
  });

export const authControllers = {
    login,
    changePassword
}