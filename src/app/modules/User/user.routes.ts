import { Router } from "express";
import { userControllers } from "./user.controllers";

const router = Router();

router.post('/register', userControllers.createUser);
router.get('/profile', userControllers.getUserProfile);
router.put('/profile', userControllers.updateUser);

export const userRoutes = router