import { Router } from "express";
import { tripControllers } from "./trip.controllers";
import validateRequest from "../../middlewares/validateRequest";
import { tripValidation } from "./trip.validation";

const router = Router();

router.post('/trips',validateRequest(tripValidation), tripControllers.createTrip);
router.get('/trips', tripControllers.getAllTrips);

export const tripRoutes = router;