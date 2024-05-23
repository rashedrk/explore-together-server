import { Router } from "express";
import { travelBuddyControllers } from "./travelbuddy.controllers";

const router = Router();

router.post("/trip/:tripId/request", travelBuddyControllers.sendTravelBuddyRequest);

export const travelBuddyRoutes = router;