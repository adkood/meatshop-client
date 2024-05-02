import { useEffect, useState } from 'react';
import axios from 'axios';
import PolarChart from '../../utils/PolarChart';
import { DEFAULT_POPULAR_DATA } from '../../utils/Constants';
import { Box } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { outletActions } from '../../store';

const Popular = () => {

    const dispatch = useDispatch();
    const [data, setData] = useState(DEFAULT_POPULAR_DATA);

    const fetchPopularityData = async () => {
        try {

            let url = ``;
            if (process.env.NODE_ENV === 'development') {
                url += process.env.REACT_APP_API_KEY_DEV;
            }
            else {
                url += process.env.REACT_APP_API_KEY_PROD;
            }

            const res1 = await axios.get(url + '/api/transactions/popularity');
            const res2 = await axios.get(url + '/api/meats');

            const pop_data = res1.data.data.aggResult;
            const allMeats = res2.data.data.meats;

            const newArr = [];
            let demandedMeat = [];

            allMeats.forEach(ele => {
                const obj = pop_data.find((e) => e._id === ele._id)
                if (obj) {
                    newArr.push(obj.totalTransaction);
                    demandedMeat.push({
                        meatType: ele.meatType,
                        price: ele.pricePerKg,
                        totalTransaction: obj.totalTransaction,
                    });
                }
                else {
                    newArr.push(0);
                    demandedMeat.push({
                        meatType: ele.meatType,
                        price: ele.pricePerKg,
                        totalTransaction: 0,
                    });
                }
            });

            const newData = {
                labels: ['Chicken', 'Mutton', 'Turkey', 'Duck', 'Pork',],
                datasets: [{
                    label: "Popularity",
                    data: newArr,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(255, 159, 64, 0.7)',
                        'rgba(255, 205, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                    ],
                }]
            }

            demandedMeat.sort((a, b) => {
                if (a.totalTransaction < b.totalTransaction) return 1;
                return -1;
            })

            demandedMeat = demandedMeat.slice(0, 3);
            dispatch(outletActions.setDemandedMeat(demandedMeat));
            setData(newData);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchPopularityData();
    }, []);

    return (
        <Box >
            <PolarChart chartData={data} />
        </Box>
    );

}

export default Popular;