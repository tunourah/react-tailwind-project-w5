 
import './App.css'
import Footer from './components/Footer'
import LatestVideos from './components/LatestVideos'
import Header from './components/Header'
import LatestReviewsPage from './components/LatestReviewsPage'
import BestInClassRestaurantPage from './components/BestInClassRestaurantPage'

function App() {
 

  return (
    <>
    <div className='max-w-6xl w-full mx-auto flex flex-col justify-between'>
<Header></Header>
<LatestReviewsPage></LatestReviewsPage>
<BestInClassRestaurantPage></BestInClassRestaurantPage>
      <LatestVideos></LatestVideos>
 <Footer></Footer>

      </div>
    </>
  )
}

export default App
