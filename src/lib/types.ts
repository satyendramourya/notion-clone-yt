import { z } from "zod";

export const FormSchema = z.object({
    email: z.string().describe('Email').email({ message: 'Invalid Email' }),
    password: z.string().min(1, { message: 'Password is required' }),
})