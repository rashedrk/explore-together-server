import { Router } from "express";
import { tripControllers } from "./trip.controllers";
import validateRequest from "../../middlewares/validateRequest";
import { tripValidation } from "./trip.validation";
import auth from "../../middlewares/Auth";

const router = Router();

router.post('/trips', auth(),validateRequest(tripValidation), tripControllers.createTrip);
router.get('/trips', tripControllers.getAllTrips);

export const tripRoutes = router;