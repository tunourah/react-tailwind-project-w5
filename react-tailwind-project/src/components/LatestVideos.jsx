 
import Button from './Button'
import VideoCard from './VideoCard'
const LatestVideos = () => {
  return (
 
<section className="px-6 lg:px-12 py-12">
<h2 className="text-3xl font-bold text-gray-900">Latest Videos</h2>

<div className="flex flex-col lg:flex-row lg:space-x-12 mt-8">
  {/* Main Video */}
  <div className="lg:w-2/3">
    <div className="bg-custom-gray shadow-lg  overflow-hidden">
    <div className='relative'>
  <img
    src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-5.jpg"
    alt="Main Video"
    className="w-full h-64 object-cover"
  />
  
  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
    <span className="text-custom-brown hover:text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 576 512"
        className='h-20 w-20'
      >
        <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
      </svg>
    </span>
  </div>
</div>

      <div className="p-6">
        <h3 className="font-semibold text-xl">
          Dianna Adams visits the Sooto Restaurant | Uncovered Miami
        </h3>
        <p className="text-gray-600 mt-3">
          A consectetur eget ultrices nec vel purus quam dignissim purus gravida aliquam mattis ultrices eget ultrices tincidunt et erat enim vitae sollicitudin tellus placerat.
        </p>
      </div>
    </div>
  </div>

  {/* Other Videos */}
  <div className="lg:w-1/3 flex flex-col space-y-8 mt-8 lg:mt-0">
      {/* Video 1 */}
      <VideoCard
        image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-2.jpg"
        alt="Family Dinner"
        title="Family Dinner - Latea pulvinar scelerisque diam tempus facilisi"
        description="Enim imperdiet fames nisl, purus et diam aliquet"
      />

      {/* Video 2 */}
      <VideoCard
        image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-3.jpg"
        alt="Lobortis turpis turpis"
        title="Lobortis turpis turpis vehicula laoreet egestas enim ornare"
        description="Enim imperdiet fames nisl, purus et diam aliquet"
      />

      {/* Video 3 */}
      <VideoCard
        image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-4.jpg"
        alt="Tempus quis ac"
        title="Tempus quis ac viverra condimentum sit nulla viverra"
        description="Enim imperdiet fames nisl, purus et diam aliquet"
      />
    </div>
</div>
</section>
  )
}

export default LatestVideos