import Button from "./Button";
import Card from "./Crad";
const LatestReviewsPage = () => {
  return (
    <div className="bg-custom-gray text-gray-800">
      {/* Featured In Section */}
      <section className="py-12 bg-custom-gray text-center">
        <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">As Featured In</h2>
        <div className=" grid  grid-cols-2 sm:flex-row sm:flex justify-center mt-6 space-x-6">
            <div>
          <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-1.svg" alt="logo 1" className="h-30" />
         </div>
         <div>
          <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-2.svg" alt="logo 2" className="h-30" />
          </div>
          <div>
          <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-3.svg" alt="logo 3" className="h-30" />
            </div>
            <div>
          <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-4.svg" alt="logo 4" className="h-30" />
          </div>
          <div>
          <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-5.svg" alt="logo 5" className="h-30" />
          </div>
        </div>
      </section>

      {/* Latest Reviews Section */}
      <section className="px-6 lg:px-12 py-12">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">Latest Reviews</h2>
     <Button text="View All" bgcolor="border-custom-brown" textcolor="text-custom-brown"  />
      </div>

      <div className="grid gap-8 mt-8 md:grid-cols-3">
        {/* Review 1 */}
        <Card
          title="Grilled Flank Steak with Chimichurri"
          description="Potenti tincidunt arcu euismod curabitur iaculis ut aliquet facilisis pharetra, pharetra dolor scelerisque."
          image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-1.jpg"
          link="#"
        />

        {/* Review 2 */}
        <Card
          title="Mushroom Penne with Walnut Pesto"
          description="Ipsum amet ultrices suscipit eget tortor, tincidunt urna, mattis aliquam duis eget luctus."
          image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-2.jpg"
          link="#"
        />

        {/* Review 3 */}
        <Card
          title="Garlic Butter White Wine Shrimp Linguine"
          description="Non faucibus tincidunt commodo est arcu ipsum augue ipsum at vitae, nunc purus erat sem leo fames facilisis."
          image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-3.jpg"
          link="#"
        />
      </div>
    </section>
    </div>
  );
};

export default LatestReviewsPage;
