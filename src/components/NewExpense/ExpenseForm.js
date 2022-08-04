import { TextField, Button } from "@mui/material";
import { useState, React } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Grid from "@mui/material/Grid";

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
		props.onSaveExpenseData(expenseData);
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate(null);
	};

	return (
		<form onSubmit={submitHandler}>
			<Grid container spacing={2} sx={{ p: 2 }}>
				<Grid item xs>
					<TextField
						fullWidth
						id='standard-basic'
						label='Title'
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</Grid>
				<Grid item xs>
					<TextField
						fullWidth
						id='outlined-number'
						label='Number'
						type='number'
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</Grid>
				<Grid item xs>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DatePicker
							label='Date'
							value={enteredDate}
							onChange={(newValue) => {
								setEnteredDate(newValue);
							}}
							renderInput={(params) => <TextField fullWidth {...params} />}
						/>
					</LocalizationProvider>
				</Grid>
			</Grid>

			<Button
				variant='contained'
				type='submit'
				fullWidth
				sx={{ p: 2, mt: 2, borderRadius: "0 0 4px 4px" }}>
				Add Expense
			</Button>
		</form>
	);
};
export default ExpenseForm;
