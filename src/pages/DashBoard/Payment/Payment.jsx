import React from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./ChekOutForm";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_key);

const Payment = () => {
  const [cart] = useCart();

  const total = cart?.data?.reduce(
    (sum, item) => sum + parseFloat(item.price),
    0
  );

  return (
    <div>
      <SectionTitle heading={"Payment"} />
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm price={total} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
