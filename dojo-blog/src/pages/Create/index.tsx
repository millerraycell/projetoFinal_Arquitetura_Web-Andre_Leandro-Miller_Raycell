import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import './styles.css'

const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("mario")
    const [isPending, setIsPending] = useState(false)

    const history = useHistory()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setIsPending(true)

        const blog = {title, body, author}
        fetch('http://localhost:8000/blogs',{
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(blog)
        })
            .then(res => {alert("New blog added"); setIsPending(true); history.push('/')})
    }

    return ( 
        <div className="create">
            <h2>Add new blog</h2>
            <form onSubmit={e => handleSubmit(e)}>
                <label>Blog Title:</label>
                <input
                    type='text'
                    value = {title}
                    onChange={e=> setTitle(e.target.value)}
                    required
                />

                <label>Blog body:</label>
                <textarea
                    value = {body}
                    onChange={e=> setBody(e.target.value)}
                    required
                />

                <label>Blog Author:</label>
                <select value={author} onChange={e => setAuthor(e.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                    <option value="Luigi">Luigi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;