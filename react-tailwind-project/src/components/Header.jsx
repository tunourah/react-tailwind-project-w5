import Button from "./Button";

const Header = () => {
  const svg1 = (
    <span className="[&>svg]:h-5 [&>svg]:w-10 text-slate-200 hover:text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 576 512"
      >
        <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
      </svg>
    </span>
  );

  const svg2 = (
    <span className="[&>svg]:h-5 [&>svg]:w-10  text-slate-200 hover:text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 448 512"
      >
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    </span>
  );
  const svg3 = (
    <span className="[&>svg]:h-5 [&>svg]:w-10  text-slate-200 hover:text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 320 512"
      >
        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
      </svg>
    </span>
  );

  return (
    <div
      className="bg-white text-gray-800"
      style={{
        background: "linear-gradient(to right, #f6f5f5 60%, #BE7C68 30%)",
      }}
    >
      {/* Header Section */}
      <header className="flex items-center justify-between p-6">
        <nav className="flex space-x-6 ">
          <img
            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg"
            alt="logo"
            className="w-12 h-12"
          />
          <ul className="sm:flex hidden justify-center items-center">
            <li className="mx-2 uppercase text-sm font-bold hover:text-custom-brown cursor-pointer">
              Home
            </li>
            <li className="mx-2 uppercase text-sm font-bold hover:text-custom-brown cursor-pointer">
              About
            </li>
            <li className="mx-2 uppercase text-sm font-bold hover:text-custom-brown cursor-pointer">
              Reviews
            </li>
            <li className="mx-2 uppercase text-sm font-bold hover:text-custom-brown cursor-pointer">
              Videos
            </li>
            <li className="mx-2 uppercase text-sm font-bold hover:text-custom-brown cursor-pointer">
              Contact
            </li>
          </ul>
        </nav>
        <div className="flex justify-center items-center mx-2">
          <button
            type="button"
            className="text-white bg-custom-brown p-2 rounded-full border border-custom-brown hover:bg-gray-400 sm:hidden"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
        <ul className="hidden sm:flex justify-center items-center">
          <li className="mx-2">{svg1}</li>
          <li className="mx-2">{svg2}</li>
          <li className="mx-2">{svg3}</li>
          <Button text="Let's Talk" />
        </ul>
      </header>

      {/* Main Section */}
      <section className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start px-6 lg:px-12 py-10">
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6">
          <div className="flex items-center">
            <div className="border-b border-custom-brown w-20 mr-2"></div>
            <p className="text-custom-brown text-sm uppercase tracking-wider">
              Welcome
            </p>
          </div>

          <h1 className="text-5xl font-bold text-gray-900">I'm Dianna Adams</h1>
          <p className="text-2xl font-medium text-gray-700">
            Food Critic / Influencer / Blogger
          </p>
          <p className="text-gray-600">
            Massa urna magnis dignissim id euismod porttitor vitae etiam viverra
            nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus
            pharetra, ac porttitor orci.
          </p>
          <Button text="Join Insider" bgcolor="border-custom-brown"></Button>

          {/* Stats Section */}
          <div className="flex space-x-8 pt-6 mt-10">
            <div className="text-center">
              <p className="mx-2  ">{svg1}</p>
              <h3 className="text-2xl font-bold text-gray-900">1.2M+</h3>
              <p className="text-gray-600">Subscribers</p>
            </div>
            <div className="text-center">
              <p className="mx-2">{svg2}</p>
              <h3 className="text-2xl font-bold text-gray-900">1.8M+</h3>
              <p className="text-gray-600">Followers</p>
            </div>
            <div className="text-center">
              <p className="mx-2">{svg3}</p>
              <h3 className="text-2xl font-bold text-gray-900">800K+</h3>
              <p className="text-gray-600">Readers</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img
            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg"
            alt="Dianna Adams"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Header;
