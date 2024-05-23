import { Router } from "express";
import { tripControllers } from "./trip.controllers";

const router = Router();

router.post('/trips', tripControllers.createTrip);
router.get('/trips', tripControllers.getAllTrips);

export const tripRoutes = router;