 
import './App.css'
import Footer from './components/Footer'
import LatestVideos from './components/LatestVideos'
import Header from './components/Header'
import LatestReviewsPage from './components/LatestReviewsPage'
import BestInClassRestaurantPage from './components/BestInClassRestaurantPage'
import LastSection from './components/LastSection'

function App() {
 

  return (
    <>
    <div className='bg-custom-gray'>
     
      <div  style={{
        background: "linear-gradient(to right, #f6f5f5 60%, #BE7C68 30%)",
      }}>
      <div className='max-w-6xl w-full mx-auto flex flex-col justify-between'>
<Header></Header>
</div>
</div>
<div>
<div className='max-w-6xl w-full mx-auto flex flex-col justify-between'>
<LatestReviewsPage></LatestReviewsPage>
</div>
</div>
<div className='bg-red-50'>
<div className='max-w-6xl w-full mx-auto flex flex-col justify-between'>
<BestInClassRestaurantPage></BestInClassRestaurantPage>
</div>
</div>
<div>
<div className='max-w-6xl w-full mx-auto flex flex-col justify-between'>
      <LatestVideos></LatestVideos>
      </div>
      </div>
      <div className='bg-custom-brown'>
<div className='max-w-6xl w-full mx-auto flex flex-col justify-between'>
 <Footer></Footer>
 </div>
 </div>
 <div  className='max-w-6xl w-full mx-auto flex flex-col justify-between'>
 <LastSection></LastSection>
 </div>
      </div>
      
    </>
  )
}

export default App
