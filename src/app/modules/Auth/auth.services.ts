import { JwtPayload, Secret } from "jsonwebtoken";
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
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        id: userData.id,
        role: userData.role,
    },
        config.jwt_secret as Secret,
        config.jwt_expires_in as string,
    );



    return {
        id: userData.id,
        firstName: userData.firstName,
        lastName: userData.lastName,
        phone: userData.phone,
        address: userData.address,
        gender: userData.gender,
        profileImage: userData.profileImage,
        email: userData.email,
        token: accessToken
    }
}

const changePassword = async (
    userData: JwtPayload,
    payload: { oldPassword: string; newPassword: string },
) => {
    // checking if the user is exist
    const user = await prisma.user.findUnique({
        where: {
            id: userData.id
        }
    });




    if (!user) {
        throw new Error('This user is not found !');
    }
    // checking if the user is already deleted

    const isActive = user?.isActive;



    if (!isActive) {
        throw new Error('This account is deactivated !');
    }

    //checking if the password is correct

    const isCorrectPassword: boolean = await bcrypt.compare(payload.oldPassword, user.password);




    if (!isCorrectPassword) {
        throw new Error("Password incorrect!")
    }
    //hash new password
    const newHashedPassword = await bcrypt.hash(
        payload.newPassword,
        Number(config.salt_rounds),
    );




    await prisma.user.update({
        where: {
            id: userData.id,
        },
        data: {
            password: newHashedPassword
        }
    })



    return null;
};

export const authServices = {
    loginUser,
    changePassword
}