
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog}) => {
    const {cover,title,author_img,author,postated_date,reading_time,hashtags} = blog
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
                    <button className='ml-5'><FaBookmark></FaBookmark></button>
                </div>
                <div></div>
            </div>
            <h2 className='text-4xl mb-4'>{title}</h2>
            {
                hashtags.map( (hash, idx) => <span key={idx}><a>{hash}</a></span>)
            }
            

        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired
}
export default Blog;