 
import Button from './Button'

const LatestVideos = () => {
  return (
//     <div className='max-w-4xl w-full mx-auto m-10'>

// <div>
//     <h1 className='text-3xl font-bold text-gray-900 mb-5 text-center md:text-left'>Latest Videos</h1>
    
// </div>
// {/* content */}
// <div className=' flex flex-col justify-center items-center w-screen md:flex-row'>
//     {/* first */}
// <div className=' mx-auto md:w-1/2'>
//     <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-2.jpg" alt="video" className='w-96 h-60 mb-5'/>
//     <h2 className='text-black font-extrabold  text-2xl   '>Dianna Adams visits the Sooto Restaurant | Uncovered Miami</h2>
// <p className='mt-5  mb-10 md:mb-0 text-gray-400 text-sm   '>A consectetur eget ultrices nec velit purus quam dignissim purus gravida aliquam mattis ultrices eget ultricies tincidunt et erat enim vitae sollicitudin tellus placerat</p>
// </div>

// {/* second */}
// <div className='flex flex-col w-1/2'>
// <div className='flex-col md:flex  mt-2'>
// <div className='mr-2'>
// <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-2.jpg" alt="video" className='    mb-5'/>
// </div>


// <div className='w-screen md:w-full'>
// <h2 className='text-black font-extrabold      '>Family Dinner - Latea pulvinar scelerisque diam tempus facilisi</h2>
// <p className='  text-gray-400 text-xs   '>Enim imperdiet fames nisl, purus et diam aliquet</p>
// </div>

// </div>

// {/* 2 */}
// <div className='flex-col md:flex  mt-2'>
// <div className='mr-2'>
// <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-2.jpg" alt="video" className='    mb-5'/>
// </div>


// <div className='w-screen md:w-full'>
// <h2 className='text-black font-extrabold      '>Family Dinner - Latea pulvinar scelerisque diam tempus facilisi</h2>
// <p className='  text-gray-400 text-xs   '>Enim imperdiet fames nisl, purus et diam aliquet</p>
// </div>

// </div>
// {/* 3 */}
// <div className='flex-col md:flex  mt-2'>
// <div className='mr-2'>
// <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-2.jpg" alt="video" className='    mb-5'/>
// </div>


// <div className='w-screen md:w-full'>
// <h2 className='text-black font-extrabold      '>Family Dinner - Latea pulvinar scelerisque diam tempus facilisi</h2>
// <p className='  text-gray-400 text-xs   '>Enim imperdiet fames nisl, purus et diam aliquet</p>
// </div>

// </div>
// {/* 4 */}
// <div className='flex-col md:flex  mt-2'>
// <div className='mr-2'>
// <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-2.jpg" alt="video" className='    mb-5'/>
// </div>


// <div className='w-screen md:w-full'>
// <h2 className='text-black font-extrabold      '>Family Dinner - Latea pulvinar scelerisque diam tempus facilisi</h2>
// <p className='  text-gray-400 text-xs   '>Enim imperdiet fames nisl, purus et diam aliquet</p>
// </div>

// </div>
// <Button text='View All Videos' textcolor='text-custom-brown' bgcolor='border-custom-brown'  className="bg-black"/>
// </div>








// </div>

//     </div>
<section className="px-6 lg:px-12 py-12">
<h2 className="text-3xl font-bold text-gray-900">Latest Videos</h2>

<div className="flex flex-col lg:flex-row lg:space-x-12 mt-8">
  {/* Main Video */}
  <div className="lg:w-2/3">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src="https://via.placeholder.com/600x400"
        alt="Main Video"
        className="w-full h-64 object-cover"
      />
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
    <div className="flex items-start space-x-4">
      <img
        src="https://via.placeholder.com/150x100"
        alt="Family Dinner"
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div>
        <h4 className="font-semibold text-lg">
          Family Dinner - Latea pulvinar scelerisque diam tempus facilisi
        </h4>
        <p className="text-gray-600 mt-2">Enim imperdiet fames nisl, purus et diam aliquet</p>
      </div>
    </div>

    {/* Video 2 */}
    <div className="flex items-start space-x-4">
      <img
        src="https://via.placeholder.com/150x100"
        alt="Lobortis turpis turpis"
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div>
        <h4 className="font-semibold text-lg">
          Lobortis turpis turpis vehicula laoreet egestas enim ornare
        </h4>
        <p className="text-gray-600 mt-2">Enim imperdiet fames nisl, purus et diam aliquet</p>
      </div>
    </div>

    {/* Video 3 */}
    <div className="flex items-start space-x-4">
      <img
        src="https://via.placeholder.com/150x100"
        alt="Tempus quis ac"
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div>
        <h4 className="font-semibold text-lg">Tempus quis ac viverra condimentum sit nulla viverra</h4>
        <p className="text-gray-600 mt-2">Enim imperdiet fames nisl, purus et diam aliquet</p>
      </div>
    </div>
  </div>
</div>
</section>
  )
}

export default LatestVideos