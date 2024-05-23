import { Router } from "express";
import { travelBuddyControllers } from "./travelbuddy.controllers";

const router = Router();

router.post("/trip/:tripId/request", travelBuddyControllers.sendTravelBuddyRequest);
router.get("/travel-buddies/:tripId", travelBuddyControllers.getTravelBuddies);
router.put("/travel-buddies/:buddyId/respond", travelBuddyControllers.responseBuddyRequest);

export const travelBuddyRoutes = router;