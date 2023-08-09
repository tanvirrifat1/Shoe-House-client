import React from "react";

const MenuItem = ({ item }) => {
  const { image, price, name, details } = item;
  return (
    <div className="flex space-x-4 justify-center m-8">
      <div>
        <img className="w-[250px]" src={image} alt="" />
      </div>
      <div>
        <h3 className="uppercase text-xl">----{name}----</h3>
        <p>{details.slice(0, 180)}</p>
      </div>
      <div>
        <p className="text-purple-600 text-lg mt-6">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
