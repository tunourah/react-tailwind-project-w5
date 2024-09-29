import React from 'react';

import Button from './Button'
const BestInClassRestaurantPage = () => {
  return (
    <div className=" text-gray-800">
      {/* Best in Class Restaurant Section */}
      <section className="px-6 lg:px-12 py-12">
        <h2 className="text-center text-3xl font-bold text-gray-900">Best in Class Restaurant</h2>
        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra, ac porttitor orci.
        </p>

        <div className="grid gap-8 mt-12 md:grid-cols-3">
          {/* Restaurant 1 */}
          <div className="  shadow-lg rounded-lg overflow-hidden">
            <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-1.jpg" alt="Bern's Steak House" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="font-semibold text-xl">Bern's Steak House</h3>
              <p className="text-gray-600 mt-3">Potenti tincidunt arcu euismod amet ac curabitur iaculis in ut aliquet.</p>
            </div>
          </div>

          {/* Restaurant 2 */}
          <div className="  shadow-lg   overflow-hidden">
            <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-2.jpg" alt="Eewak Korean Restaurant" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="font-semibold text-xl">Eewak Korean Restaurant</h3>
              <p className="text-gray-600 mt-3">Tristique in ornare lectus facilisis diam libero, eros sit scelerisque pulvinar dui.</p>
            </div>
          </div>

          {/* Restaurant 3 */}
          <div className="  shadow-lg   overflow-hidden">
            <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-3.jpg" alt="The Ramban Vegan House" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="font-semibold text-xl">The Ramban Vegan House</h3>
              <p className="text-gray-600 mt-3">Iaculis morbi id maecenas mi amet, mi ut dolor aenean id justo.</p>
            </div>
          </div>

          {/* 4 */}
          <div className="  shadow-lg   overflow-hidden">
            <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-4.jpg" alt="The Ramban Vegan House" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="font-semibold text-xl">The Ramban Vegan House</h3>
              <p className="text-gray-600 mt-3">Iaculis morbi id maecenas mi amet, mi ut dolor aenean id justo.</p>
            </div>
          </div>
          {/* 5 */}
          <div className="  shadow-lg  overflow-hidden">
            <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-5.jpg" alt="The Ramban Vegan House" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="font-semibold text-xl">The Ramban Vegan House</h3>
              <p className="text-gray-600 mt-3">Iaculis morbi id maecenas mi amet, mi ut dolor aenean id justo.</p>
            </div>
          </div>
          {/* 6 */}
          <div className="  shadow-lg   overflow-hidden">
            <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-6.jpg" alt="The Ramban Vegan House" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="font-semibold text-xl">The Ramban Vegan House</h3>
              <p className="text-gray-600 mt-3">Iaculis morbi id maecenas mi amet, mi ut dolor aenean id justo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Mailing List Section */}
      <section className="px-6 lg:px-12 py-12 bg-white flex justify-between items-center    border-8 border-gray-300" >
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6">
          <img
            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-subscribe-cta-img.jpg"
            alt="Join Mailing List"
            className="w-full lg:w-1/3 h-48 object-cover rounded-lg"
          />
          <div className="max-w-lg">
            <h2 className="text-2xl font-bold text-gray-900">Join Mailing List</h2>
            <p className="text-gray-600 mt-4">
              Sign up and get all the latest, ad-free reviews, recipes, and news sent to your inbox.
            </p>
            <div className="mt-6">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <div className="mt-4  ">
              <Button  bgcolor="w-full" text=" Subscribe">

              </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

 
    
    </div>
  );
};

export default BestInClassRestaurantPage;
