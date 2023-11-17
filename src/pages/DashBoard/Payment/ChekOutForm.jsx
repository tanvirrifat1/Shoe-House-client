import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";

import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CheckOutForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();

  const { user } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (paymentMethod) {
      if (user && user?.email) {
        const saveData = {
          email: user?.email,

          name: user.displayName,
          price: price,
          stripeCustomerId: paymentMethod.id,
        };

        fetch("http://localhost:5000/api/v1/payment", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              toast("Payment Successfully", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              navigate("/dashBoard/paymentHistory");
            } else {
              toast.error("Already Payment", {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
          });
      }
    }

    if (error) {
      console.log(error);
      toast.error(error.message, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    // else {
    //   console.log(paymentMethod);
    //   toast(`${paymentMethod.object} successful`, {
    //     position: "top-right",
    //     autoClose: 1000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="my-2">Price: {price}$</h1>
        <CardElement
          className="w-[600px] border h-20 p-6 border-black"
          options={{
            style: {
              base: {
                fontSize: "15px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <button
          className="btn btn-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe}
        >
          Pay now
        </button>
      </form>
    </div>
  );
};

export default CheckOutForm;
