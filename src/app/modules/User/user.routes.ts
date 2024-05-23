import { Router } from "express";
import { userControllers } from "./user.controllers";
import validateRequest from "../../middlewares/validateRequest";
import { userValidation } from "./user.validation";

const router = Router();

router.post('/register',validateRequest(userValidation.userSchema), userControllers.createUser);
router.get('/profile', userControllers.getUserProfile);
router.put('/profile',validateRequest(userValidation.update), userControllers.updateUser);

export const userRoutes = router