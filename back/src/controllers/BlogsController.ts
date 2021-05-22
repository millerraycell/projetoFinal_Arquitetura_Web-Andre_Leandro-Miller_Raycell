import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import Blog from '../models/BlogModel'
import User from '../models/UserModel'
import BlogView from '../views/BlogView'

export default {
    async create(request: Request, response: Response) {       
        const {
            title,
            body,
            author
        } = request.body

        const requestImages = request.files as Express.Multer.File[]
        const images = requestImages.map(image => {
            return {path: image.filename}
        })

        const users = getRepository(User)
        const user = await users.findOne(author)
    
        const blogsRepository = getRepository(Blog)
        const blog = blogsRepository.create({title, body, images, user})
        await blogsRepository.save(blog)
    
        return response.status(201).json(blog)
    },

    async index(request: Request, response: Response){
        const blogsRepository = getRepository(Blog)

        const blogs = await blogsRepository.find({
            relations: ["images", "user"]
        })

        return response.json(BlogView.renderMany(blogs))
    },

    async show(request:Request, response:Response){
        const { id } = request.params

        const blogsRepository = getRepository(Blog);

        const blog = await blogsRepository.findOne(id,{
            relations: ['images', 'user']
        })
        
        return response.json(BlogView.render(blog))
    }
}