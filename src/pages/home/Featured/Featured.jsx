import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import image from "../../../assets/assets/category/watch6.png";
import "./Featured.css";

const Featured = () => {
  // Get the current date
  const currentDate = new Date();

  // Format the current date as "Month Day, Year"
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="featured-item bg-fixed text-white my-20 pt-2 rounded-xl">
      <SectionTitle subHeading="check it out" heading="from our shop" />
      <div className="flex flex-col md:flex-row justify-center items-center pb-10 md:pb-20 px-6 md:px-10 lg:px-20">
        <div className="mb-4 lg:mb-0 lg:mr-6 lg:w-1/2">
          <img className="rounded-2xl w-72 lg:ml-32 h-72" src={image} alt="" />
        </div>
        <div className="md:ml-10">
          <p className="font-semibold">{formattedDate}</p>
          <p>
            <p>🎉 Exclusive Timepiece Extravaganza! 🕒</p>
            Unveiling our Spectacular Summer Sale at Time Square 🌞 Indulge in
            Luxury: Up to 50% OFF on Select Watches! 🔥 Limited-Time Offer:{" "}
            <br />
            {formattedDate} 🔥 🌟 Discover a World of Elegance: <br /> Dive into
            a stunning collection of renowned brands Choose from an array of Our
            watch enthusiasts are here to assist you Quality Assurance: <br />{" "}
            Guaranteed authenticity and durability Hassle-Free Shopping: <br />{" "}
            Online and in-store options available 🎁 BONUS Perks: <br />{" "}
            Complimentary watch sizing for the perfect fit Free shipping on
            orders over $100 Gift with purchase on select models 🔔 Don't Miss
            Out! Whether its a gift for a loved one or a treat for yourself, our
            Summer Sale is your ticket to timeless elegance. Mark your calendars
            and join us at Time Square starting August 10th! Visit us online at
            Website URL or step into our store at Manikganj Sadar. Elevate your
            style with the watch of your dreams. See you there! 🛍️
          </p>
          <button className="btn btn-outline border-0 border-b-4 text-white my-2">
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
