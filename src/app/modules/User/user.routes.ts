import { Router } from "express";
import { userControllers } from "./user.controllers";
import validateRequest from "../../middlewares/validateRequest";
import { userValidation } from "./user.validation";
import auth from "../../middlewares/Auth";

const router = Router();

router.post('/register',validateRequest(userValidation.userSchema), userControllers.createUser);
router.get('/profile',  auth("admin", "user"), userControllers.getUserProfile);
router.put('/profile',  auth("admin", "user"),validateRequest(userValidation.update), userControllers.updateUser);
router.put('/user/:id',  auth("admin"),validateRequest(userValidation.updateRoleStatus), userControllers.updateUserRoleAndStatus);
router.get('/user',auth("admin"), userControllers.getAllUser);

export const userRoutes = router