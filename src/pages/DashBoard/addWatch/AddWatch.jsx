import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import FormInput from "../../../components/form/formInput";
import SelectFormField from "../../../components/form/seleteFormFiled";
import Form from "../../../components/form/form";
import { useState } from "react";
import { toast } from "react-toastify";
import { TOKEN } from "../../Shared/token/token";
import { useNavigate } from "react-router-dom";

const AddWatch = () => {
  const token = localStorage.getItem(TOKEN);
  const [image, setImage] = useState(null);

  const router = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files && e.target.files[0];
    setImage(file);
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", image);

      const url = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMG_key
      }`;
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      const imgData = await response.json();

      if (imgData.data) {
        data.image = imgData.data.display_url;

        const menuResponse = await fetch(
          "https://watch-shop-mongoose.vercel.app/api/v1/menu/create-menu",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: token,
            },
            body: JSON.stringify(data),
          }
        );
        if (menuResponse) {
          toast("Add an watch", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        router("/dashBoard/manageWatch");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const option = [
    {
      label: "in stock",
      value: "in stock",
    },
    {
      label: "out of stock",
      value: "out of stock",
    },
  ];

  const WatchName = [
    {
      label: "Omega",
      value: "Omega",
    },
    {
      label: "Rolex",
      value: "Rolex",
    },
    {
      label: "Fitbit",
      value: "Fitbit",
    },
    {
      label: "TAGHeuer",
      value: "TAGHeuer",
    },
    {
      label: "popular",
      value: "popular",
    },
  ];

  const category = [
    {
      label: "Omega",
      value: "Omega",
    },
    {
      label: "Rolex",
      value: "Rolex",
    },
    {
      label: "Fitbit",
      value: "Fitbit",
    },
    {
      label: "TAG_Heuer",
      value: "TAG_Heuer",
    },
    {
      label: "popular",
      value: "popular",
    },
  ];

  return (
    <div className="w-full">
      <SectionTitle subHeading={"Whats new"} heading={"Add an watch"} />

      <div>
        <div>
          <div className=" mx-60 px-20 py-5 border-green-900 mt-5 border rounded-xl">
            <Form submitHandler={onSubmit}>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Add an new watch
                  </h2>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-6">
                      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <input
                          type="file"
                          name="image"
                          onChange={handleImageChange}
                          accept="image/*"
                          className="file-input file-input-bordered w-full"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <div className="mt-2">
                        <SelectFormField
                          id=""
                          name="status"
                          options={option}
                          label="status"
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <div className="mt-2">
                        <SelectFormField
                          id=""
                          name="name"
                          options={WatchName}
                          label="name"
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                        <SelectFormField
                          id=""
                          name="category"
                          options={category}
                          label="category"
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                <button
                  type="submit"
                  className="btn btn-outline w-72 rounded-full"
                >
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWatch;
