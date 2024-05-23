import { Secret } from "jsonwebtoken";
import config from "../../config";
import { generateToken } from "../../utils/JwtToken";
import { prisma } from "../../utils/global";
import { TAuth } from "./auth.interface";
import bcrypt from "bcrypt"

const loginUser = async (payload: TAuth) => {
    const userData = await prisma.user.findUnique({
        where: {
            email: payload.email
        }
    });

    if (!userData) {
        throw new Error("User not found")
    }

    const isCorrectPassword: boolean = await bcrypt.compare(payload.password, userData.password);

    if (!isCorrectPassword) {
        throw new Error("Password incorrect!")
    }

    const accessToken = generateToken({
        email: userData.email,
        id: userData.id,
    },
        config.jwt_secret as Secret,
        config.jwt_expires_in as string,
    );

    

    return {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        token: accessToken
    }
}

export const authServices = {
    loginUser,
}