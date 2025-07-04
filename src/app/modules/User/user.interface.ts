
// type TProfile = {
//     bio: string
//     age: number
// }

import { Role } from "@prisma/client"

export type TUser = {
    firstName: string
    lastName: string
    phone: string
    address: string
    gender: "male" | "female"
    profileImage?: string
    email: string
    role: Role,
    password: string,
    isActive?: boolean
    // profile: TProfile
}

