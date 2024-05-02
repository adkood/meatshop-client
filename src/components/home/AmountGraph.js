import { useEffect, useState } from "react";
import BarChart from "../../utils/BarChart";
import { DEFAULT_CHART_DATA } from "../../utils/Constants";
import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { outletActions } from "../../store";
import axios from "axios";

const AmountGraph = () => {

    const dispatch = useDispatch();
    const [data, setData] = useState(DEFAULT_CHART_DATA);

    const vState = useSelector((state) => state.outlet.valueOutletState);
    const vMeat = useSelector((state) => state.outlet.valueMeatState);
    const vYear = useSelector((state) => state.outlet.valueYearState);

    const fetchValueYearDetails = async () => {
        try {

            let url = ``;
            if (process.env.NODE_ENV === 'development') {
                url += process.env.REACT_APP_API_KEY_DEV;
            }
            else {
                url += process.env.REACT_APP_API_KEY_PROD;
            }

            url += `/api/transactions/yearly?`;
            if (vState) url += `outletId=${vState}&`;
            if (vMeat) url += `meatId=${vMeat}&`;
            if (vYear) url += `year=${vYear}`;

            const res = await axios.get(url);
            const monthly = res.data.data.aggResult[0].monthly;
            const overall = res.data.data.aggResult[0].overall[0];

            dispatch(outletActions.setValueOverall(overall));

            let newArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

            monthly.forEach(ele => {
                newArr[ele._id - 1] = ele.totalAmount;
            });

            const newData = {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: "Yearly Revenue Generated",
                    data: newArr,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(255, 159, 64, 0.5)',
                        'rgba(255, 205, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(153, 102, 255, 0.5)',
                        'rgba(201, 203, 207, 0.5)',
                        'rgba(255, 159, 132, 0.5)',
                        'rgba(255, 99, 64, 0.5)',
                        'rgba(255, 205, 86, 0.5)',
                        'rgba(75, 192, 255, 0.5)',
                        'rgba(54, 162, 155, 0.5)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)',
                        'rgb(255, 159, 132)',
                        'rgb(255, 99, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 255)',
                        'rgb(54, 162, 155)'
                    ],
                    borderWidth: 1
                }]
            };
            setData(newData);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchValueYearDetails();
    }, [vState, vMeat, vYear]);


    return (
        <Box width={"100%"}>
            <BarChart chartData={data} />
        </Box>
    );
}

export default AmountGraph;