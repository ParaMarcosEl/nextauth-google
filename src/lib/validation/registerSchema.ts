// src/lib/validation/registerSchema.ts
import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
