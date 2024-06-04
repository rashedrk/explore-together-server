import config from "../../config"
import { prisma } from "../../utils/global"
import { TUser } from "./user.interface"
import bcrypt from "bcrypt"

const createUserIntoDB = async (payload: TUser) => {

    const hashedPassword = await bcrypt.hash(payload.password, 12)

    const user = {
        name: payload.name,
        email: payload.email,
        password: hashedPassword
    }
    // const result = await prisma.$transaction(async (trxClient) => {
    //     // create user into user table
    //     const createdUser = await prisma.user.create({
    //         data: user,
    //         select: {
    //             id: true,
    //             name: true,
    //             email: true,
    //             createdAt: true,
    //             updatedAt: true
    //         }
    //     },
    //     );

    //     const profile = {
    //         userId: createdUser.id,
    //         bio: payload.profile.bio,
    //         age: payload.profile.age
    //     }

    //     //create profile into userProfile table
    //     await prisma.userProfile.create({
    //         data: profile
    //     });

    //     return createdUser;
    // });

    const result = await prisma.user.create({
        data: user,
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true,
            updatedAt: true
        }
    },
    );

    return result;

}

const getUserInfoFromDB = async (id: string) => {
    const result = await prisma.user.findUniqueOrThrow({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true,
            updatedAt: true
        }
    });

    return result;
}

const updateUserIntoDB = async (id: string, payload: Partial<TUser>) => {
    const result = await prisma.user.update({
        where: {
            id
        },
        data: {
            name: payload?.name,
            email: payload?.email
        },
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true,
            updatedAt: true
        }
    });

    return result
}


export const userServices = {
    createUserIntoDB,
    getUserInfoFromDB,
    updateUserIntoDB
}