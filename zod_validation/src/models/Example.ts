import {z} from 'zod';

const mySchema = z.string()

mySchema.parse("dev") // => dev
mySchema.parse(42) // => error

// 'safe' parse
mySchema.safeParse("dev") // {success:true, data:"dev"}
mySchema.safeParse(42) // {success:false,data:ZodError}


/////////////////
const schema = z.coerce.string()
schema.parse("dev") // => "dev"
schema.parse(42) // => "42"
schema.parse(true) // => "true"