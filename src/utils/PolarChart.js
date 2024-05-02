import react from 'react';
import { PolarArea } from 'react-chartjs-2';
import 'chart.js/auto';

const PolarChart = ({ chartData }) => {
    return (
        <PolarArea height={"500px"} width={"500px"} data={chartData} />
    );
}


export default PolarChart;