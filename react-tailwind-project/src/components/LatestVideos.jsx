 
import Button from './Button'

const LatestVideos = () => {
  return (
    <div className='max-w-4xl w-full mx-auto m-10'>

<div>
    <h1 className='text-3xl font-bold text-gray-900 mb-5'>Latest Videos</h1>
    
</div>
{/* content */}
<div className='flex'>
    {/* first */}
<div className=' w-1/2'>
    <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-2.jpg" alt="video" className='w-96 h-60 mb-5'/>
    <h2 className='text-black font-extrabold  text-2xl   '>Dianna Adams visits the Sooto Restaurant | Uncovered Miami</h2>
<p className='mt-5 text-gray-400 text-sm   '>A consectetur eget ultrices nec velit purus quam dignissim purus gravida aliquam mattis ultrices eget ultricies tincidunt et erat enim vitae sollicitudin tellus placerat</p>
</div>

{/* second */}
<div className='flex flex-col w-1/2'>
<div className='flex'>
<div className='mr-2'>
<img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-2.jpg" alt="video" className='    mb-5'/>
</div>


<div>
<h2 className='text-black font-extrabold      '>Family Dinner - Latea pulvinar scelerisque diam tempus facilisi</h2>
<p className='  text-gray-400 text-xs   '>Enim imperdiet fames nisl, purus et diam aliquet</p>
</div>

</div>

{/* 2 */}
<div className='flex'>
<div className='mr-2'>
<img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-2.jpg" alt="video" className='    mb-5'/>
</div>


<div>
<h2 className='text-black font-extrabold      '>Family Dinner - Latea pulvinar scelerisque diam tempus facilisi</h2>
<p className='  text-gray-400 text-xs   '>Enim imperdiet fames nisl, purus et diam aliquet</p>
</div>

</div>
{/* 3 */}
<div className='flex'>
<div className='mr-2'>
<img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-2.jpg" alt="video" className='    mb-5'/>
</div>


<div>
<h2 className='text-black font-extrabold      '>Family Dinner - Latea pulvinar scelerisque diam tempus facilisi</h2>
<p className='  text-gray-400 text-xs   '>Enim imperdiet fames nisl, purus et diam aliquet</p>
</div>

</div>
{/* 4 */}
<div className='flex'>
<div className='mr-2'>
<img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-2.jpg" alt="video" className='    mb-5'/>
</div>


<div>
<h2 className='text-black font-extrabold      '>Family Dinner - Latea pulvinar scelerisque diam tempus facilisi</h2>
<p className='  text-gray-400 text-xs   '>Enim imperdiet fames nisl, purus et diam aliquet</p>
</div>

</div>
<Button text='View All Videos' textcolor='text-custom-brown' bgcolor='border-custom-brown' />
</div>








</div>

    </div>
  )
}

export default LatestVideos