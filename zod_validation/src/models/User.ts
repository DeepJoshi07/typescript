import { z } from "zod";

export const BasicUserSchema = z.object({
  id:z.number(),
  name: z
    .string()
    .trim()
    .min(2, { message: "name must be two or more chracters long" }),
  username: z
    .string()
    .trim()
    .toLowerCase()
    .min(4, { message: "Username must be 4 or more characters long" }),
  email: z.string().email().trim().toLowerCase(),
  phone: z
    .string()
    .min(10, { message: "Phone numbers are a minimum of 10 digits" }),
  // .regex(/^[0-9]+$/, { message: "Only numbers are allowed" })
  // .length(10, { message: "Ten numbers are required" })
  // .transform(val => `${val.slice(0, 3)}-${val.slice(3, 6)}-${val.slice(6)}`),
  //website: z.string().trim().toLowerCase().url().optional(),
  website: z.string().trim(),
  address:z.object({
    street:z.string().trim(),
    suite:z.string().trim(),
    city:z.string().trim(),
    zipcode:z.string().trim(),
    geo:z.object({
      lat:z.string().trim(),
      lng:z.string().trim()
    })
  }),
  company:z.object({
    name:z.string().trim(),
    catchPhrase:z.string().trim(),
    bs:z.string().trim()
  })
});
