import { Router } from "express";
import { travelBuddyControllers } from "./travelbuddy.controllers";
import validateRequest from "../../middlewares/validateRequest";
import { travelBuddyValidation } from "./travelbuddy.validation";
import auth from "../../middlewares/Auth";

const router = Router();

router.post(
    "/trip/:tripId/request",
    auth(),
    validateRequest(travelBuddyValidation.request),
    travelBuddyControllers.sendTravelBuddyRequest
);
router.get("/travel-buddies/:tripId", auth(), travelBuddyControllers.getTravelBuddies);
router.put(
    "/travel-buddies/:buddyId/respond",
    auth(),
    validateRequest(travelBuddyValidation.response),
    travelBuddyControllers.responseBuddyRequest
);

export const travelBuddyRoutes = router;