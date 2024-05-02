import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = ({ height="330px",chartData }) => {
    return (
        <Bar width={"600px"} height={`${height}`} data={chartData}/>
    );
}

export default BarChart;