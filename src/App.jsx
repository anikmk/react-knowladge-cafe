
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Booksmarks from './components/Booksmarks/Booksmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks,setBookmarks] = useState([])
  const [readingTime,setReadingTime] = useState(0)
  const handleBooksMarks = blog => {
    const newBookMarks = [...bookmarks,blog]
    setBookmarks(newBookMarks)
  }
  const markAsRead = (id,time) => {
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime)
    // remove icon
   const remainigBookMark = bookmarks.filter(bookmark=> bookmark.id !==id)
   setBookmarks(remainigBookMark)
  }
  

  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-6xl mx-auto'>
     <Blogs handleBooksMarks={handleBooksMarks} markAsRead={markAsRead}></Blogs>
     <Booksmarks bookmarks={bookmarks} readingTime={readingTime}></Booksmarks>
     </div>
      
    </>
  )
}

export default App
