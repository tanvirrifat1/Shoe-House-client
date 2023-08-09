const MenuItem = ({ item }) => {
  const { image, price, name, details } = item;
  return (
    <div className="flex space-x-4 justify-center m-8 bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
      <div>
        <img className="w-full md:w-72 rounded-2xl" src={image} alt="" />
      </div>
      <div>
        <h3 className="uppercase text-xl">----{name}----</h3>
        <p className="my-2">{details.slice(0, 180)}...</p>
      </div>
      <div>
        <p className="text-purple-600 text-lg mt-6 m-2">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
