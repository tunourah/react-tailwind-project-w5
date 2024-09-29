import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/Footer";
import LastSection from "../components/LastSection";

const Contact = () => {
  return (
    <div>
      <div className="max-w-6xl w-full mx-auto flex flex-col justify-between">
        <Navbar />
      </div>

      <div className="flex flex-col sm:flex-row max-w-6xl w-full mx-auto m-10">
        <div className=" w-1/2">
          <h1 className="sm:text-6xl mx-5 text-3xl">Contact</h1>
          <p className="text-gray-400 mt-10 leading-10 text-center sm:text-start w-screen sm:w-full  text-sm sm:text-base">
            Massa urna magnis dignissim id euismod porttitor vitae etiam viverra
            at adipiscing sit morbi aliquet mauris porttitor nisi, senectus
            pharetra, ac porttitor orci.
          </p>
          <div className="flex justify-between items-center w-1/4 m-5">
            <div>
              <svg
                className="w-[30px] h-[30px] fill-custom-brown"
                viewBox="0 0 576 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M302.8 312C334.9 271.9 408 174.6 408 120C408 53.7 354.3 0 288 0S168 53.7 168 120c0 54.6 73.1 151.9 105.2 192c7.7 9.6 22 9.6 29.6 0zM416 503l144.9-58c9.1-3.6 15.1-12.5 15.1-22.3V152c0-17-17.1-28.6-32.9-22.3l-116 46.4c-.5 1.2-1 2.5-1.5 3.7c-2.9 6.8-6.1 13.7-9.6 20.6V503zM15.1 187.3C6 191 0 199.8 0 209.6V480.4c0 17 17.1 28.6 32.9 22.3L160 451.8V200.4c-3.5-6.9-6.7-13.8-9.6-20.6c-5.6-13.2-10.4-27.4-12.8-41.5l-122.6 49zM384 255c-20.5 31.3-42.3 59.6-56.2 77c-20.5 25.6-59.1 25.6-79.6 0c-13.9-17.4-35.7-45.7-56.2-77V449.4l192 54.9V255z"></path>
              </svg>
            </div>

            <p className="font-semibold text-sm tracking-widest uppercase">
              Address
            </p>
          </div>
          <p className="text-gray-400 text-md m-5 w-screen sm:w-full">
            1234 N Spring St, Los Angeles, CA 90012, United States.
          </p>

          {/*  */}

          <div className="flex justify-between items-center w-1/4 m-5">
            <div>
              <svg
                className="w-[30px] h-[30px] fill-custom-brown"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"></path>
              </svg>
            </div>

            <p className="font-semibold text-sm tracking-widest uppercase">
              Email
            </p>
          </div>
          <p className="text-gray-400 text-md m-5 w-screen sm:w-full">
            mail@example.com
          </p>

          {/*  */}

          <div className="flex justify-between items-center w-1/4 m-5">
            <div>
              <svg
                className="w-[30px] h-[30px] fill-custom-brown"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
               
                <path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z"></path>
              </svg>
            </div>

            <p className="font-semibold text-sm tracking-widest uppercase">
              Phone
            </p>
          </div>
          <p className="text-gray-400 text-md m-5 w-screen sm:w-full">
            +01 - 123 456 7890
          </p>
        </div>
        <div className="  p-5 border-4  w-full sm:w-1/2 border shadow-lg  ">
          <form className="max-w-md mx-auto">
            <div className="grid md:grid-cols-2 md:gap-6 mb-5 pt-5">
              <div className="relative z-0 w-full group ">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm my-5 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-sm my-5 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_last_name"
                  className="peer-focus:font-medium absolute  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_subject"
                id="floating_subject"
                className="block py-2.5 px-0 w-full text-sm mb-5 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_subject"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Subject
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <textarea
                name="floating_message"
                id="floating_message"
                rows="4"
                className="block py-2.5 px-0 w-full text-sm mb-5 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              ></textarea>
              <label
                htmlFor="floating_message"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>

            {/* <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mb-28 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button> */}
            <Button text="Submit"></Button>
          </form>
        </div>
      </div>
      <div className="max-w-6xl w-full mx-auto flex flex-col justify-between">
        <Footer />
        <LastSection />
      </div>
    </div>
  );
};

export default Contact;
