"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = require("./app/modules/User/user.routes");
const auth_routes_1 = require("./app/modules/Auth/auth.routes");
const trip_routes_1 = require("./app/modules/Trip/trip.routes");
const travelbuddy_routes_1 = require("./app/modules/TravelBuddy/travelbuddy.routes");
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: ['http://localhost:3000'] }));
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send("Welcome to Travel Buddy Matching server!");
});
app.use('/api', user_routes_1.userRoutes);
app.use('/api', auth_routes_1.authRoutes);
app.use('/api', trip_routes_1.tripRoutes);
app.use('/api', travelbuddy_routes_1.travelBuddyRoutes);
app.use(globalErrorHandler_1.default);
exports.default = app;
