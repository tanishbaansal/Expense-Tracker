import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./../Filter/ExpensesFilter";
import { useState } from "react";
const Expenses = (props) => {
	const [filteredYear, setfilteredYear] = useState("2022");
	const saveFilter = (filterYear) => {
		console.log(`Filter For Year ${filterYear}`);
		setfilteredYear(filterYear);
	};
	return (
		<div>
			<ExpensesFilter filterYear={filteredYear} onExpensesFilter={saveFilter} />
			<ExpenseItem
				title={props.items[0].title}
				amount={props.items[0].amount}
				date={props.items[0].date}
			/>
			<ExpenseItem
				title={props.items[1].title}
				amount={props.items[1].amount}
				date={props.items[1].date}
			/>
			<ExpenseItem
				title={props.items[2].title}
				amount={props.items[2].amount}
				date={props.items[2].date}
			/>
			<ExpenseItem
				title={props.items[3].title}
				amount={props.items[3].amount}
				date={props.items[3].date}
			/>
		</div>
	);
};

export default Expenses;
