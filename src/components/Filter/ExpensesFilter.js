import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import "./ExpensesFilter.css";
const ExpensesFilter = (props) => {
	const years = [
		{
			value: "2022",
		},
		{
			value: "2021",
		},
		{
			value: "2020",
		},
		{
			value: "2019",
		},
	];
	const handleChange = (event) => {
		props.onExpensesFilter(event.target.value);
	};
	return (
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				Filter By Year
				<TextField
					select
					label='Select Year'
					value={props.filterYear}
					onChange={handleChange}
					helperText='Please select a filter year'>
					{years.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.value}
						</MenuItem>
					))}
				</TextField>
			</div>
		</div>
	);
};

export default ExpensesFilter;
