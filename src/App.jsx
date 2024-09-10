import './App.css'
import Navbar from './components/Navbar.jsx'
import Contact from './components/Contact'


const App = () => {
  return (
    <>
      <Navbar />
      <div className='app-body py-5'>
      <Contact />
      </div>
    </>
  )
}

export default App
