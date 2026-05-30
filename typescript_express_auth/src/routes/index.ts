import {Router} from 'express'
import bookRouter from './bookRoute';
import authRouter from './userRoute';

const routes = Router()

routes.use("/books",bookRouter)
routes.use("/auth",authRouter)

export default routes;