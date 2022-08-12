import React from "react";
import { Card } from "@mui/material";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
	if (props.items.length === 0) {
		return (
			<Card className='expense-item'>
				<p>Found no expenses.</p>
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
