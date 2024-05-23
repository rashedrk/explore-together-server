import catchAsync from "../../utils/CatchAsync";
import { userServices } from "./user.services";

const createUser = catchAsync(async (req, res) => {
        const result = await userServices.createUserIntoDB(req.body)
        res.status(200).json({
            result
        })
    });


    export const userControllers = {
        createUser
    }