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
  console.log(menu);
  return [menu, loading];
};
