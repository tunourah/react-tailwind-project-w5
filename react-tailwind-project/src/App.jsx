 
import './App.css'
import Footer from './components/Footer'
import LatestVideos from './components/LatestVideos'
// import Header from './components/Header'

function App() {
 

  return (
    <>
    <div className='max-w-6xl w-full mx-auto flex flex-col justify-between'>
      <LatestVideos></LatestVideos>
 <Footer></Footer>

      </div>
    </>
  )
}

export default App
