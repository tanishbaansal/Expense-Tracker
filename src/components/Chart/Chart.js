import ChartBar from "./ChartBar";
import "./Chart.css";

const Charts = (props) => {
	const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
	const totalMaximum = Math.max(...dataPointsValues);
	return (
		<div className='chart'>
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					value={dataPoint.value}
					maxValue={totalMaximum}
					label={dataPoint.label}
					key={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Charts;
