import React from "react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";

import "./dashboard.css";
import data from "../../chartData";

const Dashboard = () => {
  return (
    <div className="dashboard ">
      <h2>Traffic</h2>
      <p>January - July 2021</p>
      <ResponsiveContainer width="90%" height={350}>
        <AreaChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Area
            type="monotone"
            dataKey="x"
            stackId="1"
            stroke="blue"
            fill="#e5e6e8"
          />
          <Area
            type="monotone"
            dataKey="y"
            stackId="1"
            stroke="green"
            fill="#e5e6e8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
