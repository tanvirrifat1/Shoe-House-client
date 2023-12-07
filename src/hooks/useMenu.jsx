import { useQuery } from "@tanstack/react-query";

export const useMenu = () => {
  const {
    data = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch(
        `https://watch-shop-mongoose.vercel.app/api/v1/menu`
      );
      return res.json();
    },
  });

  const menu = data.data;
  return [menu, isPending, refetch];
};
