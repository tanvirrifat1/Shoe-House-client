import React from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./ChekOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_key);

const Payment = () => {
  return (
    <div>
      <SectionTitle heading={"Payment"} />
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
