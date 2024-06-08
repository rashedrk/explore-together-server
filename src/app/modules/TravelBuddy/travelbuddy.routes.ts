import { Router } from "express";
import { travelBuddyControllers } from "./travelbuddy.controllers";
import validateRequest from "../../middlewares/validateRequest";
import { travelBuddyValidation } from "./travelbuddy.validation";
import auth from "../../middlewares/Auth";

const router = Router();

router.get("/travel-buddies/requested", auth('admin', 'user'), travelBuddyControllers.getAllRequestedTrip);

router.post(
    "/trip/:tripId/request",
    auth('admin', 'user'),
    validateRequest(travelBuddyValidation.request),
    travelBuddyControllers.sendTravelBuddyRequest
);
router.get("/travel-buddies/:tripId", auth('admin', 'user'), travelBuddyControllers.getTravelBuddies);
router.put(
    "/travel-buddies/:buddyId/respond",
    auth('admin', 'user'),
    validateRequest(travelBuddyValidation.response),
    travelBuddyControllers.responseBuddyRequest
);



export const travelBuddyRoutes = router;