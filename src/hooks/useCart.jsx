import { useQuery } from "@tanstack/react-query";
import { TOKEN } from "../pages/Shared/token/token";
import useAxiosSecure from "./useAxiosSecure";
import { useAuth } from "./useAuth";

const useCart = () => {
  const { user } = useAuth();
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
    //   console.log(res?.data?.data);
    //   const result = await res?.data?.data;
    //   return result;
    // },
  });

  return [cart, refetch];
};

export default useCart;
