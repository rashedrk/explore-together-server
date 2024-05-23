import { Router } from "express";
import { travelBuddyControllers } from "./travelbuddy.controllers";
import validateRequest from "../../middlewares/validateRequest";
import { travelBuddyValidation } from "./travelbuddy.validation";

const router = Router();

router.post(
    "/trip/:tripId/request",
    validateRequest(travelBuddyValidation.request),
    travelBuddyControllers.sendTravelBuddyRequest
);
router.get("/travel-buddies/:tripId", travelBuddyControllers.getTravelBuddies);
router.put(
    "/travel-buddies/:buddyId/respond",
    validateRequest(travelBuddyValidation.response),
    travelBuddyControllers.responseBuddyRequest
);

export const travelBuddyRoutes = router;