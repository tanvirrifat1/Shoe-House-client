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
    <div className="featured-item text-white m-10">
      <SectionTitle subHeading="check it out" heading="from our shop" />
      <div className="md:flex justify-center items-center py-8 px-16">
        <div>
          <img className="rounded-2xl" src={image} alt="" />
        </div>
        <div className="md:ml-10">
          <p className="font-semibold">{formattedDate}</p>
          <p>
            <p>🎉 Exclusive Timepiece Extravaganza! 🕒</p>
            Unveiling our Spectacular Summer Sale at Time Square 🌞 Indulge in
            Luxury: Up to 50% OFF on Select Watches! 🔥 Limited-Time Offer:{" "}
            <br />
            August 10th - August 20th 🔥 🌟 Discover a World of Elegance: <br />{" "}
            Dive into a stunning collection of renowned brands Choose from an
            array of mesmerizing styles Elevate your wrist game with exquisite
            craftsmanship 💎 Why Choose Time Square Unbeatable Discounts: <br />{" "}
            Grab your dream watch at unbeatable prices Expert Guidance: <br />{" "}
            Our watch enthusiasts are here to assist you Quality Assurance:{" "}
            <br /> Guaranteed authenticity and durability Hassle-Free Shopping:{" "}
            <br /> Online and in-store options available 🎁 BONUS Perks: <br />{" "}
            Complimentary watch sizing for the perfect fit Free shipping on
            orders over $100 Gift with purchase on select models 🔔 Don't Miss
            Out! Whether its a gift for a loved one or a treat for yourself, our
            Summer Sale is your ticket to timeless elegance. Mark your calendars
            and join us at Time Square starting August 10th! Visit us online at
            Website URL or step into our store at Manikganj Sadar. Elevate your
            style with the watch of your dreams. See you there! 🛍️
          </p>
          <button className="btn btn-outline text-white my-2">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
