import React, { FormEvent } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useFetch from '../useFetch';
import './styles.css'

interface params {
    id : string
}

const BlogDetails: React.FC = () => {
    const {id} = useParams<params>()
    const {data:blog, isLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`)
    const history = useHistory()

    const handleDelete = (e: FormEvent) => {
        e.preventDefault()

        fetch(`http://localhost:8000/blogs/${id}`,{
            method: "DELETE",
        })
            .then(res => {alert("Blog post deleted"); history.push('/')})

    }

    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {isLoading && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog[0].title}</h2>
                    <p>{blog[0].body}</p>
                    <div>Escrito por: {blog[0].author}</div>
                    <button onClick={e => handleDelete(e)}>Delete</button>
                </article>
            )}
        </div>
  );
}

export default BlogDetails;