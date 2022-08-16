import { Paper } from "@mui/material";
import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
	const chartDataPoints = [
		{
			label: "Jan",
			value: 0,
		},
		{
			label: "Feb",
			value: 0,
		},
		{
			label: "Mar",
			value: 0,
		},
		{
			label: "Apr",
			value: 0,
		},
		{
			label: "May",
			value: 0,
		},
		{
			label: "Jun",
			value: 0,
		},
		{
			label: "Aug",
			value: 0,
		},
		{
			label: "Sept",
			value: 0,
		},
		{
			label: "Oct",
			value: 0,
		},
		{
			label: "Nov",
			value: 0,
		},
		{
			label: "Dec",
			value: 0,
		},
	];

	for (const expense of props.expenses) {
		const expenseMonth = expense.date.getMonth();
		chartDataPoints[expenseMonth].value += expense.amount;
	}
	return (
		<Paper elevation={4} sx={{ marginY: 5 }}>
			<Chart dataPoints={chartDataPoints} />
		</Paper>
	);
};

export default ExpensesChart;
