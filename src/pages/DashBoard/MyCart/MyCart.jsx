import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();

  const total = cart?.data?.reduce(
    (sum, item) => sum + parseFloat(item.price),
    0
  );

  const handleDelete = async (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/api/v1/cart/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.data) {
                Swal.fire("Deleted successfully");
                refetch();
              }
            });
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>My Cart</title>
      </Helmet>
      <div className="ml-4">
        <div className="uppercase flex gap-14 font-semibold items-center h-[60px]">
          <h2 className="text-3xl">Total Items :{cart?.data?.length}</h2>
          <h2 className="text-3xl">Total Price : ${total}</h2>
          <button className="btn btn-warning btn-sm">PAY</button>
        </div>
      </div>
      <div className="pr-20 pl-5 py-10">
        {/* <div className="flex justify-between border-b-2 pb-1">
          <h1 className="text-4xl font-bold">Carts List</h1>
          <Link
            href="/dashBoard/blog/create"
            className="btn btn-outline rounded-full hover:bg-white hover:text-black hover:shadow-lg"
          >
            Add Cart
          </Link>
        </div> */}
        <div className="overflow-x-auto mt-10  ">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="text-left">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Image
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Title
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Update here
                </th>

                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {cart?.data?.map((service) => (
                <tr key={service?.id}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    <div className="avatar">
                      <div className="w-12 h-12 rounded">
                        <img alt={service?.title} src={service?.image} />
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {service?.details.slice(0, 100)}...
                  </td>
                  {/* <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {format(parseISO(service?.createdAt), "PP")}
                  </td> */}

                  {/* <button className="whitespace-nowrap ml-2 btn py-2 btn-primary">
                    <Link href={`/dashBoard/blog/edit/${service?.id}`}>
                      <AiOutlineEdit className="text-3xl" />
                    </Link>
                  </button> */}
                  <button className="whitespace-nowrap ml-2 btn py-2 bg-red-500 text-white">
                    <AiFillDelete
                      onClick={() => handleDelete(service?.id)}
                      className="text-3xl text-white hover:text-black "
                    />
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
