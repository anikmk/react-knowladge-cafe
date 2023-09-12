
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Booksmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3">
            <div>
                <h3>Reading Time : {readingTime}</h3>
            </div>
            <h2 className="text-4xl">Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark=> <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};
Booksmarks.propTypes ={
    bookmarks:PropTypes.array,
    readingTime: PropTypes.func
}
export default Booksmarks;