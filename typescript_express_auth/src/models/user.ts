import mongoose, { Schema, model } from "mongoose";

export interface IUser {
  _id?:string
  name: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  booksAdded: string[];
  role: string;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
    trim: true,
    required: true,
  },
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  booksAdded: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"book"
    },
  ],
  role:{
    type: String,
    enum:["admin","creator","visitor"]
  }
});

export const User = model<IUser>("user",userSchema)
