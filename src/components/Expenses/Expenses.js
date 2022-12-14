import ExpensesFilter from "./../Filter/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
	const [filteredYear, setfilteredYear] = useState("2022");
	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});
	const saveFilter = (filterYear) => {
		setfilteredYear(filterYear);
	};

	return (
		<div>
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesFilter filterYear={filteredYear} onExpensesFilter={saveFilter} />
			<ExpensesList items={filteredExpenses} />
		</div>
	);
};

export default Expenses;
