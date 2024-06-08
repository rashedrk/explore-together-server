import { Router } from "express";
import { tripControllers } from "./trip.controllers";
import validateRequest from "../../middlewares/validateRequest";
import { tripValidation } from "./trip.validation";
import auth from "../../middlewares/Auth";

const router = Router();

router.post('/trips', auth('admin', 'user'), validateRequest(tripValidation.createTrip), tripControllers.createTrip);
router.get('/trips', tripControllers.getAllTrips);
router.get('/trips/my', auth('admin', 'user'), tripControllers.getAllMyTrips);
router.get('/trips/:id', auth('admin', 'user'), tripControllers.getATrip);
router.put('/trips/:id', auth('admin', 'user'), validateRequest(tripValidation.updateTrip), tripControllers.updateTrip);

export const tripRoutes = router;