import { z } from "zod";

const update = z.object({
    body: z.object({
        name: z.string().optional(),
        email: z.string().email().optional(),
    })
});

// const profileSchema = z.object({
//     bio: z.string({required_error: 'bio is required'}),
//     age: z.number({required_error: 'age is required'}).int()
// });

const userSchema = z.object({
   body: z.object({
    name: z.string({required_error: 'Name is required'}),
    email: z.string({required_error: 'Email is required'}).email(),
    password: z.string({required_error: 'Password is required'}),
    // profile: profileSchema
   })
});

export const userValidation = {
    update,
    userSchema
}