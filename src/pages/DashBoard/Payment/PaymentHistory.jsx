import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { TOKEN } from "../../Shared/token/token";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const PaymentHistory = () => {
  const { user } = useAuth();
  const token = localStorage.getItem(TOKEN);
  const { data: Payment, isLoading } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/api/v1/payment?email=${user?.email}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      return res.json();
    },
  });

  if (isLoading) {
    <p>Loading...</p>;
  }

  return (
    <div>
      <Helmet>
        <title>Payment History</title>
      </Helmet>
      <SectionTitle subHeading={"Payment History"} />
      <div className="pr-20 pl-5 py-10">
        <div className="overflow-x-auto ">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="text-left">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>

                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Email
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Total Payment
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Status
                </th>

                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {Payment?.data.length > 0 &&
                Payment?.data?.map((user, index) => (
                  <tr key={user?.id}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {index + 1}
                    </td>

                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {user?.name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {user?.email}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {user?.price}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-semibold">
                      successful
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
