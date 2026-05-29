import {Router} from 'express'
import bookRouter from './bookRoute';

const routes = Router()

routes.use("/books",bookRouter)

export default routes;