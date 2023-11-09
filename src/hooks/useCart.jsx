import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import { TOKEN } from "../pages/Shared/token/token";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem(TOKEN);

  const [axiosSecure] = useAxiosSecure();

  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/api/v1/cart?email=${user?.email}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      return res.json();
    },
    // queryFn: async () => {
    //   const res = await axiosSecure(`/cart?email=${user?.email}`, {
    //     headers: {
    //       authorization: token,
    //     },
    //   });
    //   return res.json();
    // },
  });
  return [cart, refetch];
};

export default useCart;
