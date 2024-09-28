import React from "react";

const Footer = () => {
  const svg = (
    <span className="[&>svg]:h-5 [&>svg]:w-5 text-custom-brown hover:text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 576 512"
      >
        <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
      </svg>
    </span>
  );

  return (
    <div className=" max-w-6xl w-full mx-auto m-10">
      <div className=" flex flex-col sm:flex-row justify-between">
        <div className="mt-5">
        <img
            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg"
            alt="logo"
            className="w-12 h-12 mx-auto"
          />
        </div>
        <ul className=" flex sm:flex  mt-5 justify-center items-center">
          <li className="mx-2  text-sm  hover:text-custom-brown cursor-pointer">
            Home
          </li>
          <li className="mx-2  text-sm  hover:text-custom-brown cursor-pointer">
            About
          </li>
          <li className="mx-2  text-sm  hover:text-custom-brown cursor-pointer">
            Reviews
          </li>
          <li className="mx-2  text-sm  hover:text-custom-brown cursor-pointer">
            Videos
          </li>
          <li className="mx-2  text-sm  hover:text-custom-brown cursor-pointer">
            Contact
          </li>
        </ul>
        <ul className="flex sm:flex mt-5 justify-center items-center">
          <li className="mx-2 ">{svg}</li>
          <li className="mx-2">{svg}</li>
          <li className="mx-2">{svg}</li>
        </ul>
      </div>
      <div className="flex justify-between mt-10">
        <p className="text-gray-400 text-xs">
          {" "}
          Powered by Food Blogger & Influencer
        </p>
        <p className="text-gray-400 text-xs">
          © 2024 Food Blogger & Influencer
        </p>
      </div>
    </div>
  );
};

export default Footer;
