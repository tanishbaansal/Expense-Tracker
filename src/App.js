import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpenses";
import Container from "@mui/material/Container";

import CardContent from "@mui/material/CardContent";
import { Card } from "@mui/material";
const App = (props) => {
	const expenses = [
		{
			id: "e1",
			title: "Toilet Paper",
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{ id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
		{
			id: "e3",
			title: "Car Insurance",
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: "e4",
			title: "New Desk (Wooden)",
			amount: 450,
			date: new Date(2021, 5, 12),
		},
	];

	return (
		<Container className='container'>
			<Card sx={{ bgcolor: "#fafafa" }}>
				<CardContent>
					<NewExpense />
				</CardContent>
			</Card>
			<Expenses items={expenses} />
		</Container>
	);
};

export default App;
