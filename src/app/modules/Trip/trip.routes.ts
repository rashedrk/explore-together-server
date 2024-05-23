import { Router } from "express";
import { tripControllers } from "./trip.controllers";

const router = Router();

router.post('/trips', tripControllers.createTrip);

export const tripRoutes = router;