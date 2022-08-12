import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
	const saveExpenseData = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onSaveExpenses(expenseData);
	};

	return <ExpenseForm onSaveExpenseData={saveExpenseData} />;
};
export default NewExpense;
