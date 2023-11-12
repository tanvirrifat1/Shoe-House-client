import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data.data);
        setLoading(false);
      });
  }, []);

  return [menu, loading];
};

// const { data: menu = [], refetch } = useQuery({
//   queryKey: ["menu"],
//   queryFn: async () => {
//     const res = await fetch(`http://localhost:5000/api/v1/menu`);
//     return res.json();
//   },
// });

// return [menu, refetch];
// };
