import React from "react";
import { Card, Typography } from "@mui/material";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
	if (props.items.length === 0) {
		return (
			<Card>
				<Typography
					variant='h5'
					sx={{ p: 5, textAlign: "center" }}
					component='div'>
					Found no expenses.
				</Typography>
			</Card>
		);
	}
	return (
		<>
			{props.items.map((element) => (
				<ExpenseItem
					key={element.id}
					title={element.title}
					amount={element.amount}
					date={element.date}
				/>
			))}
		</>
	);
};

export default ExpensesList;
