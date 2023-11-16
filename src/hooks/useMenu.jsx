import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useMenu = () => {
  const {
    data = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/api/v1/menu`);
      return res.json();
    },
  });

  const menu = data.data;
  return [menu, isPending, refetch];
};
