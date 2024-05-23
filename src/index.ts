import express, { Application, Request, Response } from "express";
import cors from "cors"
import { userRoutes } from "./app/modules/User/user.routes";

const app: Application = express();

app.use(cors());
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send("Welcome to Travel Buddy Matching server!")
})

app.use('/api', userRoutes)

export default app;