
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog,handleBooksMarks,markAsRead}) => {
    const {id,cover,title,author_img,author,postated_date,reading_time,hashtags} = blog
    return (
        <div className='mb-20 w-2/3'>
            <img className='w-full' src={cover} alt={`cover picture of the title${title}`} />
            <div className='flex justify-between my-5'>
                <div className='flex'>
                    <img className='w-14 rounded-full h-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h2 className='font-bold text-xl'>{author}</h2>
                        <p>{postated_date}</p>

                    </div>

                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button className='ml-5 text-2xl text-red-500' onClick={()=>handleBooksMarks(blog)}><FaBookmark></FaBookmark></button>
                </div>
                <div></div>
            </div>
            <h2 className='text-4xl mb-4'>{title}</h2>
            {
                hashtags.map( (hash, idx) => <span key={idx}><a>{hash}</a></span>)
            }
            <button className='text-purple-600 font-bold ml-4' onClick={()=> markAsRead( id,reading_time)}>Mark As Read</button>
            

        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleBooksMarks:PropTypes.func.isRequired,
    markAsRead:PropTypes.func.isRequired
}
export default Blog;