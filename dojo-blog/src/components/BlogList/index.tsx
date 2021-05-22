import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

interface blog{
    title:string,
    author:string,
    body:string,
    id:number
}

interface props {
    blogs: blog[],
    title: string,
    //handleDelete: Function
}

const BlogList: React.FC<props> = ({blogs, title}) => {
    return (
        <div className="content">
            <h2>{title}</h2>
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>Escrito por: {blog.author}</p>
                        </Link>
                    </div>
                    )
                )  
            }
        </div>
    );
}

export default BlogList;