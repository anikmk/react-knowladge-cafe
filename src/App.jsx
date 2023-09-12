
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Booksmarks from './components/Booksmarks/Booksmarks'
import Header from './components/Header/Header'

function App() {
  

  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-6xl mx-auto'>
     <Blogs></Blogs>
     <Booksmarks></Booksmarks>
     </div>
      
    </>
  )
}

export default App
