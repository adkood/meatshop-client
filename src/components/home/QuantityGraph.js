import { useEffect, useState } from "react";
import LineChart from "../../utils/LineChart";
import { DEFAULT_CHART_DATA } from "../../utils/Constants";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { outletActions } from "../../store";

const QuantityGraph = () => {

    const dispatch = useDispatch();
    const [data, setData] = useState(DEFAULT_CHART_DATA);

    const qState = useSelector((state) => state.outlet.quantityOutletState);
    const qMeat = useSelector((state) => state.outlet.quantityMeatState);
    const qYear = useSelector((state) => state.outlet.quantityYearState);

    const fetchQuantityYearDetails = async () => {
        try {

            let url = ``;
            if (process.env.NODE_ENV === 'development') {
                url += process.env.REACT_APP_API_KEY_DEV;
            }
            else {
                url += process.env.REACT_APP_API_KEY_PROD;
            }

            url += `/api/transactions/yearly?`;
            if (qState) url += `outletId=${qState}&`;
            if (qMeat) url += `meatId=${qMeat}&`;
            if (qYear) url += `year=${qYear}`;

            const res = await axios.get(url);
            const monthly = res.data.data.aggResult[0].monthly;
            const overall = res.data.data.aggResult[0].overall[0];

            dispatch(outletActions.setQuantityOverall(overall));

            let newArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

            monthly.forEach(ele => {
                newArr[ele._id - 1] = ele.totalQuantity;
            });

            const newData = {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: "Yearly Quantity Sold",
                    data: newArr,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(255, 159, 64, 0.7)',
                        'rgba(255, 205, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(153, 102, 255, 0.7)',
                        'rgba(201, 203, 207, 0.7)',
                        'rgba(255, 159, 132, 0.7)',
                        'rgba(255, 99, 64, 0.7)',
                        'rgba(255, 205, 86, 0.7)',
                        'rgba(75, 192, 255, 0.7)',
                        'rgba(54, 162, 155, 0.7)'
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

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchQuantityYearDetails();
    }, [qState, qMeat, qYear]);

    return (
        <Box width={"100%"}>
            <LineChart chartData={data} />
        </Box>
    );
}

export default QuantityGraph;