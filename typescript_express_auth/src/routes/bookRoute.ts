import {Router, type Request,type Response} from 'express'
import { addBook, getBooks, updateBook } from '../controller/bookController';

const bookRouter = Router();

bookRouter.get("/get-books",getBooks);
bookRouter.post("/add-book",addBook);
bookRouter.post("/update-book/:id",updateBook);


export default bookRouter;