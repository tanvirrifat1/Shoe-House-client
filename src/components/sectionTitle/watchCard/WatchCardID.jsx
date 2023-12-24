import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Magnifier from "react-magnifier";
import { BiArrowBack, BiSolidMessage } from "react-icons/bi";
import Feedback from "../../../pages/Shared/Drawer/Feedback";
import { useGetSingleWatchQuery } from "../../../Redux/api/watchAPI";

const WatchCardID = () => {
  const { id } = useParams();
  const router = useNavigate();
  const location = useLocation();
  const [cart, refetch] = useCart();
  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(null);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const { data, isLoading } = useGetSingleWatchQuery(id);

  const handleAddToCart = () => {
    if (user && user?.email) {
      const saveData = {
        category: data?.data.category,
        details: data?.data.details,
        email: user?.email,
        image: data?.data.image,
        name: data?.data.name,
        price: data?.data.price,
        productId: data?.data?._id,
      };

      fetch(
        `https://watch-shop-mongoose.vercel.app/api/v1/cart/create-cart?email=${user?.email}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveData),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data?.statusCode);
          if (data?.statusCode === 200) {
            Swal.fire("Order successfully!");
            refetch();
          } else {
            Swal.fire("Already Booked");
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

  const [checkbox1Checked, setCheckbox1Checked] = useState(true);
  const [checkbox2Checked, setCheckbox2Checked] = useState(false);
  const [checkbox3Checked, setCheckbox3Checked] = useState(false);

  const handleCheckbox1Toggle = () => {
    setCheckbox1Checked(true);
    setCheckbox2Checked(false);
    setCheckbox3Checked(false);
  };

  const handleCheckbox2Toggle = () => {
    setCheckbox1Checked(false);
    setCheckbox2Checked(true);
    setCheckbox3Checked(false);
  };

  const handleCheckbox3Toggle = () => {
    setCheckbox1Checked(false);
    setCheckbox2Checked(false);
    setCheckbox3Checked(true);
  };

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="mt-52">
        <p className="text-5xl text-center min-h-[500px] ">Loading...</p>;
      </div>
    );
  }

  return (
    <div>
      <div className="lg:ml-52 lg:mt-20" onClick={() => navigate(-1)}>
        <p className="text-black text-3xl  my-2">
          <BiArrowBack />
        </p>
      </div>

      <div className="flex justify-center my-4 hero min-h-[65vh]">
        <Card className="w-full max-w-[56rem] hero-content flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <Magnifier
              src={data?.data?.image}
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody className=" mt-14">
            <Typography variant="h6" color="gray" className="mb-4 uppercase">
              {data?.data?.name}
            </Typography>
            <Typography variant="h8" color="blue-gray" className="mb-2">
              {data?.data?.details}
            </Typography>
            <Typography color="black" className="mb-8 font-normal">
              Price: {data?.data?.price} $
            </Typography>

            <div className="flex my-2 gap-2">
              <h1>Color:</h1>
              <input
                type="checkbox"
                checked={checkbox1Checked}
                onChange={handleCheckbox1Toggle}
                className="checkbox"
              />
              <input
                type="checkbox"
                checked={checkbox2Checked}
                onChange={handleCheckbox2Toggle}
                className="checkbox checkbox-primary"
              />
              <input
                type="checkbox"
                checked={checkbox3Checked}
                onChange={handleCheckbox3Toggle}
                className="checkbox checkbox-success"
              />
            </div>

            <div className="flex my-2 gap-2">
              <h1>Quantity: </h1>
              <div className="flex font-semibold">
                <p className="btn text-xl" onClick={handleDecrement}>
                  -
                </p>
                <p className="text-xl mx-2 mt-2"> {quantity}</p>
                <p className="btn text-xl" onClick={handleIncrement}>
                  +
                </p>
              </div>
            </div>
            <div className="flex my-2 gap-2">
              {data?.data?.status === "out of stock" ? (
                <>
                  {" "}
                  <h1 className="text-red-600 text-xl">{data?.data?.status}</h1>
                </>
              ) : (
                <>
                  {" "}
                  <h1 className="text-primary text-xl">{data?.data?.status}</h1>
                </>
              )}
            </div>

            <div className="flex justify-between">
              <div href="#" className="inline-block ">
                <Button
                  disabled={data?.data?.status === "out of stock"}
                  variant="text"
                  className="flex items-center  bg-blue-gray-900 text-white hover:text-black gap-2"
                  onClick={handleAddToCart}
                >
                  Order
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </div>

              <label
                onClick={handleOpen}
                className="flex items-center p-2  btn btn-outline gap-2 rounded-2xl"
                htmlFor="my_modal_6"
              >
                <div className="flex items-center gap-2">
                  FeedBAck
                  <BiSolidMessage className="text-blue-gray-600" />
                </div>
              </label>
            </div>
          </CardBody>
          {openModal && <Feedback setOpenModal={setOpenModal} />}
        </Card>
      </div>
    </div>
  );
};

export default WatchCardID;
