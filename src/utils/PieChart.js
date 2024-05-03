import react from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const PieChart = ({ chartData }) => {
    return (
        <Pie height={"450px"} width={"450px"} data={chartData} />
    );
}


export default PieChart;