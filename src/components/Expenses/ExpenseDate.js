import "./ExpenseItem.css";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const ExpenseDate = (props) => {
	const Div = styled("div")``;
	const month = props.date.toLocaleString("en-US", { month: "long" });
	const day = props.date.toLocaleString("en-US", { day: "2-digit" });
	const year = props.date.getFullYear();

	return (
		<Paper
			elevation={3}
			sx={{
				p: 2,
				border: "1px dashed grey",

				alignItems: "center",
				display: "flex",
				flexDirection: "column",
				":hover": {
					boxShadow: 6,
					cursor: "pointer",
					color: "white",
					bgcolor: "#000000",
					transition: "all 0.2s ease-in-out",
				},
			}}>
			<Div sx={{ p: 1 }}>{month}</Div>
			<Div sx={{ p: 1 }}>{year}</Div>
			<Div sx={{ p: 1 }}>{day}</Div>
		</Paper>
	);
};

export default ExpenseDate;
