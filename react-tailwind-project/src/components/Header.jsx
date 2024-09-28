import Button from "./Button";
import Card1 from "./Card1";

const Header = () => {
  const svg = (
    <span className="[&>svg]:h-5 [&>svg]:w-5 text-amber-50 hover:text-white">
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
    <div className="bg-custom-gray max-w-6xl w-full mx-auto"  style={{
        background: "linear-gradient(to right, #f6f5f5 60%, #BE7C68 30%)",
      }}>
      {/* Navigation Section */}
      <section
        className="border border-green-400 "
       
      >
        <nav className="max-w-6xl w-full mx-auto flex justify-between m-5 mt-8">
          <div className="flex justify-center items-center mx-2">
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
          </div>
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
            <ul className="hidden sm:flex justify-center items-center">
              <li className="mx-2">{svg}</li>
              <li className="mx-2">{svg}</li>
              <li className="mx-2">{svg}</li>
              <Button text="Let's Talk" />
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col sm:flex-row m-6 mt-8">
          <div className="sm:w-1/2">
            <img
              src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg"
              alt="Person enjoying eating"
              className="w-full h-auto"
            />
          </div>
          <div className="sm:w-1/2 mt-6 sm:mt-0 text-left">
            <div className="flex items-center">
              <div className="border-b border-custom-brown w-20 mr-2"></div>
              <p className="text-custom-brown text-sm uppercase tracking-wider">
                Welcome
              </p>
            </div>
            <h1 className="text-black text-4xl font-extrabold mt-4">
              I’m Dianna Adams
            </h1>
            <p className="text-black font-extrabold text-lg mt-2">
              Food Critic / Influencer / Blogger
            </p>
            <p className="text-gray-400 text-xs my-4 leading-6">
              Massa urna magnis dignissim id euismod porttitor vitae etiam
              viverra nunc at adipiscing sit morbi aliquet mauris porttitor
              nisi, senectus pharetra, ac porttitor orci.
            </p>
            <Button
              text="Join Insider"
              textcolor="text-custom-brown"
              bgcolor="border-custom-brown"
            />
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <div className="flex justify-between m-6 mt-8">
        <Card1 number="100" info="recipes" svg={svg} />
        <Card1 number="100" info="followers" svg={svg} />
        <Card1 number="800K" info="readers" svg={svg} />
      </div>
    </div>
  );
};

export default Header;
