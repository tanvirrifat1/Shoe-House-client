import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  const { user } = useContext(AuthContext);

  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/api/v1/cart?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [cart, refetch];
};

export default useCart;
