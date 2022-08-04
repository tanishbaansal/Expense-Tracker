import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
	const saveExpenseData = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		console.log(expenseData);
	};
	return <ExpenseForm onSaveExpenseData={saveExpenseData} />;
};
export default NewExpense;
