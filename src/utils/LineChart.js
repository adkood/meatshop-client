import react from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart = ({ height="280px", chartData }) => {
    return (
        <Line width={"550px"} height={`${height}`} data={chartData}/>
    );
}

export default LineChart;