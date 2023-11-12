import { RxUpdate } from "react-icons/rx";
import { useMenu } from "../../../hooks/useMenu";
import { Helmet } from "react-helmet-async";
import { getUserInfo } from "../../Shared/auth/auth.service";
import { Link } from "react-router-dom";

const ManageWatch = () => {
  const [menu, loading] = useMenu();
  console.log(menu);

  if (loading) {
    <div className="flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>;
    </div>;
  }

  const { role } = getUserInfo();

  return (
    <div>
      <Helmet>
        <title>All Users</title>
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
                        Details
                      </th>

                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Update here
                      </th>

                      <th className="px-4 py-2"></th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    {menu.map((user, index) => (
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
                          {user?.details.slice(0, 50)}
                        </td>
                        <th>
                          <div>
                            <Link
                              to={`/dashBoard/singleWatch/${user?._id}`}
                              className="btn w-full rounded-3xl text-black  border-black hover:border-gray-900 px-4 py-2 "
                            >
                              Update
                            </Link>
                          </div>
                        </th>
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
