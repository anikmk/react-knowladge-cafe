import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'


const Blogs = ({handleBooksMarks,markAsRead}) => {
    const [blogs,setBlogs] = useState([])
    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            <h2 className="text-4xl">Blogs : {blogs.length}</h2>
            {
                blogs.map(blog => <Blog
                     key={blog.id} 
                     blog={blog}
                     handleBooksMarks={handleBooksMarks}
                     markAsRead={markAsRead}
                     ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes={
    handleBooksMarks: PropTypes.func,
    markAsRead: PropTypes.func

}

export default Blogs;