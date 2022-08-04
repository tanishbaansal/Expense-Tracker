import { TextField, Button, CardActions } from "@mui/material";
import { useState, React } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");
	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};
	const submitHandler = (event) => {
		event.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};
		props.onSaveExpenseData();
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};

	return (
		<form onSubmit={submitHandler}>
			<TextField
				sx={{ m: 1 }}
				id='standard-basic'
				label='Title'
				onChange={titleChangeHandler}
			/>

			<TextField
				sx={{ m: 1 }}
				id='outlined-number'
				label='Number'
				type='number'
				onChange={amountChangeHandler}
			/>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<DatePicker
					label='Date'
					value={enteredDate}
					onChange={(newValue) => {
						setEnteredDate(newValue);
					}}
					renderInput={(params) => <TextField sx={{ m: 1 }} {...params} />}
				/>
			</LocalizationProvider>
			<CardActions>
				<Button variant='contained' type='submit'>
					Add Expense
				</Button>
			</CardActions>
		</form>
	);
};
export default ExpenseForm;
