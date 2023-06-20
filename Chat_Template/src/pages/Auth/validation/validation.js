import { object, string,ref } from 'yup';
export const validation=object({
    username:string().min(2).max(50).required(),
    email: string().email().required(),
    password: string().required().min(5),
    confirmPassword:string().oneOf([ref('password')]).required()
})