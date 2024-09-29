import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LastSection from "../components/LastSection";
const About = () => {
  return (
    <div  className='bg-custom-gray'>
          <div  style={{
        background: "linear-gradient(to right, #f6f5f5 60%, #BE7C68 30%)",
      }}>
      <div className="max-w-6xl w-full mx-auto flex flex-col justify-between">
        <Navbar></Navbar>
      </div>
      </div>
      <div className="flex flex-col sm:flex-row max-w-6xl w-full mx-auto m-10">
        <div className=" w-1/2">
          <h1 className="sm:text-6xl mx-5 text-3xl">About Me</h1>
          <p className="text-gray-400 mt-10 leading-10 text-center sm:text-start w-screen sm:w-full  text-sm sm:text-base">
            Diam urna ornare leo facilisis suspendisse eu rutrum id augue cursus
            tincidunt nisl eget ornare pharetra ac pharetra, pulvinar ipsum sed
            amet diam morbi amet cursus blandit augue feugiat arcu aliquet
            egestas id diam rhoncus, mollis arcu pharetra quis duis morbi a nunc
            diam mauris ut tortor.
          </p>
          <div className="flex justify-between items-center w-2/4 m-5">
            <div>
              <svg
                className="w-[30px] h-[30px] fill-custom-brown"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"></path>
              </svg>
            </div>

            <p className="font-semibold text-sm tracking-widest uppercase ">
              Food Critic
            </p>
          </div>
          <p className="text-gray-400 text-md m-5 w-screen sm:w-full">
            Diam nulla blandit urna tristique sit etiam amet adipiscing.
          </p>

          {/*  */}

          <div className="flex justify-between items-center w-2/4 m-5">
            <div>
              <svg
                className="w-[30px] h-[30px] fill-custom-brown"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z"></path>
              </svg>
            </div>

            <p className="font-semibold text-sm tracking-widest uppercase">
              Influencer
            </p>
          </div>
          <p className="text-gray-400 text-md m-5 w-screen sm:w-full">
            Et volutpat lacinia enim, purus et rhoncus nibh egestas habitant
            elit.{" "}
          </p>

          {/*  */}

          <div className="flex justify-between items-center  w-2/4 m-5">
            <div>
              <svg
                className="w-[30px] h-[30px] fill-custom-brown"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M446.6 222.7c-1.8-8-6.8-15.4-12.5-18.5-1.8-1-13-2.2-25-2.7-20.1-.9-22.3-1.3-28.7-5-10.1-5.9-12.8-12.3-12.9-29.5-.1-33-13.8-63.7-40.9-91.3-19.3-19.7-40.9-33-65.5-40.5-5.9-1.8-19.1-2.4-63.3-2.9-69.4-.8-84.8.6-108.4 10C45.9 59.5 14.7 96.1 3.3 142.9 1.2 151.7.7 165.8.2 246.8c-.6 101.5.1 116.4 6.4 136.5 15.6 49.6 59.9 86.3 104.4 94.3 14.8 2.7 197.3 3.3 216 .8 32.5-4.4 58-17.5 81.9-41.9 17.3-17.7 28.1-36.8 35.2-62.1 4.9-17.6 4.5-142.8 2.5-151.7zm-322.1-63.6c7.8-7.9 10-8.2 58.8-8.2 43.9 0 45.4.1 51.8 3.4 9.3 4.7 13.4 11.3 13.4 21.9 0 9.5-3.8 16.2-12.3 21.6-4.6 2.9-7.3 3.1-50.3 3.3-26.5.2-47.7-.4-50.8-1.2-16.6-4.7-22.8-28.5-10.6-40.8zm191.8 199.8l-14.9 2.4-77.5.9c-68.1.8-87.3-.4-90.9-2-7.1-3.1-13.8-11.7-14.9-19.4-1.1-7.3 2.6-17.3 8.2-22.4 7.1-6.4 10.2-6.6 97.3-6.7 89.6-.1 89.1-.1 97.6 7.8 12.1 11.3 9.5 31.2-4.9 39.4z"></path>
              </svg>
            </div>

            <p className="font-semibold text-sm tracking-widest uppercase">
              Blogger
            </p>
          </div>
          <p className="text-gray-400 text-md m-5 w-screen sm:w-full">
            Venenatis egestas lectus interdum enim orci intege.
          </p>
        </div>
        <div className="p-5 w-full sm:w-1/2     rounded-lg h-50">
          <img
            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-header-img.jpg"
            alt=""
            className="object-cover rounded-lg  w-full"
          />
        </div>
      </div>

      {/*  */}
      <div className="flex flex-col sm:flex-row max-w-6xl w-full mx-auto  ">
        <div className="p-5 w-full sm:w-1/2     rounded-lg h-50">
          <img
            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg"
            alt=""
            className="object-cover rounded-lg  w-full"
          />
        </div>
        <div className=" w-1/2">
          <div>
            <svg
              className="w-[30px] h-[30px] fill-custom-brown m-2 ml-5"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"></path>
            </svg>
          </div>

          <div>
            <p className=" text-3lg sm:text-4xl font-bold  mx-3 mt-10 w-screen sm:w-full">
              Sem nibh tristique ut laoreet amet tortor eu urna, ante urna
              aliquam tellus suscipit turpis turpis volutpat sed malesuada cras
              amet, donec eget molestie ipsum semper nunc aenean sagittis
              consequat.
            </p>
          </div>
          <div className="mt-10 m-2 mb-5">
            <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/signature.png" alt="segneturs"   className=" fill-custom-brown "/>
          </div>
        </div>
      </div>
      <div className='bg-custom-brown'>
<div className='max-w-6xl w-full mx-auto flex flex-col justify-between'>
 <Footer></Footer>
 </div>
 </div>
      <div className="max-w-6xl w-full mx-auto flex flex-col justify-between">
 
        <LastSection />
      </div>
    </div>
  );
};

export default About;
