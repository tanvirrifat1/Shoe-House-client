import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaPhoneAlt, FaShoppingBag } from "react-icons/fa";
import { FiWatch } from "react-icons/fi";
import { VscFeedback } from "react-icons/vsc";
import { FaCartArrowDown } from "react-icons/fa";
import { useAuth } from "../../../hooks/useAuth";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { MdOutlinePayment } from "react-icons/md";

const UserHome = () => {
  const { user } = useAuth();

  const { data } = useQuery({
    queryKey: ["totalValue"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/api/v1/payment/totalValueByUser`
      );
      return res.json();
    },
  });
  console.log(data?.data);
  const totalOrderData = data?.data?.result.find(
    (item) => item._id === user?.email
  );

  const totalReviewData = data?.data?.result3.find(
    (item) => item._id === user?.email
  );

  const totalPaymentData = data?.data?.result2.find(
    (item) => item._id === user?.email
  );
  console.log(totalPaymentData);

  return (
    <div>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FiWatch className="text-3xl mt-6" />
          </div>
          <div className="stat-title">Total Watches</div>
          <div className="stat-value">{data?.data?.menuLength}</div>
          {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaShoppingBag className="text-3xl mt-6" />
          </div>
          <div className="stat-title">Order</div>
          <div className="stat-value">{totalOrderData?.quantity}</div>
          {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaPhoneAlt className="text-3xl mt-6" />
          </div>
          <div className="stat-title">Contact Info</div>
          <div className="stat-value">+88 01633912193</div>
          {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>
      </div>
      {/*  */}
      <div className="mt-10">
        <Card className="w-full max-w-[48rem] flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src={user?.photoURL}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant="h6"
              color="gray"
              className="mb-4 uppercase flex gap-3 mt-14"
            >
              <div className="stat-figure text-secondary">
                <div className="flex gap-2 mt-1">
                  <FaCartArrowDown className="text-3xl " />
                  <p>Your Orders</p>
                </div>
              </div>
              : <p className="text-xl">{totalOrderData?.quantity}</p>
            </Typography>
            <Typography
              variant="h6"
              color="gray"
              className="mb-4 uppercase flex gap-3"
            >
              <div className="stat-figure text-secondary">
                <div className="flex gap-2 mt-1">
                  <VscFeedback className="text-3xl " />
                  <p>Your Reviews</p>
                </div>
              </div>
              : <p className="text-xl">{totalReviewData?.quantity}</p>
            </Typography>
            <Typography
              variant="h6"
              color="gray"
              className="mb-4 uppercase flex gap-3"
            >
              <div className="stat-figure text-secondary">
                <div className="flex gap-2 mt-1">
                  <MdOutlinePayment className="text-3xl " />
                  <p>Your Payments</p>
                </div>
              </div>
              : <p className="text-xl">{totalPaymentData?.quantity}</p>
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default UserHome;
