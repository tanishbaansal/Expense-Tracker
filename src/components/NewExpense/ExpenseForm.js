import { TextField, Button } from "@mui/material";
import { useState, React } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Grid from "@mui/material/Grid";

const ExpenseForm = (props) => {
	const [formActive, setformActive] = useState(false);
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");
	if (formActive === true) {
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
				amount: +enteredAmount,
				date: new Date(enteredDate),
			};
			props.onSaveExpenseData(expenseData);
			setEnteredTitle("");
			setEnteredAmount("");
			setEnteredDate(null);
			setformActive(false);
		};

		return (
			<form onSubmit={submitHandler}>
				<Grid container spacing={2} sx={{ p: 2 }}>
					<Grid item xs>
						<TextField
							fullWidth
							id='standard-basic'
							label='Expense Title'
							value={enteredTitle}
							onChange={titleChangeHandler}
						/>
					</Grid>
					<Grid item xs>
						<TextField
							fullWidth
							id='outlined-number'
							label='Expense Amount'
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
					type='button'
					color='error'
					onClick={() => setformActive(false)}
					sx={{ width: "50%", p: 2, mt: 2, borderRadius: "0 0 0px 4px" }}>
					Close
				</Button>
				<Button
					variant='contained'
					type='submit'
					sx={{ width: "50%", p: 2, mt: 2, borderRadius: "0 0 4px 0px" }}>
					Add Expense
				</Button>
			</form>
		);
	} else {
		return (
			<Button
				variant='contained'
				type='submit'
				fullWidth
				onClick={() => {
					setformActive(true);
				}}
				sx={{ p: 2 }}>
				Add New Expense
			</Button>
		);
	}
};
export default ExpenseForm;
