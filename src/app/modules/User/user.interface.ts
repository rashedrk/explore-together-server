
// type TProfile = {
//     bio: string
//     age: number
// }

import { Role } from "@prisma/client"

export type TUser = {
    name: string
    email: string
    role: Role,
    password: string,
    isActive?: boolean
    // profile: TProfile
}

