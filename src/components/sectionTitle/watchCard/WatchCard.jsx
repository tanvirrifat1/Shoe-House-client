import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { getBaseUrl } from "../../../hooks/BaseURL";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const WatchCard = ({ item }) => {
  const { image, price, name, details, _id } = item;
  const router = useNavigate();
  const [refetch] = useCart();

  const location = useLocation();
  const { user } = useContext(AuthContext);

  const handleAddToCart = (item) => {
    console.log(item);

    if (user && user.email) {
      const orderItem = { _id, name, image, price, details, email: user.email };
      fetch("http://localhost:5000/api/v1/cart/create-cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.data) {
            Swal.fire("added to cart");
            refetch();
          }
        });
    } else {
      Swal.fire({
        title: "Please Login First?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          router("/login", { state: { from: location } });
        }
      });
    }
  };

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
          <button
            onClick={() => handleAddToCart(item)}
            className="btn w-full rounded-3xl text-black  border-black hover:border-gray-900 px-4 py-2 "
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchCard;
