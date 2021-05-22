import Blog from "../models/BlogModel"
import ImageView from "./ImageView"

export default {
    render(blog: Blog){
        return {
            title: blog.title,
            body: blog.body,
            images: ImageView.renderMany(blog.images),
            author : blog.user.nome
        }
    },

    renderMany(blogs: Blog[]){
        return blogs.map(blog => this.render(blog))
    }
}