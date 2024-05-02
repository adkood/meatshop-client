import { Box, Checkbox, Flex, Heading } from '@chakra-ui/react';
import HistorySelectBar from './HistorySelectBar';
import DisplayTransactionHistory from './DisplayTransactionHistory';
import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { historyActions } from '../../store';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { pageActions } from '../../store';
import DisplayRefillHistory from './DisplayRefillHistory';

const History = () => {
    const dispatch = useDispatch();
    const transactionSelected = useSelector((state) => state.history.transactionSelected);
    const refillSelected = useSelector((state) => state.history.refillSelected);
    const outletId = useSelector((state) => state.history.outletState);
    const meatId = useSelector((state) => state.history.meatState);
    const year = useSelector((state) => state.history.yearState);
    const transactionCurrentPage = useSelector((state) => state.page.transactionCurrentPage);
    const refillCurrentPage = useSelector((state) => state.page.refillCurrentPage);

    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);

    const fetchData = async () => {
        try {
            let url = ``;
            if (process.env.NODE_ENV === 'development') {
                url += process.env.REACT_APP_API_KEY_DEV;
            }
            else {
                url += process.env.REACT_APP_API_KEY_PROD;
            }

            if (transactionSelected) {
                url += `/api/transactions?`;
            }
            if (refillSelected) {
                url += `/api/refills?`;
            }

            if (outletId) {
                url += `outletId=${outletId}&`
            }
            if (meatId) {
                url += `meatId=${meatId}&`
            }
            if (year) {
                url += `year=${year}&`
            }

            const resAll = await axios(url);

            url += `page=${transactionSelected ? transactionCurrentPage : refillCurrentPage}&limit=5`;

            const res = await axios(url);

            if (transactionSelected) {
                const docCount = resAll.data.data.transactions.length;
                dispatch(pageActions.setPageLimit(Math.ceil(docCount / 5)));
                setData1(res.data.data.transactions);
            }
            else {
                const docCount = resAll.data.data.refills.length;
                dispatch(pageActions.setPageLimit(Math.ceil(docCount / 5)));
                setData2(res.data.data.refills);
            }
        } catch (error) {
            console.error(error);
        }
    }

    console.log(data2);
    useEffect(() => {
        fetchData();
    }, [transactionSelected, outletId, meatId, year, transactionCurrentPage, refillCurrentPage]);

    return (
        <Flex direction={"column"} width="95%" height="92%" borderRadius={"5px"} bgColor={"#F0F8FF"} alignItems={"center"}>
            <Flex width={"90%"} height={"10%"} justifyContent={"space-between"}>
                <Flex width={"40%"} height={"100%"} alignItems={"center"}>
                    <Heading ml={5} fontSize={"1.6rem"}>YOUR HISTORY</Heading>
                </Flex>
                <Flex width={"20%"} height={"100%"} justifyContent={"space-between"} alignItems={"center"} >
                    <Checkbox size='lg' isChecked={transactionSelected} onChange={() => { dispatch(historyActions.toggleTransactionState()) }} colorScheme='blue'>
                        TRANSACTIONS
                    </Checkbox>
                    <Checkbox size='lg' isChecked={refillSelected} onChange={() => { dispatch(historyActions.toggleTransactionState()) }} colorScheme='blue'>
                        REFILLS
                    </Checkbox>
                </Flex>
            </Flex>
            <Flex width={"90%"} height={"8%"}>
                <HistorySelectBar width='100%' height='55px' heading={transactionSelected ? 'TRANSACTIONS' : 'REFILLS'} fontSize='1.4rem' />
            </Flex>
            <Box width={"90%"} height={"72%"} overflowY={"scroll"} >
                {transactionSelected && data1 && data1.map((d) => {
                    return <DisplayTransactionHistory data={d} />
                })}
                {!transactionSelected && data2 && data2.map((d) => {
                    return <DisplayRefillHistory data={d} />
                })}
            </Box>
            <Flex width={"90%"} height={"10%"}>
                {transactionSelected && <Pagination type={'t'} />}
                {!transactionSelected && <Pagination type={'r'} />}

            </Flex>
        </Flex>
    )
}

export default History;