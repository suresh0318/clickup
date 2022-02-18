import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";
import "./dashboard.css";
import data from "../../chartData";
const Dashboard = () => {
  return (
    <div className="dashboard ">
      {" "}
      <AreaChart width={1000} height={600} data={data}>
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Area
          type="monotone"
          dataKey="x"
          stackId="1"
          stroke="blue"
          fill="gray"
        />
        <Area
          type="monotone"
          dataKey="y"
          stackId="1"
          stroke="green"
          fill="gray"
        />
      </AreaChart>
    </div>
  );
};

export default Dashboard;
