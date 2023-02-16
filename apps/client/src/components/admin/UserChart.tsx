import { Heading } from "@chakra-ui/react";
import type { User } from "@interfaces/Users";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

interface UserChartProps {
  users: User[];
}

// Line chart with users registered per day over time. It should start at 01/01/2023 and end at today.
const UserChart = ({ users }: UserChartProps) => {
  // Create an array of dates from 01/01/2023 to today
  const dates = [];
  const today = dayjs();
  const startDate = dayjs("2023-01-01");
  for (let date = startDate; date.isBefore(today); date = date.add(1, "day")) {
    dates.push(date.format("YYYY-MM-DD"));
  }

  // Create an array of objects with the date and the number of users registered on that day
  const data = [];
  for (let date of dates) {
    data.push({
      date,
      users: users.filter(
        (user) => dayjs(user.createdAt).format("YYYY-MM-DD") === date
      ).length,
    });
  }

  return (
    <>
      <Heading size="md" mb={4} color="gray.500">
        Users registered over time
      </Heading>
      <LineChart width={500} height={250} data={data}>
        <Line type="monotone" dataKey="users" stroke="#E60000" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </>
  );
};

export default UserChart;
