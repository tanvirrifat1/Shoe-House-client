import { Link } from "react-router-dom";

const WatchCard = ({ item }) => {
  const { image, price, name, details, _id } = item;

  return (
    <div className="card  card-compact lg:w-96  shadow-xl hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
      <figure>
        <img className="w-[390px] h-[300px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between bg-slate-200 p-2 rounded-lg">
          <p className="text-2xl hover:text-green-700">{name}</p>
          <h2 className="text-2xl hover:text-green-700">${price}</h2>
        </div>
        <p>{details.slice(0, 100)}...</p>

        <div className="card-actions justify-center">
          <Link
            to={`/detailsPage/${_id}`}
            className="btn w-full rounded-3xl text-black  border-black hover:border-gray-900 px-4 py-2 "
          >
            Read more ...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WatchCard;
