import "./ExpenseItem.css";

import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);
	const clickHandler = () => {
		setTitle("Wow");
	};
	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date}></ExpenseDate>
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<Button variant='outlined'>${props.amount}</Button>
				<Button variant='contained' onClick={clickHandler}>
					Change Title
				</Button>
			</div>
		</Card>
	);
};

export default ExpenseItem;
