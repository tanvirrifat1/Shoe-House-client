import React from "react";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { useNavigate, useParams } from "react-router-dom";
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

const WatchCardID = () => {
  const { id } = useParams();

  const router = useNavigate();
  const [cart, refetch] = useCart();
  const { user } = useContext(AuthContext);

  const { data } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/api/v1/menu/${id}`);
      return res.json();
    },
  });

  const handleAddToCart = () => {
    if (user && user?.email) {
      const orderItem = { ...data?.data, email: user.email };
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
            Swal.fire("Booking successfully!");
            refetch();
          } else {
            Swal.fire("Already Booked");
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
    <div className="flex justify-center my-4 hero min-h-screen">
      <Card className="w-full max-w-[56rem] hero-content flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={data?.data?.image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className=" mt-14">
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            {data?.data?.name}
          </Typography>
          {/* <Typography variant="h4" color="blue-gray" className="mb-2">
            Lyft launching cross-platform service this week
          </Typography> */}
          <Typography color="gray" className="mb-8 font-normal">
            {data?.data?.details}
          </Typography>
          <div href="#" className="inline-block">
            <Button
              variant="text"
              className="flex items-center bg-blue-gray-900 text-white hover:text-black gap-2"
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
        </CardBody>
      </Card>
    </div>
  );
};

export default WatchCardID;
