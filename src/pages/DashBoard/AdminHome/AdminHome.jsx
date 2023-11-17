import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../hooks/useAuth";
import { TOKEN } from "../../Shared/token/token";
import { getUserInfo } from "../../Shared/auth/auth.service";
import { BiDollar } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { FiWatch } from "react-icons/fi";
import { MdPendingActions } from "react-icons/md";

const AdminHome = () => {
  const { user } = useAuth();

  const token = localStorage.getItem(TOKEN);

  const { role } = getUserInfo();

  const { data } = useQuery({
    queryKey: ["totalValue"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/api/v1/payment/totalValue`
      );
      return res.json();
    },
  });

  return (
    <div>
      <h2 className="text-3xl">Hi, {user?.displayName}</h2>
      {role === "admin" ? (
        <>
          {" "}
          <div>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <BiDollar className="text-3xl mt-6" />
                </div>
                <div className="stat-title">TotalPrice</div>
                <div className="stat-value">{data?.data.totalPrice}</div>
                {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <FaUsers className="text-3xl mt-6" />
                </div>
                <div className="stat-title">New Users</div>
                <div className="stat-value">{data?.data?.userLength}</div>
                {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
              </div>
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <FiWatch className="text-3xl mt-6" />
                </div>
                <div className="stat-title">Total Watches</div>
                <div className="stat-value">{data?.data?.menuLength}</div>
                {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <MdPendingActions className="text-3xl mt-6" />
                </div>
                <div className="stat-title">Total Orders</div>
                <div className="stat-value">{data?.data?.cartLength}</div>
                {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <p>sorry you're not authorize</p>
        </>
      )}
    </div>
  );
};

export default AdminHome;
