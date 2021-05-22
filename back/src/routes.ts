import {Router} from 'express'
import multer from 'multer'

import uploadConfig from './config/upload'
import BlogsController from './controllers/BlogsController'
import UsersController from './controllers/UsersController'


const routes = Router()
const upload = multer(uploadConfig) 

routes.post('/blogs', upload.array('images'),BlogsController.create)
routes.get('/blogs', BlogsController.index)
routes.get('/blogs/:id', BlogsController.show)

routes.post('/users', UsersController.create)
routes.get('/login', UsersController.login)

export default routes