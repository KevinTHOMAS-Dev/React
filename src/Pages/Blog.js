import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Article from '../Components/Article';

const Blog = () => {
    const [blogdata, setblogData] = useState([]);
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    
    const [error, setError] = useState(false);
    const getData = () => {
        axios
        .get("http://localhost:3005/articles")
        .then((res) => setblogData(res.data));
    }

    useEffect(() => getData(), []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (content.length < 140) {
            setError(true);
        } else {
            axios.post("http://localhost:3005/articles", {
                author,
                content,
                date: Date.now(),
            })
            setError(false);
            setAuthor("");
            setContent("");
            getData();
        }
    };

    return (
        <div className="blog-container">
            <h1>Blog</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder='Nom' onChange={(e) => setAuthor(e.target.value)}  value={author}/>
                <textarea style={{ border: error ? "1px solid red" : "1px solid #61dafb" }} placeholder='Message' onChange={(e) => setContent(e.target.value)} value={content}></textarea>
                {error && <p>Veuillez écrire un minimum de 140 caractères</p>}
                <input type="submit" value="Envoyer" />
            </form>
            <ul>
                {blogdata
                .sort((a, b) => b.date - a.date)
                .map((article) =>(
                    <Article key={article.id} article={article}/>
                ))}
             </ul>
        </div>
    );
};
                    

export default Blog;