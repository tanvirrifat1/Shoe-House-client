import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormInput from "../../../components/form/formInput";

import Form from "../../../components/form/form";
import { useMenu } from "../../../hooks/useMenu";
import SelectFormField from "../../../components/form/seleteFormFiled";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { TOKEN } from "../../Shared/token/token";

const ManageSingleWatch = () => {
  const { id } = useParams();
  const token = localStorage.getItem(TOKEN);
  const [image, setImage] = useState(null);

  const router = useNavigate();

  const { data } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/api/v1/menu/${id}`);
      return res.json();
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files && e.target.files[0];
    setImage(file);
    console.log(file, "file");
  };

  const Values = {
    category: data?.data?.category,
    status: data?.data?.status,
    details: data?.data?.details,
    image: data?.data?.image,
    name: data?.data?.name,
    price: data?.data?.price,
  };

  const onSubmit = async (data) => {
    const updateUrl = `http://localhost:5000/api/v1/menu/${id}`;
    const updateResponse = await fetch(updateUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify(data),
    });

    if (updateResponse) {
      toast("watch manage successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router("/dashBoard/manageWatch");
    }
  };

  const roles = [
    {
      label: "in stock",
      value: "in stock",
    },
    {
      label: "out of stock",
      value: "out of stock",
    },
  ];

  return (
    <div className="py-10">
      <div className="container mx-4 px-20 py-5 border-gray-900 mt-5 border rounded-xl">
        <Form submitHandler={onSubmit} defaultValues={Values}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Submit Your Updated Blogs
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {/* <div className="col-span-6">
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <input
                      defaultValue={data?.image}
                      type="file"
                      onChange={handleImageChange}
                      accept="image/*"
                      className="file-input file-input-bordered w-full"
                    />
                    {image && <p>{data?.image}</p>}
                  </div>
                </div> */}
                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <SelectFormField
                      id=""
                      name="status"
                      options={roles}
                      label="status"
                      // placeholder="Your Role"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <FormInput
                      id=""
                      name="name"
                      type="text"
                      label="name"
                      placeholder="enter your name"
                      className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <FormInput
                      id=""
                      name="price"
                      type="number"
                      label="price"
                      placeholder="enter your price"
                      className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <FormInput
                      id=""
                      name="category"
                      type="text"
                      label="category"
                      placeholder="enter your category"
                      className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <div className="mt-2">
                    <FormInput
                      id=""
                      name="details"
                      type="text"
                      label="details"
                      placeholder="enter your details"
                      className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button type="submit" className="btn btn-outline w-72 rounded-full">
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ManageSingleWatch;
