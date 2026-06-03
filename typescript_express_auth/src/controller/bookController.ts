import { type Request, type Response } from "express";
import { Book } from "../models/book";

interface IResponse {
  message: string;
  data?: any;
}

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();

    if (!books) {
      return res.status(404).json({
        message: "Client side Error!",
      } as IResponse);
    }

    res.status(200).json({
      message: "Here are your books",
      data: books,
    } as IResponse);
    
  } catch (error: any) {
    console.log("Internal server error", error.message);
    return res.status(500).json({
      message: "Internal server Error!",
    } as IResponse);
  }
};

export const addBook = async (req: Request, res: Response) => {
  if(req.role !== "creator"){
    return res.status(400).json({
      message:"you are not eligible!"
    } as IResponse)
  }
  const { name, author, publishYear, description } = req.body;

  try {
    const book = await Book.create({
      author,
      description,
      name,
      publishYear,
    });

    return res
      .status(201)
      .json({ message: "Your book has been added", data: book } as IResponse);
  } catch (error: any) {
    console.log("Internal server error", error.message);
    return res.status(500).json({
      message: "Internal server Error!",
    } as IResponse);
  }
};

export const updateBook = async (req: Request, res: Response) => {
  const {id} = req.params;
  const {author,name,description,publishYear} = req.body;

  try {
    const book = await Book.findByIdAndUpdate(id,{
      name,
      description,
      author,
      publishYear
    },{returnDocument:"after"})

    if (!book) {
      return res.status(404).json({
        message: "No book found!",
      } as IResponse);
    }

    return res
      .status(201)
      .json({ message: "Your book has been updated", data: book } as IResponse);
  } catch (error: any) {
    console.log("Internal server error", error.message);
    return res.status(500).json({
      message: "Internal server Error!",
    } as IResponse);
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  const {id} = req.params;

  try {
    const book = await Book.findByIdAndDelete(id)

    if (!book) {
      return res.status(404).json({
        message: "No book found!",
      } as IResponse);
    }

    return res
      .status(200)
      .json({ message: "Your book has been deleted", data: book } as IResponse);
  } catch (error: any) {
    console.log("Internal server error", error.message);
    return res.status(500).json({
      message: "Internal server Error!",
    } as IResponse);
  }
};