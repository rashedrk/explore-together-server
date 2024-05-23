import { Router } from "express";
import { authControllers } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequest";
import { authValidationSchema } from "./auth.validation";

const router = Router();

router.post(
    '/login',
    validateRequest(authValidationSchema),
    authControllers.login
)

export const authRoutes = router;