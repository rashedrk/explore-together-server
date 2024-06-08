import z from 'zod'
 const loginValidation= z.object({
    body: z.object({
        email: z.string({required_error: 'Email is required'}).email(),
        password: z.string({required_error: 'Password is required'})
    })
})

const changePasswordValidation = z.object({
    body: z.object({
      oldPassword: z.string({
        required_error: 'Old password is required',
      }),
      newPassword: z.string({ required_error: 'Password is required' }),
    }),
  });


  export const authValidationSchema = {
    loginValidation,
    changePasswordValidation
  }