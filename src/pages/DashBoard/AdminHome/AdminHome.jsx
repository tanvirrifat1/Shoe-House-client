import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../hooks/useAuth";
import { TOKEN } from "../../Shared/token/token";
import { getUserInfo } from "../../Shared/auth/auth.service";
import { BiDollar } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { FiWatch } from "react-icons/fi";
import { MdPendingActions } from "react-icons/md";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

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

  const { data: chart } = useQuery({
    queryKey: ["chart"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/v1/cart/total");
      return res.json();
    },
  });

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

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
          <div className="mt-3">
            <BarChart
              width={500}
              height={300}
              data={chart?.data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="_id" />
              <YAxis />
              <Bar
                dataKey="quantity"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {chart?.data?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
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
