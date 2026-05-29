import {Schema,model} from 'mongoose'

export interface IBook {
    name:string
    author:string
    publishYear:number
    description:string
}

const bookSchema = new Schema<IBook>({
    name:{
        type:String,
        required:true,
        trim:true
    },
    author:{
        type:String,
        required:true,
        trim:true
    },
    publishYear:{
        type:Number,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
})

export const Book = model<IBook>("book",bookSchema);

