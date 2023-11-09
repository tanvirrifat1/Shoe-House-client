import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { AiFillDelete } from "react-icons/ai";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import { TOKEN } from "../../Shared/token/token";

const AllUser = () => {
  const token = localStorage.getItem(TOKEN);

  const { data, refetch } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/v1/user", {
        headers: {
          authorization: token,
        },
      });
      return res.json();
    },
  });

  console.log(data);

  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/api/v1/user/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: "admin" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>All Users</title>
      </Helmet>
      <h3 className="text-3xl font-semibold">
        Total User {data?.data?.length}
      </h3>
      <div className="pr-20 pl-5 py-10">
        <div className="overflow-x-auto ">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="text-left">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Image
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Email
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Role
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Update here
                </th>

                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {data?.data?.map((service, index) => (
                <tr key={service?.id}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    <div className="avatar">
                      <div className="w-12 h-12 rounded">
                        <img alt={service?.title} src={service?.image} />
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {service?.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {service?.email}
                  </td>
                  <th>
                    {service?.role === "admin" ? (
                      "admin"
                    ) : (
                      <button className="whitespace-nowrap ml-2 btn py-2 bg-blue-gray-900 text-white">
                        <FaUserShield
                          onClick={() => handleUpdate(service?.id)}
                          className="text-3xl text-white hover:text-black "
                        />
                      </button>
                    )}
                  </th>

                  <th>
                    <button className="whitespace-nowrap ml-2 btn py-2 bg-red-500 text-white">
                      <AiFillDelete
                        onClick={() => console.log(service?.id)}
                        className="text-3xl text-white hover:text-black "
                      />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
