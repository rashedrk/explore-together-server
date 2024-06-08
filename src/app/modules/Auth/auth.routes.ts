import { Router } from "express";
import { authControllers } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequest";
import { authValidationSchema } from "./auth.validation";
import auth from "../../middlewares/Auth";

const router = Router();

router.post(
    '/login',
    validateRequest(authValidationSchema.loginValidation),
    authControllers.login
)
router.put(
    '/change-password',
    auth('admin', 'user'),
    validateRequest(authValidationSchema.changePasswordValidation),
    authControllers.changePassword
)

export const authRoutes = router;