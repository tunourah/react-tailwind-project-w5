import Button from "./Button";
import Card1 from "./Card1";

const Header = () => {
  const svg = (
    <span className="[&>svg]:h-5 [&>svg]:w-5   text-custom-brown  hover:text-black">
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
    <div className="bg-white text-gray-800">
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
          <li className="mx-2">{svg}</li>
          <li className="mx-2">{svg}</li>
          <li className="mx-2">{svg}</li>
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
          <div className="flex space-x-8 pt-6">
            <div className="text-center">
              <p className="mx-2">{svg}</p>
              <h3 className="text-2xl font-bold text-gray-900">1.2M+</h3>
              <p className="text-gray-600">Subscribers</p>
            </div>
            <div className="text-center">
              <p className="mx-2">{svg}</p>
              <h3 className="text-2xl font-bold text-gray-900">1.8M+</h3>
              <p className="text-gray-600">Followers</p>
            </div>
            <div className="text-center">
              <p className="mx-2">{svg}</p>
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
