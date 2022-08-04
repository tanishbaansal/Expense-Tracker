import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpenses";
import Container from "@mui/material/Container";

import * as React from "react";
import Paper from "@mui/material/Paper";

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
		// <Container className='container'>
		// 	<Grid container spacing={2} sx={{ marginTop: 2, marginBottom: 4 }}>
		// 		<Grid item xs>
		// 			<Item sx={{ p: 2 }}>
		// 				<NewExpense />
		// 			</Item>
		// 		</Grid>
		// 	</Grid>
		// 	<Expenses items={expenses} />
		// </Container>
		<Container maxWidth='lg'>
			<Paper elevation={3} sx={{ my: 5 }}>
				<NewExpense />
			</Paper>
			<Expenses items={expenses} />
		</Container>
	);
};

export default App;
