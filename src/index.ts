import express, { Application, Request, Response } from "express";
import cors from "cors"
import { userRoutes } from "./app/modules/User/user.routes";
import { authRoutes } from "./app/modules/Auth/auth.routes";
import { tripRoutes } from "./app/modules/Trip/trip.routes";
import { travelBuddyRoutes } from "./app/modules/TravelBuddy/travelbuddy.routes";

const app: Application = express();

app.use(cors());
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send("Welcome to Travel Buddy Matching server!")
})

app.use('/api', userRoutes)
app.use('/api', authRoutes)
app.use('/api', tripRoutes)
app.use('/api', travelBuddyRoutes)

export default app;