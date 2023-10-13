import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Create() {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const naviagte = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog ={title, body, author};
        setIsPending(true);
        fetch(' http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            naviagte('/');
            setIsPending(false);
        }
            )
    }

  return (
    <div className='create'>
        <h1>Add New Blog</h1>
        <form onSubmit={handleSubmit}>
            <label> Title</label>
            <input type="text" required 
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
            
            <label> Body</label>
            <textarea value={body} required
            onChange={(e)=>setBody(e.target.value)}
            ></textarea>

            <label> Author</label>
            <select value={author}
            onChange={(e)=> setAuthor(e.target.value)}>
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select>
            {!isPending &&<button>Add Blog</button>}
            {isPending &&<button>Adding Blog..</button>}
        </form>

    </div>
  )
}

export default Create