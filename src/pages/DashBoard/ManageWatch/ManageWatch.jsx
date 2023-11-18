import { RxUpdate } from "react-icons/rx";
import { useMenu } from "../../../hooks/useMenu";
import { Helmet } from "react-helmet-async";
import { getUserInfo } from "../../Shared/auth/auth.service";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { TOKEN } from "../../Shared/token/token";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const ManageWatch = () => {
  const [menu, isPending, refetch] = useMenu();

  const token = localStorage.getItem(TOKEN);

  const handleDelete = async (id) => {
    const updateUrl = `https://watch-shop-mongoose.vercel.app/api/v1/menu/${id}`;
    const updateResponse = await fetch(updateUrl, {
      method: "DELETE",
      headers: {
        authorization: token,
      },
    });
    if (updateResponse) {
      refetch();
      toast("watch delete successfully", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const { role } = getUserInfo();

  if (isPending) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Helmet>
        <title>Manage watches</title>
      </Helmet>
      {role === "admin" ? (
        <>
          {" "}
          <div>
            <h3 className="text-3xl font-semibold my-4">
              Total Watch {menu.length}
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
                        Price
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Category
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Status
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Details
                      </th>

                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Update here
                      </th>

                      <th className="px-4 py-2"></th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    {menu?.map((user, index) => (
                      <tr key={user?.id}>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          <div className="avatar">
                            <div className="w-12 h-12 rounded">
                              <img alt={user?.title} src={user?.image} />
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {user?.name}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {user?.price}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {user?.category}
                        </td>
                        {user?.status === "in stock" ? (
                          <>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                              {user?.status}
                            </td>
                          </>
                        ) : (
                          <>
                            {" "}
                            <td className="whitespace-nowrap font-semibold px-4 py-2 text-red-700">
                              {user?.status}
                            </td>
                          </>
                        )}
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {user?.details.slice(0, 50)}
                        </td>
                        <div className="mx-6 flex gap-4">
                          <th>
                            <div>
                              <Link to={`/dashBoard/singleWatch/${user?._id}`}>
                                <FaEdit className="text-3xl text-green-600 hover:text-black" />
                              </Link>
                            </div>
                          </th>
                          <th>
                            <div>
                              <AiFillDelete
                                onClick={() => handleDelete(user?.id)}
                                className="text-3xl text-red-600 hover:text-black "
                              />
                            </div>
                          </th>
                        </div>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <p>sorry you are not admin</p>
        </>
      )}
    </div>
  );
};

export default ManageWatch;
