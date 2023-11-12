import React from "react";
import { useParams } from "react-router-dom";
import FormInput from "../../../components/form/formInput";
import { useQuery } from "@tanstack/react-query";

const ManageSingleWatch = () => {
  const { id } = useParams();
  const { data, refetch } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/api/v1/menu/${id}`);
      return res.json();
    },
  });
  console.log(data);
  return <div className="py-10"></div>;
};

export default ManageSingleWatch;
